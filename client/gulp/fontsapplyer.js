import { paths } from "./config.js";
import fs from 'fs/promises';
import * as fontkit from 'fontkit';

const getWeightFromName = (fontName) => {
  const name = fontName.toLowerCase();
  if (name.includes('thin')) return 100;
  if (name.includes('extralight') || name.includes('ultralight')) return 200;
  if (name.includes('light')) return 300;
  if (name.includes('regular') || name.includes('normal')) return 400;
  if (name.includes('medium')) return 500;
  if (name.includes('semibold') || name.includes('demibold')) return 600;
  if (name.includes('bold')) return 700;
  if (name.includes('extrabold') || name.includes('ultrabold')) return 800;
  if (name.includes('black') || name.includes('heavy')) return 900;
  return 400;
};

export const applyFonts = async () => {
  try {
    const files = await fs.readdir(paths.scssFonts.folder);
    let scssContent = '';

    for (const file of files) {
      if (path.extname(file) === '.woff2') {
        const fontPath = path.join(paths.scssFonts.folder, file);
        const font = await fontkit.open(fontPath);

        const fontFamily = font.familyName;
        const fontStyle = font.italicAngle === 0 ? 'normal' : 'italic';

        const fileNameLower = file.toLowerCase();
        const isVariableFont = fileNameLower.includes('variable') || fileNameLower.includes('wght');

        // Сначала проверяем, нашел ли fontkit оси. 
        // Если нет, то проверяем по имени файла.
        if ((font.variationAxes && font.variationAxes.wght) || isVariableFont) {
          
          let minWeight = 100; // Значение по умолчанию
          let maxWeight = 900; // Значение по умолчанию

          // Если fontkit нашел оси, берем точные значения
          if (font.variationAxes && font.variationAxes.wght) {
            const weightAxis = font.variationAxes.wght;
            minWeight = weightAxis.minValue;
            maxWeight = weightAxis.maxValue;
          }

          scssContent += `@font-face {\n`;
          scssContent += `  font-family: '${fontFamily}';\n`;
          scssContent += `  src: url('../fonts/${file}') format('woff2-variations');\n`;
          scssContent += `  font-weight: ${minWeight} ${maxWeight};\n`;
          scssContent += `  font-style: ${fontStyle};\n`;
          scssContent += `  font-display: swap;\n`;
          scssContent += `}\n\n`;
        } else { 
          let fontWeight = font.os2?.usWeightClass || getWeightFromName(font.postscriptName);

          scssContent += `@font-face {\n`;
          scssContent += `  font-family: '${fontFamily}';\n`;
          scssContent += `  src: url('../fonts/${file}') format('woff2');\n`;
          scssContent += `  font-weight: ${fontWeight};\n`;
          scssContent += `  font-style: ${fontStyle};\n`;
          scssContent += `  font-display: swap;\n`;
          scssContent += `}\n\n`;
        }
      }
    }

    await fs.writeFile(paths.scssFonts.scssFile, scssContent);
    console.log(`SCSS-файл успешно сгенерирован`);
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}