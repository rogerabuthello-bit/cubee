const SPREADSHEET_ID = "1VFXZ1YjyCiMUgk1lwJLL79Nsv3O1L2tpn-CXbXRbYTE";
const SHEET_NAME = "Signups";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const data = parsePayload_(e);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.sourcePage || "",
      data.mood || "",
      data.userAgent || ""
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, service: "Cubee waitlist" });
}

function parsePayload_(e) {
  if (e && e.postData && e.postData.contents) {
    return JSON.parse(e.postData.contents);
  }

  return {
    name: e.parameter.name,
    email: e.parameter.email,
    sourcePage: e.parameter.sourcePage,
    mood: e.parameter.mood,
    userAgent: e.parameter.userAgent
  };
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
