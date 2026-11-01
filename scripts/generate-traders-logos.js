const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateTradersLogos() {
  const outDir = path.join(__dirname, '..', 'public');
  const iconPath = path.join(outDir, 'adskilltechnology-icon.png');
  const emblemBuf = fs.readFileSync(iconPath);

  // Trim emblem
  const trimmedEmblemBuf = await sharp(emblemBuf).trim().toBuffer();
  const trimmedMeta = await sharp(trimmedEmblemBuf).metadata();

  // Size for horizontal logo: height 130px
  const emblemH = 130;
  const emblemW = Math.round(trimmedMeta.width * (emblemH / trimmedMeta.height));
  const emblemResized = await sharp(trimmedEmblemBuf)
    .resize(emblemW, emblemH, { fit: 'contain' })
    .toBuffer();
  const emblemB64 = emblemResized.toString('base64');

  const totalW = 480;
  const totalH = 146;
  const emblemX = 4;
  const emblemY = 8;
  const textX = emblemX + emblemW + 16;

  // SVG for Light Background (Navy AdSkill, Big Bold Gold TRADERS)
  const lightSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalW}" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .brand-title {
        font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Inter', Roboto, sans-serif;
        font-weight: 800;
        font-size: 52px;
        fill: #002856;
      }
      .brand-sub {
        font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Inter', Roboto, sans-serif;
        font-weight: 800;
        font-size: 34px;
        fill: #e8a020;
        letter-spacing: 5px;
      }
    </style>
  </defs>
  <image href="data:image/png;base64,${emblemB64}" x="${emblemX}" y="${emblemY}" width="${emblemW}" height="${emblemH}" />
  <text x="${textX}" y="64" class="brand-title">AdSkill</text>
  <text x="${textX + 2}" y="106" class="brand-sub">TRADERS</text>
</svg>`;

  // SVG for Dark Background (White AdSkill, Big Bold Gold TRADERS)
  const darkSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalW}" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .brand-title-dark {
        font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Inter', Roboto, sans-serif;
        font-weight: 800;
        font-size: 52px;
        fill: #ffffff;
      }
      .brand-sub-dark {
        font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Inter', Roboto, sans-serif;
        font-weight: 800;
        font-size: 34px;
        fill: #f3a401;
        letter-spacing: 5px;
      }
    </style>
  </defs>
  <image href="data:image/png;base64,${emblemB64}" x="${emblemX}" y="${emblemY}" width="${emblemW}" height="${emblemH}" />
  <text x="${textX}" y="64" class="brand-title-dark">AdSkill</text>
  <text x="${textX + 2}" y="106" class="brand-sub-dark">TRADERS</text>
</svg>`;

  fs.writeFileSync(path.join(outDir, 'adskilltraders.svg'), lightSvg);
  fs.writeFileSync(path.join(outDir, 'adskilltraders-white.svg'), darkSvg);

  // High-DPI PNGs with generous padding
  await sharp(Buffer.from(lightSvg), { density: 150 })
    .trim()
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'adskilltraders.png'));

  await sharp(Buffer.from(darkSvg), { density: 150 })
    .trim()
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'adskilltraders-white.png'));

  console.log('Successfully generated clean, unclipped adskilltraders.png & .svg!');
}

generateTradersLogos().catch(console.error);
