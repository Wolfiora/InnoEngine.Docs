---
uid: api.2fa857efd93a8f8948e4fbccb93bfea00f1ceb7b6d6d9f24f6f24a6271e0e63a
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.ValidateDeleteSelection(Inno.Editor.Core.EditorContext,System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry})"
source: xml
reviewed: 8e53939cebb0837879959cee59aedef57a81f26b4773a4b0b9dafb16f1819a35
title: "ValidateDeleteSelection"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Checks the entire source selection before a batch mutation, including extension validation and read-only ownership.

**Parameter `editor`:** The immediate Editor context.

**Parameter `targets`:** Fresh source entries in selection order.

**Returns:** The first rejection, or a valid result when every source can be deleted.
