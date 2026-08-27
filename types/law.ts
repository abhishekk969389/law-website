export interface SocialLink {
  name: string;
  platform: 'linkedin' | 'facebook' | 'x' | 'twitter' | string;
  url: string;
  icon?: string;
}

export interface TopbarData {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  socialLinks: SocialLink[];
}

export interface NavDropdownItem {
  title: string;
  href: string;
}

export interface NavLinkItem {
  title: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: NavDropdownItem[];
}

export interface NavbarActionButtons {
  contactUs: {
    text: string;
    href: string;
  };
  consultation: {
    text: string;
    href: string;
  };
}

export interface NavbarData {
  logo: string;
  navLinks: NavLinkItem[];
  actionButtons: NavbarActionButtons;
}


export interface BannerStat {
  value: string;
  label: string;
}

export interface BannerButton {
  text: string;
  href: string;
  variant: 'primary' | 'outline';
}

export interface BannerQuote {
  text1: string;
  text2: string;
  text3: string;
}


export interface BannerData {
  tagline: string;
  heading: {
    line1: string;
    line2: string;
    highlight: string;
  };
  subheading: string;
  buttons: BannerButton[];
  stats: BannerStat[];
  quote: BannerQuote;
  backgroundImage: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutPillBadge {
  title: string;
  subtitle: string;
}

export interface AboutFoundationItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutData {
  topBadge: string;
  subTagline: string;
  heading: {
    line1: string;
    line2: string;
    highlight: string;
  };
  seal: {
    badgeImage?: string;
    text: string;
    description: string;
  };
  image: string;
  imageBadge: AboutPillBadge;
  foundation: {
    subTagline: string;
    heading: {
      line1: string;
      highlight: string;
    };
    description: string;
    items: AboutFoundationItem[];
  };
}

export interface ServiceCardItem {
  id: string;
  icon: string;
  image: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

export interface ServicesData {
  tagline: string;
  heading: {
    line1: string;
    line2: string;
    highlight: string;
  };
  subheading: string;
  items: ServiceCardItem[];
}

export interface CountingItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export type CountingData = CountingItem[];

export interface CaseStudyItem {
  id: string;
  number: string;
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface CaseStudyData {
  tagline: string;
  heading: {
    line1: string;
    highlight: string;
    line2: string;
  };
  subheading: string;
  items: CaseStudyItem[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
  rating: number;
}

export interface TestimonialsData {
  tagline: string;
  heading: string;
  image: string;
  items: TestimonialItem[];
}

export interface BlogItem {
  id: string;
  image: string;
  author: string;
  date: string;
  commentsCount: string;
  title: string;
  linkHref: string;
}

export interface BlogData {
  tagline: string;
  heading: {
    line1: string;
    highlight: string;
  };
  subheading: string;
  buttonText: string;
  buttonHref: string;
  items: BlogItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  tagline: string;
  heading: {
    line1: string;
    highlight: string;
  };
  subheading: string;
  image: string;
  items: FaqItem[];
}

export interface RecentNewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  linkHref: string;
}

export interface PopularCaseItem {
  id: string;
  title: string;
  linkHref: string;
}

export interface FooterSocialLink {
  id: string;
  name: string;
  url: string;
}

export interface FooterData {
  backgroundImage: string;
  newsletter: {
    tagline: string;
    heading: string;
    inputPlaceholder: string;
    buttonText: string;
  };
  brand: {
    logo: string;
    title: string;
    subtitle: string;
    description: string;
    followUsText: string;
    socials: FooterSocialLink[];
  };
  popularCases: {
    title: string;
    links: PopularCaseItem[];
  };
  resources?: {
    title: string;
    links: PopularCaseItem[];
  };
  recentNews: {
    title: string;
    items: RecentNewsItem[];
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    address: string;
    openingHoursTitle: string;
    openingHours: string;
    closedText: string;
  };
  copyrightText: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

export interface SubBannerData {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

export interface WhyChooseUsCardItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  tagline: string;
  heading: {
    line1: string;
    highlight: string;
    line2: string;
  };
  description: string;
  image: string;
  items: WhyChooseUsCardItem[];
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  image: string;
  linkHref?: string;
}

export interface TeamData {
  tagline: string;
  heading: {
    line1: string;
    line2Prefix?: string;
    highlight: string;
  };
  members: TeamMemberItem[];
}

export interface ApproachFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ApproachData {
  tagline: string;
  heading: {
    line1: string;
    line2Prefix?: string;
    highlight: string;
  };
  description: string;
  image: string;
  items: ApproachFeatureItem[];
}

export interface ProvenStepItem {
  id: string;
  stepNumber: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProvenApproachData {
  tagline: string;
  steps: ProvenStepItem[];
  bottomBanner: {
    text: string;
    callText: string;
    phoneNumber: string;
    phoneHref?: string;
  };
}

export interface ServiceSectionItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  link?: string;
}

export interface ServiceSectionData {
  tagline: string;
  heading: {
    line1: string;
    line2Prefix?: string;
    highlight: string;
  };
  description: string;
  items: ServiceSectionItem[];
}

export interface TeamSectionItem {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  socials?: { platform: string; href: string }[];
  link?: string;
}

export interface TeamSectionData {
  tagline: string;
  heading: {
    line1: string;
    line2Prefix?: string;
    highlight: string;
  };
  description?: string;
  members: TeamSectionItem[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  link?: string;
}

export interface IndustrySectionData {
  tagline: string;
  heading: {
    line1: string;
    line2Prefix?: string;
    highlight: string;
  };
  description?: string;
  items: IndustryItem[];
}

export interface CaseStudySectionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkHref: string;
}

export interface CaseStudySectionData {
  tagline: string;
  heading: {
    line1: string;
    highlight: string;
    line2: string;
  };
  subheading: string;
  items: CaseStudySectionItem[];
}

export interface BlogSectionItem {
  id: string;
  title: string;
  author: string;
  date: string;
  commentsCount: string;
  image: string;
  linkHref: string;
}

export interface BlogSectionData {
  tagline: string;
  heading: {
    line1: string;
    highlight: string;
  };
  subheading?: string;
  items: BlogSectionItem[];
}

export interface LegalArticleItem {
  id: string;
  badge?: string;
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface LegalSectionData {
  tagline?: string;
  heading?: {
    line1: string;
    highlight: string;
  };
  subheading?: string;
  featured?: LegalArticleItem;
  items: LegalArticleItem[];
}

export interface MediaSectionItem {
  id: string;
  logo: string;
  title: string;
  date: string;
  link?: string;
}

export interface MediaSectionData {
  tagline?: string;
  heading?: {
    line1: string;
    highlight: string;
  };
  subheading?: string;
  items: MediaSectionItem[];
}

export interface EventSectionItem {
  id: string;
  badge: string;
  day: string;
  month: string;
  year: string;
  title: string;
  fullDate: string;
  time: string;
  location: string;
  image: string;
  link?: string;
}

export interface EventSectionData {
  tagline?: string;
  heading?: {
    line1: string;
    highlight: string;
  };
  subheading?: string;
  items: EventSectionItem[];
}

export interface PublicationSectionItem {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface PublicationSectionData {
  title?: string;
  description?: string;
  items: PublicationSectionItem[];
}

export interface StayUpdatedData {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
}

export interface AwardSectionItem {
  id: string;
  logo: string;
  organization: string;
  awardTitle: string;
  year?: string;
}

export interface AwardSectionData {
  tagline?: string;
  heading?: {
    line1Prefix: string;
    highlight: string;
    line1Suffix: string;
  };
  subheading?: string;
  items: AwardSectionItem[];
}

export interface ClientSectionData {
  title?: string;
  subheading?: string;
  image?: string;
}

export interface ClientResourceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  actionText: string;
  link?: string;
}

export interface ClientResourceSectionData {
  items: ClientResourceItem[];
}

export interface JobPositionItem {
  id: string;
  badge: string;
  icon: string;
  title: string;
  location: string;
  description: string;
  link?: string;
}

export interface CareerSectionData {
  title?: string;
  description?: string;
  items: JobPositionItem[];
}

export interface CareerCtaData {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  email?: string;
}

export interface OfficeStatItem {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface OfficeSectionData {
  tagline?: string;
  heading?: {
    line1: string;
    line2: string;
  };
  description?: string;
  stats: OfficeStatItem[];
  quote?: string;
  image?: string;
}

export interface OfficeLocationItem {
  id: string;
  city: string;
  address: string;
  phone: string;
  directionsLink?: string;
  icon?: string;
}

export interface OfficeLocationSectionData {
  title?: string;
  items: OfficeLocationItem[];
}

export interface OfficeCtaData {
  tagline?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface ContactHoursItem {
  days: string;
  time: string;
  isClosed?: boolean;
}

export interface ContactSectionData {
  tagline?: string;
  heading?: string;
  visitUs?: {
    title?: string;
    addressLines: string[];
  };
  officeHours?: {
    title?: string;
    items: ContactHoursItem[];
  };
  contactInfo?: {
    callTitle?: string;
    phones: string[];
    emailTitle?: string;
    emails: string[];
  };
}

export interface QuestionsFormLabels {
  namePlaceholder?: string;
  emailPlaceholder?: string;
  servicePlaceholder?: string;
  phonePlaceholder?: string;
  messagePlaceholder?: string;
  buttonText?: string;
}

export interface QuestionsSectionData {
  tagline?: string;
  headingLine1?: string;
  headingLine2?: string;
  formLabels?: QuestionsFormLabels;
  image?: string;
}

export interface BookFeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface BookAssistanceData {
  title?: string;
  description?: string;
  phone?: string;
}

export interface BookSectionData {
  title?: string;
  subtitle?: string;
  features: BookFeatureItem[];
  assistance?: BookAssistanceData;
  formTitle?: string;
  formSubtitle?: string;
  practiceAreas?: string[];
  consultationTypes?: string[];
  preferredTimes?: string[];
}

export interface PrivacyPolicyTopicItem {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface PrivacyPolicySectionData {
  topics: PrivacyPolicyTopicItem[];
}

export interface TermsConditionTopicItem {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface TermsConditionSectionData {
  topics: TermsConditionTopicItem[];
}

export interface LegalDisclaimerTopicItem {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface LegalDisclaimerSectionData {
  topics: LegalDisclaimerTopicItem[];
}

export interface SitemapLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface SitemapCategoryCard {
  id: string;
  title: string;
  icon: string;
  links: SitemapLinkItem[];
}

export interface SitemapSectionData {
  tagline?: string;
  heading?: {
    line1?: string;
    highlight?: string;
    line2?: string;
  };
  categories: SitemapCategoryCard[];
}

export interface LawData {
  topbar: TopbarData;
  navbar: NavbarData;
  banner: BannerData;
  features: FeatureItem[];
  about: AboutData;
  services: ServicesData;
  subBanner?: SubBannerData;
  aboutSubBanner?: SubBannerData;
  whyChooseSubBanner?: SubBannerData;
  ourApproachSubBanner?: SubBannerData;
  servicesSubBanner?: SubBannerData;
  teamSubBanner?: SubBannerData;
  industriesSubBanner?: SubBannerData;
  caseStudySubBanner?: SubBannerData;
  blogSubBanner?: SubBannerData;
  legalSubBanner?: SubBannerData;
  mediaSubBanner?: SubBannerData;
  eventSubBanner?: SubBannerData;
  publicationsSubBanner?: SubBannerData;
  awardSubBanner?: SubBannerData;
  testimonialSubBanner?: SubBannerData;
  clientSubBanner?: SubBannerData;
  faqSubBanner?: SubBannerData;
  careerSubBanner?: SubBannerData;
  officeSubBanner?: SubBannerData;
  contactSubBanner?: SubBannerData;
  bookConsSubBanner?: SubBannerData;
  privacyPolicySubBanner?: SubBannerData;
  termsConditionSubBanner?: SubBannerData;
  legalDisclaimerSubBanner?: SubBannerData;
  sitemapSubBanner?: SubBannerData;
  whyChooseUs?: WhyChooseUsData;
  team?: TeamData;
  ourApproachSection?: ApproachData;
  provenApproach?: ProvenApproachData;
  serviceSection?: ServiceSectionData;
  teamSection?: TeamSectionData;
  industrySection?: IndustrySectionData;
  caseStudySection?: CaseStudySectionData;
  blogSection?: BlogSectionData;
  legalSection?: LegalSectionData;
  mediaSection?: MediaSectionData;
  eventSection?: EventSectionData;
  publicationsSection?: PublicationSectionData;
  stayUpdated?: StayUpdatedData;
  awardSection?: AwardSectionData;
  clientSection?: ClientSectionData;
  clientCards?: ClientResourceSectionData;
  careerSection?: CareerSectionData;
  careerCta?: CareerCtaData;
  officeSection?: OfficeSectionData;
  officeLocations?: OfficeLocationSectionData;
  officeCta?: OfficeCtaData;
  contactSection?: ContactSectionData;
  questionsSection?: QuestionsSectionData;
  bookSection?: BookSectionData;
  privacyPolicySection?: PrivacyPolicySectionData;
  termsConditionSection?: TermsConditionSectionData;
  legalDisclaimerSection?: LegalDisclaimerSectionData;
  sitemapSection?: SitemapSectionData;
  counting?: CountingItem[];
  caseStudy?: CaseStudyData;
  testimonials?: TestimonialsData;
  blog?: BlogData;
  faq?: FaqData;
  footer?: FooterData;
  [key: string]: unknown;
}

export type GlobalSocialLink = SocialLink;
export type GlobalTopbarData = TopbarData;
export type GlobalNavLinkItem = NavLinkItem;
export type GlobalNavbarData = NavbarData;
export type GlobalLawData = LawData;
export type GlobalSubBannerData = SubBannerData;
export type GlobalWhyChooseUsData = WhyChooseUsData;
export type GlobalTeamData = TeamData;
export type GlobalApproachData = ApproachData;
export type GlobalProvenApproachData = ProvenApproachData;
export type GlobalServiceSectionData = ServiceSectionData;
export type GlobalTeamSectionData = TeamSectionData;
export type GlobalIndustrySectionData = IndustrySectionData;
export type GlobalCaseStudySectionData = CaseStudySectionData;
export type GlobalBlogSectionData = BlogSectionData;
export type GlobalLegalSectionData = LegalSectionData;
export type GlobalMediaSectionData = MediaSectionData;
export type GlobalEventSectionData = EventSectionData;
export type GlobalPublicationSectionData = PublicationSectionData;
export type GlobalStayUpdatedData = StayUpdatedData;
export type GlobalAwardSectionData = AwardSectionData;
export type GlobalClientSectionData = ClientSectionData;
export type GlobalClientResourceSectionData = ClientResourceSectionData;
export type GlobalCareerSectionData = CareerSectionData;
export type GlobalCareerCtaData = CareerCtaData;
export type GlobalOfficeSectionData = OfficeSectionData;
export type GlobalOfficeLocationSectionData = OfficeLocationSectionData;
export type GlobalOfficeCtaData = OfficeCtaData;
export type GlobalContactSectionData = ContactSectionData;
export type GlobalQuestionsSectionData = QuestionsSectionData;
export type GlobalBookSectionData = BookSectionData;
export type GlobalPrivacyPolicySectionData = PrivacyPolicySectionData;
export type GlobalTermsConditionSectionData = TermsConditionSectionData;
export type GlobalLegalDisclaimerSectionData = LegalDisclaimerSectionData;
export type GlobalSitemapSectionData = SitemapSectionData;
export type GlobalCountingItem = CountingItem;
export type GlobalCaseStudyData = CaseStudyData;
export type GlobalTestimonialsData = TestimonialsData;
export type GlobalBlogData = BlogData;
export type GlobalFaqData = FaqData;
export type GlobalFooterData = FooterData;

declare global {
  type GlobalSocialLink = SocialLink;
  type GlobalTopbarData = TopbarData;
  type GlobalNavLinkItem = NavLinkItem;
  type GlobalNavbarData = NavbarData;
  type GlobalLawData = LawData;
  type GlobalSubBannerData = SubBannerData;
  type GlobalWhyChooseUsData = WhyChooseUsData;
  type GlobalTeamData = TeamData;
  type GlobalApproachData = ApproachData;
  type GlobalProvenApproachData = ProvenApproachData;
  type GlobalServiceSectionData = ServiceSectionData;
  type GlobalTeamSectionData = TeamSectionData;
  type GlobalIndustrySectionData = IndustrySectionData;
  type GlobalCaseStudySectionData = CaseStudySectionData;
  type GlobalBlogSectionData = BlogSectionData;
  type GlobalLegalSectionData = LegalSectionData;
  type GlobalMediaSectionData = MediaSectionData;
  type GlobalEventSectionData = EventSectionData;
  type GlobalPublicationSectionData = PublicationSectionData;
  type GlobalStayUpdatedData = StayUpdatedData;
  type GlobalAwardSectionData = AwardSectionData;
  type GlobalClientSectionData = ClientSectionData;
  type GlobalClientResourceSectionData = ClientResourceSectionData;
  type GlobalCareerSectionData = CareerSectionData;
  type GlobalCareerCtaData = CareerCtaData;
  type GlobalOfficeSectionData = OfficeSectionData;
  type GlobalOfficeLocationSectionData = OfficeLocationSectionData;
  type GlobalOfficeCtaData = OfficeCtaData;
  type GlobalContactSectionData = ContactSectionData;
  type GlobalQuestionsSectionData = QuestionsSectionData;
  type GlobalBookSectionData = BookSectionData;
  type GlobalPrivacyPolicySectionData = PrivacyPolicySectionData;
  type GlobalTermsConditionSectionData = TermsConditionSectionData;
  type GlobalLegalDisclaimerSectionData = LegalDisclaimerSectionData;
  type GlobalSitemapSectionData = SitemapSectionData;
  type GlobalCountingItem = CountingItem;
  type GlobalCaseStudyData = CaseStudyData;
  type GlobalTestimonialsData = TestimonialsData;
  type GlobalBlogData = BlogData;
  type GlobalFaqData = FaqData;
  type GlobalFooterData = FooterData;
}






