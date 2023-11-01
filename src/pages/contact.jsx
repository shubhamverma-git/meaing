import React from "react";
import HeroBackgroundCover from "@/HeroImage/HeroBackgroundCover/HeroBackgroundCover";
import QueryForm from "@/Forms/QueryForm";
import { getContactPage } from "../services/contactPage";
import SeoComponent from "@/General/SEO/SeoComponent";
import SectionHeading from "@/SectionHeading/SectionHeading";
import AddressContainer from "@/Contact/AddressContainer";
import { getSeoData } from "../services/SeoService";

const ContactPage = (props) => {
  return (
    <>
      <SeoComponent data={props?.seoData?.data} />
      <HeroBackgroundCover title={props?.data?.attributes?.page_name} />
      <SectionHeading
        title={props?.data?.attributes?.contact_heading?.title}
        sub_title={props?.data?.attributes?.contact_heading?.sub_title}
        quote={props?.data?.attributes?.contact_heading?.quote}
        description={props?.data?.attributes?.contact_heading?.description}
        customClass="page_spacing"
      />
      <QueryForm
        page={props?.data?.attributes?.page_name.toLowerCase()}
        formImage={props.data.attributes.form_image.data.attributes}
      />
      <AddressContainer data={props?.data?.attributes} />
    </>
  );
};

export default ContactPage;

export async function getStaticProps() {
  const contactPageData = await getContactPage();
  const seoData = await getSeoData("contact");
  return {
    props: { data: contactPageData.data.data, seoData: seoData?.data },
  };
}
