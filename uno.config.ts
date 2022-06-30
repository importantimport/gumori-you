import { defineConfig, presetUno, presetTypography, presetIcons } from 'unocss'

import { theme } from './src/scripts/m3-config'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'media'
    }),
    presetTypography(),
    presetIcons({ scale: 1.5 })
  ],
  theme,
  shortcuts: {
    'h-entry': 'transition-all bg-surfacevariant text-onsurfacevariant rounded-md p-4',
    'u-featured': 'rounded-sm w-full h-60 md:h-72 object-center object-cover'
  }
})
