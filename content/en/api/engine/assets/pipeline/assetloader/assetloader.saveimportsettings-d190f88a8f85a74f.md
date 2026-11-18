---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d190f88a8f85a74fdd9e83ef2b70c8b9bde9a675d19eaf96eb2c9932de0a3391
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.SaveImportSettings(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String)
title: AssetLoader.SaveImportSettings
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 0d236f6046d827c1652391ea444af962152157286a9ab8f371311335d0c31647
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The writable isolated source path.

**Parameter `settings`:** A value of the current importer's settings type, or null to reset to defaults.

**Parameter `expectedFingerprint`:** The fingerprint returned when the settings were read.

## Returns

True when reimport succeeds; false when settings were saved but reimport failed.

## Exceptions

**Exception `T:System.IO.IOException`:** The sidecar changed externally or could not be written.

**Exception `T:System.InvalidOperationException`:** The source is read-only or belongs to an isolated candidate.

**Exception `T:System.ArgumentException`:** The settings have a different type from the current importer.
