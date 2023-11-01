import classes from "./CareerSection.module.scss";
import Arrow from "@/Animation/Arrow/Arrow";
import SectionHeading from "@/SectionHeading/SectionHeading";

const CareerSection = ({ data }) => {
  return (
    <div className={classes.container}>
      <SectionHeading
        title={data?.hiring_heading?.title}
        sub_title={data?.hiring_heading?.sub_title}
        description={data?.hiring_heading?.description}
        customClass={`${classes.career_heading} ${classes.section_Spacing}`}
      />

      <div className={classes.openings_container}>
        {data?.job_openings?.data.map(({ attributes }, index) => (
          <div className={classes.single_opening} key={index}>
            <h3>{attributes?.title}</h3>
            <h4>(Experience - {attributes?.experience} years)</h4>
            <h6>{attributes?.location}</h6>
            <div className={classes.arrow_container}>
              <p>
                Job Posted on -
                {new Date(attributes?.publishedAt)
                  .toDateString()
                  .replace(/^\S+\s/, "")}
              </p>
              <Arrow className={classes.arrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerSection;
