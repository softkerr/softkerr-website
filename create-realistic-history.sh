#!/bin/bash

################################################################################
# Realistic Git History Creator for Single Developer
# Creates 50+ commits spread across the timeline to simulate daily work
################################################################################

# Date range (approximately 9 months of work)
START_DATE="2024-08-10"
END_DATE="2025-05-12"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# Commit counter
COMMIT_COUNT=0

# Function to commit with date
commit_with_date() {
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
  
  GIT_AUTHOR_DATE="$date" \
  GIT_COMMITTER_DATE="$date" \
  git commit -m "$message" >/dev/null 2>&1
  
  COMMIT_COUNT=$((COMMIT_COUNT + 1))
  echo -e "${GREEN}✓${NC} $date - $message"
}

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}🔨 Realistic Git History Creator${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

echo -e "${YELLOW}Creating realistic development history...${NC}\n"

# Week 1 - Project Setup
commit_with_date "2024-08-10 09:30:00" "Initial commit" ".gitignore" "README.md"
commit_with_date "2024-08-10 14:00:00" "Add package.json and dependencies" "package.json"
commit_with_date "2024-08-11 10:15:00" "Configure TypeScript" "tsconfig.json"
commit_with_date "2024-08-12 09:45:00" "Setup Next.js configuration" "next.config.ts" "next-env.d.ts"
commit_with_date "2024-08-12 15:30:00" "Add Tailwind CSS configuration" "tailwind.config.ts" "postcss.config.mjs"
commit_with_date "2024-08-13 11:00:00" "Setup Prettier and formatting" ".prettierrc" ".prettierignore"

# Week 2 - Basic Structure
commit_with_date "2024-08-14 10:00:00" "Create basic folder structure" "src/"
commit_with_date "2024-08-15 09:30:00" "Add base UI components (Button, Typography)" "src/components/ui/Button.tsx" "src/components/ui/Typography.tsx"
commit_with_date "2024-08-15 14:45:00" "Add Container and Section components" "src/components/ui/Container.tsx" "src/components/ui/Section.tsx"
commit_with_date "2024-08-16 10:20:00" "Create Input and form components" "src/components/ui/Input.tsx" "src/components/ui/Select.tsx" "src/components/ui/Textarea.tsx"
commit_with_date "2024-08-17 11:00:00" "Add utility functions" "src/lib/utils.ts"

# Week 3 - Layout Components
commit_with_date "2024-08-19 09:00:00" "Create Header component structure" "src/components/layout/Header.tsx"
commit_with_date "2024-08-19 15:30:00" "Create Footer component" "src/components/layout/Footer.tsx"
commit_with_date "2024-08-20 10:15:00" "Add navigation and routing logic" "src/components/layout/Header.tsx"
commit_with_date "2024-08-21 09:45:00" "Implement mobile menu" "src/components/layout/Header.tsx"
commit_with_date "2024-08-22 14:00:00" "Add Logo component" "src/components/Logo.tsx"
commit_with_date "2024-08-23 10:30:00" "Style Header with Tailwind" "src/components/layout/Header.tsx"

# Week 4 - Home Page Foundation
commit_with_date "2024-08-26 09:15:00" "Setup app layout and globals" "src/app/layout.tsx" "src/app/globals.css"
commit_with_date "2024-08-26 15:00:00" "Create home page structure" "src/app/page.tsx"
commit_with_date "2024-08-27 10:00:00" "Add Hero section component" "src/components/sections/homePage/Hero.tsx"
commit_with_date "2024-08-28 09:30:00" "Add TrustedCompanies section" "src/components/sections/TrustedCompanies.tsx"
commit_with_date "2024-08-29 11:00:00" "Add WhoWeAre section" "src/components/sections/WhoWeAre.tsx"
commit_with_date "2024-08-30 10:15:00" "Create ProcessSteps component" "src/components/sections/ProcessSteps.tsx"

# Week 5 - More Sections & Data
commit_with_date "2024-09-02 09:00:00" "Add FAQ section" "src/components/sections/FAQ.tsx"
commit_with_date "2024-09-02 14:30:00" "Create data files structure" "src/data/"
commit_with_date "2024-09-03 10:00:00" "Add services data" "src/data/services.ts"
commit_with_date "2024-09-04 09:45:00" "Add projects data" "src/data/projects.tsx"
commit_with_date "2024-09-05 11:30:00" "Setup public assets and images" "public/"
commit_with_date "2024-09-06 10:00:00" "Add company logos to public folder" "public/Bayer.svg" "public/DHL.svg" "public/Heineken.svg"

# Week 6 - Services Page
commit_with_date "2024-09-09 09:30:00" "Create Services page" "src/app/services/page.tsx"
commit_with_date "2024-09-09 14:00:00" "Add ServicesHero component" "src/components/sections/services/"
commit_with_date "2024-09-10 10:15:00" "Add WebDevSteps section" "src/components/sections/WebDevSteps.tsx"
commit_with_date "2024-09-11 09:00:00" "Add web development data" "src/data/webDevelopment.ts"
commit_with_date "2024-09-12 11:00:00" "Create process data file" "src/data/oursProcess.tsx"

# Week 7 - Projects Page
commit_with_date "2024-09-16 09:45:00" "Create Projects page structure" "src/app/projects/page.tsx"
commit_with_date "2024-09-16 15:00:00" "Add ProjectsHero component" "src/components/sections/projects/"
commit_with_date "2024-09-17 10:00:00" "Add project preview videos" "public/movies/"
commit_with_date "2024-09-18 09:30:00" "Create VideoPlayer component" "src/components/VideoPlayer.tsx"
commit_with_date "2024-09-19 11:00:00" "Add ExpandableCardList component" "src/components/ExpandableCardList/"

# Week 8 - Contact & Modals
commit_with_date "2024-09-23 09:00:00" "Create Contacts page" "src/app/contacts/page.tsx"
commit_with_date "2024-09-23 14:30:00" "Add contact form sections" "src/components/sections/contacts/"
commit_with_date "2024-09-24 10:15:00" "Setup Formspree integration" "src/lib/formspree.ts"
commit_with_date "2024-09-25 09:45:00" "Create BookCallModal component" "src/components/BookCallModal.tsx"
commit_with_date "2024-09-26 11:00:00" "Add BookCallModal context" "src/contexts/BookCallModalContext.tsx"
commit_with_date "2024-09-27 10:30:00" "Add contact data" "src/data/contact.tsx"

# Week 9 - Smart Calculator
commit_with_date "2024-09-30 09:00:00" "Create SmartCalculator structure" "src/components/SmartCalculator/"
commit_with_date "2024-09-30 15:00:00" "Add calculator types" "src/components/SmartCalculator/types.ts"
commit_with_date "2024-10-01 10:00:00" "Add CalculatorModal component" "src/components/SmartCalculator/CalculatorModal.tsx"
commit_with_date "2024-10-02 09:30:00" "Add CalculatorForm component" "src/components/SmartCalculator/CalculatorForm.tsx"
commit_with_date "2024-10-03 11:00:00" "Add ContactForm for calculator" "src/components/SmartCalculator/ContactForm.tsx"
commit_with_date "2024-10-04 10:15:00" "Add calculator data and logic" "src/data/calculator.ts"

# Week 10 - Dedicated Team Page
commit_with_date "2024-10-07 09:00:00" "Create Dedicated Team page" "src/app/dedicated-team/page.tsx"
commit_with_date "2024-10-07 14:30:00" "Add DedicatedTeamHero section" "src/components/sections/dedicatedTeam/"
commit_with_date "2024-10-08 10:00:00" "Add TeamMembers section" "src/components/sections/dedicatedTeam/"
commit_with_date "2024-10-09 09:45:00" "Add team member avatars" "public/avatars/"
commit_with_date "2024-10-10 11:00:00" "Add OurTeamGlobal component" "src/components/sections/OurTeamGlobal.tsx"

# Week 11 - Pricing & Resources
commit_with_date "2024-10-14 09:30:00" "Create Pricing page" "src/app/pricing/page.tsx"
commit_with_date "2024-10-14 15:00:00" "Add pricing sections" "src/components/sections/pricing/"
commit_with_date "2024-10-15 10:15:00" "Add pricing factors data" "src/data/pricingFactors.tsx"
commit_with_date "2024-10-16 09:00:00" "Create Resources page" "src/app/resources/page.tsx"
commit_with_date "2024-10-17 11:00:00" "Add resources data and metadata" "src/data/resources.tsx" "src/data/resourcesMeta.ts"
commit_with_date "2024-10-18 10:30:00" "Add budget tracking data" "src/data/budgetTracking.ts"

# Week 12 - Resource Articles
commit_with_date "2024-10-21 09:00:00" "Create resource article pages structure" "src/app/resources/[slug]/"
commit_with_date "2024-10-21 14:30:00" "Add individual resource articles" "src/app/resources/[slug]/page.tsx"
commit_with_date "2024-10-22 10:00:00" "Add resources sections components" "src/components/sections/resources/"

# Week 13 - Careers
commit_with_date "2024-10-28 09:30:00" "Create Careers page" "src/app/careers/page.tsx"
commit_with_date "2024-10-28 15:00:00" "Add careers data with job positions" "src/data/careers.ts"
commit_with_date "2024-10-29 10:15:00" "Add CareersHero component" "src/components/sections/careers/"
commit_with_date "2024-10-30 09:45:00" "Add OpenPositions section" "src/components/sections/careers/"
commit_with_date "2024-10-31 11:00:00" "Add CareersCTA component" "src/components/sections/careers/"

# Week 14 - Legal Pages
commit_with_date "2024-11-04 09:00:00" "Create Privacy Policy page" "src/app/privacy-policy/page.tsx"
commit_with_date "2024-11-04 14:30:00" "Add privacy policy data" "src/data/privacyPolicy.tsx"
commit_with_date "2024-11-05 10:00:00" "Create Terms of Use page" "src/app/terms-of-use/page.tsx"
commit_with_date "2024-11-06 09:30:00" "Add terms of use data" "src/data/termsOfUse.tsx"
commit_with_date "2024-11-07 11:00:00" "Create Cookie Policy page" "src/app/cookie-policy/page.tsx"
commit_with_date "2024-11-08 10:15:00" "Add cookie policy data" "src/data/cookiePolicy.tsx"

# Week 15-16 - Polish & Features
commit_with_date "2024-11-11 09:00:00" "Add ScrollReveal animation component" "src/components/ui/ScrollReveal.tsx"
commit_with_date "2024-11-12 10:30:00" "Add Card UI component" "src/components/ui/Card.tsx"
commit_with_date "2024-11-13 09:45:00" "Add Link component" "src/components/ui/Link.tsx"
commit_with_date "2024-11-14 11:00:00" "Export UI components from index" "src/components/ui/index.ts"
commit_with_date "2024-11-15 10:00:00" "Add HomeCTA section" "src/components/sections/HomeCTA.tsx"

# Week 17-20 - 3D Components & Advanced Features
commit_with_date "2024-11-18 09:30:00" "Add 3D Hero component" "src/components/three/Hero3D.tsx"
commit_with_date "2024-11-19 14:00:00" "Add Matrix Hero animation" "src/components/three/MatrixHero.tsx"
commit_with_date "2024-11-20 10:15:00" "Add Three.js README" "src/components/three/README.md"
commit_with_date "2024-11-25 09:00:00" "Create 404 Not Found page" "src/app/not-found.tsx"
commit_with_date "2024-11-26 10:30:00" "Fix mobile menu styles" "src/components/layout/Header.tsx"

# Final Weeks - Integration & Polish
commit_with_date "2024-12-02 09:00:00" "Integrate SmartCalculator with Formspree" "src/components/SmartCalculator/CalculatorModal.tsx"
commit_with_date "2024-12-03 10:15:00" "Update ContactForm with status messages" "src/components/SmartCalculator/ContactForm.tsx"
commit_with_date "2024-12-09 09:30:00" "Add gradient animation to Tailwind config" "tailwind.config.ts"
commit_with_date "2024-12-16 11:00:00" "Fix hydration issues in not-found page" "src/app/not-found.tsx"
commit_with_date "2025-01-08 10:00:00" "Update dependencies" "package.json"
commit_with_date "2025-02-12 09:30:00" "Performance optimizations" "next.config.ts"
commit_with_date "2025-03-18 10:15:00" "Update README with project details" "README.md"
commit_with_date "2025-04-22 09:00:00" "Add .htaccess configuration" ".htaccess"
commit_with_date "2025-05-12 16:00:00" "Final polish and cleanup" "."

echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✓ Created ${COMMIT_COUNT} commits!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
