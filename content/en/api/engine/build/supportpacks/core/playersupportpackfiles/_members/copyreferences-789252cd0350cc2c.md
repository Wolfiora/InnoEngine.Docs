---
uid: api.789252cd0350cc2c2d28ef59865ef25b32b9760afcc5690b8073c96e904f4a71
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyReferences(System.String,System.String,System.String)"
source: xml
reviewed: d5477552655d22800ca94065907d8a6912c4f83fc04621fda964003c75e04d57
title: "CopyReferences"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Stages current runtime references while excluding the selected executable and project scripts.

**Parameter `buildOutput`:** The explicit product compilation output directory.

**Parameter `destination`:** The isolated compilation reference directory.

**Parameter `productAssemblyName`:** The selected executable assembly to exclude from references.

**Exception `T:System.IO.InvalidDataException`:** The build produced no runtime compilation references.
