import React from "react";
import styles from "@/styles/PrivacyPolicy.module.scss";
import SeoComponent from "@/General/SEO/SeoComponent";
import HeroBackgroundCover from "@/HeroImage/HeroBackgroundCover/HeroBackgroundCover";
import { getSeoData } from "../services/SeoService";

const PrivacyPolicyPage = ({ seoData }) => {
  return (
    <>
      <SeoComponent data={seoData?.data} />
      <HeroBackgroundCover title={"Privacy Policy"} />
      <div className={styles.policy_container}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12`}>
              <h5 className={styles.heading}>Introduction</h5>
              <p className={styles.desc}>
                This Privacy Policy (&apos;policy&apos;) applies to Droot
                Consulting Private Limited and its affiliates
                (&apos;Droot&apos;, &apos;we&apos;, &apos;us&apos;,
                &apos;our&apos;) and provides information on the collection, use
                and sharing (&apos;processing&apos; or &apos;process&apos;) of
                your personal data (&apos;personal information&apos;). This
                includes personal information collected via our websites
                (&apos;Website&apos;), our products or personal information
                collected from you directly, such as in person, via telephone or
                email, or indirectly through third parties in the course of our
                business.
              </p>
              <p>
                Droot supports the right to privacy and understands the
                importance of protecting personal information and complying with
                applicable data protection laws. We have appointed a Data
                Protection Officer for assisting with questions regarding this
                policy and the processing of your personal information. For
                details on how to contact us, see the Contact Information
                section.
              </p>
              <p>This policy describes:</p>
              <ul>
                <li>What Data We Collect</li>
                <li>How We Process Your Data</li>
                <li>How We Collect Your Data</li>
                <li>How We Share Your Data</li>
                <li>How We Protect Your Data</li>
                <li>How Long We Store Your Data</li>
                <li>Your Privacy Rights</li>
                <li>Children&apos;s Privacy</li>
                <li>Contact Information</li>
              </ul>
              <h5 className={styles.heading}>What Data We Collect</h5>
              <p className={styles.desc}>
                The personal information we process about you and how we collect
                it can vary depending on (a) the product(s) or service(s) you
                use; (b) how you use the product or service; (c) how you have
                interacted with Droot, and (d) the information that we have
                obtained from a customer or from a third party with permission
                to share such information with us.
              </p>
              <p>
                Droot may collect personal information about you such as, for
                example: full name, email address, telephone number, company
                name, company location, position in company, department, billing
                information including credit card details where applicable, IP
                address and how you use our services. See Cookie
                Technology section for details on what we collect using cookies
                and other technologies.
              </p>
              <p>
                Droot may combine the personal information you provide with
                information that is not collected directly from you. Data not
                provided directly by you may be supplied by Droot&apos;s vendors
                and/or partners. Refer to Personal Information Collected from
                Third Parties for additional information.
              </p>
              <h5 className={styles.heading}>How We Process Your Data</h5>
              <p className={styles.desc}>
                Droot processes personal information to respond to your
                requests, to provide you Droot products and services, including
                information, support and delivery and access to online
                resources. Some of the specific processing activities include,
                for example:
              </p>
              <ul>
                <li>Account set up and administration;</li>
                <li>
                  Internal research and development to customized content and
                  enhance the user experience;
                </li>
                <li>Legal obligations;</li>
                <li>Regulatory requirements such as internal audits;</li>
                <li>Fulfillment of obligations outlined in any agreements;</li>
                <li>
                  Gathering feedback and opinions about our provided services
                  (i.e., surveys);
                </li>
                <li>Notification to users of changes to our services;</li>
                <li>Responding to your requests and comments;</li>
                <li>Event registration;</li>
                <li>Downloading of white papers; and</li>
                <li>Marketing communications.</li>
              </ul>
              <p>
                All processing activities are based upon a relevant legal basis
                which may include fulfillment of a contract, to meet our legal
                obligations, for our legitimate interests or consent received
                directly from you.
              </p>

              <h5 className={styles.heading}>How We Collect Your Data</h5>
              <p className={styles.desc}>
                We collect personal information through various means including
                for example via our Website, order forms and provision of
                products or services, third party service providers, customer
                support activities and exhibitions and events. Your employer, as
                a customer or partner of Droot, may provide your contact
                information as required to provide Droot products or services.
                The Website may also collect information about your visits to
                the Website without you actively submitting such information
                through cookie technology.
              </p>
              <p>
                Cookie Technology: Droot will collect information about the use
                of its Website, either directly or through third party tracking
                providers. This may include information collected using cookies
                (small text files placed on your computer while visiting certain
                sites on the Internet used to identify your computer), IP
                addresses, your browser type, operating system version, language
                settings, which locally installed Droot applications you use (if
                any) and how you use them, the web page you were visiting
                immediately prior to visiting our Website, pages of our Website
                that you visited, the time spent on those pages, information you
                searched for on our Website, access times and dates and other
                statistics. Usage information may be linked to your account with
                Droot in order to assist Droot to provide services to you,
                including relevant marketing material. Your browser may allow
                you to set a “Do not track” preference. Unless otherwise stated,
                our sites do not honor “Do not track” requests. However, you may
                elect not to accept cookies by changing the designated settings
                on your web browser or opting out of the Droot cookies. Please
                note that if you do not accept certain cookies, you may not be
                able to use all functions and features of our Website. Click
                here for information about Droot&apos;s Cookie Policy and
                options on how to set preferences and manage cookies.
              </p>
              <p>
                Personal Information Collected from Third Parties: Droot may
                collect and receive personal information about you from
                companies that distribute Droot products by way of co-branded or
                private labeled websites. Companies with which Droot partners to
                market and distribute its products and services also may supply
                us with personal information, such as your name, email address
                and mailing address information in order to help us fulfil
                orders and provide services. We may also collect your personal
                information from public sources or from data brokers. We may add
                this information to the information we have already collected
                from you via our Website or other sources.
              </p>
              <h5 className={styles.heading}>How We Share Your Data</h5>
              <p>
                Droot may share personal information with its affiliates,
                business partners, vendors and agents working on our behalf. We
                do this, for example:
              </p>
              <ul>
                <li>
                  to complete your requests, to provide you Droot products and
                  services;
                </li>
                <li>
                  to target advertising on our Website or to manage our
                  advertising on other sites. This may include providing
                  identified information to third party operated social networks
                  or other web offerings (such as Twitter or LinkedIn). If you
                  don&apos;t want to receive this advertising, you can go to the
                  relevant platform&apos;s ad settings to opt out; and
                </li>
                <li>
                  where you have purchased products and services using a third
                  party or partner organization, we often need to exchange
                  information with them as part of managing that relationship
                  and your account. You should also review the partner
                  company&apos;s privacy policy because it may describe uses of
                  your information that are different from ours.
                </li>
              </ul>
              <p>
                We may be required to share personal information with a third
                party or body where such disclosure is required to satisfy
                applicable law, or other legal or regulatory requirement or to
                protect the rights or property of Droot or others. This can
                include in response to lawful requests from a competent
                authority or body and to meet national security or law
                enforcement requirements.
              </p>
              <p>
                If all or any part of our business is re-organized or sold to
                another organization, we may need to provide your information to
                that organization. We may also be the recipient of personal
                information, where we are acquiring another organization or a
                part of their business. Where third parties are performing
                processing on our behalf, Droot will require these organizations
                to adopt adequate technical and organizational security measures
                to protect personal information and to ensure the processing of
                personal information is only performed as instructed by Droot
                and for no other purposes.
              </p>

              <h5 className={styles.heading}>How We Protect Your Data</h5>
              <p className={styles.desc}>
                Securing your data, both online and offline, is a priority for
                us. We have implemented appropriate technical and organizational
                measures to protect your personal information and ensure a level
                of security appropriate to the risk.
              </p>
              <p>
                All our employees are subject to confidentiality agreements and
                undergo annual training on the proper handling of personal
                information.
              </p>
              <p>
                Links to other websites or locations may be provided for your
                convenience but does not signify our endorsement of such other
                websites or locations or their contents. When you click on such
                links, you will leave the Droot Website and go to another site.
                When this happens, a third party may collect personal
                information from you. Please be aware that the terms of this
                policy do not apply to such outside websites or content or to
                any collection of data after you click on a link to a
                third-party website or location. If you submit personal
                information to any of those sites, your information is governed
                by their privacy statements. We encourage you to carefully read
                the privacy notice of any website you visit.
              </p>
              <h5 className={styles.heading}>How Long We Store Your Data</h5>
              <p className={styles.desc}>
                Droot will retain personal information for as long as needed to
                provide the relevant product or services or to fulfil the
                purposes for which the information was collected. Droot may also
                retain and use this information for a longer period as permitted
                or required by law, to comply with our legal, tax or regulatory
                obligations (e.g. audit and accounting requirements), handle
                disputes, to exercise or defend claims, and enforce our
                agreements. We ensure that personal information we dispose of,
                is de-identified or destroyed in a secure manner.
              </p>
              <h5 className={styles.heading}>Your Privacy Rights</h5>
              <p className={styles.desc}>
                Your local applicable law may provide certain rights regarding
                the use of your personal information. You may request from Droot
                access to, correction of, updating of and/or deletion of your
                personal information, or object our use of your personal
                information in certain circumstances, in line with applicable
                data protection law. Your rights may differ according to your
                place of residence.
              </p>

              <p>
                Choice/Opting out of Marketing: Droot offers you the choice of
                receiving different types of communication and information
                related to our products and services. You may subscribe to
                e-newsletters or other publications; you may also elect to
                receive marketing communications and other special offers from
                us via email. If at any time you would like to change your
                communication preferences, we provide unsubscribe links and an
                opt-out mechanism in all our communications or contact us.
              </p>

              <p>
                GDPR and UK Data Protection Act: Where the GDPR or UK Data
                Protection Act applies to EU and UK residents and their personal
                information, these individuals are afforded additional rights
                including:
              </p>

              <ul>
                <li>
                  right to object/restrict processing in certain circumstances;
                </li>
                <li>
                  right to request data portability which includes providing
                  personal information to them in a “structured, commonly-used
                  and machine-readable format” in certain circumstances;
                </li>
                <li>
                  right to lodge a complaint with the applicable authority
                  responsible for privacy protection.
                </li>
              </ul>

              <p>
                Cookies: to understand how to manage these, refer to our Cookie
                Policy.
              </p>
              <p>
                CCPA: Droot shall not sell, rent, disclose, disseminate, make
                available, transfer or otherwise communicate orally, in writing
                or by electronic or other means, any personal information to a
                third party for monetary or other valuable consideration as part
                of our business.
              </p>

              <h5 className={styles.heading}>Children&apos;s Privacy </h5>

              <p className={styles.desc}>
                Droot encourages parents and guardians to take an active role in
                their children&apos;s online activities. Our Services are not
                aimed at people under 18 and Droot does not knowingly collect
                personal information from children without appropriate parental
                or guardian consent. If you believe that we may have collected
                personal information from someone under the age of 13 (or the
                applicable age of consent) without proper consent, please submit
                your complaint in writing to the address found in the Contact
                Information section.
              </p>
              <h5 className={styles.heading}>Contact Information</h5>
              <p className={styles.desc}>
                Droot&apos;s Data Protection Team can be reached
                at info@droot.in or by mail at:
              </p>
              <ul>
                <li>
                  Droot Consulting Private Limited, B-1234, iThum, Sector 62,
                  Noida, Uttar Pradesh, India, 201301
                </li>
              </ul>
              <h5 className={styles.heading}>Changes to this Privacy Policy</h5>
              <p className={styles.desc}>
                Droot may update this policy from time to time. If we modify
                this policy, we will post the revised version here. You should
                review this page periodically for updates.
              </p>
              <p>This policy was last updated on May, 2022.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;

export const getStaticProps = async () => {
  const seoData = await getSeoData("privacy_policy");
  return {
    props: { seoData: seoData?.data },
  };
};
