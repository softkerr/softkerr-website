/**
 * DOM Size Measurement Tool
 *
 * Paste this code into the browser console on any page
 * to measure its DOM size and complexity.
 *
 * Usage:
 * 1. Open DevTools (F12 or Cmd+Option+I)
 * 2. Go to Console tab
 * 3. Copy and paste this entire file
 * 4. Press Enter
 */

(function measureDOMSize() {
  console.clear();
  console.log('%c🔍 DOM Size Analysis Tool', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
  console.log('%c='.repeat(60), 'color: #666;');
  console.log('');

  // ==========================================
  // MEASUREMENT FUNCTIONS
  // ==========================================

  /**
   * Count total DOM nodes
   */
  function getTotalNodes() {
    return document.querySelectorAll('*').length;
  }

  /**
   * Calculate maximum depth of DOM tree
   */
  function getMaxDepth(node = document.body, depth = 0) {
    if (!node || !node.children || node.children.length === 0) {
      return depth;
    }

    let max = depth;
    for (let child of node.children) {
      max = Math.max(max, getMaxDepth(child, depth + 1));
    }
    return max;
  }

  /**
   * Find largest number of child elements
   */
  function getLargestChildCount(node = document.body) {
    if (!node || !node.children) return 0;

    let max = node.children.length;
    for (let child of node.children) {
      max = Math.max(max, getLargestChildCount(child));
    }
    return max;
  }

  /**
   * Find element with most children
   */
  function findLargestParent(node = document.body, maxNode = { element: null, count: 0 }) {
    if (!node || !node.children) return maxNode;

    if (node.children.length > maxNode.count) {
      maxNode = {
        element: node,
        count: node.children.length,
        tag: node.tagName,
        id: node.id || 'no-id',
        classes: node.className || 'no-class',
      };
    }

    for (let child of node.children) {
      maxNode = findLargestParent(child, maxNode);
    }

    return maxNode;
  }

  /**
   * Find deepest element
   */
  function findDeepestElement(
    node = document.body,
    depth = 0,
    deepest = { element: null, depth: 0 }
  ) {
    if (!node) return deepest;

    if (depth > deepest.depth) {
      deepest = {
        element: node,
        depth: depth,
        tag: node.tagName,
        id: node.id || 'no-id',
        classes: node.className || 'no-class',
      };
    }

    if (node.children) {
      for (let child of node.children) {
        deepest = findDeepestElement(child, depth + 1, deepest);
      }
    }

    return deepest;
  }

  // ==========================================
  // MEASUREMENTS
  // ==========================================

  const totalNodes = getTotalNodes();
  const maxDepth = getMaxDepth();
  const largestChild = getLargestChildCount();
  const largestParent = findLargestParent();
  const deepestElement = findDeepestElement();

  // ==========================================
  // LIGHTHOUSE THRESHOLDS
  // ==========================================

  const THRESHOLDS = {
    nodes: { good: 800, warning: 1400 },
    depth: { good: 12, warning: 25 },
    children: { good: 20, warning: 60 },
  };

  // ==========================================
  // STATUS CALCULATION
  // ==========================================

  function getStatus(value, thresholds) {
    if (value <= thresholds.good) return { status: 'EXCELLENT', color: '#10b981', icon: '✅' };
    if (value <= thresholds.warning) return { status: 'WARNING', color: '#f59e0b', icon: '⚠️' };
    return { status: 'CRITICAL', color: '#ef4444', icon: '❌' };
  }

  const nodeStatus = getStatus(totalNodes, THRESHOLDS.nodes);
  const depthStatus = getStatus(maxDepth, THRESHOLDS.depth);
  const childStatus = getStatus(largestChild, THRESHOLDS.children);

  // ==========================================
  // DISPLAY RESULTS
  // ==========================================

  console.log('%c📊 Measurements', 'font-size: 16px; font-weight: bold; color: #8b5cf6;');
  console.log('');

  // Total Nodes
  console.log(
    `%c${nodeStatus.icon} Total DOM Nodes: %c${totalNodes.toLocaleString()} %c${nodeStatus.status}`,
    'font-size: 14px;',
    `font-size: 14px; font-weight: bold; color: ${nodeStatus.color};`,
    `font-size: 12px; color: ${nodeStatus.color};`
  );
  console.log(
    `   Threshold: ≤ ${THRESHOLDS.nodes.good} (Good) | ${THRESHOLDS.nodes.good}-${THRESHOLDS.nodes.warning} (Warning) | > ${THRESHOLDS.nodes.warning} (Critical)`
  );
  console.log('');

  // Maximum Depth
  console.log(
    `%c${depthStatus.icon} Maximum Depth: %c${maxDepth} %c${depthStatus.status}`,
    'font-size: 14px;',
    `font-size: 14px; font-weight: bold; color: ${depthStatus.color};`,
    `font-size: 12px; color: ${depthStatus.color};`
  );
  console.log(
    `   Threshold: ≤ ${THRESHOLDS.depth.good} (Good) | ${THRESHOLDS.depth.good}-${THRESHOLDS.depth.warning} (Warning) | > ${THRESHOLDS.depth.warning} (Critical)`
  );
  console.log('');

  // Largest Child Count
  console.log(
    `%c${childStatus.icon} Largest Child Count: %c${largestChild} %c${childStatus.status}`,
    'font-size: 14px;',
    `font-size: 14px; font-weight: bold; color: ${childStatus.color};`,
    `font-size: 12px; color: ${childStatus.color};`
  );
  console.log(
    `   Threshold: ≤ ${THRESHOLDS.children.good} (Good) | ${THRESHOLDS.children.good}-${THRESHOLDS.children.warning} (Warning) | > ${THRESHOLDS.children.warning} (Critical)`
  );
  console.log('');

  // ==========================================
  // DETAILED ANALYSIS
  // ==========================================

  console.log('%c🔎 Detailed Analysis', 'font-size: 16px; font-weight: bold; color: #8b5cf6;');
  console.log('');

  // Largest Parent
  console.log('%cElement with most children:', 'font-weight: bold;');
  console.log(`   Tag: <${largestParent.tag.toLowerCase()}>`);
  console.log(`   Children: ${largestParent.count}`);
  console.log(`   ID: ${largestParent.id}`);
  console.log(`   Classes: ${largestParent.classes}`);
  console.log('   Element:', largestParent.element);
  console.log('');

  // Deepest Element
  console.log('%cDeepest element in tree:', 'font-weight: bold;');
  console.log(`   Tag: <${deepestElement.tag.toLowerCase()}>`);
  console.log(`   Depth: ${deepestElement.depth} levels`);
  console.log(`   ID: ${deepestElement.id}`);
  console.log(`   Classes: ${deepestElement.classes}`);
  console.log('   Element:', deepestElement.element);
  console.log('');

  // ==========================================
  // OVERALL ASSESSMENT
  // ==========================================

  console.log('%c🎯 Overall Assessment', 'font-size: 16px; font-weight: bold; color: #8b5cf6;');
  console.log('');

  const allGood =
    totalNodes <= THRESHOLDS.nodes.good &&
    maxDepth <= THRESHOLDS.depth.good &&
    largestChild <= THRESHOLDS.children.good;

  const allWarning =
    totalNodes <= THRESHOLDS.nodes.warning &&
    maxDepth <= THRESHOLDS.depth.warning &&
    largestChild <= THRESHOLDS.children.warning;

  if (allGood) {
    console.log('%c✅ EXCELLENT', 'font-size: 18px; font-weight: bold; color: #10b981;');
    console.log('%cNo optimization needed. DOM size is optimal.', 'color: #10b981;');
  } else if (allWarning) {
    console.log('%c⚠️ ACCEPTABLE', 'font-size: 18px; font-weight: bold; color: #f59e0b;');
    console.log('%cConsider minor optimizations to improve performance.', 'color: #f59e0b;');
  } else {
    console.log('%c❌ NEEDS OPTIMIZATION', 'font-size: 18px; font-weight: bold; color: #ef4444;');
    console.log('%cDOM is too large. Significant optimizations required.', 'color: #ef4444;');
  }
  console.log('');

  // ==========================================
  // RECOMMENDATIONS
  // ==========================================

  console.log('%c💡 Recommendations', 'font-size: 16px; font-weight: bold; color: #8b5cf6;');
  console.log('');

  const recommendations = [];

  if (totalNodes > THRESHOLDS.nodes.warning) {
    recommendations.push('🔴 Reduce total DOM nodes (use virtualization for long lists)');
  } else if (totalNodes > THRESHOLDS.nodes.good) {
    recommendations.push('🟡 Consider reducing DOM nodes (implement lazy rendering)');
  }

  if (maxDepth > THRESHOLDS.depth.warning) {
    recommendations.push('🔴 Reduce DOM depth (flatten component structure)');
  } else if (maxDepth > THRESHOLDS.depth.good) {
    recommendations.push('🟡 Consider reducing DOM depth (remove unnecessary wrapper divs)');
  }

  if (largestChild > THRESHOLDS.children.warning) {
    recommendations.push('🔴 Reduce child elements (use pagination or "show more" buttons)');
  } else if (largestChild > THRESHOLDS.children.good) {
    recommendations.push('🟡 Consider limiting child elements (implement accordion/collapse)');
  }

  if (recommendations.length === 0) {
    console.log('%c✅ No optimizations needed!', 'color: #10b981; font-weight: bold;');
  } else {
    recommendations.forEach(rec => console.log(rec));
  }

  console.log('');
  console.log('%c='.repeat(60), 'color: #666;');
  console.log('');
  console.log('%c📚 Resources', 'font-size: 14px; font-weight: bold;');
  console.log('   • https://web.dev/dom-size/');
  console.log('   • https://developer.chrome.com/docs/lighthouse/performance/dom-size/');
  console.log('');

  // ==========================================
  // RETURN DATA FOR PROGRAMMATIC ACCESS
  // ==========================================

  return {
    measurements: {
      totalNodes,
      maxDepth,
      largestChild,
    },
    status: {
      nodes: nodeStatus.status,
      depth: depthStatus.status,
      children: childStatus.status,
      overall: allGood ? 'EXCELLENT' : allWarning ? 'ACCEPTABLE' : 'NEEDS OPTIMIZATION',
    },
    details: {
      largestParent,
      deepestElement,
    },
    thresholds: THRESHOLDS,
  };
})();

/**
 * ========================================
 * USAGE INSTRUCTIONS
 * ========================================
 *
 * 1. Open any page in your browser
 * 2. Open DevTools (F12 or Cmd+Option+I)
 * 3. Navigate to the Console tab
 * 4. Copy and paste this entire file
 * 5. Press Enter
 *
 * The tool will:
 * - Count total DOM nodes
 * - Measure maximum depth
 * - Find largest child count
 * - Identify problematic elements
 * - Provide optimization recommendations
 *
 * ========================================
 * INTERPRETING RESULTS
 * ========================================
 *
 * Status Meanings:
 *
 * ✅ EXCELLENT (Green)
 *    - No optimization needed
 *    - Passes all Lighthouse thresholds
 *    - Optimal performance
 *
 * ⚠️ ACCEPTABLE (Yellow)
 *    - Minor optimizations recommended
 *    - Within acceptable range
 *    - Some performance impact
 *
 * ❌ NEEDS OPTIMIZATION (Red)
 *    - Significant optimizations required
 *    - Exceeds Lighthouse thresholds
 *    - Performance degradation likely
 *
 * ========================================
 */
