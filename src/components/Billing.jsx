import React from "react";
import { apple, bill, google } from "../assets";
import styles from "../style";
import { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] w-[50%] h-[50%] -left-1/2 top-0 rounded-full white__gradient" />
      <div className="absolute z-[3] w-[50%] h-[50%] -left-1/2 top-0 rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing & invoice
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nobis
        perspiciatis tempora aspernatur, exercitationem harum unde ipsum. Qui,
        eaque. Delectus ipsa in est.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="app store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={google} alt="play store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
      </div>
    </div>
  </section>
);

export default Billing;
