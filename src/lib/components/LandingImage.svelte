<svg width="500" height="350" viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Enhanced gradients with more contrast -->
    <linearGradient id="leftCardGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ffede4;stop-opacity:1" />
      <stop offset="70%" style="stop-color:#ffede4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e8d1b8;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="rightCardGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#e8d1b8;stop-opacity:1" />
      <stop offset="30%" style="stop-color:#ffede4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ffede4;stop-opacity:1" />
    </linearGradient>
    
    <!-- Strong shadow gradient -->
    <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#917319;stop-opacity:0.4" />
      <stop offset="50%" style="stop-color:#caa74e;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#917319;stop-opacity:0.4" />
    </linearGradient>
    
    <!-- Pattern for card texture -->
    <pattern id="cardPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="#ffde82" opacity="0.1"/>
    </pattern>
  </defs>
  
  <!-- Enhanced Card Shadow -->
  <ellipse cx="250" cy="325" rx="190" ry="25" fill="#917319" opacity="0.4"/>
  <ellipse cx="250" cy="320" rx="180" ry="20" fill="#caa74e" opacity="0.3"/>
  
  <!-- Left Card Panel with stronger borders -->
  <path d="M 50 80 L 240 60 L 240 280 L 50 300 Z" fill="url(#leftCardGradient)" stroke="#917319" stroke-width="3"/>
  <path d="M 50 80 L 240 60 L 240 280 L 50 300 Z" fill="url(#cardPattern)"/>
  
  <!-- Right Card Panel with stronger borders -->
  <path d="M 260 60 L 450 80 L 450 300 L 260 280 Z" fill="url(#rightCardGradient)" stroke="#917319" stroke-width="3"/>
  <path d="M 260 60 L 450 80 L 450 300 L 260 280 Z" fill="url(#cardPattern)"/>
  
  <!-- Enhanced Center Fold/Crease -->
  <line x1="250" y1="60" x2="250" y2="280" stroke="#917319" stroke-width="4" opacity="1"/>
  <rect x="247" y="60" width="6" height="220" fill="url(#shadowGradient)"/>
  
  <!-- Strong decorative borders -->
  <path d="M 60 90 L 230 72 L 230 270 L 60 288 Z" fill="none" stroke="#caa74e" stroke-width="2" opacity="1"/>
  <path d="M 270 72 L 440 90 L 440 288 L 270 270 Z" fill="none" stroke="#caa74e" stroke-width="2" opacity="1"/>
  
  <!-- Inner accent borders -->
  <path d="M 70 100 L 220 84 L 220 260 L 70 276 Z" fill="none" stroke="#ffde82" stroke-width="1" opacity="0.8"/>
  <path d="M 280 84 L 430 100 L 430 276 L 280 260 Z" fill="none" stroke="#ffde82" stroke-width="1" opacity="0.8"/>
  
  <!-- Left Panel Content with enhanced decorations -->
  <g transform="translate(145, 160)">
    <!-- Enhanced decorative elements -->
    <g fill="#caa74e" opacity="0.8">
      <polygon points="0,0 2,8 10,8 4,13 6,21 0,16 -6,21 -4,13 -10,8 -2,8" transform="scale(0.8) translate(-25, -50)"/>
      <polygon points="0,0 2,8 10,8 4,13 6,21 0,16 -6,21 -4,13 -10,8 -2,8" transform="scale(0.5) translate(35, -70)"/>
      <polygon points="0,0 2,8 10,8 4,13 6,21 0,16 -6,21 -4,13 -10,8 -2,8" transform="scale(0.6) translate(-35, 50)"/>
    </g>
    
    <!-- Ornamental flourishes -->
    <g stroke="#917319" stroke-width="2" fill="none" opacity="0.6">
      <path d="M -40 -10 Q -30 -20 -20 -10 Q -10 0 0 -10"/>
      <path d="M 0 10 Q 10 20 20 10 Q 30 0 40 10"/>
    </g>
    
    <!-- Left panel text with text shadow effect -->
    <text x="1" y="-19" font-family="serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#caa74e" opacity="0.3" transform="skewX(-5)">
      Happy
    </text>
    <text x="0" y="-20" font-family="serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#917319" transform="skewX(-5)">
      Happy
    </text>
  </g>
  
  <!-- Right Panel Content with enhanced decorations -->
  <g transform="translate(355, 160)">
    <!-- Enhanced decorative elements -->
    <g fill="#93e0a2" opacity="0.9">
      <circle cx="-25" cy="-35" r="4"/>
      <circle cx="30" cy="-45" r="3"/>
      <circle cx="-30" cy="40" r="3.5"/>
      <rect x="25" y="35" width="4" height="4" rx="1" transform="rotate(45)"/>
      <rect x="-35" y="-40" width="5" height="5" rx="1" transform="rotate(30)"/>
    </g>
    
    <!-- Additional teal accents -->
    <g fill="#92da9f" opacity="0.7">
      <circle cx="0" cy="-60" r="2"/>
      <circle cx="-15" cy="60" r="2.5"/>
      <circle cx="20" cy="55" r="2"/>
    </g>
    
    <!-- Ornamental flourishes -->
    <g stroke="#917319" stroke-width="2" fill="none" opacity="0.6">
      <path d="M -40 -10 Q -30 -20 -20 -10 Q -10 0 0 -10"/>
      <path d="M 0 10 Q 10 20 20 10 Q 30 0 40 10"/>
    </g>
    
    <!-- Right panel text with shadow effect -->
    <text x="1" y="-19" font-family="serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#caa74e" opacity="0.3" transform="skewX(5)">
      New Year
    </text>
    <text x="0" y="-20" font-family="serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#917319" transform="skewX(5)">
      New Year
    </text>
    
    <!-- Year with shadow -->
    <text x="1" y="21" font-family="serif" font-size="20" font-weight="normal" text-anchor="middle" fill="#ffde82" opacity="0.5" transform="skewX(5)">
      2025
    </text>
    <text x="0" y="20" font-family="serif" font-size="20" font-weight="normal" text-anchor="middle" fill="#caa74e" transform="skewX(5)">
      2025
    </text>
  </g>
  
  <!-- Enhanced fireworks with more contrast -->
  <g stroke="#ffde82" stroke-width="3" fill="none" opacity="0.8">
    <circle cx="120" cy="40" r="15"/>
    <line x1="120" y1="25" x2="120" y2="15"/>
    <line x1="135" y1="40" x2="145" y2="40"/>
    <line x1="120" y1="55" x2="120" y2="65"/>
    <line x1="105" y1="40" x2="95" y2="40"/>
    <line x1="130.6" y1="29.4" x2="137.8" y2="22.2"/>
    <line x1="130.6" y1="50.6" x2="137.8" y2="57.8"/>
    <line x1="109.4" y1="50.6" x2="102.2" y2="57.8"/>
    <line x1="109.4" y1="29.4" x2="102.2" y2="22.2"/>
  </g>
  
  <g stroke="#93e0a2" stroke-width="3" fill="none" opacity="0.8">
    <circle cx="380" cy="35" r="12"/>
    <line x1="380" y1="23" x2="380" y2="15"/>
    <line x1="392" y1="35" x2="400" y2="35"/>
    <line x1="380" y1="47" x2="380" y2="55"/>
    <line x1="368" y1="35" x2="360" y2="35"/>
  </g>
  
  <!-- Enhanced confetti with more visibility -->
  <g fill="#92da9f" opacity="0.8">
    <rect x="100" y="25" width="5" height="5" rx="1" transform="rotate(45)"/>
    <rect x="400" y="30" width="6" height="6" rx="1" transform="rotate(60)"/>
    <rect x="180" y="15" width="4" height="4" rx="1" transform="rotate(30)"/>
    <rect x="300" y="25" width="5" height="5" rx="1" transform="rotate(75)"/>
  </g>
  
  <g fill="#ffde82" opacity="0.8">
    <rect x="320" y="20" width="5" height="5" rx="1" transform="rotate(15)"/>
    <rect x="150" y="35" width="6" height="6" rx="1" transform="rotate(75)"/>
    <rect x="80" y="20" width="4" height="4" rx="1" transform="rotate(45)"/>
  </g>
  
  <!-- Corner decorative elements -->
  <g fill="#917319" opacity="0.6">
    <circle cx="30" cy="30" r="3"/>
    <circle cx="470" cy="30" r="3"/>
    <circle cx="30" cy="320" r="3"/>
    <circle cx="470" cy="320" r="3"/>
  </g>
</svg>