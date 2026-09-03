import siteData from './lawData-restructured.json';

export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

export const rawSiteData = siteData.categories.Veritas.sections;

export type PageBannerData = typeof rawSiteData.PageBanner.variants.VeritasPageBanner1;
export type OurApproachData = typeof rawSiteData.OurApproach.variants.VeritasOurApproach1.ourApproachSection;
export type ServicesData = typeof rawSiteData.Services.variants.VeritasServices1.serviceSection;
export type TeamData = typeof rawSiteData.Team.variants.VeritasTeam1.teamSection;
export type IndustriesData = typeof rawSiteData.Industries.variants.VeritasIndustries1;
export type CaseStudyData = typeof rawSiteData.CaseStudy.variants.VeritasCaseStudy1.caseStudySection;
export type BlogData = typeof rawSiteData.Blog.variants.VeritasBlog1.blogSection;
export type LegalUpdatesData = typeof rawSiteData.LegalUpdates.variants.VeritasLegalUpdates1;
export type MediaData = typeof rawSiteData.Media.variants.VeritasMedia1.mediaSection;
export type EventsData = typeof rawSiteData.Events.variants.VeritasEvents1.eventSection;
export type PublicationsData = typeof rawSiteData.Publications.variants.VeritasPublications1.publicationsSection;
export type StayUpdatedData = typeof rawSiteData.StayUpdated.variants.VeritasStayUpdated1.stayUpdated;
export type AwardsRecognitionData = typeof rawSiteData.AwardsRecognition.variants.VeritasAwardsRecognition1;
export type CareersData = typeof rawSiteData.Careers.variants.VeritasCareers1.careerSection;
export type OfficesData = typeof rawSiteData.Offices.variants.VeritasOffices1.officeSection;
export type ContactData = typeof rawSiteData.Contact.variants.VeritasContact1.contactSection;
export type ConsultationData = typeof rawSiteData.Consultation.variants.VeritasConsultation1;
export type PrivacyPolicyData = typeof rawSiteData.PrivacyPolicy.variants.VeritasPrivacyPolicy1.privacyPolicySection;
export type TermsData = typeof rawSiteData.Terms.variants.VeritasTerms1.termsConditionSection;
export type LegalDisclaimerData = typeof rawSiteData.LegalDisclaimer.variants.VeritasLegalDisclaimer1.legalDisclaimerSection;
export type SitemapData = typeof rawSiteData.Sitemap.variants.VeritasSitemap1.sitemapSection;
export type WhyChooseUsData = typeof rawSiteData.WhyChooseUs.variants.VeritasWhyChooseUs1.whyChooseUs;
export type TopbarData = typeof rawSiteData.Topbar.variants.VeritasTopbar1.topbar;
export type BannerData = typeof rawSiteData.Banner.variants.VeritasBanner1.banner;
export type FeaturesData = typeof rawSiteData.Features.variants.VeritasFeatures1.features;
export type AboutData = typeof rawSiteData.About.variants.VeritasAbout1.about;
export type TestimonialsData = typeof rawSiteData.Testimonials.variants.VeritasTestimonials1.testimonials;
export type FooterData = typeof rawSiteData.Footer.variants.VeritasFooter1.footer;


export type FaqData = typeof rawSiteData.FAQ.variants.VeritasFAQ1.faq;
export type CaseStudySectionData = CaseStudyData;
export type ContactSectionData = ContactData;
export type EventSectionData = EventsData;
export type IndustrySectionData = IndustriesData;
export type LegalSectionData = LegalUpdatesData;
export type LegalDisclaimerSectionData = LegalDisclaimerData;
export type MediaSectionData = MediaData;
export type OfficeSectionData = OfficesData;
export type ApproachData = OurApproachData;
export type PrivacyPolicySectionData = PrivacyPolicyData;
export type PublicationSectionData = PublicationsData;
export type ServiceSectionData = ServicesData;
export type SitemapSectionData = SitemapData;
export type TeamSectionData = TeamData;
export type TermsConditionSectionData = TermsData;
export type FAQData = FaqData;


export const site = {
  pageBanner: rawSiteData.PageBanner.variants.VeritasPageBanner1,
  ourApproach: rawSiteData.OurApproach.variants.VeritasOurApproach1.ourApproachSection,
  services: rawSiteData.Services.variants.VeritasServices1.serviceSection,
  team: rawSiteData.Team.variants.VeritasTeam1.teamSection,
  industries: rawSiteData.Industries.variants.VeritasIndustries1,
  caseStudy: rawSiteData.CaseStudy.variants.VeritasCaseStudy1.caseStudySection,
  blog: rawSiteData.Blog.variants.VeritasBlog1.blogSection,
  legalUpdates: rawSiteData.LegalUpdates.variants.VeritasLegalUpdates1,
  media: rawSiteData.Media.variants.VeritasMedia1.mediaSection,
  events: rawSiteData.Events.variants.VeritasEvents1.eventSection,
  publications: rawSiteData.Publications.variants.VeritasPublications1.publicationsSection,
  stayUpdated: rawSiteData.StayUpdated.variants.VeritasStayUpdated1.stayUpdated,
  awardsRecognition: rawSiteData.AwardsRecognition.variants.VeritasAwardsRecognition1,
  clientResource: rawSiteData.ClientResource.variants.VeritasClientResource1.clientCards,
  careers: rawSiteData.Careers.variants.VeritasCareers1.careerSection,
  offices: rawSiteData.Offices.variants.VeritasOffices1.officeSection,
  contact: rawSiteData.Contact.variants.VeritasContact1.contactSection,
  consultation: rawSiteData.Consultation.variants.VeritasConsultation1,
  privacyPolicy: rawSiteData.PrivacyPolicy.variants.VeritasPrivacyPolicy1.privacyPolicySection,
  termsCondition: rawSiteData.Terms.variants.VeritasTerms1.termsConditionSection,
  legalDisclaimer: rawSiteData.LegalDisclaimer.variants.VeritasLegalDisclaimer1.legalDisclaimerSection,
  sitemap: rawSiteData.Sitemap.variants.VeritasSitemap1.sitemapSection,
  whyChooseUs: rawSiteData.WhyChooseUs.variants.VeritasWhyChooseUs1.whyChooseUs,
  topbar: rawSiteData.Topbar.variants.VeritasTopbar1.topbar,
  header: rawSiteData.Header.variants.VeritasHeader1.navbar,
  banner: rawSiteData.Banner.variants.VeritasBanner1.banner,
  features: rawSiteData.Features.variants.VeritasFeatures1.features,
  about: rawSiteData.About.variants.VeritasAbout1.about,
  counting: rawSiteData.Counting.variants.VeritasCounting1.counting,
  testimonials: rawSiteData.Testimonials.variants.VeritasTestimonials1.testimonials,
  faq: rawSiteData.FAQ.variants.VeritasFAQ1.faq,
  footer: rawSiteData.Footer.variants.VeritasFooter1.footer,
  serviceDetail: rawSiteData.ServiceDetail.variants.VeritasServiceDetail1.serviceDetails,
  teamDetail: rawSiteData.TeamDetail.variants.VeritasTeamDetail1.teamDetails,
  blogDetail: rawSiteData.BlogDetail.variants.VeritasBlogDetail1.blogDetails,
  legalUpdateDetail: rawSiteData.LegalUpdateDetail.variants.VeritasLegalUpdateDetail1.legalDetails,
  eventDetail: rawSiteData.EventDetail.variants.VeritasEventDetail1.eventDetails,
  publicationDetail: rawSiteData.PublicationDetail.variants.VeritasPublicationDetail1.publicationDetails,
  jobDetail: rawSiteData.JobDetail.variants.VeritasJobDetail1.careerDetails,
};


export type GlobalLawData = typeof siteData;
export type LawData = typeof siteData;


export type TeamDetailItem = typeof rawSiteData.TeamDetail.variants.VeritasTeamDetail1.teamDetails[number];
export type ServiceDetailItem = typeof rawSiteData.ServiceDetail.variants.VeritasServiceDetail1.serviceDetails[number];
export type PublicationDetailItem = typeof rawSiteData.PublicationDetail.variants.VeritasPublicationDetail1.publicationDetails[number];
export type IndustryDetailItem = typeof rawSiteData.IndustryDetail.variants.VeritasIndustryDetail1.industryDetails[number];
export type IndustryDetailInsightItem = IndustryDetailItem;
export type EventDetailItem = typeof rawSiteData.EventDetail.variants.VeritasEventDetail1.eventDetails[number];
export type CaseStudyDetailItem = typeof rawSiteData.CaseStudyDetail.variants.VeritasCaseStudyDetail1.caseStudyDetails[number];
export type CareerDetailItem = typeof rawSiteData.JobDetail.variants.VeritasJobDetail1.careerDetails[number];
export type BlogDetailItem = typeof rawSiteData.BlogDetail.variants.VeritasBlogDetail1.blogDetails[number];

// Aliases for missing sections
export type ClientResourceSectionData = typeof rawSiteData.ClientResource.variants.VeritasClientResource1.clientCards;
export type LegalDetailItem = typeof rawSiteData.LegalUpdateDetail.variants.VeritasLegalUpdateDetail1.legalDetails[number];
export type TeamAboutData = typeof rawSiteData.TeamDetail.variants.VeritasTeamDetail1.teamDetails[number]["aboutMe"];
export type TeamActivitiesData = typeof rawSiteData.TeamDetail.variants.VeritasTeamDetail1.teamDetails[number]["activities"];
export type ServiceSidebarContact = typeof rawSiteData.ServiceDetail.variants.VeritasServiceDetail1.serviceDetails[number]["sidebarContact"];
export type ServiceSidebarForm = typeof rawSiteData.ServiceDetail.variants.VeritasServiceDetail1.serviceDetails[number]["sidebarForm"];
export type IndustryDetailSidebarData = typeof rawSiteData.IndustryDetail.variants.VeritasIndustryDetail1.industryDetails[number]["sidebarData"];
export type PublicationRecentPost = typeof rawSiteData.Publications.variants.VeritasPublications1.publicationSidebar.recentPosts[number];
export type PublicationSidebarData = typeof rawSiteData.Publications.variants.VeritasPublications1.publicationSidebar;
export type NavbarData = typeof rawSiteData.Header.variants.VeritasHeader1.navbar;
export type NavDropdownItem = NonNullable<typeof rawSiteData.Header.variants.VeritasHeader1.navbar.navLinks[number]["dropdownItems"]>[number];
export type NavLinkItem = typeof rawSiteData.Header.variants.VeritasHeader1.navbar.navLinks[number];
export type NavbarActionButtons = typeof rawSiteData.Header.variants.VeritasHeader1.navbar.actionButtons;
export type CountingData = typeof rawSiteData.Counting.variants.VeritasCounting1.counting;
export type CountingItem = typeof rawSiteData.Counting.variants.VeritasCounting1.counting[number];
export type OfficeLocationSectionData = typeof rawSiteData.Offices.variants.VeritasOffices1.officeLocations;
export type OfficeCtaData = typeof rawSiteData.Offices.variants.VeritasOffices1.officeCta;
export type ProvenApproachData = typeof rawSiteData.OurApproach.variants.VeritasOurApproach1.provenApproach;
export type LegalSidebarData = typeof rawSiteData.LegalUpdates.variants.VeritasLegalUpdates1.legalSidebar;
export type SubBannerData = Omit<typeof rawSiteData.PageBanner.variants.VeritasPageBanner1.aboutSubBanner, "breadcrumbs"> & { breadcrumbs: BreadcrumbItem[] };
export type BreadcrumbItem = Omit<typeof rawSiteData.PageBanner.variants.VeritasPageBanner1.aboutSubBanner.breadcrumbs[number], "href" | "isActive"> & { href?: string; isActive?: boolean; };
export type ActivitySkillItem = typeof rawSiteData.TeamDetail.variants.VeritasTeamDetail1.teamDetails[number]["activities"]["skills"][number];
export type AchievementItem = typeof rawSiteData.TeamDetail.variants.VeritasTeamDetail1.teamDetails[number]["activities"]["achievements"][number];
export type ProvenStepItem = typeof rawSiteData.OurApproach.variants.VeritasOurApproach1.provenApproach.steps[number];
export type LegalRecentPost = typeof rawSiteData.LegalUpdates.variants.VeritasLegalUpdates1.legalSidebar.recentPosts[number];
export type LegalHighlightItem = typeof rawSiteData.LegalUpdates.variants.VeritasLegalUpdates1.legalSection.items[number];
export type OfficeLocationItem = typeof rawSiteData.Offices.variants.VeritasOffices1.officeLocations.items[number];
export type FeatureItem = typeof rawSiteData.Features.variants.VeritasFeatures1.features[number];
export type AwardSectionData = typeof rawSiteData.AwardsRecognition.variants.VeritasAwardsRecognition1.awardSection;
export type BlogSectionData = typeof rawSiteData.Blog.variants.VeritasBlog1.blogSection;
export type BlogSidebarData = typeof rawSiteData.Blog.variants.VeritasBlog1.blogSidebar;
export type BookSectionData = typeof rawSiteData.Consultation.variants.VeritasConsultation1.bookSection;
export type CareerCtaData = typeof rawSiteData.Careers.variants.VeritasCareers1.careerCta;
export type CareerSectionData = typeof rawSiteData.Careers.variants.VeritasCareers1.careerSection;
export type CareerSidebarData = typeof rawSiteData.JobDetail.variants.VeritasJobDetail1.careerDetails[number]["sidebarData"];
export type CaseStudySidebarData = typeof rawSiteData.CaseStudy.variants.VeritasCaseStudy1.caseStudySidebar;
export type QuestionsSectionData = typeof rawSiteData.Consultation.variants.VeritasConsultation1.questionsSection;
