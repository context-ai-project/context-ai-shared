# @context-ai-project/shared

Shared types, DTOs, and validators for the Context.ai project.

> **⚠️ NOTA IMPORTANTE - Configuración Académica**  
> Este paquete está configurado como **público** únicamente para propósitos del **Máster en Inteligencia Artificial** y evaluación académica.  
> **En un entorno de producción real, este paquete DEBE configurarse como PRIVADO** para proteger la propiedad intelectual y la lógica de negocio.
> 
> Para configurarlo como privado en el futuro:
> 1. Cambiar `"private": false` a `"private": true"` en `package.json`, o
> 2. Cambiar `"access": "public"` a `"access": "restricted"` en `publishConfig`
> 3. Asegurar que el repositorio de GitHub sea privado

## 📦 Installation

### Requisitos previos

GitHub Packages requiere autenticación incluso para paquetes públicos. Configura tu `~/.npmrc` global:

1. Crea un **Personal Access Token (Classic)** en GitHub con el scope `read:packages`:
   - Ve a https://github.com/settings/tokens/new
   - Marca ✅ `read:packages`
   - Genera y copia el token

2. Añade la configuración a tu `~/.npmrc`:

```bash
echo "//npm.pkg.github.com/:_authToken=ghp_TU_TOKEN_AQUI" >> ~/.npmrc
echo "@context-ai-project:registry=https://npm.pkg.github.com/" >> ~/.npmrc
```

### Instalar el paquete

```bash
# Using pnpm
pnpm add @context-ai-project/shared

# Using npm
npm install @context-ai-project/shared
```

## 🚀 Usage

### DTOs

```typescript
import { IngestDocumentDto, ChatQueryDto } from '@context-ai-project/shared';

// Use in your backend or frontend
const dto = new IngestDocumentDto();
dto.sectorId = 'sector-123';
dto.title = 'Manual de Vacaciones';
```

### Enums

```typescript
import { SourceType, MessageRole } from '@context-ai-project/shared';

const type = SourceType.PDF;
const role = MessageRole.USER;
```

### Types

```typescript
import type { User, Sector } from '@context-ai-project/shared';

const user: User = {
  id: '123',
  email: 'user@example.com',
  // ...
};
```

## 🏗️ Structure

```
src/
├── dto/              # Data Transfer Objects
│   ├── auth/         # Authentication DTOs
│   ├── knowledge/    # Knowledge management DTOs
│   └── interaction/  # Chat/Interaction DTOs
├── types/            # TypeScript types and interfaces
│   ├── entities/     # Entity types
│   └── enums/        # Enumerations
├── validators/       # Custom validators
└── index.ts          # Main export file
```

## 🔨 Development

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Build in watch mode
pnpm build:watch

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage
pnpm test:cov
```

### Desarrollo local con otros proyectos

Si estás trabajando en `context-ai-api` o `context-ai-front` y necesitas probar cambios en el paquete shared sin publicar una nueva versión:

```bash
# Desde el directorio del proyecto que consume el paquete (ej: context-ai-api)
pnpm link ../context-ai-shared

# Cuando termines, restaurar la versión publicada
pnpm unlink @context-ai-project/shared
pnpm install
```

## 📝 Publishing

This package is published **publicly** to GitHub Packages.

### Prerequisites

1. Create a GitHub Personal Access Token (Classic) with `write:packages` and `read:packages` permissions
2. Configure your `~/.npmrc`:
   ```bash
   echo "//npm.pkg.github.com/:_authToken=ghp_TU_TOKEN" >> ~/.npmrc
   ```

### Publishing Steps

```bash
# 1. Update version
pnpm version patch  # or minor/major

# 2. Build the package
pnpm build

# 3. Publish to GitHub Packages
npm publish --registry=https://npm.pkg.github.com
```

### Installing from GitHub Packages

Users need to configure their `~/.npmrc`:

```bash
//npm.pkg.github.com/:_authToken=ghp_TU_TOKEN
@context-ai-project:registry=https://npm.pkg.github.com/
```

Then install normally:

```bash
pnpm add @context-ai-project/shared
```

## 📄 License

MIT
