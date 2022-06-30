import { defineConfig, presetUno, presetTypography, presetIcons } from 'unocss'
import { theme, shortcuts } from './src/scripts/m3-config'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'media'
    }),
    presetTypography(),
    presetIcons({ scale: 1.5 })
  ],
  theme,
  shortcuts
})
