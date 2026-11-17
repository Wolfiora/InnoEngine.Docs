---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c73bd848eae539842fb3b8e07603f4c9be419151f5ec0a0585384e0239c9938c
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.SaveImportSettings(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String)
title: AssetPipeline.SaveImportSettings
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 21b04a8796f791822a27b8ad4d60380412c20d281771e43f6dd83692c4ec6b95
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
