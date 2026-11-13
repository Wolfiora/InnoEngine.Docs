---
uid: api.35086f0f97ae3c06c23c61f6a923952f014b9928bf8d55177e9861dd973b67c7
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawContext.DrawProperties"
source: xml
reviewed: ffce31b94450a9be8060e440991edfa88f9ac5bcfe43ba1bf16cb6567420b542
title: "DrawProperties"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Draws every runtime-visible serialized property through the shared attribute and property drawer pipeline.

## Remarks

Properties without an explicit `Header` attribute are placed in the shared implicit Properties section. Custom drawers may call this method before or after their own sections.
