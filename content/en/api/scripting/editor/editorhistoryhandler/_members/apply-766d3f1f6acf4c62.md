---
uid: api.766d3f1f6acf4c623a8e9ce7af7c5a176ffd6bdea7afbfaec392d458f35fdc17
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryHandler.Apply(InnoEditor.Interactions.EditorHistoryContext,InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryDirection)"
source: xml
reviewed: f182b3ad08a7af0786c904de6eb3df8deadb9efe51ce4229f5068df836bacd85
title: "Apply"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Atomically applies a neutral history change in the requested direction.

**Parameter `context`:** The current-generation editor services.

**Parameter `change`:** The neutral history change.

**Parameter `direction`:** The requested Undo or Redo direction.

**Returns:** The transition result. A failure must leave the feature in its original state.
