#!/bin/bash

# Performance Testing Script
# Run this after deploying to verify optimizations

echo "🚀 SoftKerr Performance Testing Script"
echo "========================================"
echo ""

# Check if URL is provided
if [ -z "$1" ]; then
  URL="https://www.softkerr.com"
  echo "⚠️  No URL provided, using default: $URL"
else
  URL="$1"
  echo "✅ Testing URL: $URL"
fi

echo ""
echo "📊 Running Performance Tests..."
echo ""

# Test 1: Check DNS Resolution
echo "1️⃣  DNS Resolution Test"
echo "   Testing fonts.googleapis.com..."
dig +short fonts.googleapis.com | head -1
echo "   Testing fonts.gstatic.com..."
dig +short fonts.gstatic.com | head -1
echo ""

# Test 2: Check Headers
echo "2️⃣  HTTP Headers Test"
echo "   Checking cache headers..."
curl -I "$URL" 2>/dev/null | grep -i "cache-control"
echo ""

# Test 3: Check CSS Loading
echo "3️⃣  CSS Bundle Test"
echo "   Checking for CSS preload..."
curl -I "$URL" 2>/dev/null | grep -i "link:" | grep "css"
echo ""

# Test 4: Page Load Time (Simple)
echo "4️⃣  Basic Performance Test"
echo "   Measuring time to first byte..."
TIME=$(curl -o /dev/null -s -w '%{time_total}\n' "$URL")
echo "   Total time: ${TIME}s"
echo ""

# Test 5: Check Resource Hints
echo "5️⃣  Resource Hints Test"
echo "   Checking for preconnect/dns-prefetch..."
curl -s "$URL" | grep -o 'rel="dns-prefetch"' | head -1
curl -s "$URL" | grep -o 'rel="preconnect"' | head -1
echo ""

# Summary
echo "✅ Basic tests complete!"
echo ""
echo "📋 Next Steps:"
echo "   1. Open Chrome DevTools → Network tab"
echo "   2. Hard refresh (Cmd+Shift+R)"
echo "   3. Check the waterfall chart:"
echo "      - CSS should load in parallel with HTML"
echo "      - Fonts should show 'dns-prefetch' connection"
echo "   4. Run Lighthouse:"
echo "      - Open DevTools → Lighthouse tab"
echo "      - Run test on Production"
echo "      - Check Performance score (target: 90+)"
echo ""
echo "🎯 Expected Results:"
echo "   - Performance Score: 90-95"
echo "   - LCP: 1.5-2.0s"
echo "   - Critical Path: <150ms"
echo ""
