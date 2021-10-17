import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import * as style from "../styles/index.module.scss";

const Index = () => {
  return (
    <Layout>
      <div className={style.hero}>
        <Image
          src="/images/index-hero.jpg"
          alt="hero"
          quality={90}
          layout="fill"
          objectFit="cover"
        />
        <div className={style.textContainer}>
          <h1>I am Abe Hiroki!</h1>
          <h3>JavaScript Developer</h3>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.profile}>
          <div>
            <h2>Javascript Nerd</h2>
            <p>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <Image
            src="/images/profile.jpg"
            alt="hero"
            height={1195}
            width={1000}
            quality={90}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={style.skills}>
          <h2>Skills</h2>
          <div className={style.skillsContainer}>
            <div>
              <img src="/images/javascript.svg" alt="javascript" />
              <span>Javascript / 10 years</span>
            </div>
            <div>
              <img src="/images/react.svg" alt="react" />
              <span>React / 5 years</span>
            </div>
            <div>
              <img src="/images/gatsby.svg" alt="gatsby" />
              <span>Gatsby / 5 years</span>
            </div>
            <div>
              <img src="/images/next.svg" alt="next" />
              <span>Next.js / 3 years</span>
            </div>
          </div>
        </div>
        <div className={style.ctaButton}>
          <Link href="/contact">Make It Happen!</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
