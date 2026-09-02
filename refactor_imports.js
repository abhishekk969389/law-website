const fs = require('fs');
const path = require('path');

const sectionMappings = {
    topbar: "Topbar",
    navbar: "Header",
    footer: "Footer",
    banner: "Banner",
    about: "About",
    ourApproachSection: "OurApproach",
    provenApproach: "OurApproach",
    serviceSection: "Services",
    services: "Services",
    teamSection: "Team",
    team: "Team",
    industrySection: "Industries",
    caseStudySection: "CaseStudy",
    caseStudy: "CaseStudy",
    blogSection: "Blog",
    blog: "Blog",
    legalSection: "LegalUpdates",
    eventSection: "Events",
    careerSection: "Careers",
    careerCta: "Careers",
    publicationsSection: "Publications",
    officeSection: "Offices",
    officeLocations: "Offices",
    officeCta: "Offices",
    contactSection: "Contact",
    faq: "FAQ",
    awardSection: "AwardsRecognition",
    clientSection: "ClientResource",
    clientCards: "ClientResource",
    sitemapSection: "Sitemap",
    termsConditionSection: "Terms",
    privacyPolicySection: "PrivacyPolicy",
    legalDisclaimerSection: "LegalDisclaimer",
    questionsSection: "Consultation",
    bookSection: "Consultation",
    
    industryDetails: "IndustryDetail",
    caseStudyDetails: "CaseStudyDetail",
    blogDetails: "BlogDetail",
    legalDetails: "LegalUpdateDetail",
    eventDetails: "EventDetail",
    careerDetails: "JobDetail",
    publicationDetails: "PublicationDetail",
    teamDetails: "TeamDetail",
    serviceDetails: "ServiceDetail",

    mediaSection: "Media",
    stayUpdated: "StayUpdated",
    whyChooseUs: "WhyChooseUs",
    features: "Features",
    counting: "Counting",
    testimonials: "Testimonials"
};

const sidebars = {
    blogSidebar: "Blog",
    legalSidebar: "LegalUpdates",
    caseStudySidebar: "CaseStudy",
    industrySidebar: "Industries",
    publicationSidebar: "Publications"
};

function getSectionName(key) {
    if (key.endsWith('SubBanner')) return 'PageBanner';
    if (sidebars[key]) return sidebars[key];
    if (sectionMappings[key]) return sectionMappings[key];
    return key.charAt(0).toUpperCase() + key.slice(1);
}

function processFile(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('lawData.json') && !content.includes('globalData')) return;

    let modified = false;

    // 1. Replace the import
    if (content.match(/import\s+rawLawData\s+from\s+["'][^"']*lawData\.json["'];/)) {
        content = content.replace(
            /import\s+rawLawData\s+from\s+["'][^"']*lawData\.json["'];/g,
            'import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";\nimport { GlobalLawData } from "@/types/law";'
        );
        modified = true;
    }

    // Identify page slug based on folder structure
    let pageSlug = null;
    let normalizedPath = filePath.replace(/\\/g, '/');
    if (normalizedPath.includes('/app/(pages)/')) {
        const match = normalizedPath.match(/\/app\/\(pages\)\/(.*?)\/page\.tsx$/);
        if (match) {
            const pathKey = match[1];
            const slugMap = {
                'about': 'about',
                'casestudy': 'case-study',
                'casestudy/[id]': 'case-study-detail',
                'team': 'team',
                'team/[id]': 'team-detail',
                'industries': 'industries',
                'industries/[id]': 'industries-detail',
                'blog': 'blogs',
                'blog/[id]': 'blogs-detail',
                'legal': 'legal-updates',
                'legal/[id]': 'legal-updates-detail',
                'event': 'events',
                'event/[id]': 'events-detail',
                'publications': 'publications',
                'publications/[id]': 'publications-detail',
                'career': 'careers',
                'career/[id]': 'careers-detail',
                'office': 'offices',
                'contactus': 'contact',
                'faq': 'faqs',
                'termscondition': 'terms-and-conditions',
                'privacypolicy': 'privacy-policy',
                'legaldisclimer': 'legal-disclaimer',
                'sitemap': 'sitemap',
                'service': 'services',
                'service/[id]': 'services-detail',
                'award': 'home', 
                'client': 'home',
                'media': 'home', 
                'bookcons': 'home',
                'ourapproach': 'our-approach',
                'whychoose': 'home',
                'testimonial': 'home',
            };
            pageSlug = slugMap[pathKey] || 'home';
        }
    } else if (normalizedPath.endsWith('/app/page.tsx')) {
        pageSlug = 'home';
    }

    if (pageSlug) {
        // Inject resolvePageData inside the default export component
        if (content.match(/export\s+default\s+(?:async\s+)?function\s+\w+\s*\([^)]*\)\s*\{/)) {
            content = content.replace(/(export\s+default\s+(?:async\s+)?function\s+\w+\s*\([^)]*\)\s*\{)/, `$1\n  const data = resolvePageData('${pageSlug}');`);
            modified = true;
        }

        // Remove `const globalData = rawLawData as GlobalLawData;` from the default component if we injected `data`
        // Actually, some files might still use globalData in other helper functions (like `getTeamMemberById`), so we shouldn't completely delete it if it's used elsewhere, but we can rewrite its usages.
    }

    // Handle `(rawLawData as GlobalLawData).teamDetails` -> `getAllItems('page-slug')`
    // Let's do a global replace for array details:
    content = content.replace(/(?:globalData|rawLawData|rawLawData\s+as\s+GlobalLawData|(?:\(rawLawData\s+as\s+GlobalLawData\)))\.(teamDetails|industryDetails|serviceDetails|caseStudyDetails|blogDetails|eventDetails|careerDetails|publicationDetails|legalDetails)/g, (match, key) => {
        modified = true;
        const section = getSectionName(key);
        const variant = `Veritas${section}1`;
        return `(getSectionData('${section}', '${variant}')?.${key} || [])`;
    });

    // Handle normal property access
    content = content.replace(/(?:globalData|rawLawData|rawLawData\s+as\s+GlobalLawData|(?:\(rawLawData\s+as\s+GlobalLawData\)))\.(\w+)/g, (match, key) => {
        if (key === 'find' || key === 'filter' || key === 'map' || key === 'length' || key === 'forEach') return match; // safety check
        modified = true;
        const section = getSectionName(key);
        const variant = `Veritas${section}1`;
        if (pageSlug && content.includes(`const data = resolvePageData('${pageSlug}');`)) {
             // Use the data object if available
             return `data.${section}?.${key}`;
        }
        // Fallback for UI components or outside components
        return `getSectionData('${section}', '${variant}')?.${key}`;
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Refactored: ${filePath}`);
    }
}

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath) : processFile(dirPath);
    });
}

walkDir(path.join(__dirname, 'app'));
console.log('Refactoring complete.');
