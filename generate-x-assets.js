const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetProfile = path.join(__dirname, 'x-profile.png');
const targetBanner = path.join(__dirname, 'x-banner.png');

// 1. SVG for X Profile Picture (400x400)
// Features the raw logo mark centered inside a dark rounded-corner frame.
const profileSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <rect width="400" height="400" fill="#0A0B0D" />
  <!-- Subtly rounded border enclosing the logo -->
  <rect x="30" y="30" width="340" height="340" rx="80" stroke="#1D2026" stroke-width="2" fill="none" />
  
  <!-- Scale-up the interlocking hooks logo (designed on 24x24, scaled by 8x) -->
  <!-- 24 * 8 = 192. To center 192 in 400, offset = (400-192)/2 = 104 -->
  <g transform="translate(104, 104) scale(8)">
    <!-- Hook 1 (Top / Right) -->
    <path d="M6 6h12v7h-4v-3h-8z" fill="#F5F6F7" />
    
    <!-- Hook 2 (Bottom / Left) -->
    <path d="M18 18H6v-7h4v3h8z" fill="#F5F6F7" />
    
    <!-- Central Checkpoint -->
    <rect x="11" y="11" width="2" height="2" rx="0.5" fill="#3B6EF6" />
  </g>
</svg>
`;

// 2. SVG for X Banner (1500x500)
// Features the brand name, tagline, and a precise diagrammatic accountability layout.
const bannerSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 500" width="1500" height="500">
  <!-- Deep neutral base -->
  <rect width="1500" height="500" fill="#0A0B0D" />
  
  <!-- Subtle grid lines (Diagrammatic style) -->
  <defs>
    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
      <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#111317" stroke-width="1.5" />
    </pattern>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3B6EF6" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#3B6EF6" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1500" height="500" fill="url(#grid)" />

  <!-- Left Side: Branding -->
  <g transform="translate(120, 160)">
    <!-- Logo (scaled 4x) -->
    <g transform="translate(0, 0) scale(4)">
      <path d="M6 6h12v7h-4v-3h-8z" fill="#F5F6F7" />
      <path d="M18 18H6v-7h4v3h8z" fill="#F5F6F7" />
      <rect x="11" y="11" width="2" height="2" rx="0.5" fill="#3B6EF6" />
    </g>
    
    <!-- Brand Title (Using standard system geometric fonts for crispness) -->
    <text x="120" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="76" font-weight="600" fill="#F5F6F7" letter-spacing="-0.02em">SANEX</text>
    
    <!-- Tagline / Mission -->
    <text x="0" y="160" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="400" fill="#A0A5AE" letter-spacing="-0.01em">
      On-chain accountability infrastructure.
    </text>
    <text x="0" y="200" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#6B7180">
      Verifying transactions. Enforcing boundaries. Permanent records.
    </text>
  </g>

  <!-- Right Side: Diagrammatic Technical Illustration -->
  <!-- Visualizes: Boundary (box), Action Flow (dashed line), Checkpoint (blue dot) -->
  <g transform="translate(1050, 250)">
    <!-- Active Grid Highlight -->
    <path d="M -250 0 L 250 0" stroke="#1D2026" stroke-width="1.5" />
    <path d="M 0 -250 L 0 250" stroke="#1D2026" stroke-width="1.5" />
    
    <!-- Action flow line crossing the checkpoint -->
    <line x1="-200" y1="-100" x2="200" y2="100" stroke="#3B6EF6" stroke-width="2" stroke-dasharray="8,8" opacity="0.6" />
    
    <!-- Boundary Container -->
    <rect x="-100" y="-100" width="200" height="200" rx="16" fill="#111317" stroke="#2E323C" stroke-width="2" />
    <text x="-85" y="-70" font-family="monospace" font-size="11" fill="#6B7180" letter-spacing="0.05em">SANDBOX_MANDATE</text>
    
    <!-- Glowing background for the verification moment -->
    <circle cx="0" cy="0" r="80" fill="url(#glow)" />
    
    <!-- Verification Checkpoint -->
    <circle cx="0" cy="0" r="24" stroke="#3B6EF6" stroke-width="1.5" stroke-dasharray="4,2" fill="none" opacity="0.8" />
    <circle cx="0" cy="0" r="10" fill="#3B6EF6" />
    <circle cx="0" cy="0" r="4" fill="#F5F6F7" />
    
    <!-- Audit Record Anchors -->
    <circle cx="-100" cy="-100" r="4" fill="#2FB574" /> <!-- Safe anchor -->
    <circle cx="100" cy="100" r="4" fill="#2FB574" />
    <circle cx="100" cy="-100" r="4" fill="#6B7180" />
    <circle cx="-100" cy="100" r="4" fill="#6B7180" />
  </g>
</svg>
`;

async function main() {
  try {
    // Render profile PNG
    await sharp(Buffer.from(profileSvg))
      .png()
      .toFile(targetProfile);
    console.log('Successfully generated X Profile: x-profile.png');

    // Render banner PNG
    await sharp(Buffer.from(bannerSvg))
      .png()
      .toFile(targetBanner);
    console.log('Successfully generated X Banner: x-banner.png');

    console.log('X assets generation complete.');
  } catch (error) {
    console.error('Error generating assets:', error);
    process.exit(1);
  }
}

main();
