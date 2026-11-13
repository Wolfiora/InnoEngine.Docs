---
uid: api.54b523761a5ebe9cda0f50704672665623b1f2bff21b89ce2f9269e2c36fa584
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.IsRuntimeExcluded(Inno.Assets.AssetPath,System.Boolean)"
source: xml
reviewed: bb23de1d45e322abc63dd380d2b4bdbb7c83f3b17cf4fd1b65b885614cc1841d
title: "IsRuntimeExcluded"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Determines whether a path belongs to an authoring-only sample subtree that must not enter a Player runtime closure.

**Parameter `path`:** The isolated source path to inspect.

**Parameter `isDirectory`:** Whether the path itself represents a directory.

**Returns:** `true` when any directory segment starts with `~`, including in the writable Project source.
