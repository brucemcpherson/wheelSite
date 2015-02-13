function showMyScriptDb() {
  return publicStuffDb();
}
function publicStuffDb() {
  return ScriptDb.getMyDb();
}
function showMyScriptAppResource(s) {
  try {
    return ScriptApp.getResource(s);
  }
  catch (err) {
    throw err + " getting script " + s;
  }
}
