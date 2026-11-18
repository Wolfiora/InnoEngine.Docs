---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f6b794532236bb44e175a1014bea31e2033bd44c55c6721dda8e13ebe18c1fc3
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.GetImportSettings(Inno.Assets.AssetPath)
title: AssetLoader.GetImportSettings
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 587d49ac9bc820696ee2748939a9b2fdfe7e327de5626c5d55e2867368d67320
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
