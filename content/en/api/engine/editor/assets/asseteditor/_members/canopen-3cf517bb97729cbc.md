---
uid: api.3cf517bb97729cbc3e30a69b5c9602169d8af13e3b16f37938c35228bc121f69
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditor.CanOpen(Inno.Editor.Assets.AssetEditorContext)"
source: xml
reviewed: a9000d52fe4ed0032b57f3a039b6523a709d56663d30dde99a29a49564232606
title: "CanOpen"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Gets whether the fallback asset editor can open the supplied source entry.

**Parameter `context`:** The immutable source and catalog snapshot for the operation.

**Returns:** `true` when `M:Inno.Editor.Assets.AssetEditor.Open(Inno.Editor.Assets.AssetEditorContext)` can handle the entry; otherwise, `false`.
