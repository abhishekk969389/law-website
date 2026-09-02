import lawDataRaw from '@/app/data/lawData-restructured.json';

const lawData = lawDataRaw as any;
const TEMPLATE_NAME = 'template-1';
const CATEGORY_NAME = 'Veritas';

const componentsMap = lawData.categories[CATEGORY_NAME].templateComponents[TEMPLATE_NAME].pages;
const sectionsMap = lawData.categories[CATEGORY_NAME].sections;

/**
 * Retrieves the components list for a specific page slug
 */
export function getPageComponents(pageSlug: string) {
    const pageConfig = componentsMap[pageSlug];
    if (!pageConfig) return [];
    return pageConfig.components || [];
}

/**
 * Extracts the actual data object for a specific section and variant
 */
export function getSectionData(sectionKey: string, variantName: string) {
    try {
        return sectionsMap[sectionKey]?.variants[variantName] || null;
    } catch (e) {
        return null;
    }
}

/**
 * Returns a merged object containing all section data for a given page.
 * Format: { SectionKey: VariantData }
 */
export function resolvePageData(pageSlug: string) {
    const components = getPageComponents(pageSlug);
    const resolvedData: Record<string, any> = {};

    for (const comp of components) {
        const { key, component } = comp;
        const data = getSectionData(key, component);
        if (data) {
            resolvedData[key] = data;
        }
    }

    return resolvedData;
}

/**
 * Helper to fetch a specific item from a detail page's configured "expand" array
 */
export function getDetailItem(pageSlug: string, itemSlugOrId: string) {
    const pageConfig = componentsMap[pageSlug];
    if (!pageConfig || !pageConfig.expand) return null;

    try {
        // e.g. path = "sections.IndustryDetail.variants.VeritasIndustryDetail1.industryDetails"
        const pathParts = pageConfig.expand.split('.');
        
        let current: any = lawData.categories[CATEGORY_NAME];
        for (const part of pathParts) {
            if (current[part]) {
                current = current[part];
            } else {
                return null;
            }
        }

        if (Array.isArray(current)) {
            // Try to find by slug, fallback to id
            return current.find((item: any) => item.slug === itemSlugOrId || item.id === itemSlugOrId) || null;
        }
        return null;
    } catch (e) {
        return null;
    }
}

/**
 * Helper to fetch all items from a detail page's configured "expand" array
 */
export function getAllItems(pageSlug: string) {
    const pageConfig = componentsMap[pageSlug];
    if (!pageConfig || !pageConfig.expand) return [];

    try {
        const pathParts = pageConfig.expand.split('.');
        
        let current: any = lawData.categories[CATEGORY_NAME];
        for (const part of pathParts) {
            if (current[part]) {
                current = current[part];
            } else {
                return [];
            }
        }

        if (Array.isArray(current)) {
            return current;
        }
        return [];
    } catch (e) {
        return [];
    }
}
