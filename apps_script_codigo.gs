// Apps Script del dashboard de seguimiento ADSO 3389010.
// Pegar completo en Extensiones > Apps Script y volver a implementar (ver instrucciones en el chat).

var CELL_LIMIT = 45000; // Google Sheets permite maximo 50.000 caracteres por celda

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var zajunaSheet = ss.getSheetByName('Zajuna');
  var sofiaSheet = ss.getSheetByName('SOFIA');

  var zajunaData = zajunaSheet ? zajunaSheet.getDataRange().getValues() : [];
  var sofiaData = sofiaSheet ? sofiaSheet.getDataRange().getValues() : [];

  return ContentService.createTextOutput(JSON.stringify({
    zajuna: zajunaData,
    sofia: sofiaData
  })).setMimeType(ContentService.MimeType.JSON);
}

// Reemplaza el contenido de una hoja con una matriz de filas (rellena filas cortas para que sea rectangular)
function writeRows_(ss, name, rows) {
  if (!rows || !rows.length) return;
  var width = 0;
  rows.forEach(function (r) { if (r && r.length > width) width = r.length; });
  if (width === 0) return;
  var clean = rows.map(function (r) {
    var out = [];
    for (var i = 0; i < width; i++) {
      var v = (r && r[i] !== undefined && r[i] !== null) ? r[i] : '';
      out.push(v);
    }
    return out;
  });
  var sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.clearContents();
  sheet.getRange(1, 1, clean.length, width).setValues(clean);
}

// Guarda un texto largo repartido en varias celdas de una misma fila
function chunkText_(text) {
  var parts = [];
  for (var i = 0; i < text.length; i += CELL_LIMIT) parts.push(text.substring(i, i + CELL_LIMIT));
  return parts;
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.action === 'update_learners') {
      var ss = SpreadsheetApp.getActiveSpreadsheet();

      // 1. Reescribe las hojas que lee el dashboard al abrir (esta es la correccion clave)
      writeRows_(ss, 'Zajuna', data.zajuna);
      writeRows_(ss, 'SOFIA', data.sofia);

      // 2. Estado_Actual y log, partidos en celdas de maximo 45.000 caracteres
      if (data.learners) {
        var json = JSON.stringify(data.learners);
        var parts = chunkText_(json);

        var statusSheet = ss.getSheetByName('Estado_Actual') || ss.insertSheet('Estado_Actual');
        statusSheet.clearContents();
        statusSheet.appendRow(['Fecha_Actualizacion', 'Aprendices_JSON (partes)']);
        statusSheet.appendRow([new Date()].concat(parts));

        var logSheet = ss.getSheetByName('Log_Actualizaciones') || ss.insertSheet('Log_Actualizaciones');
        logSheet.appendRow([
          new Date(),
          'Actualizacion enviada desde Dashboard Excel',
          'Zajuna: ' + (data.zajuna ? data.zajuna.length : 0) + ' filas | SOFIA: ' + (data.sofia ? data.sofia.length : 0) + ' filas | JSON: ' + json.length + ' caracteres'
        ]);
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
