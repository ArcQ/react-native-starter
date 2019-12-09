module.exports = {
  excludes: [
    '**/test/**',
    './build/**',
  ],
  sortImports: false,
  danglingCommas: true,
  useRelativePaths: false,
  namedExports: {
    react: [
      'Fragment',
      'Component',
      'useEffect',
      'useRef',
      'useContext',
      'useMemo',
      'useState',
    ],
  },
  aliases: {
    PropTypes: 'third-party-libs/prop-types',
  },
  moduleNameFormatter({ moduleName, pathToCurrentFile }) {
    if (moduleName.startsWith('src/')) {
      // Add a leading slash to foo imports
      return `${moduleName.split('src/')[1]}`;
    }

    if (moduleName.startsWith('third-party-libs/')) {
      // Add a leading slash to foo imports
      return `${moduleName.split('third-party-libs/')[1]}`;
    }

    // Fall back to the original specifier. It's important that this function
    // always returns a string.
    return moduleName;
  },
}
