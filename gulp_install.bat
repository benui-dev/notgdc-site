@echo off
call npm install gulp && (
call npm install --global gulp-cli && (
call npm install --save-dev gulp-htmlmin gulp-uglify gulp-clean-css))