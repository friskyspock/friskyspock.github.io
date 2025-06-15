# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
# Install dependencies
bundle install

# Serve locally with live reload (most common command)
bundle exec jekyll serve

# Build the site
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean
```

### Deployment
The site automatically deploys to GitHub Pages when pushing to the `gh-pages` branch via GitHub Actions.

## Architecture Overview

### Jekyll Configuration
- **Theme**: Custom theme based on "Forty" by HTML5 UP
- **Collections**: `notes` collection for wiki-style knowledge base
- **Markdown**: Kramdown with GFM, KaTeX math support, and Mermaid diagrams
- **Plugins**: jekyll-feed, jekyll-sitemap, jekyll-tidy, kramdown-mermaid

### Key Directories
- `_data/`: YAML data files for resume, portfolio, and settings
- `_notes/`: Knowledge base content with bidirectional linking
- `_plugins/`: Custom Ruby plugins for wiki-style links and front matter injection
- `_sass/`: Custom SCSS for individual pages
- `assets/sass/`: Main SCSS framework (Forty theme)

### Custom Features

#### Bidirectional Links System
The site implements a wiki-style linking system through `_plugins/bidirectional_links_generator.rb`:
- Converts `[[Note Title]]` to HTML links
- Supports `[[Note Title|Custom Label]]` syntax
- Generates backlinks and a connection graph
- Non-existent notes render as disabled links

#### Data-Driven Content
- **Resume**: Data from `_data/resume.yml` populates resume.html
- **Portfolio**: Projects from `_data/portfolio.yml` with tag-based filtering
- **Settings**: Site configuration in `_data/settings.yml`

### Styling System
- Base theme: Forty by HTML5 UP with extensive customization
- Modular SCSS with clear component separation
- Page-specific styles in `_sass/` directory
- Responsive design with mobile-first approach
- Fixed sidebar (25% width) with main content area (75%)

### JavaScript Dependencies
- jQuery and related plugins for UI interactions
- Custom scripts for theme functionality
- HTML to PDF conversion for resume download

## Important Notes

- Always use `bundle exec` prefix for Jekyll commands to ensure correct gem versions
- The site uses Jekyll 4.3 with specific gem dependencies
- GitHub Actions handles deployment - no manual deployment needed
- When modifying SCSS, changes are in both `assets/sass/` (theme) and `_sass/` (custom)
- The notes system requires proper front matter in all markdown files (handled automatically by plugin)