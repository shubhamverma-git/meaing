import SectionHeading from "@/SectionHeading/SectionHeading";
import CustomButton from "@/Button/custom-button/CustomButton";
import classes from "./AboutHero.module.scss";
import { useRouter } from "next/router";

const AboutHero = ({ data }) => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <SectionHeading
        title={data?.title}
        sub_title={data?.sub_title}
        quote={data?.quote}
        description={data?.description}
        customClass={`page_spacing ${classes.welcome_container_wrapper}`}
        alignLeft={true}
      />
      <div className={`page_spacing ${classes.explore_btn}`}>
        <CustomButton
          name="Explore Work"
          customClass={classes.custom_btn}
          iconThickness={1}
          onClick={() => router.push("/work")}
        />
      </div>
    </div>
  );
};

export default AboutHero;
