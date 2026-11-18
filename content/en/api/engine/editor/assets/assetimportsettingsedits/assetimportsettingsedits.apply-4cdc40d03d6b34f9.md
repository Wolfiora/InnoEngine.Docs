---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4cdc40d03d6b34f9f5300ebdf07afe95362d432f21e93cbcfb7b2afda3a08de4
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetImportSettingsEdits.Apply(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String)
title: AssetImportSettingsEdits.Apply
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
sourceFingerprint: e5075a427fdb38cb9795c0494ba413feefa239e9e97aac9d98590374adf72acf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** Writable source asset path.

**Parameter `settings`:** Detached current-generation settings value.

**Parameter `expectedFingerprint`:** Sidecar fingerprint captured when editing began.

## Returns

Whether the saved configuration reimported successfully; false does not mean the settings were discarded.
