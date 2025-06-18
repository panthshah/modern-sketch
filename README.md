# Sketch MeaXure Plugin

A Sketch plugin for exporting and measuring design elements.

## Quick Start

### Option 1: Direct Download
1. Download the latest plugin: [sketch-meaxure.sketchplugin](sketch-meaxure.sketchplugin)
2. Double-click the downloaded file to install in Sketch
3. Restart Sketch if it's already running

### Option 2: Build from Source

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Sketch](https://www.sketch.com/) (Latest version)
- [skpm](https://github.com/skpm/skpm) (Sketch Plugin Manager)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd sketch-meaxure
```

2. Install dependencies:
```bash
npm install
```

3. Build the plugin:
```bash
npm run build
```

4. Link the plugin to Sketch:
```bash
skpm-link
```

## Development

- To start development:
```bash
npm run watch
```

- To build for production:
```bash
npm run build
```

## Troubleshooting

If Sketch freezes:
1. Force quit Sketch
2. Delete the plugin from Sketch's plugin folder
3. Rebuild and relink the plugin

## Project Structure

- `src/meaxure/` - Main plugin code
  - `export/` - Export functionality
  - `common/` - Shared utilities
  - `helpers/` - Helper functions
- `src/ui/` - UI components
- `scripts/` - Build scripts

## Notes

- The plugin requires Sketch's developer mode to be enabled
- Make sure to have the latest version of Sketch installed
- If you encounter TypeScript errors related to React, they can be safely ignored as they don't affect the plugin's functionality

## Support

For any issues or questions, please contact the development team.

# Sketch MeaXure

> Thanks [@utom](https://github.com/utom) for his great work, `Sketch Measure` is really a life saver when I share design specifications to co-workers.
> But it lack of maintenance in recent year, that's why I start this project.

Sketch MeaXure is a re-implemention of `Sketch Measure` with TypeScript, uses Sketch JavaScript API. 

It aims to be:

1. More stable, not likely to break down after Sketch update.
1. Easy to maintain.

## Improvements

Improvements that users can recognize:

1. Fully works with lastest version of Sketch (v66).
1. The latest `Tint` feature support.
1. Easily resize markers, without concerns to break them. (The `resizing constrain` feature).
1. Export directly with `Anima stacks` activated.
1. Customize the order of exported artboards.
1. Better display of text fragments.
1. Re-organize functions and panels.

## Notice

If you encounter problems managing (toggle hidden/locked, remove, and export) markers created by Sketch Measure, run the menu `Plugin - Sketch MeaXure - Help - Rename Old Markers`.

## Installation

- [Download](https://github.com/qjebbs/sketch-meaxure/releases/latest/download/sketch-meaxure.sketchplugin.zip) the latest release of the plugin
- Un-zip
- Double-click on Sketch-Meaxure.sketchplugin
