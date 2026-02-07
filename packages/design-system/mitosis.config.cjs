/**
 * Mitosis Configuration for Atamai AI Design System
 * Compiles .lite.tsx components to Svelte
 */

module.exports = {
  files: 'src/components/**/*.lite.tsx',
  targets: ['svelte'],
  options: {
    svelte: {
      typescript: true,
      stateType: 'variables',
      prettier: true,
      api: 'default'
    }
  },
  dest: '../design-system-svelte/src/components'
};
