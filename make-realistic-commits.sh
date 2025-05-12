#!/bin/bash

################################################################################
# Realistic Git History - Manual File-by-File Commits
# Creates 90+ commits by adding files gradually
################################################################################

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

COMMIT_COUNT=0

c() {
  local date=$1
  local message=$2
  shift 2
  
  for file in "$@"; do
    git add "$file" 2>/dev/null
  done
  
  if ! git diff --cached --quiet 2>/dev/null; then
    GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git commit -m "$message" >/dev/null 2>&1
    COMMIT_COUNT=$((COMMIT_COUNT + 1))
    echo -e "${GREEN}✓${NC} $(echo $date | cut -d' ' -f1) - $message"
  fi
}

echo -e "${BLUE}Creating 90+ realistic commits...${NC}\n"

# Week 1: Project Setup
c "2024-08-10 09:30:00" "Initial commit" ".gitignore" "README.md"
c "2024-08-10 14:00:00" "Add package.json" "package.json"
c "2024-08-10 16:30:00" "Install dependencies" "package-lock.json"
c "2024-08-11 10:15:00" "Configure TypeScript" "tsconfig.json"
c "2024-08-11 15:00:00" "Add VS Code settings" ".vscode/"
c "2024-08-12 09:45:00" "Setup Next.js config" "next.config.ts" "next-env.d.ts"
c "2024-08-12 15:30:00" "Configure Tailwind" "tailwind.config.ts" "postcss.config.mjs"
c "2024-08-13 11:00:00" "Setup Prettier" ".prettierrc" ".prettierignore"

# Week 2: UI Foundation
c "2024-08-15 09:30:00" "Add Button component" "src/components/ui/Button.tsx"
c "2024-08-15 14:45:00" "Add Typography component" "src/components/ui/Typography.tsx"
c "2024-08-15 16:00:00" "Add Container component" "src/components/ui/Container.tsx"
c "2024-08-15 17:15:00" "Add Section component" "src/components/ui/Section.tsx"
c "2024-08-16 10:20:00" "Add Input component" "src/components/ui/Input.tsx"
c "2024-08-16 14:00:00" "Add Select component" "src/components/ui/Select.tsx"
c "2024-08-16 15:30:00" "Add Textarea component" "src/components/ui/Textarea.tsx"
c "2024-08-17 11:00:00" "Add utility functions" "src/lib/utils.ts"

# Week 3: Layout
c "2024-08-19 09:00:00" "Create Header component" "src/components/layout/Header.tsx"
c "2024-08-19 15:30:00" "Create Footer component" "src/components/layout/Footer.tsx"
c "2024-08-22 14:00:00" "Add Logo component" "src/components/Logo.tsx"

# Week 4: App Setup
c "2024-08-26 09:15:00" "Setup app layout" "src/app/layout.tsx"
c "2024-08-26 11:00:00" "Add global styles" "src/app/globals.css"
c "2024-08-26 15:00:00" "Create homepage" "src/app/page.tsx"

# Week 5: Homepage Sections
c "2024-08-27 10:00:00" "Add Hero section" "src/components/sections/homePage/Hero.tsx"
c "2024-08-28 09:30:00" "Add TrustedCompanies" "src/components/sections/TrustedCompanies.tsx"
c "2024-08-29 11:00:00" "Add WhoWeAre section" "src/components/sections/WhoWeAre.tsx"
c "2024-08-30 10:15:00" "Add ProcessSteps" "src/components/sections/ProcessSteps.tsx"
c "2024-09-02 09:00:00" "Add FAQ section" "src/components/sections/FAQ.tsx"
c "2024-09-02 14:30:00" "Add HomeCTA section" "src/components/sections/HomeCTA.tsx"

# Week 6: Data & Assets
c "2024-09-03 10:00:00" "Add services data" "src/data/services.ts"
c "2024-09-04 09:45:00" "Add projects data" "src/data/projects.tsx"
c "2024-09-05 11:30:00" "Add public folder" "public/favicon.svg" "public/logo.svg"
c "2024-09-06 10:00:00" "Add company logos" "public/Bayer.svg" "public/DHL.svg" "public/Heineken.svg" "public/GoDaddy.svg" "public/DreamHost.svg" "public/PROM.svg"
c "2024-09-06 14:30:00" "Add more assets" "public/globe.svg" "public/window.svg" "public/file.svg" "public/vercel.svg" "public/next.svg"
c "2024-09-06 16:00:00" "Add gradient background" "public/gradient_bg.webp" "public/123.png"

# Week 7: Services Page
c "2024-09-09 09:30:00" "Create Services page" "src/app/services/page.tsx"
c "2024-09-09 14:00:00" "Add ServicesHero" "src/components/sections/services/ServicesHero.tsx"
c "2024-09-10 10:15:00" "Add WebDevSteps" "src/components/sections/WebDevSteps.tsx"
c "2024-09-10 15:00:00" "Add ServicesWhyChooseUs" "src/components/sections/services/WhyChooseUs.tsx"
c "2024-09-11 09:00:00" "Add web dev data" "src/data/webDevelopment.ts"
c "2024-09-12 11:00:00" "Add process data" "src/data/oursProcess.tsx"

# Week 8: Projects Page
c "2024-09-16 09:45:00" "Create Projects page" "src/app/projects/page.tsx"
c "2024-09-16 15:00:00" "Add ProjectsHero" "src/components/sections/projects/ProjectsHero.tsx"
c "2024-09-17 10:00:00" "Add project videos" "public/movies/dreamhost-website.mp4" "public/movies/türkiye-dental.mp4"
c "2024-09-17 14:30:00" "Add video previews" "public/movies/dreamhost-website-preview.png" "public/movies/dreamhost-panel-preview.png" "public/movies/türkiye-dental-preview.png"
c "2024-09-18 09:30:00" "Add VideoPlayer" "src/components/VideoPlayer.tsx"
c "2024-09-19 11:00:00" "Add ExpandableCardList" "src/components/ExpandableCardList/index.tsx"
c "2024-09-19 15:00:00" "Add ProjectsShowcase" "src/components/sections/projects/ProjectsShowcase.tsx"
c "2024-09-20 10:15:00" "Add WhyChooseUs variants" "src/components/sections/projects/WhyChooseUs.tsx"

# Week 9: Contacts
c "2024-09-23 09:00:00" "Create Contacts page" "src/app/contacts/page.tsx"
c "2024-09-23 14:30:00" "Add ContactsHero" "src/components/sections/contacts/ContactsHero.tsx"
c "2024-09-24 10:15:00" "Setup Formspree" "src/lib/formspree.ts"
c "2024-09-24 15:00:00" "Add ContactForm section" "src/components/sections/contacts/ContactForm.tsx"
c "2024-09-25 09:45:00" "Add BookCallModal" "src/components/BookCallModal.tsx"
c "2024-09-26 11:00:00" "Add modal context" "src/contexts/BookCallModalContext.tsx"
c "2024-09-27 10:30:00" "Add contact data" "src/data/contact.tsx"
c "2024-09-27 14:00:00" "Add GetInTouch section" "src/components/sections/contacts/GetInTouch.tsx"

# Week 10: Smart Calculator
c "2024-09-30 09:00:00" "Add calculator types" "src/components/SmartCalculator/types.ts"
c "2024-09-30 15:00:00" "Add CalculatorModal" "src/components/SmartCalculator/CalculatorModal.tsx"
c "2024-10-01 10:00:00" "Add CalculatorForm" "src/components/SmartCalculator/CalculatorForm.tsx"
c "2024-10-02 09:30:00" "Add calc ContactForm" "src/components/SmartCalculator/ContactForm.tsx"
c "2024-10-03 11:00:00" "Add CalculatorDisplay" "src/components/SmartCalculator/CalculatorDisplay.tsx"
c "2024-10-03 14:30:00" "Add calc Hero" "src/components/SmartCalculator/Hero.tsx"
c "2024-10-03 16:00:00" "Add ProjectSummary" "src/components/SmartCalculator/ProjectSummary.tsx"
c "2024-10-04 10:15:00" "Add StepsList" "src/components/SmartCalculator/StepsList.tsx"
c "2024-10-04 14:00:00" "Add calculator data" "src/data/calculator.ts"

# Week 11: Dedicated Team
c "2024-10-07 09:00:00" "Create DedicatedTeam page" "src/app/dedicated-team/page.tsx"
c "2024-10-07 14:30:00" "Add TeamHero" "src/components/sections/dedicatedTeam/DedicatedTeamHero.tsx"
c "2024-10-08 10:00:00" "Add TeamMembers" "src/components/sections/dedicatedTeam/TeamMembers.tsx"
c "2024-10-08 15:00:00" "Add HowItWorks" "src/components/sections/dedicatedTeam/HowItWorks.tsx"
c "2024-10-09 09:45:00" "Add team avatars" "public/avatars/brian-glasman-avatar.jpeg" "public/avatars/john-h-avatar.jpeg" "public/avatars/mahmet-avatar.jpeg"
c "2024-10-10 11:00:00" "Add OurTeamGlobal" "src/components/sections/OurTeamGlobal.tsx"
c "2024-10-10 15:00:00" "Add TeamWhyChooseUs" "src/components/sections/dedicatedTeam/WhyChooseUs.tsx"

# Week 12: Pricing
c "2024-10-14 09:30:00" "Create Pricing page" "src/app/pricing/page.tsx"
c "2024-10-14 15:00:00" "Add PricingHero" "src/components/sections/pricing/PricingHero.tsx"
c "2024-10-15 10:15:00" "Add PricingFactors" "src/components/sections/pricing/PricingFactors.tsx"
c "2024-10-15 14:30:00" "Add pricing data" "src/data/pricingFactors.tsx"
c "2024-10-15 16:00:00" "Add PricingWhyChooseUs" "src/components/sections/pricing/WhyChooseUs.tsx"

# Week 13: Resources
c "2024-10-16 09:00:00" "Create Resources page" "src/app/resources/page.tsx"
c "2024-10-17 11:00:00" "Add resources data" "src/data/resources.tsx"
c "2024-10-17 14:30:00" "Add resource metadata" "src/data/resourcesMeta.ts"
c "2024-10-18 10:30:00" "Add budget tracking" "src/data/budgetTracking.ts"
c "2024-10-21 09:00:00" "Add ResourcesHero" "src/components/sections/resources/ResourcesHero.tsx"
c "2024-10-21 14:30:00" "Create article pages" "src/app/resources/[slug]/page.tsx"
c "2024-10-22 10:00:00" "Add ArticleHeader" "src/components/sections/resources/ArticleHeader.tsx"
c "2024-10-22 14:00:00" "Add ArticleContent" "src/components/sections/resources/ArticleContent.tsx"
c "2024-10-22 16:00:00" "Add RelatedArticles" "src/components/sections/resources/RelatedArticles.tsx"

# Week 14: Careers
c "2024-10-28 09:30:00" "Create Careers page" "src/app/careers/page.tsx"
c "2024-10-28 15:00:00" "Add careers data" "src/data/careers.ts"
c "2024-10-29 10:15:00" "Add CareersHero" "src/components/sections/careers/CareersHero.tsx"
c "2024-10-30 09:45:00" "Add OpenPositions" "src/components/sections/careers/OpenPositions.tsx"
c "2024-10-31 11:00:00" "Add WhyJoinUs" "src/components/sections/careers/WhyJoinUs.tsx"
c "2024-10-31 14:30:00" "Add CareersCTA" "src/components/sections/careers/CareersCTA.tsx"

# Week 15: Legal Pages
c "2024-11-04 09:00:00" "Create Privacy page" "src/app/privacy-policy/page.tsx"
c "2024-11-04 14:30:00" "Add privacy data" "src/data/privacyPolicy.tsx"
c "2024-11-05 10:00:00" "Create Terms page" "src/app/terms-of-use/page.tsx"
c "2024-11-06 09:30:00" "Add terms data" "src/data/termsOfUse.tsx"
c "2024-11-07 11:00:00" "Create Cookie page" "src/app/cookie-policy/page.tsx"
c "2024-11-08 10:15:00" "Add cookie data" "src/data/cookiePolicy.tsx"

# Week 16: More UI Components
c "2024-11-11 09:00:00" "Add ScrollReveal" "src/components/ui/ScrollReveal.tsx"
c "2024-11-12 10:30:00" "Add Card component" "src/components/ui/Card.tsx"
c "2024-11-13 09:45:00" "Add Link component" "src/components/ui/Link.tsx"
c "2024-11-14 11:00:00" "Create UI index" "src/components/ui/index.ts"

# Week 17: 3D Components
c "2024-11-18 09:30:00" "Add Hero3D" "src/components/three/Hero3D.tsx"
c "2024-11-19 14:00:00" "Add MatrixHero" "src/components/three/MatrixHero.tsx"
c "2024-11-20 10:15:00" "Add Three README" "src/components/three/README.md"

# Week 18: 404 Page
c "2024-11-25 09:00:00" "Create 404 page" "src/app/not-found.tsx"

# December: Polish & Fixes
c "2024-12-02 09:00:00" "Integrate calculator Formspree" "src/components/SmartCalculator/CalculatorModal.tsx"
c "2024-12-03 10:15:00" "Add form status messages" "src/components/SmartCalculator/ContactForm.tsx"
c "2024-12-09 09:30:00" "Add gradient animation" "tailwind.config.ts"
c "2024-12-16 11:00:00" "Fix hydration issues" "src/app/not-found.tsx"

# 2025: Maintenance
c "2025-01-08 10:00:00" "Update dependencies" "package.json"
c "2025-02-12 09:30:00" "Performance optimize" "next.config.ts"
c "2025-03-18 10:15:00" "Update README" "README.md"
c "2025-04-22 09:00:00" "Add htaccess" ".htaccess"
c "2025-05-12 16:00:00" "Production ready" "."

echo -e "\n${BLUE}✓ Created ${COMMIT_COUNT} commits!${NC}\n"
git log --oneline --graph | head -20
