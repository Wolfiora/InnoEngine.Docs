---
uid: api.eba464ad0a015bcb24fade651e9ca7b8dc8763cde50b3247774b2e1190c27dfa
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditor.ValidateRename(Inno.Editor.Assets.AssetEditorContext,System.String)"
source: xml
reviewed: 5b938318dcc3801063a0b8e6d9f2ca2f2c8823d64a16e067a539f12d8344447e
title: "AssetEditor.ValidateRename"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Validates a requested asset move before the AssetPipeline transaction begins.

## Parameters

**Parameter `context`:** The immutable snapshot of the source entry before the move.

**Parameter `targetPath`:** The normalized source-relative destination path.

## Returns

A valid result when the transaction may proceed, or a diagnostic describing the rejection.
