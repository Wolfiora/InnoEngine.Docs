---
uid: api.c35205c1d87aeebf46f55c3113408eac35098e5f7c6db6a3bdef014aa8236a7f
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer\u00601.BindName(InnoEditor.Inspection.InspectionDrawContext,\u00600)"
source: xml
reviewed: e5e5ccde31479c8d9d012dbb3f8ca5a9a8e1cdc5411c47ec6b480429d1e744f4
title: "BindName"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Binds the name displayed in the first row of the Inspector target header.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Returns:** The current target name and a callback that accepts a requested replacement name, or `null` for the callback when the name is read-only.
