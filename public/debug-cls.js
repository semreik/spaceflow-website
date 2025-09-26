// Comprehensive CLS and Layout Shift Debugger
console.log('🔍 Layout Shift Debugger Active');

// 1. CLS Observer with detailed source tracking
new PerformanceObserver(list => {
  for (const entry of list.getEntries()) {
    if (!entry.hadRecentInput) {
      const sources = entry.sources.map(source => {
        const node = source.node;
        if (!node) return 'unknown';
        
        const selector = node.className 
          ? `.${node.className.toString().replace(/\s+/g, '.')}`
          : node.id ? `#${node.id}` : node.tagName;
        
        const rect = source.currentRect;
        return {
          selector,
          shift: {
            x: source.previousRect.x - rect.x,
            y: source.previousRect.y - rect.y,
            width: rect.width - source.previousRect.width,
            height: rect.height - source.previousRect.height
          }
        };
      });
      
      console.warn(`[CLS Event] Score: ${entry.value.toFixed(4)}`, {
        time: entry.startTime.toFixed(0) + 'ms',
        sources
      });
    }
  }
}).observe({ type: 'layout-shift', buffered: true });

// 2. Track specific elements' position changes
const trackElements = [
  '.py-20.bg-black', // AlternatingFeatures section
  '.container.mx-auto', // Container
  '.max-w-4xl.mx-auto', // Features container
  'section' // All sections
];

const trackedPositions = new Map();

function initTracking() {
  trackElements.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      const key = `${selector}[${index}]`;
      const rect = el.getBoundingClientRect();
      trackedPositions.set(key, {
        top: rect.top,
        height: rect.height,
        element: el
      });
    });
  });
}

// Poll for position changes
setInterval(() => {
  trackedPositions.forEach((lastPos, key) => {
    const el = lastPos.element;
    if (!el || !el.isConnected) return;
    
    const rect = el.getBoundingClientRect();
    const deltaY = rect.top - lastPos.top;
    const deltaH = rect.height - lastPos.height;
    
    if (Math.abs(deltaY) > 0.5 || Math.abs(deltaH) > 0.5) {
      console.warn(`[Position Change] ${key}`, {
        deltaY: deltaY.toFixed(2) + 'px',
        deltaHeight: deltaH.toFixed(2) + 'px',
        newTop: rect.top.toFixed(2),
        newHeight: rect.height.toFixed(2)
      });
      
      // Update stored position
      lastPos.top = rect.top;
      lastPos.height = rect.height;
    }
  });
}, 100);

// 3. Dump computed styles for animation suspects
function dumpAnimatedStyles() {
  const suspects = [
    '.relative.group', // Feature cards
    '.overflow-hidden', // Expanded content containers
    '.pl-6.pt-2.pb-4', // Content wrappers
    '[style*="minHeight"]', // Containers with inline minHeight
    '[style*="maxHeight"]', // Anything with maxHeight animation
    '[style*="transform"]' // Transform animations
  ];
  
  suspects.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      const styles = window.getComputedStyle(el);
      const animatedProps = {
        height: styles.height,
        maxHeight: styles.maxHeight,
        minHeight: styles.minHeight,
        marginTop: styles.marginTop,
        marginBottom: styles.marginBottom,
        paddingTop: styles.paddingTop,
        paddingBottom: styles.paddingBottom,
        transform: styles.transform,
        opacity: styles.opacity,
        display: styles.display,
        visibility: styles.visibility,
        position: styles.position,
        top: styles.top
      };
      
      console.log(`[Styles] ${selector}[${index}]`, animatedProps);
    });
  });
}

// Initialize after DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initTracking, 100);
    setTimeout(dumpAnimatedStyles, 500);
  });
} else {
  setTimeout(initTracking, 100);
  setTimeout(dumpAnimatedStyles, 500);
}

// Export for manual inspection
window.debugCLS = {
  dumpStyles: dumpAnimatedStyles,
  resetTracking: initTracking,
  trackedPositions
};

console.log('💡 Use window.debugCLS.dumpStyles() to inspect styles');
