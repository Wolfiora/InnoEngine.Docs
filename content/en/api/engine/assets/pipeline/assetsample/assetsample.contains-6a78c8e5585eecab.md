---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6a78c8e5585eecab98ab074b782a99651478c15838ac634ab7a3f4014cde67a0
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.Contains(Inno.Assets.AssetPath,System.Boolean)
title: AssetSample.Contains
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 29acb5963f5771ba998465e1db0a26a63559e872bd7db85091bf94f14b61e0c5
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

`true` when the path belongs to an installed Plugin source and any directory segment starts with `~`. Project content is never hidden from authoring import by this method.
