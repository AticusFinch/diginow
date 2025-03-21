"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import Navigation from "../../utils/navigation";
import styles from "../shared.module.css";
import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../../utils/Footer";
import Image from "next/image";

const AboutClient = () => {
  return (
    <>
      <Navigation customClassName={styles.nav} customClassName2={styles.nav2} />
      <div className={styles.aboutUsContainer}>
        <h1 className={styles.title}>
          <Slide triggerOnce>About Us</Slide>
        </h1>
        <div className={styles.aboutUsContent}>
          <Fade
            cascade
            damping={0.2}
            direction="up"
            triggerOnce
            className={styles.aboutUs}
          >
            <h2 className={styles.aboutUsSubtitle}>
              At Diginow, we believe in fostering long-term partnerships,
              <span> tailoring our services to meet the unique needs</span> of
              each organization.
            </h2>
            <p>
              Diginow is a dynamic and innovative company committed to
              empowering small and medium-sized enterprises (SMEs) and
              non-governmental organizations (NGOs) through cutting-edge digital
              solutions, strategic consultancy, and specialized training. With a
              firm foundation in engineering and technology, we bridge the gap
              between traditional business models and the digital future,
              ensuring that our clients stay ahead in an ever-evolving
              marketplace.
            </p>
            <p>
              Our mission is to simplify digital transformation, enhance project
              management efficiency, and provide seamless web solutions that
              align with our clients&#39; objectives. Whether it&#39;s through
              expert-led training, consultancy, or technical implementation, we
              are dedicated to delivering excellence and driving sustainable
              growth for our partners.
            </p>
            <p>
              Our team is composed of highly skilled professionals with
              extensive industry experience. We are passionate about innovation,
              adaptability, and strategic thinking, ensuring that every project
              we undertake results in tangible success for our clients.
            </p>
          </Fade>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutClient;
