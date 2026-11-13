---
uid: api.eba464ad0a015bcb24fade651e9ca7b8dc8763cde50b3247774b2e1190c27dfa
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditor.ValidateRename(Inno.Editor.Assets.AssetEditorContext,System.String)"
source: xml
reviewed: cce796553d4e2571fc91fe4d627d52300f270153dd6c06e298f33747cd0c0752
title: "ValidateRename"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Validates a requested asset move before the AssetPipeline transaction begins.

**Parameter `context`:** The immutable snapshot of the source entry before the move.

**Parameter `targetPath`:** The normalized source-relative destination path.

**Returns:** A valid result when the transaction may proceed, or a diagnostic describing the rejection.
