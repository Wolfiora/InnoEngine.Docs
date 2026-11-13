---
uid: api.2fa857efd93a8f8948e4fbccb93bfea00f1ceb7b6d6d9f24f6f24a6271e0e63a
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.ValidateDeleteSelection(Inno.Editor.Core.EditorContext,System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry})"
source: xml
reviewed: 38aa912f152da57c11e030f5073ea5af7d9aa6807cc1604a5d85e5c7b0435359
title: "AssetEditingModule.ValidateDeleteSelection"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Checks the entire source selection before a batch mutation, including extension validation and read-only ownership.

**Parameter `editor`:** The immediate Editor context.

**Parameter `targets`:** Fresh source entries in selection order.

**Returns:** The first rejection, or a valid result when every source can be deleted.
