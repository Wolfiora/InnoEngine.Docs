---
uid: api.4cdc40d03d6b34f9f5300ebdf07afe95362d432f21e93cbcfb7b2afda3a08de4
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetImportSettingsEdits.Apply(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String)"
source: xml
reviewed: 3e12d975c199cd3fea34682590fa65801b1b1d314590ebd65c10b9bd966f7960
title: "Apply"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Saves one settings gesture, recording neutral before/after properties even when reimport reports an error.

**Parameter `path`:** Writable source asset path.

**Parameter `settings`:** Detached current-generation settings value.

**Parameter `expectedFingerprint`:** Sidecar fingerprint captured when editing began.

**Returns:** Whether the saved configuration reimported successfully; false does not mean the settings were discarded.
