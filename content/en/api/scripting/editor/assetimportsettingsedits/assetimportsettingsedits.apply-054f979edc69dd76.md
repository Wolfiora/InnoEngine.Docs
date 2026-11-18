---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.054f979edc69dd76f49e5d524bc217fcb8ad09aad7bcbabc652ca4eb2c78f0af
symbol: scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetImportSettingsEdits.Apply(InnoEngine.Assets.AssetPath,InnoEngine.Serialization.ISerializable,System.String)
title: AssetImportSettingsEdits.Apply
kind: api
owners:
- Inno.Editor.Assets
apiSurface: editor-script
sourceFingerprint: 7f1210efe0e4b62b9eeabf5296d617ac2c0c155a13201da76a9134b0d7f8caec
apiScope: Editor
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
