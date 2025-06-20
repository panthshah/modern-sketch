# 🎨 Sketch Measure Pro

> A modern, fun design measurement & annotation tool for Sketch - Built for the future!

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/your-username/sketch-measure-pro)
[![Sketch](https://img.shields.io/badge/sketch-80%2B-orange.svg)](https://www.sketch.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**Sketch Measure Pro** is a completely rewritten, modern measurement plugin that brings joy back to design specification creation. Built with TypeScript, modern APIs, and a focus on user experience.

## ✨ Features

### 🎯 Quick Measurements
- **One-click measurements** for selected layers
- **Smart spacing detection** between elements
- **Instant dimension display** with customizable units

### 📐 Advanced Tools
- **Measure Panel** - Comprehensive measurement interface
- **Smart Dimensions** - Auto-detect spacing and dimensions
- **Spacing Inspector** - Analyze spacing patterns
- **Coordinates** - Precise positioning display

### 🎨 Design Integration
- **Color Palette** - Extract all colors from your design
- **Smart Notes** - Contextual annotations
- **Theme Support** - Light, dark, and auto themes
- **Modern UI** - Beautiful, intuitive interface

### 📱 Export & Handoff
- **Multiple formats** - HTML, JSON, CSS, Swift, Flutter
- **Developer handoff** - Generated code snippets
- **Asset export** - Include design assets
- **Collaboration** - Shareable measurement links

## 🚀 Installation

### Option 1: Download Release
1. Download the latest `.sketchplugin` from [Releases](https://github.com/your-username/sketch-measure-pro/releases)
2. Double-click to install in Sketch

### Option 2: Build from Source
```bash
# Clone the repository
git clone https://github.com/your-username/sketch-measure-pro.git
cd sketch-measure-pro

# Install dependencies
npm install

# Build the plugin
npm run build

# Install in Sketch
npm run postinstall
```

## 🎮 Usage

### Quick Start
1. **Select layers** in your Sketch document
2. **Press `Ctrl+Shift+M`** for instant measurements
3. **Toggle overlays** with `Ctrl+Shift+O`

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+M` | Quick Measure |
| `Ctrl+Shift+P` | Measure Panel |
| `Ctrl+Shift+D` | Smart Dimensions |
| `Ctrl+Shift+S` | Spacing Inspector |
| `Ctrl+Shift+C` | Color Palette |
| `Ctrl+Shift+N` | Smart Notes |
| `Ctrl+Shift+X` | Coordinates |
| `Ctrl+Shift+E` | Export Specs |
| `Ctrl+Shift+O` | Toggle Overlays |
| `Ctrl+Shift+T` | Theme Toggle |
| `Ctrl+Shift+Backspace` | Clear All |

## ⚙️ Configuration

Access settings via the plugin menu or `Ctrl+Shift+S`:

- **Themes**: Light, Dark, Auto
- **Units**: px, pt, rem, em
- **Precision**: Decimal places
- **Export formats**: HTML, JSON, CSS, Swift, Flutter
- **Visual styles**: Modern, Classic, Minimal

## 🛠️ Development

### Prerequisites
- Node.js 16+
- Sketch 80+
- TypeScript 5+

### Setup
```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

### Project Structure
```
src/
├── main.ts              # Entry point
├── utils/               # Utilities
│   ├── sketch-api.ts    # Sketch API wrapper
│   └── logger.ts        # Logging system
├── core/                # Core managers
│   ├── config-manager.ts
│   ├── theme-manager.ts
│   ├── overlay-manager.ts
│   └── help-manager.ts
└── features/            # Feature implementations
    ├── quick-measure.ts
    ├── measure-panel.ts
    ├── smart-dimensions.ts
    ├── spacing-inspector.ts
    ├── color-palette.ts
    ├── smart-notes.ts
    ├── coordinates.ts
    └── spec-exporter.ts
```

## 🎨 Architecture

**Sketch Measure Pro** is built with modern software architecture principles:

- **TypeScript** for type safety and better DX
- **Modular design** with clear separation of concerns
- **Theme system** with beautiful color schemes
- **Error handling** and graceful degradation
- **Extensible** plugin architecture
- **Modern ES2020** features

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original Sketch MeaXure** - Inspiration for the concept
- **Sketch Team** - For the awesome design tool and APIs
- **Design Community** - For feedback and feature requests

## 💬 Support

- 📖 [Documentation](https://github.com/your-username/sketch-measure-pro/wiki)
- 🐛 [Report Issues](https://github.com/your-username/sketch-measure-pro/issues)
- 💬 [Discussions](https://github.com/your-username/sketch-measure-pro/discussions)
- 📧 [Email Support](mailto:hello@sketchmeasurepro.com)

---

<div align="center">

**Built with ❤️ for the design community**

[Website](https://sketchmeasurepro.com) • [Documentation](https://docs.sketchmeasurepro.com) • [Twitter](https://twitter.com/sketchmeasurepro)

</div>
