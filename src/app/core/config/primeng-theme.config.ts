import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/**
 * Paleta de colores primarios personalizada
 * Basada en el color principal #6C3AFF (violeta azulado)
 */
const PRIMARY_PALETTE = {
  50: 'rgb(245 243 255)', // Muy claro
  100: 'rgb(237 233 254)', // Claro
  200: 'rgb(221 214 254)', // Claro medio
  300: 'rgb(196 181 253)', // Medio claro
  400: 'rgb(167 139 250)', // Medio
  500: 'rgb(139 92 246)', // Base (equivalente a #6C3AFF)
  600: 'rgb(124 58 237)', // Medio oscuro
  700: 'rgb(109 40 217)', // Oscuro
  800: 'rgb(91 33 182)', // Muy oscuro
  900: 'rgb(76 29 149)', // Extremadamente oscuro
  950: 'rgb(46 16 101)', // Casi negro
} as const;

/**
 * Tema personalizado basado en Aura con nuestra paleta de colores
 *
 * Este preset extiende el tema Aura de PrimeNG con nuestros colores personalizados,
 * manteniendo toda la funcionalidad y estructura del tema base mientras aplica
 * nuestra identidad visual.
 */
export const CustomTheme = definePreset(Aura, {
  semantic: {
    primary: PRIMARY_PALETTE,
  },
});

/**
 * Opciones de configuración para PrimeNG
 *
 * Define las opciones adicionales que se aplicarán al tema,
 * incluyendo el selector de modo oscuro y otras configuraciones.
 */
export const PRIMENG_THEME_OPTIONS = {
  prefix: 'p',
  darkModeSelector: '[data-theme="dark"]',
  cssLayer: false,
} as const;

/**
 * Configuración completa del tema para PrimeNG
 *
 * Objeto que contiene tanto el preset del tema como las opciones,
 * listo para ser utilizado en la configuración de la aplicación.
 */
export const PRIMENG_THEME_CONFIG = {
  preset: CustomTheme,
  options: PRIMENG_THEME_OPTIONS,
} as const;
