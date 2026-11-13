---
uid: api.966d11c03b4b24da2c0bcb34339d008f778794d6a03e71637dee69b4ad45a0ab
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Capture(InnoEditor.Core.EditorState)"
source: xml
reviewed: 347e5b0ba16b86e81004c8116085a369eb30006f52333fafc116af8a11dc5bb7
title: "Capture"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Captures readable project state owned by this module.

## Remarks

Overriding this method opts the module into project-state IO. Modules that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes.

**Parameter `state`:** The writable parameter that receives the complete readable state for this module.
