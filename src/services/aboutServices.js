const { default: axios } = require("axios");

export const aboutData = () => {
  return axios.get(
    "https://insights.droot.in/api/about?populate=hero_section,work_cta,value_block.value_description,value_block.values.icon_url,team_block.team_heading,team_block.teams.image_url,client_block.client_heading,client_block.clients.logo_url,testimonial_block.testimonial_heading,testimonial_block.testimonials.image_url,hiring_block.hiring_heading,hiring_block.job_openings,review"
  );
};
