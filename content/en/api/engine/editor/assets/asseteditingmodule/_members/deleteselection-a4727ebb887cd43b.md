---
uid: api.a4727ebb887cd43b672c6c323ae878a76b45469fd0a6820e9b06f73e0f1da2d1
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.DeleteSelection(Inno.Editor.Core.EditorContext,System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry})"
source: xml
reviewed: 94d0ce833d5e4a81e754bf07de9d23e81ace9717f7a3c4aece2197cf3ade0e21
title: "DeleteSelection"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Deletes minimal selected source roots in one History transaction, restoring earlier deletions if a later one fails.

**Parameter `editor`:** The immediate Editor context.

**Parameter `targets`:** Fresh selected source entries; nested entries are covered by their selected directory.

**Exception `T:System.InvalidOperationException`:** Validation or a mutation fails; rollback failures remain explicit.
