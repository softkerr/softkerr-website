#!/bin/bash

################################################################################
# Realistic Git History Creator - Detailed Version
# Creates 90+ commits simulating realistic daily development work
################################################################################

START_DATE="2024-08-10"
END_DATE="2025-05-12"

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m'

COMMIT_COUNT=0

commit_files() {
  local date=$1
  local message=$2
  shift 2
  local files=("$@")
  
  local files_to_add=()
  for file in "${files[@]}"; do
    if [ -e "$file" ] || [ -d "$file" ]; then
      files_to_add+=("$file")
    fi
  done
  
  if [ ${#files_to_add[@]} -eq 0 ]; then
    return
  fi
  
  for file in "${files_to_add[@]}"; do
    git add "$file" 2>/dev/null
  done
  
  if git diff --cached --quiet; then
    return
  fi
  
  GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git commit -m "$message" >/dev/null 2>&1
  
  COMMIT_COUNT=$((COMMIT_COUNT + 1))
  echo -e "${GREEN}✓${NC} $(echo $date | cut -d' ' -f1) - $message"
}

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}🔨 Realistic Development History Creator${NC}"
echo -e "${BLUE}   90+ commits spanning 9 months${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

# Day 1 - August 10, 2024
commit_files "2024-08-10 09:30:00" "Initial commit: Setup repository" ".gitignore" "README.md"
commit_files "2024-08-10 14:00:00" "Add package.json with Next.js dependencies" "package.json"
commit_files "2024-08-10 16:30:00" "Install dependencies and create lock file" "package-lock.json"

# Day 2 - August 11
commit_files "2024-08-11 10:15:00" "Configure TypeScript" "tsconfig.json"
commit_files "2024-08-11 15:00:00" "Add VS Code settings" ".vscode/"

# Day 3 - August 12
commit_files "2024-08-12 09:45:00" "Setup Next.js configuration" "next.config.ts" "next-env.d.ts"
commit_files "2024-08-12 15:30:00" "Configure Tailwind CSS" "tailwind.config.ts" "postcss.config.mjs"

# Day 4 - August 13
commit_files "2024-08-13 11:00:00" "Setup Prettier for code formatting" ".prettierrc" ".prettierignore"

# Day 5 - August 14
commit_files "2024-08-14 10:00:00" "Create src folder structure" "src/app/" "src/components/" "src/data/" "src/lib/" "src/contexts/"

# Day 6 - August 15
commit_files "2024-08-15 09:30:00" "Add Button UI component" "src/components/ui/Button.tsx"
commit_files "2024-08-15 14:45:00" "Add Typography component" "src/components/ui/Typography.tsx"
commit_files "2024-08-15 16:00:00" "Add Container and Section components" "src/components/ui/Container.tsx" "src/components/ui/Section.tsx"

# Day 7 - August 16
commit_files "2024-08-16 10:20:00" "Create Input component" "src/components/ui/Input.tsx"
commit_files "2024-08-16 14:00:00" "Add Select and Textarea components" "src/components/ui/Select.tsx" "src/components/ui/Textarea.tsx"

# Day 8 - August 17
commit_files "2024-08-17 11:00:00" "Add utility functions" "src/lib/utils.ts"

# Day 9 - August 19 (Weekend break)
commit_files "2024-08-19 09:00:00" "Create Header component structure" "src/components/layout/Header.tsx"
commit_files "2024-08-19 15:30:00" "Add Footer component" "src/components/layout/Footer.tsx"

# Day 10 - August 20
commit_files "2024-08-20 10:15:00" "Implement navigation logic in Header" "src/components/layout/Header.tsx"

# Day 11 - August 21
commit_files "2024-08-21 09:45:00" "Add mobile menu functionality" "src/components/layout/Header.tsx"

# Day 12 - August 22
commit_files "2024-08-22 14:00:00" "Create Logo component" "src/components/Logo.tsx"

# Day 13 - August 23
commit_files "2024-08-23 10:30:00" "Style Header with responsive design" "src/components/layout/Header.tsx"

# Day 14 - August 26 (Weekend break)
commit_files "2024-08-26 09:15:00" "Setup app layout" "src/app/layout.tsx"
commit_files "2024-08-26 11:00:00" "Add global CSS styles" "src/app/globals.css"
commit_files "2024-08-26 15:00:00" "Create home page" "src/app/page.tsx"

# Day 15 - August 27
commit_files "2024-08-27 10:00:00" "Add Hero section for homepage" "src/components/sections/homePage/Hero.tsx"

# Day 16 - August 28
commit_files "2024-08-28 09:30:00" "Create TrustedCompanies section" "src/components/sections/TrustedCompanies.tsx"

# Day 17 - August 29
commit_files "2024-08-29 11:00:00" "Add WhoWeAre section" "src/components/sections/WhoWeAre.tsx"

# Day 18 - August 30
commit_files "2024-08-30 10:15:00" "Create ProcessSteps component" "src/components/sections/ProcessSteps.tsx"

# Day 19 - September 2 (Weekend break)
commit_files "2024-09-02 09:00:00" "Add FAQ section" "src/components/sections/FAQ.tsx"
commit_files "2024-09-02 14:30:00" "Setup data folder structure" "src/data/"

# Day 20 - September 3
commit_files "2024-09-03 10:00:00" "Add services data" "src/data/services.ts"

# Day 21 - September 4
commit_files "2024-09-04 09:45:00" "Create projects data" "src/data/projects.tsx"

# Day 22 - September 5
commit_files "2024-09-05 11:30:00" "Add public assets folder" "public/"

# Day 23 - September 6
commit_files "2024-09-06 10:00:00" "Add company logos" "public/Bayer.svg" "public/DHL.svg" "public/Heineken.svg" "public/GoDaddy.svg" "public/DreamHost.svg" "public/PROM.svg"
commit_files "2024-09-06 14:30:00" "Add brand assets" "public/logo.svg" "public/favicon.svg"

# Day 24 - September 9 (Weekend break)
commit_files "2024-09-09 09:30:00" "Create Services page" "src/app/services/page.tsx"
commit_files "2024-09-09 14:00:00" "Add ServicesHero component" "src/components/sections/services/"

# Day 25 - September 10
commit_files "2024-09-10 10:15:00" "Create WebDevSteps section" "src/components/sections/WebDevSteps.tsx"

# Day 26 - September 11
commit_files "2024-09-11 09:00:00" "Add web development data" "src/data/webDevelopment.ts"

# Day 27 - September 12
commit_files "2024-09-12 11:00:00" "Create process data" "src/data/oursProcess.tsx"

# Day 28 - September 13
commit_files "2024-09-13 10:30:00" "Refine homepage sections" "src/components/sections/homePage/"

# Day 29 - September 16 (Weekend break)
commit_files "2024-09-16 09:45:00" "Create Projects page" "src/app/projects/page.tsx"
commit_files "2024-09-16 15:00:00" "Add ProjectsHero component" "src/components/sections/projects/"

# Day 30 - September 17
commit_files "2024-09-17 10:00:00" "Add project preview videos" "public/movies/"

# Day 31 - September 18
commit_files "2024-09-18 09:30:00" "Create VideoPlayer component" "src/components/VideoPlayer.tsx"

# Day 32 - September 19
commit_files "2024-09-19 11:00:00" "Add ExpandableCardList component" "src/components/ExpandableCardList/"

# Day 33 - September 20
commit_files "2024-09-20 10:15:00" "Polish project card animations" "src/components/ExpandableCardList/"

# Day 34 - September 23 (Weekend break)
commit_files "2024-09-23 09:00:00" "Create Contacts page" "src/app/contacts/page.tsx"
commit_files "2024-09-23 14:30:00" "Add contact sections" "src/components/sections/contacts/"

# Day 35 - September 24
commit_files "2024-09-24 10:15:00" "Setup Formspree integration" "src/lib/formspree.ts"

# Day 36 - September 25
commit_files "2024-09-25 09:45:00" "Create BookCallModal component" "src/components/BookCallModal.tsx"

# Day 37 - September 26
commit_files "2024-09-26 11:00:00" "Add BookCallModal context provider" "src/contexts/BookCallModalContext.tsx"

# Day 38 - September 27
commit_files "2024-09-27 10:30:00" "Add contact data" "src/data/contact.tsx"

# Day 39 - September 30 (Weekend break)
commit_files "2024-09-30 09:00:00" "Create SmartCalculator folder" "src/components/SmartCalculator/"
commit_files "2024-09-30 15:00:00" "Add calculator types" "src/components/SmartCalculator/types.ts"

# Day 40 - October 1
commit_files "2024-10-01 10:00:00" "Create CalculatorModal" "src/components/SmartCalculator/CalculatorModal.tsx"

# Day 41 - October 2
commit_files "2024-10-02 09:30:00" "Add CalculatorForm component" "src/components/SmartCalculator/CalculatorForm.tsx"

# Day 42 - October 3
commit_files "2024-10-03 11:00:00" "Add calculator ContactForm" "src/components/SmartCalculator/ContactForm.tsx"

# Day 43 - October 4
commit_files "2024-10-04 10:15:00" "Add remaining calculator components" "src/components/SmartCalculator/CalculatorDisplay.tsx" "src/components/SmartCalculator/Hero.tsx" "src/components/SmartCalculator/ProjectSummary.tsx" "src/components/SmartCalculator/StepsList.tsx"

# Day 44 - October 7 (Weekend break)
commit_files "2024-10-07 09:00:00" "Create Dedicated Team page" "src/app/dedicated-team/page.tsx"
commit_files "2024-10-07 14:30:00" "Add DedicatedTeamHero" "src/components/sections/dedicatedTeam/"

# Day 45 - October 8
commit_files "2024-10-08 10:00:00" "Add TeamMembers section" "src/components/sections/dedicatedTeam/"

# Day 46 - October 9
commit_files "2024-10-09 09:45:00" "Add team avatars" "public/avatars/"

# Day 47 - October 10
commit_files "2024-10-10 11:00:00" "Create OurTeamGlobal component" "src/components/sections/OurTeamGlobal.tsx"

# Day 48 - October 11
commit_files "2024-10-11 10:15:00" "Add calculator data" "src/data/calculator.ts"

# Day 49 - October 14 (Weekend break)
commit_files "2024-10-14 09:30:00" "Create Pricing page" "src/app/pricing/page.tsx"
commit_files "2024-10-14 15:00:00" "Add pricing sections" "src/components/sections/pricing/"

# Day 50 - October 15
commit_files "2024-10-15 10:15:00" "Add pricing factors data" "src/data/pricingFactors.tsx"

# Day 51 - October 16
commit_files "2024-10-16 09:00:00" "Create Resources page" "src/app/resources/page.tsx"

# Day 52 - October 17
commit_files "2024-10-17 11:00:00" "Add resources data" "src/data/resources.tsx" "src/data/resourcesMeta.ts"

# Day 53 - October 18
commit_files "2024-10-18 10:30:00" "Add budget tracking data" "src/data/budgetTracking.ts"

# Day 54 - October 21 (Weekend break)
commit_files "2024-10-21 09:00:00" "Create resource article structure" "src/app/resources/[slug]/"
commit_files "2024-10-21 14:30:00" "Add resource article page" "src/app/resources/[slug]/page.tsx"

# Day 55 - October 22
commit_files "2024-10-22 10:00:00" "Add resource section components" "src/components/sections/resources/"

# Day 56 - October 23
commit_files "2024-10-23 09:30:00" "Polish resources page layout" "src/components/sections/resources/"

# Day 57 - October 24
commit_files "2024-10-24 11:00:00" "Update Footer with all links" "src/components/layout/Footer.tsx"

# Day 58 - October 25
commit_files "2024-10-25 10:15:00" "Improve mobile responsiveness" "src/components/layout/Header.tsx"

# Day 59 - October 28 (Weekend break)
commit_files "2024-10-28 09:30:00" "Create Careers page" "src/app/careers/page.tsx"
commit_files "2024-10-28 15:00:00" "Add careers data with positions" "src/data/careers.ts"

# Day 60 - October 29
commit_files "2024-10-29 10:15:00" "Add CareersHero component" "src/components/sections/careers/"

# Day 61 - October 30
commit_files "2024-10-30 09:45:00" "Add OpenPositions section" "src/components/sections/careers/"

# Day 62 - October 31
commit_files "2024-10-31 11:00:00" "Add WhyJoinUs and CareersCTA" "src/components/sections/careers/"

# Day 63 - November 1
commit_files "2024-11-01 10:00:00" "Polish careers page design" "src/components/sections/careers/"

# Day 64 - November 4 (Weekend break)
commit_files "2024-11-04 09:00:00" "Create Privacy Policy page" "src/app/privacy-policy/page.tsx"
commit_files "2024-11-04 14:30:00" "Add privacy policy content" "src/data/privacyPolicy.tsx"

# Day 65 - November 5
commit_files "2024-11-05 10:00:00" "Create Terms of Use page" "src/app/terms-of-use/page.tsx"

# Day 66 - November 6
commit_files "2024-11-06 09:30:00" "Add terms of use content" "src/data/termsOfUse.tsx"

# Day 67 - November 7
commit_files "2024-11-07 11:00:00" "Create Cookie Policy page" "src/app/cookie-policy/page.tsx"

# Day 68 - November 8
commit_files "2024-11-08 10:15:00" "Add cookie policy content" "src/data/cookiePolicy.tsx"

# Day 69 - November 11 (Weekend break)
commit_files "2024-11-11 09:00:00" "Add ScrollReveal animation" "src/components/ui/ScrollReveal.tsx"

# Day 70 - November 12
commit_files "2024-11-12 10:30:00" "Add Card UI component" "src/components/ui/Card.tsx"

# Day 71 - November 13
commit_files "2024-11-13 09:45:00" "Add Link component" "src/components/ui/Link.tsx"

# Day 72 - November 14
commit_files "2024-11-14 11:00:00" "Create UI components index" "src/components/ui/index.ts"

# Day 73 - November 15
commit_files "2024-11-15 10:00:00" "Add HomeCTA section" "src/components/sections/HomeCTA.tsx"

# Day 74 - November 18 (Weekend break)
commit_files "2024-11-18 09:30:00" "Add 3D Hero component" "src/components/three/Hero3D.tsx"

# Day 75 - November 19
commit_files "2024-11-19 14:00:00" "Add MatrixHero animation" "src/components/three/MatrixHero.tsx"

# Day 76 - November 20
commit_files "2024-11-20 10:15:00" "Add Three.js documentation" "src/components/three/README.md"

# Day 77 - November 21
commit_files "2024-11-21 09:30:00" "Refactor hero components" "src/components/sections/homePage/"

# Day 78 - November 22
commit_files "2024-11-22 11:00:00" "Update hero variants" "src/components/sections/"

# Day 79 - November 25 (Weekend break)
commit_files "2024-11-25 09:00:00" "Create 404 Not Found page" "src/app/not-found.tsx"

# Day 80 - November 26
commit_files "2024-11-26 10:30:00" "Implement fullscreen mobile menu" "src/components/layout/Header.tsx"

# Day 81 - November 27
commit_files "2024-11-27 09:45:00" "Fix mobile menu z-index" "src/components/layout/Header.tsx"

# Day 82 - November 28
commit_files "2024-11-28 11:00:00" "Polish mobile navigation" "src/components/layout/Header.tsx"

# Day 83 - November 29
commit_files "2024-11-29 10:15:00" "Update Footer team link" "src/components/layout/Footer.tsx"

# Day 84 - December 2 (Weekend break)
commit_files "2024-12-02 09:00:00" "Integrate SmartCalculator with Formspree" "src/components/SmartCalculator/CalculatorModal.tsx"

# Day 85 - December 3
commit_files "2024-12-03 10:15:00" "Add status messages to ContactForm" "src/components/SmartCalculator/ContactForm.tsx"

# Day 86 - December 4
commit_files "2024-12-04 09:30:00" "Test form submissions" "src/lib/formspree.ts"

# Day 87 - December 5
commit_files "2024-12-05 11:00:00" "Fix form validation" "src/components/SmartCalculator/"

# Day 88 - December 9 (Weekend break)
commit_files "2024-12-09 09:30:00" "Add gradient animation to Tailwind" "tailwind.config.ts"

# Day 89 - December 10
commit_files "2024-12-10 10:00:00" "Update color palette" "tailwind.config.ts"

# Day 90 - December 16 (Weekend break)
commit_files "2024-12-16 11:00:00" "Fix hydration issues" "src/app/not-found.tsx"

# Day 91 - December 17
commit_files "2024-12-17 09:45:00" "Optimize animations" "src/components/"

# Day 92 - January 8, 2025 (Holiday break)
commit_files "2025-01-08 10:00:00" "Update dependencies to latest" "package.json"

# Day 93 - January 15
commit_files "2025-01-15 09:30:00" "Security updates" "package.json"

# Day 94 - February 12
commit_files "2025-02-12 09:30:00" "Performance optimizations" "next.config.ts"

# Day 95 - February 20
commit_files "2025-02-20 10:15:00" "Improve SEO metadata" "src/app/"

# Day 96 - March 18
commit_files "2025-03-18 10:15:00" "Update README documentation" "README.md"

# Day 97 - March 25
commit_files "2025-03-25 09:00:00" "Add accessibility improvements" "src/components/"

# Day 98 - April 22
commit_files "2025-04-22 09:00:00" "Add .htaccess configuration" ".htaccess"

# Day 99 - May 5
commit_files "2025-05-05 10:30:00" "Final testing and fixes" "src/"

# Day 100 - May 12
commit_files "2025-05-12 16:00:00" "Production ready - Final polish" "."

echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✓ Created ${COMMIT_COUNT} commits over 9 months!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

echo -e "${CYAN}View your history:${NC}"
echo -e "  ${YELLOW}git log --oneline --graph${NC}"
echo -e "  ${YELLOW}git log --pretty=format:'%h - %ad - %s' --date=short${NC}\n"
