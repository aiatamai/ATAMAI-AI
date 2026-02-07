# Atamai AI Design System

A write-once-run-anywhere component library built with [Mitosis](https://github.com/BuilderIO/mitosis).

## 🎨 Components

### Foundation Components (7)
- **Button** - Multi-variant button (primary, secondary, ghost, gradient)
- **Card** - Container with glassmorphism effect
- **Input** - Form input with validation
- **Select** - Dropdown select with options
- **Checkbox** - Styled checkbox
- **Modal** - Dialog with backdrop
- **Badge** - Status labels

### Landing Page Components (8)
- **Hero** - Hero section with CTAs
- **FeatureCard** - Feature showcase card
- **FeatureGrid** - Responsive grid layout
- **Navigation** - Fixed header with glassmorphism
- **Footer** - Footer with link sections
- **Container** - Max-width wrapper
- **Section** - Full-width section wrapper
- **GradientText** - Gradient text effect

## 🚀 Development Workflow

### Prerequisites
- Node.js 20+
- npm or pnpm

### Initial Setup

```bash
# Install dependencies (from root)
npm install

# Install design system dependencies
cd packages/design-system
npm install
```

### Development Mode

Run both Mitosis compilation and SvelteKit dev server:

```bash
# From root directory
npm run dev
```

This runs:
- **Mitosis watch mode** - Auto-compiles `.lite.tsx` → `.svelte` on file changes
- **Vite dev server** - Hot-reloads when compiled `.svelte` files change

### Manual Compilation

```bash
# Compile once
cd packages/design-system
npm run build

# Watch mode
npm run dev
```

Compiled output: `packages/design-system-svelte/src/components/*.svelte`

## 📦 Build Process

### Production Build

```bash
# From root directory
npm run build
```

This:
1. Compiles Mitosis components (`.lite.tsx` → `.svelte`)
2. Fetches Pyodide
3. Builds SvelteKit app with compiled components

### Build Output
- **Mitosis compiled:** `packages/design-system-svelte/src/components/`
- **SvelteKit build:** `build/`

## 🎯 Using Components

### In Svelte/SvelteKit

```svelte
<script>
  import { Button, Hero, Card } from '$lib/design-system';
  // or
  import Button from '$lib/design-system/Button.svelte';
</script>

<Hero
  heading="Welcome"
  subheading="Your tagline here"
  primaryCta={{ label: 'Get Started', onClick: () => {} }}
/>

<Card padding="lg">
  <Button variant="gradient" size="lg">
    Click me
  </Button>
</Card>
```

### Component Props

All components are fully typed with TypeScript interfaces. See each `.lite.tsx` file for prop definitions.

## 🎨 Design Tokens

Located in `src/theme/tokens.ts`:

- **Colors:** Accent purple (#7c3aed), blue-tinted grays, semantic colors
- **Spacing:** xs (4px) through 4xl (96px)
- **Typography:** Inter (sans), JetBrains Mono (mono)
- **Shadows:** Standard shadows + purple glow effects
- **Glassmorphism:** Backdrop blur with semi-transparent backgrounds

## 🔧 Configuration

### Mitosis Config (`mitosis.config.cjs`)

```javascript
module.exports = {
  files: 'src/components/**/*.lite.tsx',
  targets: ['svelte'],
  options: {
    svelte: {
      typescript: true,
      stateType: 'variables',
      prettier: true
    }
  },
  dest: '../design-system-svelte/src/components'
};
```

### Tailwind Integration

The root `tailwind.config.js` includes:
```javascript
content: [
  './src/**/*.{html,js,svelte,ts}',
  './packages/design-system-svelte/src/**/*.svelte' // Mitosis components
]
```

## 📝 Adding New Components

1. **Create Mitosis component:**
   ```bash
   touch packages/design-system/src/components/MyComponent.lite.tsx
   ```

2. **Write component code:**
   ```tsx
   export interface MyComponentProps {
     label: string;
   }

   export default function MyComponent(props: MyComponentProps) {
     return <div>{props.label}</div>;
   }
   ```

3. **Compile:**
   ```bash
   cd packages/design-system
   npm run build
   ```

4. **Export in index:**
   ```javascript
   // packages/design-system-svelte/src/index.js
   export { default as MyComponent } from './components/MyComponent.svelte';
   ```

5. **Use in app:**
   ```svelte
   <script>
     import MyComponent from '$lib/design-system/MyComponent.svelte';
   </script>

   <MyComponent label="Hello" />
   ```

## 🐛 Troubleshooting

### Components not compiling

1. Check Mitosis is watching: `cd packages/design-system && npm run dev`
2. Verify `.lite.tsx` files have no syntax errors
3. Check `mitosis.config.cjs` paths are correct

### Import errors in SvelteKit

1. Verify `svelte.config.js` has the alias:
   ```javascript
   alias: {
     '$lib/design-system': './packages/design-system-svelte/src/components'
   }
   ```
2. Ensure compiled `.svelte` files exist in `packages/design-system-svelte/src/components/`

### Styles not applying

1. Check Tailwind content paths include Mitosis components
2. Verify CSS variables are defined in `src/app.css`
3. Ensure component classes use valid Tailwind utilities

## 📚 Resources

- [Mitosis Documentation](https://mitosis.builder.io/)
- [Mitosis GitHub](https://github.com/BuilderIO/mitosis)
- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
