import matter from "gray-matter";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import * as style from "../../styles/singleBlog.module.scss";

const SingleBlog = ({ frontmatter, markdownBody }) => {
  return (
    <Layout>
      <div className={style.hero}>
        <Image
          src={frontmatter.image}
          alt="blog-image"
          height="500"
          width="1000"
        />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <ReactMarkdown>{markdownBody}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;

// 全ファイル（md）の各id（ファイル名）を配列で取得する処理
// ["/blog/fifth-blog", "/blog/first-blog", ...,]的な
export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      return slug;
      // slug: 'first-blog'（タイトル）
    });
    return data;
    // data: ["fifth-blog", "first-blog", ...,]
  })(require.context("../../data", true, /\.md$/));
  const paths = blogSlugs.map((blogSlug) => `/blog/${blogSlug}`);
  // paths: ["/blog/fifth-blog", "/blog/first-blog", ...,]
  return {
    paths: paths,
    fallback: false,
  };
}

// アクセスされた記事のデータを取得して上のコンポーネントに渡す処理
export async function getStaticProps(context) {
  const { slug } = context.params;
  // ?
  const data = await import(`../../data/${slug}.md`);
  const singleDocument = matter(data.default);
  console.log(singleDocument);
  return {
    props: {
      frontmatter: singleDocument.data,
      markdownBody: singleDocument.content,
    },
  };
}
