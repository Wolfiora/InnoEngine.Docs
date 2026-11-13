---
uid: api.0b1df9804c2f9b8d124d0142b5cab4ab4e8c841147679cf6c4a0886b7dab4a78
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportContext.ReadSourceBytes(Inno.Assets.AssetPath)"
source: xml
reviewed: 05db08cef3f989f8106e4fbccc94a00283a1f811ebbe1803bc1681c2cc9224e5
title: "ReadSourceBytes"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Reads another source from the same candidate mount snapshot and records it as an import dependency.

**Parameter `path`:** An isolated path whose mount dependency was declared when it crosses Plugin boundaries.

**Returns:** An immutable source snapshot owned by the import operation.

**Exception `T:System.InvalidOperationException`:** Thrown when the source crosses an undeclared mount boundary or references the writable Project from a Plugin.

**Exception `T:System.IO.FileNotFoundException`:** Thrown when the resolved source does not exist.
