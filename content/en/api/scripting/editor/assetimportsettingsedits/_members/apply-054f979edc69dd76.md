---
uid: api.054f979edc69dd76f49e5d524bc217fcb8ad09aad7bcbabc652ca4eb2c78f0af
symbol: "scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetImportSettingsEdits.Apply(InnoEngine.Assets.AssetPath,InnoEngine.Serialization.ISerializable,System.String)"
source: xml
reviewed: c24ddca505ed4fb9208669af5afb128f8e042a2ea44353d5aaf8c6887ee37925
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
