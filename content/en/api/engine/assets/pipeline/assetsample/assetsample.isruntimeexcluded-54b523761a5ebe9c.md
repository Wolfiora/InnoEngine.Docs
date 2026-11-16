---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.54b523761a5ebe9cda0f50704672665623b1f2bff21b89ce2f9269e2c36fa584
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.IsRuntimeExcluded(Inno.Assets.AssetPath,System.Boolean)
title: AssetSample.IsRuntimeExcluded
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 36f1a4c33ef5b15f6f6b4e5409b4e5f780308492bd6c8868d38aabc34a0c2814
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The isolated source path to inspect.

**Parameter `isDirectory`:** Whether the path itself represents a directory.

## Returns

`true` when any directory segment starts with `~`, including in the writable Project source.
