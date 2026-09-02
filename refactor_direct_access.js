const fs = require('fs');
const path = require('path');

function replaceDirectAccess(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) replaceDirectAccess(dirPath);
        else if (dirPath.endsWith('.ts') || dirPath.endsWith('.tsx')) {
            let content = fs.readFileSync(dirPath, 'utf8');
            if (!content.includes('getSiteData')) return;

            let modified = false;

            // 1. Replace imports
            if (content.match(/import\s+\{[^}]*\}\s+from\s+["']@\/app\/lib\/getSiteData["'];/)) {
                content = content.replace(
                    /import\s+\{[^}]*\}\s+from\s+["']@\/app\/lib\/getSiteData["'];\n?/g,
                    'import lawData from "@/app/data/lawData-restructured.json";\n'
                );
                modified = true;
            }

            // 2. Remove resolvePageData
            if (content.match(/const\s+data\s*=\s*resolvePageData\('[^']+'\);\n?/g)) {
                content = content.replace(/const\s+data\s*=\s*resolvePageData\('[^']+'\);\n?/g, '');
                modified = true;
            }

            // 3. Replace getSectionData('Section', 'Variant')
            content = content.replace(/getSectionData\('([^']+)',\s*'([^']+)'\)/g, (match, section, variant) => {
                modified = true;
                return `lawData.categories.Veritas.sections.${section}?.variants?.${variant}`;
            });

            // 4. Replace data.Section?.prop
            content = content.replace(/data\.([A-Z]\w+)\?/g, (match, section) => {
                modified = true;
                return `lawData.categories.Veritas.sections.${section}?.variants?.Veritas${section}1?`;
            });

            // 5. Some cases might be just data.Section
            content = content.replace(/data\.([A-Z]\w+)/g, (match, section) => {
                // If there's an exact match like `data.PageBanner` (without `?`)
                // Wait, if it has `?`, it was matched above. So this matches without `?`.
                // Actually, let's just make sure it's an uppercase word to avoid matching things like `data.foo` 
                // However, there is no `data` variable anymore. Wait, some variables might be named `data` (e.g., `const { data } = useSession()`)
                // But in this specific codebase, we know `data` was injected by us as `const data = resolvePageData('slug')`.
                modified = true;
                return `lawData.categories.Veritas.sections.${section}?.variants?.Veritas${section}1`;
            });


            if (modified) {
                fs.writeFileSync(dirPath, content, 'utf8');
                console.log(`Refactored: ${dirPath}`);
            }
        }
    });
}

replaceDirectAccess(path.join(__dirname, 'app'));
