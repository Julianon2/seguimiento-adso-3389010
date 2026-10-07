# 🚀 Guía de Comandos Git & GitHub - Seguimiento ADSO 3389010

Guía rápida de comandos de consola para mantener actualizado tu repositorio en GitHub y tu sitio en GitHub Pages.

---

## 📌 1. Subir Cambios Futuros (Uso Diario)

Cuando realices modificaciones en `index.html` o en cualquier archivo del proyecto, ejecuta estos 3 comandos en tu terminal (PowerShell o CMD):

```bash
git add .
git commit -m "Actualizacion del dashboard ADSO 3389010"
git push origin main
```

---

## 📌 2. Solución a Errores Comunes de Push

Si al ejecutar `git push origin main` la consola muestra un error como `[rejected] main -> main (fetch first)`, utiliza el flag `--force` para forzar la sincronización inicial:

```bash
git push origin main --force
```

---

## 📌 3. Configuración Inicial del Repositorio (Solo la primera vez)

Si inicias el repositorio desde cero en una nueva carpeta o equipo:

```bash
git init
git add .
git commit -m "Initial commit: Dashboard KPIS ADSO 3389010"
git branch -M main
git remote add origin https://github.com/Julianon2/seguimiento-adso-3389010.git
git push -u origin main --force
```

---

## 🔐 Configuración de Seguridad & Google Drive

- **Contraseña de Administrador:** `Dracula2026@`
- **URL Web App Google Script:** `https://script.google.com/macros/s/AKfycbxEDTM4JOtOyFAi_4t9il0G4uCy-ccoVvuJS3-HED7FRlxJi8lYRcOvPK-ZfndNB6fV/exec`
