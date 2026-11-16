---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f6b794532236bb44e175a1014bea31e2033bd44c55c6721dda8e13ebe18c1fc3
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.GetImportSettings(Inno.Assets.AssetPath)
title: AssetLoader.GetImportSettings
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 657426ceb55407f0301a427c60665b120d6dc9200c96d8c27c2a986c1cd223b3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The isolated source path, not its sidecar path.

## Returns

The current settings and the metadata fingerprint required for a subsequent save.

## Exceptions

**Exception `T:System.NotSupportedException`:** The source has no registered importer.

**Exception `T:System.IO.InvalidDataException`:** The persisted settings cannot be restored by the current importer.
