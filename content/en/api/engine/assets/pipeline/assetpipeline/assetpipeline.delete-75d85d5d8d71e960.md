---
uid: api.75d85d5d8d71e96044e146dcb004a9fbe9a6b1aa759ac86cbcd3f563021ab599
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.Delete(Inno.Assets.AssetPath)"
source: xml
reviewed: 966348e0ed503a2db68c1b129cc809f6073d42e2c933a85087bac668671e3205
title: "AssetPipeline.Delete"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Deletes a source asset and its metadata while retaining a Library tombstone for existing references.

## Parameters

**Parameter `path`:** Existing isolated file or directory path.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** Thrown when the source does not exist.
