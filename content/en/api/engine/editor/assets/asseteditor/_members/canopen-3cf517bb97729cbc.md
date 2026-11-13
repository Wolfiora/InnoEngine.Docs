---
uid: api.3cf517bb97729cbc3e30a69b5c9602169d8af13e3b16f37938c35228bc121f69
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditor.CanOpen(Inno.Editor.Assets.AssetEditorContext)"
source: xml
reviewed: 146c7a1d9d20ba60eee849a66067176e50d647a0d9233d8ea1a803e00ff34a4d
title: "CanOpen"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Gets whether the fallback asset editor can open the supplied source entry.

**Parameter `context`:** The immutable source and catalog snapshot for the operation.

**Returns:** `true` when `M:Inno.Editor.Assets.AssetEditor.Open(Inno.Editor.Assets.AssetEditorContext)` can handle the entry; otherwise, `false`.
