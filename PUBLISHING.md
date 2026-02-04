# 📦 Guía de Publicación en GitHub Packages

Esta guía explica cómo publicar `@context-ai/shared` como paquete **público** en GitHub Packages.

---

## ⚠️ ADVERTENCIA IMPORTANTE

**Este paquete está configurado como PÚBLICO únicamente para propósitos académicos del Máster en Inteligencia Artificial.**

### En un entorno de producción REAL:

- ❌ **NO** publicar como público - expone tu lógica de negocio
- ✅ **SÍ** usar `"access": "restricted"` o `"private": true"`
- ✅ **SÍ** mantener el repositorio de GitHub como privado
- ✅ **SÍ** considerar usar un monorepo con workspaces en lugar de publicar

**Cambios necesarios para producción:**

```json
// package.json
{
  "private": true,  // O cambiar "access": "public" a "restricted"
  // ...
}
```

---

---

## 🔑 Paso 1: Crear Personal Access Token (PAT)

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click en "Generate new token (classic)"
3. Dale un nombre descriptivo: `context-ai-packages`
4. Selecciona los siguientes scopes:
   - ✅ `write:packages` - Para publicar paquetes
   - ✅ `read:packages` - Para leer paquetes
   - ✅ `repo` (opcional) - Si el repositorio es privado
5. Click en "Generate token"
6. **⚠️ IMPORTANTE**: Copia el token, no lo podrás ver de nuevo

---

## 📝 Paso 2: Configurar el Token Localmente

### Opción A: Variable de entorno (Recomendado para desarrollo)

```bash
# En tu terminal (macOS/Linux)
export GITHUB_TOKEN=ghp_your_token_here

# O agrégalo a tu ~/.zshrc o ~/.bashrc para hacerlo permanente
echo 'export GITHUB_TOKEN=ghp_your_token_here' >> ~/.zshrc
source ~/.zshrc
```

### Opción B: Configurar .npmrc global

```bash
# Crear/editar ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=ghp_your_token_here" >> ~/.npmrc
```

---

## 🏗️ Paso 3: Preparar el Proyecto

### 3.1 Asegúrate de tener un repositorio en GitHub

```bash
# Inicializar git (si no está inicializado)
cd /path/to/context-ai-shared
git init

# Crear repositorio en GitHub primero, luego:
git remote add origin https://github.com/YOUR_USERNAME/context-ai-shared.git
```

### 3.2 Actualizar package.json con tu usuario

Edita `package.json` y reemplaza `YOUR_USERNAME`:

```json
{
  "name": "@context-ai/shared",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/YOUR_USERNAME/context-ai-shared.git"
  }
}
```

---

## 🚀 Paso 4: Publicar el Paquete

### Primera publicación (v0.1.0)

```bash
# 1. Instalar dependencias
pnpm install

# 2. Compilar el proyecto
pnpm build

# 3. Verificar que todo esté correcto
pnpm test  # (cuando tengas tests)

# 4. Publicar (primera vez)
pnpm publish --access public
```

### Publicaciones subsecuentes

```bash
# 1. Hacer cambios en el código

# 2. Actualizar versión (automáticamente actualiza package.json)
pnpm version patch   # 0.1.0 → 0.1.1 (bug fixes)
# o
pnpm version minor   # 0.1.0 → 0.2.0 (new features)
# o
pnpm version major   # 0.1.0 → 1.0.0 (breaking changes)

# 3. Compilar
pnpm build

# 4. Publicar
pnpm publish --access public

# 5. Subir cambios a GitHub
git push origin main
git push --tags
```

---

## 📥 Paso 5: Consumir el Paquete en Otros Proyectos

### En context-ai-api y context-ai-front:

#### 5.1 Crear `.npmrc` en el proyecto

```bash
# En la raíz del proyecto
echo "@context-ai:registry=https://npm.pkg.github.com" > .npmrc
```

#### 5.2 Instalar el paquete

```bash
pnpm add @context-ai/shared
```

#### 5.3 Usar en el código

```typescript
// Backend (NestJS)
import { IngestDocumentDto, SourceType } from '@context-ai/shared';

@Post('upload')
async upload(@Body() dto: IngestDocumentDto) {
  // dto tiene validaciones de class-validator
}

// Frontend (Next.js)
import { ChatQueryDto, MessageRole } from '@context-ai/shared';

const queryDto: ChatQueryDto = {
  message: '¿Cómo pido vacaciones?',
  sectorId: 'rrhh'
};
```

---

## 🔄 Workflow de Desarrollo

### Flujo recomendado:

1. **Desarrollar** en `context-ai-shared`
2. **Compilar**: `pnpm build`
3. **Actualizar versión**: `pnpm version patch`
4. **Publicar**: `pnpm publish`
5. **Actualizar en backend/frontend**: `pnpm update @context-ai/shared`

### Durante desarrollo activo:

Si estás haciendo cambios frecuentes en `shared`, considera usar `pnpm link`:

```bash
# En context-ai-shared
pnpm link --global

# En context-ai-api
pnpm link --global @context-ai/shared

# Ahora los cambios en shared se reflejan inmediatamente
```

---

## ✅ Verificar Publicación

Después de publicar, verifica:

1. **En GitHub**: Ve a tu repositorio → Packages (debería aparecer el paquete)
2. **Instalar en otro proyecto**:
   ```bash
   pnpm add @context-ai/shared
   ```

---

## ⚠️ Troubleshooting

### Error: "You must be logged in to publish packages"

```bash
# Verifica que tu token esté configurado
cat ~/.npmrc | grep npm.pkg.github.com

# Si no está, agrégalo:
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> ~/.npmrc
```

### Error: "Package name must be @YOUR_USERNAME/package"

El nombre del paquete debe coincidir con tu usuario de GitHub:
```json
{
  "name": "@tu-usuario-github/shared"
}
```

### Error: "403 Forbidden"

- Verifica que tu token tenga los permisos correctos (`write:packages`)
- Verifica que el token no haya expirado

---

## 🔐 Seguridad

- ❌ **NUNCA** hagas commit del token en git
- ✅ Agrega `.npmrc` a `.gitignore` si contiene el token
- ✅ Usa variables de entorno para CI/CD
- ✅ Rota tus tokens periódicamente

---

## 📚 Referencias

- [GitHub Packages - npm](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- [pnpm publish](https://pnpm.io/cli/publish)
- [Semantic Versioning](https://semver.org/)

