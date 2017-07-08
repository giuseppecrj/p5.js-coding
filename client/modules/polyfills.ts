// -----------------------------
// Application Polyfills
// -----------------------------
// example: import 'core-js'

// -----------------------------
// Import Svg
// -----------------------------
var __svg__ = { path: './core/icons/**/*.svg', name: 'icons/all.svg' }
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__)
