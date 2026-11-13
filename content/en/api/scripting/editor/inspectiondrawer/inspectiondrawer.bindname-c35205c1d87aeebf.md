---
uid: api.c35205c1d87aeebf46f55c3113408eac35098e5f7c6db6a3bdef014aa8236a7f
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer\u00601.BindName(InnoEditor.Inspection.InspectionDrawContext,\u00600)"
source: xml
reviewed: d61a852aded716bf276f30b73bdf91da66400ddb3f09921f3e34d62defaf8edc
title: "InspectionDrawer\u003CTTarget\u003E.BindName"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Binds the name displayed in the first row of the Inspector target header.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Returns:** The current target name and a callback that accepts a requested replacement name, or `null` for the callback when the name is read-only.
