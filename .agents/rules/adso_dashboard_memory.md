# 🧠 Memoria de Proyecto: Seguimiento ADSO 3389010 (KPIS)

## 📌 Configuración General & Credenciales
- **Programa & Ficha:** SENA ADSO Ficha 3389010 (14 Aprendices Activos en Formación).
- **Contraseña de Administrador:** `Dracula2026@` (Protege la ventana de actualización de datos).
- **Google Apps Script Web App URL (Google Drive):**
  `https://script.google.com/macros/s/AKfycbxEDTM4JOtOyFAi_4t9il0G4uCy-ccoVvuJS3-HED7FRlxJi8lYRcOvPK-ZfndNB6fV/exec`

---

## 🛠️ Reglas de Negocio & Comportamiento del Dashboard
1. **Insignia 100% Al Día:** La píldora verde `100% Al Día` en la lista de aprendices solo se otorga cuando **Zajuna es estrictamente 100% Y SOFIA Plus es estrictamente 100%**.
2. **Botón Único de Actualización:** Tanto en el encabezado como en el menú lateral existe un único botón **`[Actualizar Datos]`** con icono `<i data-lucide="refresh-cw"></i>`.
3. **Sincronización Silenciosa:** Al abrir la página (incluyendo GitHub Pages), el dashboard realiza una lectura en segundo plano a Google Drive para mostrar los porcentajes reales en vivo.
4. **Navegación Histórica en Modales:** Los modales cuentan con una pila de navegación (history stack) y botón **`[← Volver a ...]`** que permite saltar entre Competencias y Expediente del Aprendiz de forma bidireccional sin perder el contexto.
5. **Desglose Específico de Evidencias en Zajuna:** La pestaña "Pendientes Zajuna" en competencias y el desglose en el expediente del aprendiz muestran el **nombre exacto de cada evidencia faltante** (ej: `<i data-lucide="clock"></i> Evidencia EV01: Por Entregar`), al igual que SOFIA Plus.
6. **Resultados por Fase:** Vista dedicada con filtros de `Fase 1: Análisis` (Guías 1 y 2) y `Fase 2: Planeación` (Guías 3, 4 y 5).
7. **Filtros de Guías:** Filtro chip con inmunidad a acentos y soporte para guías simples, múltiples y rangos.
