import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button.jsx";

const FeatureCard=({icon,title,content,index})=>(

     <div className={`flex flex-row p-6 rounded-[20px] ${index!==length-1 ? "mb-6" :"mb-0"} feature-card`}>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
     </div>
     <div className="flex1 flex flex-col ml-3 font-poppins">
      <h4 className="text-[18px] font-semibold leading-[23px]  text-white">
        {title}
      </h4>
      <p className="text-[16px] text-dimWhite font-normal">{content}</p>
     </div>
     </div>
     

)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" /> We'll handle the Money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit
          molestiae eius adipisci consequuntur eligendi quis dicta?
          Voluptatibus, exercitationem ut animi qui dignissimos itaque natus
          esse optio error repudiandae laudantium rem cumque!
        </p>
        <Button styles="mt-10" title="Get Started"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index) => (
         <FeatureCard key={feature.id} {... feature}/>
        ))}
      </div>
    </section>
  );
};

export default Business;
