---
uid: api.cd577d4ad9cdeb24eb2d142d4a662be575adc1ea4dece08762fb8d9b57b7ed28
symbol: "scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditor.ValidateDelete(InnoEditor.Assets.AssetEditorContext)"
source: xml
reviewed: 3147ae9fe16b1d1a73d2b91a9ebdb37b13435296d2688e6512c30d1a0753e23b
title: "ValidateDelete"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: editor-script
apiScope: Editor
---

Validates a requested asset deletion before the AssetPipeline transaction begins.

**Parameter `context`:** The immutable snapshot of the entry that would be deleted.

**Returns:** A valid result when the transaction may proceed, or a diagnostic describing the rejection.
