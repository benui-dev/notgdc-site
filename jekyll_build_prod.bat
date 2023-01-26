@echo off
set JEKYLL_ENV=production
bundle exec jekyll build && npm run minify && set JEKYLL_ENV=development