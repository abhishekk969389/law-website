const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) walkDir(dirPath);
        else if (dirPath.endsWith('.ts') || dirPath.endsWith('.tsx')) {
            let content = fs.readFileSync(dirPath, 'utf8');
            let modified = false;

            // Remove the exact import we added, if another one exists in the file
            if (content.match(/import\s+\{\s*GlobalLawData\s*\}\s+from\s+["']@\/types\/law["'];/)) {
                // Let's count occurrences of GlobalLawData being imported
                const allImports = content.match(/GlobalLawData/g);
                if (allImports && allImports.length > 2) {
                    // GlobalLawData is used multiple times, probably imported twice.
                    // We added exactly: import { GlobalLawData } from "@/types/law";
                    content = content.replace(/import\s+\{\s*GlobalLawData\s*\}\s+from\s+["']@\/types\/law["'];\n?/, '');
                    modified = true;
                }
            }

            // Also check for `import { Something, GlobalLawData } from "@/types/law"`
            if (content.match(/import\s+\{[^}]*GlobalLawData[^}]*\}\s+from\s+["']@\/types\/law["'];/g)?.length > 1) {
                // If it was combined AND we added a new line, it's a duplicate.
                content = content.replace(/import\s+\{\s*GlobalLawData\s*\}\s+from\s+["']@\/types\/law["'];\n?/, '');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(dirPath, content, 'utf8');
                console.log('Fixed duplicate GlobalLawData import in:', dirPath);
            }
        }
    });
}
walkDir(path.join(__dirname, 'app'));
