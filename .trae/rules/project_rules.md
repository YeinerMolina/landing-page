# 📘 Reglas del Proyecto: Landing Page - Yeiner Molina

## 🧱 Propósito

Definir las reglas estructurales, de código y convenciones que guían el desarrollo del **frontend Angular 20 con SSR, Zoneless, PrimeNG y TailwindCSS**, optimizado para colaboración asistida por **ChatGPT 5** y **Claude 4**.

---

## 🚀 Objetivo General

Crear una landing page moderna, modular y de alto rendimiento que funcione como carta de presentación profesional para servicios de desarrollo web.

---

## 🧩 Arquitectura General

```
src/
 ├─ app/
 │   ├─ core/                # Servicios globales, interceptores, guards
 │   ├─ shared/              # Componentes reutilizables, pipes, directivas
 │   ├─ layout/              # Componentes de estructura (MainLayout, Footer)
 │   ├─ features/            # Módulos por sección (home, about, projects, etc.)
 │   ├─ app.routes.ts
 │   ├─ app.config.ts
 │   └─ app.component.ts
 ├─ environments/            # Configuraciones por entorno
 ├─ main.ts
 ├─ main.server.ts
 └─ styles.css
```

---

## 🧠 Reglas de Desarrollo

### 1. Estilo y buenas prácticas

- Usa **ESLint** con configuración extendida de Angular.
- Activar **strict mode** en `tsconfig.json`.
- Cada módulo y componente debe tener **responsabilidad única**.
- Usa **signals** y `ChangeDetectionStrategy.OnPush`.
- Evita `any`, `console.log`, y dependencias no necesarias.
- Sigue convenciones **kebab-case** para archivos, **PascalCase** para clases y **camelCase** para variables y funciones.

### 2. Zoneless y rendimiento

- Eliminar `zone.js`.
- Usar `provideZoneChangeDetection({ eventCoalescing: true })` en `main.ts`.
- Manejar el estado con **signals** o **RxJS** controlado.
- Prevenir operaciones bloqueantes en SSR.

### 3. SSR (Server-Side Rendering)

- Integrar con `@angular/ssr`.
- Verificar contexto con `isPlatformBrowser` antes de usar APIs del DOM.
- Probar build SSR en cada despliegue.

### 4. Estilos y UI

- TailwindCSS como base de estilos globales.
- PrimeNG para componentes UI.
- PrimeIcons habilitados.
- Todos los estilos globales van en `styles.css`; estilos locales usan `:host` y clases utilitarias.

### 5. Estructura modular

- `core`: solo servicios singleton (AuthService, ApiService, etc.).
- `shared`: componentes puros reutilizables (ButtonComponent, CardComponent).
- `layout`: layouts de página (Header, Footer, Nav).
- `features`: módulos por sección (Home, Services, About, Contact).
- Cada feature debe incluir su propio `routing` y `component` principal.

### 6. Comunicación y documentación

- Cada componente y servicio debe tener un **comentario superior** que explique su función en una línea.
- Los prompts y comandos para ChatGPT o Claude deben ir documentados en `/docs/prompts/`.

---

## 🧰 Configuración de herramientas

### Dependencias esenciales

```
npm install primeng primeicons tailwindcss @angular/ssr
```

### Integraciones IA

- Prompts compatibles con **ChatGPT 5** y **Claude 4** deben:
  - Ser declarativos, con contexto del proyecto.
  - Usar formato markdown o JSON estructurado.
  - Evitar instrucciones ambiguas.
  - Incluir ejemplos o expectativas de salida.

---

## 🧩 Naming y estructura de commits

### Convenciones de nombres

| Tipo       | Ejemplo actualizado                      | Regla principal                                                                                  |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Componente | `HomePage`, `UserProfile`, `ContactForm` | Nombres descriptivos en **PascalCase**, sin sufijo `.component`.                                 |
| Servicio   | `ApiClient`, `UserDataClient`            | Enfocar en **responsabilidad**, no en tipo. Usa sufijo funcional (`Client`, `Store`, `Manager`). |
| Módulo     | `HomeFeature`, `SharedUi`, `CoreInfra`   | Agrupar por dominio o propósito, no por tipo técnico.                                            |
| Archivo    | `home-page.ts`, `user-profile.ts`        | **kebab-case**, refleja la función del archivo.                                                  |
| Ruta       | `/about`, `/projects`, `/contact`        | Semánticas, simples y legibles.                                                                  |

### Convención de commits

```
feat: agregar sección de proyectos
fix: corregir render SSR en contacto
refactor: reorganizar módulos shared y core
docs: agregar reglas del proyecto
```

---

## 🧩 Flujo de trabajo IA-asistido

1. **Diseño o refactor:** primero redactar prompt claro y reproducible.
2. **Generación:** ejecutar prompt en ChatGPT 5 o Claude 4.
3. **Validación:** revisar código generado con ESLint y build SSR.
4. **Commit:** usar convención de commits.
5. **Documentar:** guardar prompt y resultado relevante en `/docs/prompts/`.

---

## ✅ Criterios de calidad

- LCP < 2.5s y puntuación Lighthouse > 90.
- Build SSR funcional.
- Sin warnings de compilación.
- Cumplimiento de todas las convenciones de estructura y nombres.
- Compatible con Angular Zoneless y Tailwind.

---

## 📦 Directorios especiales

- `/docs/` → Documentación, prompts y referencias IA.
- `/assets/` → Imágenes y recursos estáticos.
- `/environments/` → Variables por entorno.
- `/shared/` → UI reusables sin lógica de negocio.
- `/core/` → Lógica global (services, interceptors, guards).

---

## 🧾 Autores

**Yeiner Molina** – Desarrollador Full Stack  
**ChatGPT 5 / Claude 4** – Asistentes de desarrollo y documentación
