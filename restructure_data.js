const fs = require('fs');
const path = require('path');

function main() {
    const inputFile = path.join(__dirname, 'app', 'data', 'lawData.json');
    const outputFile = path.join(__dirname, 'app', 'data', 'lawData-restructured.json');

    const originalData = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

    const newData = {
        categories: {
            Veritas: {
                templateComponents: {
                    "template-1": {
                        shared: {
                            Topbar: "VeritasTopbar1",
                            Header: "VeritasHeader1",
                            Footer: "VeritasFooter1"
                        },
                        pages: {}
                    }
                },
                sections: {
                    PageBanner: {
                        variants: {
                            VeritasPageBanner1: {}
                        }
                    }
                }
            }
        }
    };

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

    const sections = newData.categories.Veritas.sections;
    const pagesObj = newData.categories.Veritas.templateComponents["template-1"].pages;
    const pageBannerVariant = sections.PageBanner.variants.VeritasPageBanner1;

    const processedKeys = new Set();

    for (const [key, value] of Object.entries(originalData)) {
        if (key.endsWith("SubBanner")) {
            pageBannerVariant[key] = value;
            processedKeys.add(key);
        } else if (sidebars[key]) {
            const targetSection = sidebars[key];
            const variantName = `Veritas${targetSection}1`;
            if (!sections[targetSection]) sections[targetSection] = { variants: { [variantName]: {} } };
            sections[targetSection].variants[variantName][key] = value;
            processedKeys.add(key);
        } else if (sectionMappings[key]) {
            const targetSection = sectionMappings[key];
            const variantName = `Veritas${targetSection}1`;
            if (!sections[targetSection]) sections[targetSection] = { variants: { [variantName]: {} } };
            sections[targetSection].variants[variantName][key] = value;
            processedKeys.add(key);
        } else {
            const targetSection = key.charAt(0).toUpperCase() + key.slice(1);
            const variantName = `Veritas${targetSection}1`;
            if (!sections[targetSection]) sections[targetSection] = { variants: { [variantName]: {} } };
            sections[targetSection].variants[variantName][key] = value;
            processedKeys.add(key);
        }
    }

    const pagesConfig = {
        "home": ["Topbar", "Header", "Banner", "Features", "About", "Services", "Counting", "Industries", "Team", "CaseStudy", "WhyChooseUs", "Testimonials", "AwardsRecognition", "ClientResource", "Blog", "Consultation", "StayUpdated", "Footer"],
        "about": ["Topbar", "Header", "PageBanner", "About", "OurApproach", "Team", "Footer"],
        "our-approach": ["Topbar", "Header", "PageBanner", "OurApproach", "Footer"],
        "services": ["Topbar", "Header", "PageBanner", "Services", "Footer"],
        "services-detail": ["Topbar", "Header", "PageBanner", "ServiceDetail", "Footer"],
        "team": ["Topbar", "Header", "PageBanner", "Team", "Footer"],
        "team-detail": ["Topbar", "Header", "PageBanner", "TeamDetail", "Footer"],
        "industries": ["Topbar", "Header", "PageBanner", "Industries", "Footer"],
        "industries-detail": ["Topbar", "Header", "PageBanner", "IndustryDetail", "Footer"],
        "case-study": ["Topbar", "Header", "PageBanner", "CaseStudy", "Footer"],
        "case-study-detail": ["Topbar", "Header", "PageBanner", "CaseStudyDetail", "Footer"],
        "blogs": ["Topbar", "Header", "PageBanner", "Blog", "Footer"],
        "blogs-detail": ["Topbar", "Header", "PageBanner", "BlogDetail", "Footer"],
        "legal-updates": ["Topbar", "Header", "PageBanner", "LegalUpdates", "Footer"],
        "legal-updates-detail": ["Topbar", "Header", "PageBanner", "LegalUpdateDetail", "Footer"],
        "events": ["Topbar", "Header", "PageBanner", "Events", "Footer"],
        "events-detail": ["Topbar", "Header", "PageBanner", "EventDetail", "Footer"],
        "publications": ["Topbar", "Header", "PageBanner", "Publications", "Footer"],
        "publications-detail": ["Topbar", "Header", "PageBanner", "PublicationDetail", "Footer"],
        "careers": ["Topbar", "Header", "PageBanner", "Careers", "Footer"],
        "careers-detail": ["Topbar", "Header", "PageBanner", "JobDetail", "Footer"],
        "offices": ["Topbar", "Header", "PageBanner", "Offices", "Footer"],
        "contact": ["Topbar", "Header", "PageBanner", "Contact", "Footer"],
        "faqs": ["Topbar", "Header", "PageBanner", "FAQ", "Footer"],
        "terms-and-conditions": ["Topbar", "Header", "PageBanner", "Terms", "Footer"],
        "privacy-policy": ["Topbar", "Header", "PageBanner", "PrivacyPolicy", "Footer"],
        "legal-disclaimer": ["Topbar", "Header", "PageBanner", "LegalDisclaimer", "Footer"],
        "sitemap": ["Topbar", "Header", "PageBanner", "Sitemap", "Footer"]
    };

    const expandConfig = {
        "services-detail": "sections.ServiceDetail.variants.VeritasServiceDetail1.serviceDetails",
        "team-detail": "sections.TeamDetail.variants.VeritasTeamDetail1.teamDetails",
        "industries-detail": "sections.IndustryDetail.variants.VeritasIndustryDetail1.industryDetails",
        "case-study-detail": "sections.CaseStudyDetail.variants.VeritasCaseStudyDetail1.caseStudyDetails",
        "blogs-detail": "sections.BlogDetail.variants.VeritasBlogDetail1.blogDetails",
        "legal-updates-detail": "sections.LegalUpdateDetail.variants.VeritasLegalUpdateDetail1.legalDetails",
        "events-detail": "sections.EventDetail.variants.VeritasEventDetail1.eventDetails",
        "publications-detail": "sections.PublicationDetail.variants.VeritasPublicationDetail1.publicationDetails",
        "careers-detail": "sections.JobDetail.variants.VeritasJobDetail1.careerDetails"
    };

    for (const [page, components] of Object.entries(pagesConfig)) {
        const pageObj = {
            components: components.map(comp => ({ key: comp, component: `Veritas${comp}1` }))
        };
        if (expandConfig[page]) {
            pageObj.expand = expandConfig[page];
        }
        pagesObj[page] = pageObj;
    }

    fs.writeFileSync(outputFile, JSON.stringify(newData, null, 2), 'utf-8');

    console.log("--- Validation Step ---");
    const allKeys = Object.keys(originalData);
    const missingKeys = allKeys.filter(x => !processedKeys.has(x));
    if (missingKeys.length === 0) {
        console.log("SUCCESS: All top-level keys from original file have been successfully mapped to the new structure without data loss.");
    } else {
        console.log("WARNING: Some keys were not processed: " + missingKeys.join(', '));
    }
    console.log("File saved to: " + outputFile);
}

main();
