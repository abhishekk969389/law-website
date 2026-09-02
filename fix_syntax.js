const fs = require('fs');
const path = require('path');

function fixFiles(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) fixFiles(dirPath);
        else if (dirPath.endsWith('.ts') || dirPath.endsWith('.tsx')) {
            let content = fs.readFileSync(dirPath, 'utf8');
            let modified = false;

            // Fix broken SubBanner syntax
            if (content.includes('[])SubBanner')) {
                content = content.replace(/\(getSectionData\('[^']+',\s*'[^']+'\)\?\.\w+\s*\|\|\s*\[\]\)SubBanner/g, "getSectionData('PageBanner', 'VeritasPageBanner1')?.teamDetailsSubBanner");
                modified = true;
            }

            // Remove rawLawData references
            if (content.match(/const\s+globalData\s*=\s*rawLawData(?:\s+as\s+GlobalLawData)?;/g)) {
                content = content.replace(/const\s+globalData\s*=\s*rawLawData(?:\s+as\s+GlobalLawData)?;\n?/g, '');
                modified = true;
            }
            if (content.match(/rawLawData\s+as\s+GlobalLawData/g)) {
                content = content.replace(/rawLawData\s+as\s+GlobalLawData/g, '({} as GlobalLawData)');
                modified = true;
            }

            // Remove any leftover rawLawData
            if (content.match(/rawLawData/g)) {
                content = content.replace(/rawLawData/g, '({})');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(dirPath, content, 'utf8');
                console.log('Fixed syntax in:', dirPath);
            }
        }
    });
}
fixFiles(path.join(__dirname, 'app'));
