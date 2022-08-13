import type { Theme } from '@importantimport/material-color-utilities'
import { QuantizerCelebi, Score, argbFromRgb, themeFromSourceColor } from '@importantimport/material-color-utilities'
import { createCanvas, loadImage } from 'canvas'

/**
 * Get the source color from an image.
 *
 * @param src The canvas.loadImage() source
 * @param options The canvas.loadImage() options
 * @return Source color - the color most suitable for creating a UI theme
 */
export const sourceColorFromLoadImage = async (src: string | Buffer, options?: any): Promise<number> => {
  // Convert Image data to Pixel Array
  const imageBytes = await new Promise<Uint8ClampedArray>(async (resolve, reject) => {
    const image = await loadImage(src, options)
    const canvas = createCanvas(image.width, image.height)
    const context = canvas.getContext('2d')
    if (!context) return reject(new Error('Could not get canvas context'))
    context.drawImage(image, 0, 0)
    resolve(context.getImageData(0, 0, image.width, image.height).data)
  })

  // Convert Image data to Pixel Array
  const pixels: number[] = []
  for (let i = 0; i < imageBytes.length; i += 4) {
    const r = imageBytes[i]
    const g = imageBytes[i + 1]
    const b = imageBytes[i + 2]
    const a = imageBytes[i + 3]
    if (a < 255) continue
    const argb = argbFromRgb(r, g, b)
    pixels.push(argb)
  }

  // Convert Pixels to Material Colors
  const result = QuantizerCelebi.quantize(pixels, 128)
  const ranked = Score.score(result)
  const top: number = ranked[0]
  return top
}

/**
 * Generate a theme from an image.
 *
 * @param src The canvas.loadImage() source
 * @param options The canvas.loadImage() options
 * @return Theme object
 */
export const themeFromLoadImage = async (src: string | Buffer, options?: any): Promise<Theme> =>
  await sourceColorFromLoadImage(src, options).then(color => themeFromSourceColor(color))

export const toSnakeCase = (string: string): string => string.replace(/([A-Z]+)/g, '-$1').toLowerCase()

export const rgbFromArgb = (argb: number): [number, number, number] => [(argb >> 16) & 255, (argb >> 8) & 255, argb & 255]

export type CSSFromThemeOptions = {
  prefix?: string
  dark?: 'media' | 'suffix'
  target?: string
}

/**
 * Generate a stylesheets from an theme.
 *
 * @param theme Theme object
 * @param options Options
 * @returns Stylesheets
 */
export const cssFromTheme = (
  theme: Theme,
  options: CSSFromThemeOptions = { prefix: 'md-sys-color-', dark: 'media', target: ':root' }
): string =>
  Object.entries(theme.schemes)
    .map(
      ([name, scheme]) =>
        (options.dark === 'media' ? `@media (prefers-color-scheme: ${name}) {${options.target} {` : `${options.target} {`) +
        Object.entries(scheme.toJSON())
          .map(
            ([key, value]) =>
              `--${options.prefix}${toSnakeCase(key)}${options.dark === 'suffix' ? `-${name}` : ''}:${rgbFromArgb(value).join(
                ','
              )};`
          )
          .join('') +
        (options.dark === 'media' ? '}}' : '}')
    )
    .join('')
