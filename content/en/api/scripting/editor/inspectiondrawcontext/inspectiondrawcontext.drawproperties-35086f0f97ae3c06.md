---
uid: api.35086f0f97ae3c06c23c61f6a923952f014b9928bf8d55177e9861dd973b67c7
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawContext.DrawProperties"
source: xml
reviewed: 3066a3251b01f673f8af6f61ebbb6827689be4f819d890af5208c49d8f70d032
title: "InspectionDrawContext.DrawProperties"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Draws every runtime-visible serialized property through the shared attribute and property drawer pipeline.

## Remarks

Properties without an explicit `Header` attribute are placed in the shared implicit Properties section. Custom drawers may call this method before or after their own sections.
