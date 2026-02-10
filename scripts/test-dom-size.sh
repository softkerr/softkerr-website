#!/bin/bash

# DOM Size Testing Script
# Tests actual DOM node count on production website
# Run: ./scripts/test-dom-size.sh

echo "🔍 Testing DOM Size on Production Website"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Production URL
SITE_URL="https://www.softkerr.com"

# Pages to test
declare -a PAGES=(
  ""
  "/services"
  "/partnership"
  "/careers"
  "/projects"
  "/pricing"
  "/contacts"
)

echo "📊 Analyzing DOM Size for: $SITE_URL"
echo ""

# Function to test a page
test_page() {
  local PAGE=$1
  local URL="${SITE_URL}${PAGE}"
  local PAGE_NAME="${PAGE:-home}"
  
  echo "Testing: ${PAGE_NAME} (${URL})"
  echo "-----------------------------------"
  
  # Use node to fetch and parse HTML
  node -e "
    const https = require('https');
    const { JSDOM } = require('jsdom');
    
    https.get('${URL}', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const dom = new JSDOM(data);
        const doc = dom.window.document;
        
        // Count total nodes
        const totalNodes = doc.querySelectorAll('*').length;
        
        // Calculate max depth
        function getMaxDepth(node, depth = 0) {
          let max = depth;
          for (let child of node.children) {
            max = Math.max(max, getMaxDepth(child, depth + 1));
          }
          return max;
        }
        
        // Calculate largest child count
        function getLargestChildCount(node) {
          let max = node.children.length;
          for (let child of node.children) {
            max = Math.max(max, getLargestChildCount(child));
          }
          return max;
        }
        
        const maxDepth = getMaxDepth(doc.body);
        const largestChild = getLargestChildCount(doc.body);
        
        // Lighthouse thresholds
        const NODE_THRESHOLD_GOOD = 800;
        const NODE_THRESHOLD_WARNING = 1400;
        const DEPTH_THRESHOLD_GOOD = 12;
        const DEPTH_THRESHOLD_WARNING = 25;
        const CHILD_THRESHOLD_GOOD = 20;
        const CHILD_THRESHOLD_WARNING = 60;
        
        // Determine status
        let nodeStatus = '✅ EXCELLENT';
        if (totalNodes > NODE_THRESHOLD_WARNING) nodeStatus = '❌ CRITICAL';
        else if (totalNodes > NODE_THRESHOLD_GOOD) nodeStatus = '⚠️ WARNING';
        
        let depthStatus = '✅ GOOD';
        if (maxDepth > DEPTH_THRESHOLD_WARNING) depthStatus = '❌ CRITICAL';
        else if (maxDepth > DEPTH_THRESHOLD_GOOD) depthStatus = '⚠️ WARNING';
        
        let childStatus = '✅ GOOD';
        if (largestChild > CHILD_THRESHOLD_WARNING) childStatus = '❌ CRITICAL';
        else if (largestChild > CHILD_THRESHOLD_GOOD) childStatus = '⚠️ WARNING';
        
        // Output results
        console.log('Total DOM Nodes:', totalNodes, nodeStatus);
        console.log('Maximum Depth:', maxDepth, depthStatus);
        console.log('Largest Child Count:', largestChild, childStatus);
        console.log('');
        
        // Overall assessment
        if (totalNodes <= NODE_THRESHOLD_GOOD && maxDepth <= DEPTH_THRESHOLD_GOOD && largestChild <= CHILD_THRESHOLD_GOOD) {
          console.log('Overall Status: ${GREEN}✅ EXCELLENT - No optimization needed${NC}');
        } else if (totalNodes <= NODE_THRESHOLD_WARNING && maxDepth <= DEPTH_THRESHOLD_WARNING && largestChild <= CHILD_THRESHOLD_WARNING) {
          console.log('Overall Status: ${YELLOW}⚠️ ACCEPTABLE - Minor optimizations recommended${NC}');
        } else {
          console.log('Overall Status: ${RED}❌ NEEDS OPTIMIZATION - DOM too large${NC}');
        }
        console.log('');
      });
    }).on('error', (err) => {
      console.error('Error fetching page:', err.message);
    });
  " 2>/dev/null || echo "⚠️ Could not analyze ${PAGE_NAME} - requires jsdom (npm install -g jsdom)"
}

# Check if jsdom is installed
if ! command -v node &> /dev/null; then
  echo "❌ Error: Node.js is not installed"
  echo "Please install Node.js to run this test"
  exit 1
fi

# Check if jsdom module exists
node -e "require('jsdom')" 2>/dev/null || {
  echo "⚠️ Warning: jsdom not found"
  echo "Installing jsdom globally..."
  npm install -g jsdom
}

# Test all pages
for PAGE in "${PAGES[@]}"; do
  test_page "$PAGE"
  echo ""
done

echo "=========================================="
echo "✅ DOM Size Analysis Complete"
echo ""
echo "📋 Lighthouse Thresholds:"
echo "  Total Nodes:  < 800 (Good) | 800-1,400 (Warning) | > 1,400 (Critical)"
echo "  Max Depth:    < 12 (Good)  | 12-25 (Warning)     | > 25 (Critical)"
echo "  Child Count:  < 20 (Good)  | 20-60 (Warning)     | > 60 (Critical)"
echo ""
echo "💡 Tip: Run Lighthouse for comprehensive analysis:"
echo "  npx lighthouse https://www.softkerr.com --view"
