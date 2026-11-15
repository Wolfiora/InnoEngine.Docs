---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f6b794532236bb44e175a1014bea31e2033bd44c55c6721dda8e13ebe18c1fc3
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.GetImportSettings(Inno.Assets.AssetPath)
title: AssetLoader.GetImportSettings
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 1e3cf7316454451263f41e9010eb5f74a866c6c2edc3927fe149118f78076e04

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `path`:** The isolated source path, not its sidecar path.

## Returns

The current settings and the metadata fingerprint required for a subsequent save.

## Exceptions

**Exception `T:System.NotSupportedException`:** The source has no registered importer.

**Exception `T:System.IO.InvalidDataException`:** The persisted settings cannot be restored by the current importer.
