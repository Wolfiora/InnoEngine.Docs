---
uid: api.62b7e5acf16d093e4c26ffe3b79c42a18f89359d1f628645a1a3b18439603018
symbol: "engine:Inno.Editor.Exporting:M:Inno.Editor.Exporting.EditorExportService.StartPlugin(Inno.Build.PluginBuildRequest)"
source: xml
reviewed: 87bcdc058c044f2ca5764cfb37c54da3f2ed3211cb017adcb2c37ccec4c80d35
title: "StartPlugin"
kind: api
owners: [Inno.Editor.Exporting]
apiSurface: source-clr
---

Starts a source-package export using the existing Build pipeline.

**Parameter `request`:** The complete, explicitly selected package request.

**Exception `T:System.InvalidOperationException`:** Another export still owns the service.
