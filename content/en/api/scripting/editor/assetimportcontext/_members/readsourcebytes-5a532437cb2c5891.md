---
uid: api.5a532437cb2c58913222644fc011255a6e728e69da9ff5a6b5ed1591aab54956
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImportContext.ReadSourceBytes(InnoEngine.Assets.AssetPath)"
source: xml
reviewed: 7e9f7ae7d5f1997005dc6981806d4ee2943c7a07b47a5dad37d353f02ba42d90
title: "ReadSourceBytes"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Reads another source from the same candidate mount snapshot and records it as an import dependency.

**Parameter `path`:** An isolated path whose mount dependency was declared when it crosses Plugin boundaries.

**Returns:** An immutable source snapshot owned by the import operation.

**Exception `T:System.InvalidOperationException`:** Thrown when the source crosses an undeclared mount boundary or references the writable Project from a Plugin.

**Exception `T:System.IO.FileNotFoundException`:** Thrown when the resolved source does not exist.
