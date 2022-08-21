const { src, dest, watch, series } = require("gulp");
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require("vinyl-buffer");
const terser = require("gulp-terser");
const sass = require('gulp-sass')(require('sass'))
const minifyCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const { mozjpeg, optipng, svgo} = imagemin;
const webp = require("gulp-webp");
const clean = require('gulp-clean');
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();

const PATHS = {
  dist: './dist',
  html: './src/*.html',
  js: [
    './src/js/main.js',
  ],
  sass: './src/scss/**/*.scss',
  imgs: './src/assets/imgs/*',
  'vendor.js': [
    '.src/js/vendor'
  ],
  'vendor.css': './src/scss/vendor/vendor.scss',
  fonts: './src/assets/fonts/*'
}

// clean
const cleanDist = () => {
  return src(`${PATHS['dist']}/`, { 
      allowEmpty: true, 
      read: false 
    })
    .pipe(clean({ force: true }));
}

// move html files
const moveHTML = () => {
  return src(PATHS['html'], { allowEmpty: true })
    .pipe(dest(PATHS['dist']))
    .pipe(browserSync.stream());
}

const moveFonts = () => {
  return src(PATHS['fonts'], { allowEmpty: true })
    .pipe(dest(`${PATHS['dist']}/assets/fonts`))
    .pipe(browserSync.stream());
}

const vendorCSS = () => {
  return src(PATHS['vendor.css'], { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(rename('vendor.bundle.css'))
    .pipe(dest(`${PATHS['dist']}/css/vendor`))
    .pipe(browserSync.stream());
}

// js
const compileJS = () => {
  let b = browserify({
    basedir: ".",
    debug: true,
    entries: PATHS['js'],
    cache: {},
    packageCache: {},
  })
  .transform("babelify", {
    presets: ["es2015"],
    extensions: [".js"],
  });

  return b.bundle()
    .pipe(source("main.bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(dest(`${PATHS['dist']}/js`))
    .pipe(browserSync.stream());
}

// sass
const compileSass = () => {
  return src('./src/scss/main.scss', { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({ 
      grid: 'autoplace' 
    }))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(rename(path => {
      path.basename += ".min";
    }))
    .pipe(dest(`${PATHS['dist']}/css`))
    .pipe(browserSync.stream());
}

// minify imgs
const minifyImgs = () => {
  return src(PATHS['imgs'], { allowEmpty: true })
    .pipe(imagemin([
      mozjpeg({ quality: 90, progressive: true }),
      optipng({ optimizationLevel: 2 }),
      svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: true
          },
          {
            name: 'cleanupIDs',
            active: false
          }
        ]})
      ]))
    .pipe(dest(`${PATHS['dist']}/assets/imgs`))
    .pipe(browserSync.stream());
}

// transform imgs to webp ext.
const webpImgs = () => {
  let minifiedImgs = `${PATHS['dist']}/assets/imgs`;
  return src(`${minifiedImgs}/*`, { allowEmpty: true })
    .pipe(webp())
    .pipe(dest(minifiedImgs))
    .pipe(browserSync.stream());
}

// watch
const watchTasks = () => {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    },
    port: process.env.PORT || 5000
  });

  watch(PATHS['fonts'], moveFonts);
  watch(PATHS['html'], moveHTML);
  // watch(PATHS['vendor.js'], vendorJS);
  watch(PATHS['vendor.css'], vendorCSS);
  watch(PATHS['sass'], compileSass);
  watch('./src/js/**/*.js', compileJS);
  watch(PATHS['imgs'], minifyImgs);
}

// default
exports.default = series(
  cleanDist,
  moveFonts,
  moveHTML,
  // vendorJS,
  vendorCSS,
  compileJS,
  compileSass,
  minifyImgs,
  webpImgs,
  watchTasks
);

// build
exports.build = series(
  cleanDist,
  moveFonts,
  moveHTML,
  // vendorJS,
  vendorCSS,
  compileSass,
  compileJS,
  minifyImgs,
  webpImgs
);