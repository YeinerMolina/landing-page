# Sombras Adaptativas

## Descripción
Sistema de sombras que se adapta automáticamente al tema claro y oscuro de la aplicación, proporcionando el contraste adecuado en ambos modos.

## Clases Disponibles

### Sombras Básicas
- `shadow-adaptive-sm` - Sombra pequeña y sutil
- `shadow-adaptive` - Sombra estándar
- `shadow-adaptive-md` - Sombra mediana (recomendada para tarjetas)
- `shadow-adaptive-lg` - Sombra grande (ideal para hover effects)
- `shadow-adaptive-xl` - Sombra extra grande

### Uso Recomendado

```html
<!-- Tarjetas de contenido -->
<div class="shadow-adaptive-md hover:shadow-adaptive-lg transition-shadow duration-300">
  <!-- Contenido -->
</div>

<!-- Iconos y elementos pequeños -->
<img class="shadow-adaptive-sm" />

<!-- Modales y elementos flotantes -->
<div class="shadow-adaptive-xl">
  <!-- Contenido -->
</div>
```

## Configuración Técnica

### Variables CSS
- **Tema Claro**: Sombras negras con opacidad reducida (0.05-0.1)
- **Tema Oscuro**: Sombras negras con mayor opacidad (0.3-0.6) para mejor contraste

### Transiciones
Se recomienda usar `transition-shadow duration-300` para efectos suaves al hacer hover.

## Componentes Actualizados
- ✅ home-services
- ✅ home-projects  
- ✅ home-tech-stack
- ✅ home-about