---
uid: api.ab8b4544ad267a9340d1252546c19996d2b6c72da758ac357e3274c362c8eddc
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.Save(Inno.Assets.AssetPath,Inno.Assets.AssetObject)"
source: xml
reviewed: 67140a7bbc79f80173d699a7b24557ffa4d6f89b82319c8ed5d3b125b3a32ee5
title: "AssetLoader.Save"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Saves an asset to its initial or existing isolated source path while preserving an existing destination identity.

**Parameter `path`:** The isolated source path.

**Parameter `asset`:** The asset to export. Detached replacement values do not replace an existing source's persistent identity.

**Returns:** `true` when an importer exported the asset.
