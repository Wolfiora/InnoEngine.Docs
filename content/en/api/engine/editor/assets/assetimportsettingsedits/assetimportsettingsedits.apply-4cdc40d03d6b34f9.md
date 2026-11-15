---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4cdc40d03d6b34f9f5300ebdf07afe95362d432f21e93cbcfb7b2afda3a08de4
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetImportSettingsEdits.Apply(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String)
title: AssetImportSettingsEdits.Apply
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: 552c900669ca15d274b96905e68b237ebd3cbb2db06fe9f8f247871c53a9acd6

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `path`:** Writable source asset path.

**Parameter `settings`:** Detached current-generation settings value.

**Parameter `expectedFingerprint`:** Sidecar fingerprint captured when editing began.

## Returns

Whether the saved configuration reimported successfully; false does not mean the settings were discarded.
