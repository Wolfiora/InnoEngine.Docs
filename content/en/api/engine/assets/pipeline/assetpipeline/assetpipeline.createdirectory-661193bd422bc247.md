---
uid: api.661193bd422bc2476ed5f89173cbc4c2377c990712ccd94c00bfeab130cc26fa
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.CreateDirectory(Inno.Assets.AssetPath)"
source: xml
reviewed: 306d2600481dfd0d428345b8a4ac3c00d287ea0d7198dee41119adc36fddb2f2
title: "AssetPipeline.CreateDirectory"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Creates a tracked source directory and its persistent metadata.

**Parameter `path`:** New isolated directory path.

**Exception `T:System.IO.DirectoryNotFoundException`:** Thrown when the parent directory does not exist.

**Exception `T:System.IO.IOException`:** Thrown when the target already exists.
