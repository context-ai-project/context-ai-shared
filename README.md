# @context-ai/shared

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

```bash
# Using pnpm
pnpm add @context-ai/shared

# Using npm
npm install @context-ai/shared
```

## 🚀 Usage

### DTOs

```typescript
import { IngestDocumentDto, ChatQueryDto } from '@context-ai/shared';

// Use in your backend or frontend
const dto = new IngestDocumentDto();
dto.sectorId = 'sector-123';
dto.title = 'Manual de Vacaciones';
```

### Enums

```typescript
import { SourceType, MessageRole } from '@context-ai/shared';

const type = SourceType.PDF;
const role = MessageRole.USER;
```

### Types

```typescript
import type { User, Sector } from '@context-ai/shared';

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

## 📝 Publishing

This package is published **publicly** to GitHub Packages.

### Prerequisites

1. Create a GitHub Personal Access Token (Classic) with `write:packages` and `read:packages` permissions
2. Export your token:
   ```bash
   export GITHUB_TOKEN=ghp_your_token_here
   ```

### Publishing Steps

```bash
# 1. Login to GitHub Packages (one-time setup)
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> ~/.npmrc

# 2. Update version
pnpm version patch  # or minor/major

# 3. Build the package
pnpm build

# 4. Publish to GitHub Packages
pnpm publish --access public --registry https://npm.pkg.github.com

# Or simply (if .npmrc is configured):
pnpm publish
```

### Installing from GitHub Packages

Users need to configure their `.npmrc`:

```bash
# In project root or ~/.npmrc
@context-ai:registry=https://npm.pkg.github.com
```

Then install normally:

```bash
pnpm add @context-ai/shared
```

## 📄 License

MIT

