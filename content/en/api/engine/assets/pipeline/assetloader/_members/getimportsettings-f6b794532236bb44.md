---
uid: api.f6b794532236bb44e175a1014bea31e2033bd44c55c6721dda8e13ebe18c1fc3
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.GetImportSettings(Inno.Assets.AssetPath)"
source: xml
reviewed: cd92cbfed482d781151d64ea699037874a466513b9c5788de754d3832b0ee282
title: "GetImportSettings"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Reads a detached importer settings value without changing source metadata.

**Parameter `path`:** The isolated source path, not its sidecar path.

**Returns:** The current settings and the metadata fingerprint required for a subsequent save.

**Exception `T:System.NotSupportedException`:** The source has no registered importer.

**Exception `T:System.IO.InvalidDataException`:** The persisted settings cannot be restored by the current importer.
