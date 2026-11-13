---
uid: api.661193bd422bc2476ed5f89173cbc4c2377c990712ccd94c00bfeab130cc26fa
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.CreateDirectory(Inno.Assets.AssetPath)"
source: xml
reviewed: 6b27178febae251d1f909b008c9b5c2cf43eb121d4a95980f72dc89c0da998ad
title: "CreateDirectory"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Creates a tracked source directory and its persistent metadata.

**Parameter `path`:** New isolated directory path.

**Exception `T:System.IO.DirectoryNotFoundException`:** Thrown when the parent directory does not exist.

**Exception `T:System.IO.IOException`:** Thrown when the target already exists.
