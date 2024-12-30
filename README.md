# Name Check

> Wouldn't it be nice to have a command-line tool to check if an NPM package name is available for use?

A command-line tool to check if an NPM package name is available for use.

## Features

- 🔍 Check if a package name is available on npm
- 🎨 Colorful console output
- 🔗 Direct link to npm package page if name is taken
- ✅ Simple and easy to use

## Installation

```bash
npm install -g namecheck
# or
pnpm add -g namecheck
```

## Usage

```bash
namecheck <package-name>
```

### Examples

```bash
# Check if "my-npm-package" is available
namecheck my-npm-package

# Check if "react" is available
namecheck react
```

### Terminal Output

When a package name is available:

```
✓ The package name 'my-npm-package' is available!
```

When a package name is taken:

```
✗ The package name 'react' is already taken.
View it at: https://www.npmjs.com/package/react
```

## Development

### Prerequisites

- Node.js >= 14
- pnpm (recommended) or npm

### Setup

1. Clone the repository

```bash
git clone <repository-url>
cd namecheck
```

2. Install dependencies

```bash
npm install
#or
pnpm install
```

### Testing

Run the test suite:

```bash
pnpm test
```

## License

MIT © [Mitul Patel](https://mitulpa.tel)
