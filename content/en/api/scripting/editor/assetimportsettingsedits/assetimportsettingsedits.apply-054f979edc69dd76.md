---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.054f979edc69dd76f49e5d524bc217fcb8ad09aad7bcbabc652ca4eb2c78f0af
symbol: scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetImportSettingsEdits.Apply(InnoEngine.Assets.AssetPath,InnoEngine.Serialization.ISerializable,System.String)
title: AssetImportSettingsEdits.Apply
kind: api
owners:
- Inno.Editor.Assets
apiSurface: editor-script
reviewed: 93b48f04335a33ac07ef8ec1139066b1fe7b968ec5da9fa46f5d720c0b1809ac
apiScope: Editor

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
