const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'app', 'icon.svg');
const targetFavicon = path.join(__dirname, 'app', 'favicon.ico');
const targetIcon = path.join(__dirname, 'app', 'icon.png');
const targetAppleIcon = path.join(__dirname, 'app', 'apple-icon.png');

async function generatePng(svgBuffer, targetSize, outputPath) {
  // SVG nominal size is 24x24. We compute density to prevent pixelation.
  // Standard density is 72 dpi. We scale it up proportionally.
  const nominalSize = 24;
  const density = Math.round((targetSize / nominalSize) * 72);

  await sharp(svgBuffer, { density })
    .resize(targetSize, targetSize)
    .png()
    .toFile(outputPath);
}

async function main() {
  try {
    if (!fs.existsSync(svgPath)) {
      console.error(`Error: Source SVG not found at ${svgPath}`);
      process.exit(1);
    }

    const svgBuffer = fs.readFileSync(svgPath);

    // 1. Generate 32x32 PNG for favicon.ico
    await generatePng(svgBuffer, 32, targetFavicon);
    console.log('Successfully generated: favicon.ico (32x32)');

    // 2. Generate 180x180 PNG for apple-icon.png
    await generatePng(svgBuffer, 180, targetAppleIcon);
    console.log('Successfully generated: apple-icon.png (180x180)');

    // 3. Generate 512x512 PNG for icon.png
    await generatePng(svgBuffer, 512, targetIcon);
    console.log('Successfully generated: icon.png (512x512)');

    console.log('Asset generation complete.');
  } catch (error) {
    console.error('Error generating assets:', error);
    process.exit(1);
  }
}

main();
