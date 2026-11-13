---
uid: api.c73bd848eae539842fb3b8e07603f4c9be419151f5ec0a0585384e0239c9938c
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.SaveImportSettings(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String)"
source: xml
reviewed: 340d754ba84512922c9da1ddf039613c4cf780866bb70ed68d008f9b5ac15df5
title: "SaveImportSettings"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Saves import settings with conflict detection and immediately attempts to reimport the source.

**Parameter `path`:** The writable isolated source path.

**Parameter `settings`:** The edited settings, or null to reset to importer defaults.

**Parameter `expectedFingerprint`:** The fingerprint obtained when reading the settings.

**Returns:** True when settings were saved and reimport succeeded; false when the saved settings failed import.

**Exception `T:System.IO.IOException`:** The settings changed externally or could not be written.
