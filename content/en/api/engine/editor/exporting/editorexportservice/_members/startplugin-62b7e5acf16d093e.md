---
uid: api.62b7e5acf16d093e4c26ffe3b79c42a18f89359d1f628645a1a3b18439603018
symbol: "engine:Inno.Editor.Exporting:M:Inno.Editor.Exporting.EditorExportService.StartPlugin(Inno.Build.PluginBuildRequest)"
source: xml
reviewed: 138d3d2c146a81600ee51c9379e4e990102a8e5979bd252c6dcfd896b9113862
title: "StartPlugin"
kind: api
owners: [Inno.Editor.Exporting]
apiSurface: source-clr
---

Starts a source-package export using the existing Build pipeline.

**Parameter `request`:** The complete, explicitly selected package request.

**Exception `T:System.InvalidOperationException`:** Another export still owns the service.
