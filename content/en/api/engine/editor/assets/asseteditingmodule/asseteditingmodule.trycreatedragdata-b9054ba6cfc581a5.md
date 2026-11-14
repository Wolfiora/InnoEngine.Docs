---
uid: api.b9054ba6cfc581a5c6aa0ed303906452598a2c9cf00598bcc83990884ff9b62d
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.TryCreateDragData(Inno.Editor.Assets.AssetEditorContext,Inno.Editor.Interactions.EditorDragData@)"
source: xml
reviewed: 562abba80b7c59d6658f65ea52ecfea0c994e68d5816c7c7d1ac13e79a9d552d
title: "AssetEditingModule.TryCreateDragData"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Creates identity-based drag data when the current extension permits dragging.

## Parameters

**Parameter `context`:** The immutable metadata captured for this immediate source operation.

**Parameter `data`:** Receives identity-based drag data, or null when dragging is unavailable.

## Returns

True when the request is accepted; otherwise false.
