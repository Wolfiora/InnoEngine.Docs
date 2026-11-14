---
uid: api.766d3f1f6acf4c623a8e9ce7af7c5a176ffd6bdea7afbfaec392d458f35fdc17
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryHandler.Apply(InnoEditor.Interactions.EditorHistoryContext,InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryDirection)"
source: xml
reviewed: eefd46f398768f00aa50efe1d50c5be56bd308b7cee0f793a22545bfab84b9b8
title: "EditorHistoryHandler.Apply"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Atomically applies a neutral history change in the requested direction.

## Parameters

**Parameter `context`:** The current-generation editor services.

**Parameter `change`:** The neutral history change.

**Parameter `direction`:** The requested Undo or Redo direction.

## Returns

The transition result. A failure must leave the feature in its original state.
