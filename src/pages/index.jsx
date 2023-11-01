import HeroSwiper from "@/HeroImage/HeroSwiper/HeroSwiper.jsx";
import styles from "@/styles/home.module.scss";
import { Blog } from "@/Blog/Blog";
import { ServiceBlock } from "@/ServiceBlock/ServiceBlock";
import ClientComponent from "@/ClientComponent/ClientComponent";
import HomeHero from "@/homeHeroCard/HomeHero";
import { getHomePageData, getProjectsData } from "../services/homePage";
import { getClientData } from "../services/utilityService";
import SectionHeading from "@/SectionHeading/SectionHeading";
import OurWork from "@/Home/Project/OurWork";
import { getSubServicesData } from "../services/SubService";
import SeoComponent from "@/General/SEO/SeoComponent";
import { getSeoData } from "../services/SeoService";
import { getHomepageArticles } from "../services/articleServices";
import QueryForm from "@/Forms/QueryForm";
import TrendingIdeas from "@/service_components/trending_ideas/TrendingIdeas";

const Home = ({
  clientData,
  data,
  seoData,
  subserviceData,
  projects,
  blogData,
  ideas,
}) => {
  return (
    <>
      <SeoComponent data={seoData?.data} />
      <HeroSwiper />
      <div className={`page_spacing ${styles.section_spacing}`}>
        <SectionHeading
          title="Welcome to Droot"
          sub_title={`Pioneering Growth and Innovation`}
          description={`In an ever-evolving digital landscape, Droot stands as a testament to
        resilience and innovation, offering an unparalleled path for
        businesses seeking transformation. Founded in 2020, our foundation is
        built on the unwavering commitment to deliver bespoke technology
        solutions that fuel empowerment and expedite growth.`}
        />
      </div>
      <HomeHero
        title={"Creation through power of"}
        sub_title={"Innovation and Transform"}
        description={
          "From consultation to creation, we understand your needs and audience. Our designers craft stunning concepts, while skilled developers bring them to life with cutting-edge tech. Rigorous testing ensures optimal performance. We provide training, support, and maintenance for your success."
        }
      />
      <ServiceBlock data={data.data} />
      <div className="page_spacing">
        <SectionHeading
          title="Our Work"
          sub_title="Crafting Success Stories"
          customClass={styles.project_section_description}
        />
        <OurWork subserviceData={subserviceData} projects={projects} />
      </div>
      <div className={`page_spacing ${styles.section_spacing}`}>
        <ClientComponent clientList={clientData.data} />
      </div>

      <QueryForm page={"home"} />

      <div>
        <TrendingIdeas trendingData={ideas} isHomepage={true} />
      </div>

      <div className={styles.blog_wrapper}>
        <Blog data={blogData?.data} />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const result = await getHomePageData();
  const seoData = await getSeoData("home");
  const clientData = await getClientData();
  const subserviceData = await getSubServicesData();
  const projects = await getProjectsData();
  const blogData = await getHomepageArticles("blog", 1, 100);
  const ideas = await getHomepageArticles("idea", 1, 3);

  return {
    props: {
      data: result.data,
      seoData: seoData.data,
      clientData: clientData.data,
      subserviceData: subserviceData.data,
      projects: projects.data.data,
      blogData: blogData.data,
      ideas: ideas?.data,
    },
  };
}
