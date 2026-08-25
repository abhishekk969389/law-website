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

export interface LawData {
  topbar: TopbarData;
  navbar: NavbarData;
  banner: BannerData;
  features: FeatureItem[];
  about: AboutData;
  services: ServicesData;
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
  type GlobalCountingItem = CountingItem;
  type GlobalCaseStudyData = CaseStudyData;
  type GlobalTestimonialsData = TestimonialsData;
  type GlobalBlogData = BlogData;
  type GlobalFaqData = FaqData;
  type GlobalFooterData = FooterData;
}






