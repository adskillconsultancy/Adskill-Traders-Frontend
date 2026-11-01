const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateLogos() {
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

  const totalW = 440;
  const totalH = 146;
  const emblemX = 4;
  const emblemY = 8;
  const textX = emblemX + emblemW + 16;

  // SVG for Light Background (Navy AdSkill, Big Bold Gold TECHNOLOGY)
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
        font-size: 32px;
        fill: #e8a020;
        letter-spacing: 2.8px;
      }
    </style>
  </defs>
  <image href="data:image/png;base64,${emblemB64}" x="${emblemX}" y="${emblemY}" width="${emblemW}" height="${emblemH}" />
  <text x="${textX}" y="64" class="brand-title">AdSkill</text>
  <text x="${textX + 2}" y="106" class="brand-sub">TECHNOLOGY</text>
</svg>`;

  // SVG for Dark Background (White AdSkill, Big Bold Gold TECHNOLOGY)
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
        font-size: 32px;
        fill: #f3a401;
        letter-spacing: 2.8px;
      }
    </style>
  </defs>
  <image href="data:image/png;base64,${emblemB64}" x="${emblemX}" y="${emblemY}" width="${emblemW}" height="${emblemH}" />
  <text x="${textX}" y="64" class="brand-title-dark">AdSkill</text>
  <text x="${textX + 2}" y="106" class="brand-sub-dark">TECHNOLOGY</text>
</svg>`;

  fs.writeFileSync(path.join(outDir, 'adskilltechnology.svg'), lightSvg);
  fs.writeFileSync(path.join(outDir, 'adskilltechnology-white.svg'), darkSvg);

  // High-DPI PNGs
  await sharp(Buffer.from(lightSvg), { density: 150 })
    .trim()
    .extend({ top: 8, bottom: 8, left: 8, right: 8, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'adskilltechnology.png'));

  await sharp(Buffer.from(darkSvg), { density: 150 })
    .trim()
    .extend({ top: 8, bottom: 8, left: 8, right: 8, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'adskilltechnology-white.png'));

  console.log('Finished updating AdSkill Technology logos with big TECHNOLOGY!');
}

generateLogos().catch(console.error);
