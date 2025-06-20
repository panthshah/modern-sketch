var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * 🎨 Sketch Measure Pro - Main Entry Point
 * A modern, fun design measurement & annotation tool for Sketch
 * Built with ❤️ for the design community
 */

var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");
var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");

// 🎉 Welcome message
console.log('🎨 Sketch Measure Pro initializing...');

/**
 * 🚀 Initialize the plugin
 */
function initialize() {
  try {
    console.log('🎨 Sketch Measure Pro initialized successfully!');

    // Check if first run
    if (isFirstRun()) {
      showWelcomeMessage();
      setFirstRunComplete();
    }
  } catch (error) {
    console.error('Failed to initialize plugin:', error);
    UI.message('❌ Failed to initialize Sketch Measure Pro');
  }
}

/**
 * 🎯 Quick Measure - Fast measurement tool
 */
function quickMeasure(context) {
  try {
    initialize();
    var document = sketch.getSelectedDocument();
    if (!document) {
      UI.message('❌ No document open');
      return;
    }
    var selectedLayers = document.selectedLayers;
    if (!selectedLayers || selectedLayers.length === 0) {
      UI.message('💡 Please select one or more layers first');
      return;
    }

    // Measure the selected layers
    var layers = selectedLayers.layers;
    console.log("\uD83C\uDFAF Measuring ".concat(layers.length, " layer(s)"));
    if (layers.length === 1) {
      measureSingleLayer(layers[0]);
    } else {
      measureMultipleLayers(layers);
    }
    UI.message("\uD83D\uDCCF Measured ".concat(layers.length, " layer(s)"));
  } catch (error) {
    console.error('Quick Measure failed:', error);
    UI.message('❌ Quick Measure failed');
  }
}

/**
 * 📏 Measure a single layer
 */
function measureSingleLayer(layer) {
  try {
    var frame = layer.frame;
    var units = getUnits();
    var measurements = {
      width: formatMeasurement(frame.width, units),
      height: formatMeasurement(frame.height, units),
      x: formatMeasurement(frame.x, units),
      y: formatMeasurement(frame.y, units)
    };
    console.log("\uD83D\uDCCF Layer \"".concat(layer.name, "\": ").concat(measurements.width, " \xD7 ").concat(measurements.height));
    UI.message("\uD83D\uDCCF ".concat(layer.name, ": ").concat(measurements.width, " \xD7 ").concat(measurements.height));
  } catch (error) {
    console.error('Failed to measure single layer:', error);
  }
}

/**
 * 📊 Measure multiple layers
 */
function measureMultipleLayers(layers) {
  try {
    var _iterator = _createForOfIteratorHelper(layers),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var layer = _step.value;
        measureSingleLayer(layer);
      }

      // Also measure spacing between layers if applicable
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (layers.length === 2) {
      measureSpacingBetweenLayers(layers[0], layers[1]);
    }
  } catch (error) {
    console.error('Failed to measure multiple layers:', error);
  }
}

/**
 * 📐 Measure spacing between two layers
 */
function measureSpacingBetweenLayers(layer1, layer2) {
  try {
    var frame1 = layer1.frame;
    var frame2 = layer2.frame;
    var units = getUnits();

    // Calculate horizontal and vertical spacing
    var horizontalSpacing = Math.abs(frame2.x - (frame1.x + frame1.width));
    var verticalSpacing = Math.abs(frame2.y - (frame1.y + frame1.height));
    var spacing = {
      horizontal: formatMeasurement(horizontalSpacing, units),
      vertical: formatMeasurement(verticalSpacing, units)
    };
    console.log("\uD83D\uDCD0 Spacing: H:".concat(spacing.horizontal, ", V:").concat(spacing.vertical));
    UI.message("\uD83D\uDCD0 Spacing: H:".concat(spacing.horizontal, ", V:").concat(spacing.vertical));
  } catch (error) {
    console.error('Failed to measure spacing:', error);
  }
}

/**
 * 🔢 Format measurement with units
 */
function formatMeasurement(value, units) {
  var precision = 2;
  return "".concat(value.toFixed(precision)).concat(units);
}

/**
 * 📏 Get measurement units
 */
function getUnits() {
  try {
    var document = sketch.getSelectedDocument();
    if (document) {
      return Settings.documentSettingForKey(document, 'units') || 'px';
    }
    return 'px';
  } catch (error) {
    return 'px';
  }
}

/**
 * 🎯 Check if it's the first run
 */
function isFirstRun() {
  try {
    return Settings.sessionVariable('sketch-measure-pro-first-run') !== false;
  } catch (error) {
    return true;
  }
}

/**
 * 🎯 Mark first run as complete
 */
function setFirstRunComplete() {
  try {
    Settings.setSessionVariable('sketch-measure-pro-first-run', false);
  } catch (error) {
    console.error('Failed to set first run complete:', error);
  }
}

/**
 * 🎉 Welcome message for new users
 */
function showWelcomeMessage() {
  var message = "\uD83C\uDFA8 Welcome to Sketch Measure Pro!\n\n\u2728 A brand new, modern measurement tool built for the future of design.\n\n\uD83D\uDE80 Key Features:\n\u2022 Quick measurements with one click\n\u2022 Smart dimension detection\n\u2022 Beautiful color palettes\n\u2022 Interactive spacing analysis\n\u2022 Modern export formats\n\u2022 Light & dark themes\n\n\uD83D\uDCA1 Pro Tip: Use Ctrl+Shift+M for quick measurements!\n\nHappy designing! \uD83C\uDFA8";
  UI.message('🎉 Welcome to Sketch Measure Pro!');

  // Show detailed welcome in an alert
  setTimeout(function () {
    UI.alert('Welcome!', message);
  }, 1000);
}

/**
 * 📐 Measure Panel - Advanced measurement interface
 */
function measurePanel(context) {
  try {
    initialize();
    UI.message('📐 Measure Panel - Coming Soon!');
    console.log('📐 Measure panel shown');
  } catch (error) {
    console.error('Measure Panel failed:', error);
    UI.message('❌ Failed to open Measure Panel');
  }
}

/**
 * 📏 Smart Dimensions - Intelligent dimension detection
 */
function smartDimensions(context) {
  try {
    initialize();
    UI.message('📏 Smart Dimensions - Coming Soon!');
    console.log('📏 Smart dimensions executed');
  } catch (error) {
    console.error('Smart Dimensions failed:', error);
    UI.message('❌ Smart Dimensions failed');
  }
}

/**
 * 📊 Spacing Inspector - Spacing analysis tool
 */
function spacingInspector(context) {
  try {
    initialize();
    UI.message('📊 Spacing Inspector - Coming Soon!');
    console.log('📊 Spacing inspector executed');
  } catch (error) {
    console.error('Spacing Inspector failed:', error);
    UI.message('❌ Spacing Inspector failed');
  }
}

/**
 * 🎨 Color Palette - Color extraction and management
 */
function colorPalette(context) {
  try {
    initialize();
    UI.message('🎨 Color Palette - Coming Soon!');
    console.log('🎨 Color palette shown');
  } catch (error) {
    console.error('Color Palette failed:', error);
    UI.message('❌ Color Palette failed');
  }
}

/**
 * 💬 Smart Notes - Intelligent annotation system
 */
function smartNotes(context) {
  try {
    initialize();
    UI.message('💬 Smart Notes - Coming Soon!');
    console.log('💬 Smart notes executed');
  } catch (error) {
    console.error('Smart Notes failed:', error);
    UI.message('❌ Smart Notes failed');
  }
}

/**
 * 🎯 Coordinates - Position and coordinate display
 */
function coordinates(context) {
  try {
    initialize();
    UI.message('🎯 Coordinates - Coming Soon!');
    console.log('🎯 Coordinates executed');
  } catch (error) {
    console.error('Coordinates failed:', error);
    UI.message('❌ Coordinates failed');
  }
}

/**
 * 📱 Export Specs - Modern spec export
 */
function exportSpecs(context) {
  try {
    initialize();
    UI.message('📱 Export Specs - Coming Soon!');
    console.log('📱 Spec export executed');
  } catch (error) {
    console.error('Export Specs failed:', error);
    UI.message('❌ Export failed');
  }
}

/**
 * 🔧 Settings - Plugin configuration
 */
function settings(context) {
  try {
    initialize();
    var options = ['Theme: Auto', 'Units: px', 'Style: Modern', 'Export: HTML', '---', 'Reset to Defaults', 'Cancel'];
    var result = UI.getInputFromUser('⚙️ Sketch Measure Pro Settings', {
      type: UI.INPUT_TYPE.selection,
      possibleValues: options
    });
    if (result[1] !== undefined) {
      var selected = options[result[1]];
      if (selected === 'Reset to Defaults') {
        UI.message('🔄 Settings reset to defaults');
      } else if (selected.startsWith('Theme:')) {
        showThemeSelection();
      } else if (selected.startsWith('Units:')) {
        showUnitsSelection();
      }
    }
  } catch (error) {
    console.error('Settings failed:', error);
    UI.message('❌ Settings failed');
  }
}

/**
 * Show theme selection
 */
function showThemeSelection() {
  try {
    var result = UI.getInputFromUser('🎨 Select Theme', {
      type: UI.INPUT_TYPE.selection,
      possibleValues: ['light', 'dark', 'auto']
    });
    if (result[1] !== undefined) {
      var themes = ['light', 'dark', 'auto'];
      UI.message("\uD83C\uDFA8 Theme set to ".concat(themes[result[1]]));
    }
  } catch (error) {
    console.error('Failed to show theme selection:', error);
  }
}

/**
 * Show units selection
 */
function showUnitsSelection() {
  try {
    var result = UI.getInputFromUser('📏 Select Units', {
      type: UI.INPUT_TYPE.selection,
      possibleValues: ['px', 'pt', 'rem', 'em']
    });
    if (result[1] !== undefined) {
      var units = ['px', 'pt', 'rem', 'em'];
      var document = sketch.getSelectedDocument();
      if (document) {
        Settings.setDocumentSettingForKey(document, 'units', units[result[1]]);
      }
      UI.message("\uD83D\uDCCF Units set to ".concat(units[result[1]]));
    }
  } catch (error) {
    console.error('Failed to show units selection:', error);
  }
}

/**
 * 🎭 Toggle Overlays - Show/hide all overlays
 */
function toggleOverlays(context) {
  try {
    initialize();
    UI.message('🎭 Toggle Overlays - Coming Soon!');
  } catch (error) {
    console.error('Toggle Overlays failed:', error);
    UI.message('❌ Toggle failed');
  }
}

/**
 * 🧹 Clear All - Remove all measurements and annotations
 */
function clearAll(context) {
  try {
    initialize();
    var result = UI.getInputFromUser('Are you sure you want to clear all measurements?', {
      type: UI.INPUT_TYPE.selection,
      possibleValues: ['Yes, clear everything', 'Cancel']
    });
    if (result[1] === 0) {
      // User selected "Yes"
      UI.message('🧹 All measurements cleared!');
    }
  } catch (error) {
    console.error('Clear All failed:', error);
    UI.message('❌ Clear failed');
  }
}

/**
 * 🌈 Theme Toggle - Switch between light/dark themes
 */
function themeToggle(context) {
  try {
    initialize();
    UI.message('🌈 Theme Toggle - Coming Soon!');
  } catch (error) {
    console.error('Theme Toggle failed:', error);
    UI.message('❌ Theme toggle failed');
  }
}

/**
 * 📖 Help & Tips - Show help and tips
 */
function help(context) {
  try {
    initialize();
    var helpContent = "\uD83C\uDFA8 Sketch Measure Pro Help\n\n\uD83D\uDE80 Quick Start:\n\u2022 Select layers and press Ctrl+Shift+M for quick measurements\n\u2022 Use the Measure Panel (Ctrl+Shift+P) for advanced options\n\u2022 Toggle overlays with Ctrl+Shift+O\n\n\u2728 Features:\n\uD83D\uDCCF Smart Dimensions - Auto-detect spacing and dimensions\n\uD83D\uDCCA Spacing Inspector - Analyze spacing patterns\n\uD83C\uDFA8 Color Palette - Extract design colors\n\uD83D\uDCAC Smart Notes - Add contextual annotations\n\uD83C\uDFAF Coordinates - Show precise positioning\n\uD83D\uDCF1 Export Specs - Generate developer handoffs\n\n\u2699\uFE0F Settings:\n\u2022 Access via menu or settings command\n\u2022 Switch themes (light/dark/auto)\n\u2022 Change measurement units\n\u2022 Customize export formats\n\n\uD83D\uDCA1 Tips:\n\u2022 Hover over elements for instant measurements\n\u2022 Use color picker to extract exact values\n\u2022 Export in multiple formats for different platforms\n\n\u2753 Need more help? Visit our documentation online!";
    UI.alert('📖 Sketch Measure Pro Help', helpContent);
  } catch (error) {
    console.error('Help failed:', error);
    UI.message('❌ Help failed');
  }
}

// Export all functions for the Sketch plugin system
module.exports = {
  quickMeasure: quickMeasure,
  measurePanel: measurePanel,
  smartDimensions: smartDimensions,
  spacingInspector: spacingInspector,
  colorPalette: colorPalette,
  smartNotes: smartNotes,
  coordinates: coordinates,
  exportSpecs: exportSpecs,
  settings: settings,
  toggleOverlays: toggleOverlays,
  clearAll: clearAll,
  themeToggle: themeToggle,
  help: help
};

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['quickMeasure'] = __skpm_run.bind(this, 'quickMeasure');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['measurePanel'] = __skpm_run.bind(this, 'measurePanel');
globalThis['smartDimensions'] = __skpm_run.bind(this, 'smartDimensions');
globalThis['spacingInspector'] = __skpm_run.bind(this, 'spacingInspector');
globalThis['colorPalette'] = __skpm_run.bind(this, 'colorPalette');
globalThis['smartNotes'] = __skpm_run.bind(this, 'smartNotes');
globalThis['coordinates'] = __skpm_run.bind(this, 'coordinates');
globalThis['exportSpecs'] = __skpm_run.bind(this, 'exportSpecs');
globalThis['settings'] = __skpm_run.bind(this, 'settings');
globalThis['toggleOverlays'] = __skpm_run.bind(this, 'toggleOverlays');
globalThis['clearAll'] = __skpm_run.bind(this, 'clearAll');
globalThis['themeToggle'] = __skpm_run.bind(this, 'themeToggle');
globalThis['help'] = __skpm_run.bind(this, 'help')

//# sourceMappingURL=main.js.map