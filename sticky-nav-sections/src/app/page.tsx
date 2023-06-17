import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.contentContainer}>
      
      <section className={styles.main}>
      <div className="blueBar">Headline section</div>
        <div className={styles.grid}>
         
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
        

         
            <h2>Hi</h2>
            <p>Test</p>
          

          
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          

          
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
         
        </div>
      </section>
      <section className={styles.main}>
      <div className="blueBar">Headline section 2</div>
        <div className={styles.grid}>
         
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
        

         
            <h2>Hi</h2>
            <p>Test</p>
          

          
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          

          
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
         
        </div>
      </section>
    </div>
    
  );
}
