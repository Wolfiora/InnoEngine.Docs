---
uid: api.9b3b179413dd5e0f5f005175ee02957041c8dc585cffce08b4152226a3d43bf4
symbol: "scripting:Inno.Editor.Assets:M:InnoEditor.Assets.AssetEditor.CanOpen(InnoEditor.Assets.AssetEditorContext)"
source: xml
reviewed: 3785d2cbef5e86d61d6a03a5f2a42b5891bd74c6de6fbcce493419eac940c067
title: "CanOpen"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: editor-script
apiScope: Editor
---

Gets whether the fallback asset editor can open the supplied source entry.

**Parameter `context`:** The immutable source and catalog snapshot for the operation.

**Returns:** `true` when `M:InnoEditor.Assets.AssetEditor.Open(InnoEditor.Assets.AssetEditorContext)` can handle the entry; otherwise, `false`.
