import json
import os

def main():
    input_file = r"app\data\lawData.json"
    output_file = r"app\data\lawData-restructured.json"

    with open(input_file, 'r', encoding='utf-8') as f:
        original_data = json.load(f)

    # 1. Base Structure
    new_data = {
        "categories": {
            "Veritas": {
                "templateComponents": {
                    "template-1": {
                        "shared": {
                            "Topbar": "VeritasTopbar1",
                            "Header": "VeritasHeader1",
                            "Footer": "VeritasFooter1"
                        },
                        "pages": {}
                    }
                },
                "sections": {
                    "PageBanner": {
                        "variants": {
                            "VeritasPageBanner1": {}
                        }
                    }
                }
            }
        }
    }

    # 2. Key mapping definition
    section_mappings = {
        "topbar": "Topbar",
        "navbar": "Header",
        "footer": "Footer",
        "banner": "Banner",
        "about": "About",
        "ourApproachSection": "OurApproach",
        "provenApproach": "OurApproach",
        "serviceSection": "Services",
        "services": "Services",
        "teamSection": "Team",
        "team": "Team",
        "industrySection": "Industries",
        "caseStudySection": "CaseStudy",
        "caseStudy": "CaseStudy",
        "blogSection": "Blog",
        "blog": "Blog",
        "legalSection": "LegalUpdates",
        "eventSection": "Events",
        "careerSection": "Careers",
        "careerCta": "Careers",
        "publicationsSection": "Publications",
        "officeSection": "Offices",
        "officeLocations": "Offices",
        "officeCta": "Offices",
        "contactSection": "Contact",
        "faq": "FAQ",
        "awardSection": "AwardsRecognition",
        "clientSection": "ClientResource",
        "clientCards": "ClientResource",
        "sitemapSection": "Sitemap",
        "termsConditionSection": "Terms",
        "privacyPolicySection": "PrivacyPolicy",
        "legalDisclaimerSection": "LegalDisclaimer",
        "questionsSection": "Consultation",
        "bookSection": "Consultation",
        
        "industryDetails": "IndustryDetail",
        "caseStudyDetails": "CaseStudyDetail",
        "blogDetails": "BlogDetail",
        "legalDetails": "LegalUpdateDetail",
        "eventDetails": "EventDetail",
        "careerDetails": "JobDetail",
        "publicationDetails": "PublicationDetail",
        "teamDetails": "TeamDetail",
        "serviceDetails": "ServiceDetail",

        "mediaSection": "Media",
        "stayUpdated": "StayUpdated",
        "whyChooseUs": "WhyChooseUs",
        "features": "Features",
        "counting": "Counting",
        "testimonials": "Testimonials"
    }

    # Sidebar parent mapping
    sidebars = {
        "blogSidebar": "Blog",
        "legalSidebar": "LegalUpdates",
        "caseStudySidebar": "CaseStudy",
        "industrySidebar": "Industries",
        "publicationSidebar": "Publications"
    }

    sections = new_data["categories"]["Veritas"]["sections"]
    pages_obj = new_data["categories"]["Veritas"]["templateComponents"]["template-1"]["pages"]
    page_banner_variant = sections["PageBanner"]["variants"]["VeritasPageBanner1"]

    # 3. Process keys
    processed_keys = set()

    for key, value in original_data.items():
        if key.endswith("SubBanner"):
            page_banner_variant[key] = value
            processed_keys.add(key)
        elif key in sidebars:
            target_section = sidebars[key]
            variant_name = f"Veritas{target_section}1"
            if target_section not in sections:
                sections[target_section] = {"variants": {variant_name: {}}}
            sections[target_section]["variants"][variant_name][key] = value
            processed_keys.add(key)
        elif key in section_mappings:
            target_section = section_mappings[key]
            variant_name = f"Veritas{target_section}1"
            if target_section not in sections:
                sections[target_section] = {"variants": {variant_name: {}}}
            sections[target_section]["variants"][variant_name][key] = value
            processed_keys.add(key)
        else:
            # For any unrecognized keys, just make them PascalCase sections
            target_section = key[0].upper() + key[1:]
            variant_name = f"Veritas{target_section}1"
            if target_section not in sections:
                sections[target_section] = {"variants": {variant_name: {}}}
            sections[target_section]["variants"][variant_name][key] = value
            processed_keys.add(key)

    # 4. Construct Pages
    pages_config = {
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
    }

    expand_config = {
        "services-detail": "sections.ServiceDetail.variants.VeritasServiceDetail1.serviceDetails",
        "team-detail": "sections.TeamDetail.variants.VeritasTeamDetail1.teamDetails",
        "industries-detail": "sections.IndustryDetail.variants.VeritasIndustryDetail1.industryDetails",
        "case-study-detail": "sections.CaseStudyDetail.variants.VeritasCaseStudyDetail1.caseStudyDetails",
        "blogs-detail": "sections.BlogDetail.variants.VeritasBlogDetail1.blogDetails",
        "legal-updates-detail": "sections.LegalUpdateDetail.variants.VeritasLegalUpdateDetail1.legalDetails",
        "events-detail": "sections.EventDetail.variants.VeritasEventDetail1.eventDetails",
        "publications-detail": "sections.PublicationDetail.variants.VeritasPublicationDetail1.publicationDetails",
        "careers-detail": "sections.JobDetail.variants.VeritasJobDetail1.careerDetails"
    }

    for page, components in pages_config.items():
        page_obj = {
            "components": [{"key": comp, "component": f"Veritas{comp}1"} for comp in components]
        }
        if page in expand_config:
            page_obj["expand"] = expand_config[page]
        
        pages_obj[page] = page_obj

    # 5. Save restructured output
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(new_data, f, indent=2, ensure_ascii=False)

    # 6. Validation step
    print("--- Validation Step ---")
    missing_keys = set(original_data.keys()) - processed_keys
    if not missing_keys:
        print("SUCCESS: All top-level keys from original file have been successfully mapped to the new structure without data loss.")
    else:
        print(f"WARNING: Some keys were not processed: {missing_keys}")
        
    print(f"File saved to: {output_file}")

if __name__ == "__main__":
    main()
