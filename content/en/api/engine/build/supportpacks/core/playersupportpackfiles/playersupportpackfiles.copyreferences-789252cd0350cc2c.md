---
uid: api.789252cd0350cc2c2d28ef59865ef25b32b9760afcc5690b8073c96e904f4a71
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyReferences(System.String,System.String,System.String)"
source: xml
reviewed: d63270d8bb2a3064dbcd9d3e6f9a3bcb191d757b86706e88e20ba11ade23e5eb
title: "PlayerSupportPackFiles.CopyReferences"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Stages current runtime references while excluding the selected executable and project scripts.

**Parameter `buildOutput`:** The explicit product compilation output directory.

**Parameter `destination`:** The isolated compilation reference directory.

**Parameter `productAssemblyName`:** The selected executable assembly to exclude from references.

**Exception `T:System.IO.InvalidDataException`:** The build produced no runtime compilation references.
