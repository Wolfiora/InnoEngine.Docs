---
uid: api.054f979edc69dd76f49e5d524bc217fcb8ad09aad7bcbabc652ca4eb2c78f0af
symbol: "scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetImportSettingsEdits.Apply(InnoEngine.Assets.AssetPath,InnoEngine.Serialization.ISerializable,System.String)"
source: xml
reviewed: 93b48f04335a33ac07ef8ec1139066b1fe7b968ec5da9fa46f5d720c0b1809ac
title: "Apply"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: editor-script
apiScope: Editor
---

Saves one settings gesture, recording neutral before/after properties even when reimport reports an error.

**Parameter `path`:** Writable source asset path.

**Parameter `settings`:** Detached current-generation settings value.

**Parameter `expectedFingerprint`:** Sidecar fingerprint captured when editing began.

**Returns:** Whether the saved configuration reimported successfully; false does not mean the settings were discarded.
