---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c73bd848eae539842fb3b8e07603f4c9be419151f5ec0a0585384e0239c9938c
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.SaveImportSettings(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String)
title: AssetPipeline.SaveImportSettings
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: e2ec6d9b25c1f32e8166f217858f59ce147a3f51c25fb0b0afe8586034463dd5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The writable isolated source path.

**Parameter `settings`:** The edited settings, or null to reset to importer defaults.

**Parameter `expectedFingerprint`:** The fingerprint obtained when reading the settings.

## Returns

True when settings were saved and reimport succeeded; false when the saved settings failed import.

## Exceptions

**Exception `T:System.IO.IOException`:** The settings changed externally or could not be written.
