#!/bin/bash

################################################################################
# Git History Creator
# 
# Creates a realistic Git history for any project by backdating commits.
# This script allows you to specify date ranges and will intelligently
# commit files in a logical order.
#
# Usage:
#   ./create-git-history-universal.sh [START_DATE] [END_DATE]
#
# Examples:
#   ./create-git-history-universal.sh "2023-04-10" "2024-08-12"
#   ./create-git-history-universal.sh "2022-01-01" "2023-12-31"
#
# Date format: YYYY-MM-DD
################################################################################

# Default dates if not provided
DEFAULT_START_DATE="2024-08-10"
DEFAULT_END_DATE="2025-05-12"

START_DATE="${1:-$DEFAULT_START_DATE}"
END_DATE="${2:-$DEFAULT_END_DATE}"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to convert date to timestamp
date_to_timestamp() {
  date -j -f "%Y-%m-%d %H:%M:%S" "$1" "+%s" 2>/dev/null || date -d "$1" "+%s" 2>/dev/null
}

# Function to commit files with specific date
commit_with_date() {
  local date=$1
  local message=$2
  shift 2
  local files=("$@")
  
  # Check if files exist before adding
  local files_to_add=()
  for file in "${files[@]}"; do
    if [ -e "$file" ] || [ -d "$file" ]; then
      files_to_add+=("$file")
    fi
  done
  
  # Skip if no files to add
  if [ ${#files_to_add[@]} -eq 0 ]; then
    echo -e "${YELLOW}⚠${NC} Skipped: $message (files not found)"
    return
  fi
  
  for file in "${files_to_add[@]}"; do
    git add "$file" 2>/dev/null
  done
  
  # Check if there's anything to commit
  if git diff --cached --quiet; then
    echo -e "${YELLOW}⚠${NC} Skipped: $message (no changes)"
    return
  fi
  
  GIT_AUTHOR_DATE="$date" \
  GIT_COMMITTER_DATE="$date" \
  git commit -m "$message" >/dev/null 2>&1
  
  echo -e "${GREEN}✓${NC} $date - $message"
}

# Function to generate commits based on project structure
generate_commits() {
  echo -e "${BLUE}Analyzing project structure...${NC}\n"
  
  # Phase 1: Project Setup (Day 1)
  local day1="$START_DATE 09:30:00"
  
  if [ -f "package.json" ]; then
    commit_with_date "$day1" "Initial commit: Project setup" \
      ".gitignore" "package.json" "README.md" "LICENSE"
  elif [ -f "requirements.txt" ]; then
    commit_with_date "$day1" "Initial commit: Project setup" \
      ".gitignore" "requirements.txt" "README.md" "LICENSE"
  elif [ -f "Gemfile" ]; then
    commit_with_date "$day1" "Initial commit: Project setup" \
      ".gitignore" "Gemfile" "README.md" "LICENSE"
  else
    commit_with_date "$day1" "Initial commit: Project setup" \
      ".gitignore" "README.md" "LICENSE"
  fi
  
  # Phase 2: Configuration Files (Day 1-2)
  local day1_afternoon="$START_DATE 14:15:00"
  
  # TypeScript/JavaScript configs
  if [ -f "tsconfig.json" ]; then
    commit_with_date "$day1_afternoon" "Add TypeScript configuration" "tsconfig.json"
  fi
  
  if [ -f ".eslintrc.json" ] || [ -f ".eslintrc.js" ]; then
    commit_with_date "$day1_afternoon" "Setup ESLint" \
      ".eslintrc.json" ".eslintrc.js" ".prettierrc.json" ".prettierignore"
  fi
  
  if [ -f "next.config.ts" ] || [ -f "next.config.js" ]; then
    local day2="$(date -v+1d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 1 day" "+%Y-%m-%d") 10:00:00"
    commit_with_date "$day2" "Configure Next.js" \
      "next.config.ts" "next.config.js" "next-env.d.ts"
  fi
  
  # Python configs
  if [ -f "setup.py" ] || [ -f "pyproject.toml" ]; then
    commit_with_date "$day1_afternoon" "Add Python configuration" \
      "setup.py" "pyproject.toml" "setup.cfg"
  fi
  
  # Environment files
  if [ -f ".env.example" ] || [ -f ".env.local.example" ]; then
    local day3="$(date -v+2d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 2 days" "+%Y-%m-%d") 11:30:00"
    commit_with_date "$day3" "Setup environment variables" \
      ".env.example" ".env.local.example"
  fi
  
  # Phase 3: Source Structure (Week 1)
  echo -e "\n${BLUE}Committing source files...${NC}\n"
  
  # Find and commit type definitions
  if [ -d "src/types" ] || [ -d "types" ]; then
    local day5="$(date -v+5d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 5 days" "+%Y-%m-%d") 10:00:00"
    commit_with_date "$day5" "Add base type definitions" \
      "src/types/" "types/"
  fi
  
  # Commit utility files
  if [ -d "src/utils" ] || [ -d "utils" ]; then
    local day7="$(date -v+7d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 7 days" "+%Y-%m-%d") 14:00:00"
    commit_with_date "$day7" "Add utility functions" \
      "src/utils/" "utils/"
  fi
  
  # Commit context/state management
  if [ -d "src/context" ]; then
    local day10="$(date -v+10d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 10 days" "+%Y-%m-%d") 09:00:00"
    commit_with_date "$day10" "Setup context providers" "src/context/"
  fi
  
  if [ -d "src/store" ]; then
    local day12="$(date -v+12d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 12 days" "+%Y-%m-%d") 10:30:00"
    commit_with_date "$day12" "Setup state management" "src/store/"
  fi
  
  # Commit components
  if [ -d "src/components" ]; then
    local day15="$(date -v+15d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 15 days" "+%Y-%m-%d") 09:30:00"
    commit_with_date "$day15" "Add core components" "src/components/"
  fi
  
  # Commit pages/routes
  if [ -d "src/app" ]; then
    local day20="$(date -v+20d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 20 days" "+%Y-%m-%d") 14:00:00"
    commit_with_date "$day20" "Setup application pages" "src/app/"
  elif [ -d "pages" ]; then
    local day20="$(date -v+20d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 20 days" "+%Y-%m-%d") 14:00:00"
    commit_with_date "$day20" "Setup application pages" "pages/"
  fi
  
  # Phase 4: Assets and Styles (Month 1)
  if [ -d "public" ]; then
    local day25="$(date -v+25d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 25 days" "+%Y-%m-%d") 10:00:00"
    commit_with_date "$day25" "Add public assets" "public/"
  fi
  
  if [ -d "src/styles" ] || [ -f "src/app/globals.css" ]; then
    local day27="$(date -v+27d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 27 days" "+%Y-%m-%d") 11:30:00"
    commit_with_date "$day27" "Add global styles" \
      "src/styles/" "src/app/globals.css"
  fi
  
  # Phase 5: Backend/API (Month 2)
  if [ -d "src/lib" ]; then
    local day35="$(date -v+35d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 35 days" "+%Y-%m-%d") 09:00:00"
    commit_with_date "$day35" "Add library integrations" "src/lib/"
  fi
  
  if [ -d "src/app/api" ] || [ -d "api" ]; then
    local day40="$(date -v+40d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 40 days" "+%Y-%m-%d") 14:30:00"
    commit_with_date "$day40" "Implement API routes" \
      "src/app/api/" "api/"
  fi
  
  # Phase 6: Database/Schemas (Month 2)
  if [ -d "schemas" ] || [ -d "prisma" ]; then
    local day45="$(date -v+45d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 45 days" "+%Y-%m-%d") 10:00:00"
    commit_with_date "$day45" "Add database schemas" \
      "schemas/" "prisma/"
  fi
  
  # Phase 7: Scripts and Tools (Month 3)
  if [ -d "scripts" ]; then
    local day60="$(date -v+60d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 60 days" "+%Y-%m-%d") 11:00:00"
    commit_with_date "$day60" "Add utility scripts" "scripts/"
  fi
  
  # Phase 8: Localization (Month 3-4)
  if [ -d "src/locales" ] || [ -d "locales" ] || [ -d "public/locales" ]; then
    local day70="$(date -v+70d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 70 days" "+%Y-%m-%d") 09:30:00"
    commit_with_date "$day70" "Setup internationalization" \
      "src/i18n/" "src/locales/" "locales/" "public/locales/"
  fi
  
  # Phase 9: Tests (Month 4)
  if [ -d "tests" ] || [ -d "__tests__" ] || [ -d "test" ]; then
    local day90="$(date -v+90d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 90 days" "+%Y-%m-%d") 14:00:00"
    commit_with_date "$day90" "Add test suite" \
      "tests/" "__tests__/" "test/"
  fi
  
  # Phase 10: Documentation (Month 5)
  if [ -d "docs" ]; then
    local day120="$(date -v+120d -j -f "%Y-%m-%d" "$START_DATE" "+%Y-%m-%d" 2>/dev/null || date -d "$START_DATE + 120 days" "+%Y-%m-%d") 10:00:00"
    commit_with_date "$day120" "Add project documentation" "docs/"
  fi
  
  # Final: Commit any remaining files near the end date
  echo -e "\n${BLUE}Committing remaining files...${NC}\n"
  
  local final_date="$END_DATE 16:00:00"
  
  # Check for remaining untracked files
  if [ -n "$(git status --porcelain)" ]; then
    commit_with_date "$final_date" "Add remaining project files and configurations" "."
  fi
}

# Main execution
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}🔨 Universal Git History Creator${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

echo -e "${CYAN}Configuration:${NC}"
echo -e "  Start Date: ${GREEN}$START_DATE${NC}"
echo -e "  End Date: ${GREEN}$END_DATE${NC}"
echo -e "  Project: ${GREEN}$(pwd)${NC}\n"

# Validate git repository
if [ ! -d ".git" ]; then
  echo -e "${RED}✗ Error: Not a git repository${NC}"
  echo -e "  Run: ${CYAN}git init${NC} first\n"
  exit 1
fi

# Confirm before proceeding
echo -e "${YELLOW}⚠ Warning: This will create commits with backdated timestamps${NC}"
echo -e "${YELLOW}  Press ENTER to continue or Ctrl+C to cancel${NC}"
read -r

echo -e "\n${BLUE}Generating commits...${NC}\n"

# Generate commits based on project structure
generate_commits

# Summary
echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✓ Git history created successfully!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

echo -e "${CYAN}Statistics:${NC}"
echo -e "  Total commits: ${GREEN}$(git rev-list --count HEAD)${NC}"
echo -e "  First commit: ${GREEN}$(git log --reverse --pretty=format:"%ad" --date=format:'%Y-%m-%d %H:%M' | head -1)${NC}"
echo -e "  Last commit: ${GREEN}$(git log --pretty=format:"%ad" --date=format:'%Y-%m-%d %H:%M' | head -1)${NC}\n"

echo -e "${CYAN}View history:${NC}"
echo -e "  ${YELLOW}git log --oneline --graph --all${NC}"
echo -e "  ${YELLOW}git log --pretty=format:\"%h - %ad - %s\" --date=format:'%Y-%m-%d %H:%M'${NC}\n"
