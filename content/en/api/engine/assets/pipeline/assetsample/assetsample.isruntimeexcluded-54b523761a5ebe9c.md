---
uid: api.54b523761a5ebe9cda0f50704672665623b1f2bff21b89ce2f9269e2c36fa584
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.IsRuntimeExcluded(Inno.Assets.AssetPath,System.Boolean)"
source: xml
reviewed: af2d2ad9afd8b659423fedb057694dedfbda555182660f6ab3850fb362a79b50
title: "AssetSample.IsRuntimeExcluded"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Determines whether a path belongs to an authoring-only sample subtree that must not enter a Player runtime closure.

**Parameter `path`:** The isolated source path to inspect.

**Parameter `isDirectory`:** Whether the path itself represents a directory.

**Returns:** `true` when any directory segment starts with `~`, including in the writable Project source.
