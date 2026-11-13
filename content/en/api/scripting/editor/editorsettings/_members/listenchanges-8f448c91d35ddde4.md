---
uid: api.8f448c91d35ddde4879035ffe8c965f87012fc31a17404ae128d91934f3e8e68
symbol: "scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSettings.ListenChanges(System.Action{InnoEditor.Settings.EditorSettings})"
source: xml
reviewed: 7b4649b6911f18bb0668e5a836a9c0b2edba5437eae5b036062bea38f92686f8
title: "ListenChanges"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: editor-script
apiScope: Editor
---

Observes committed Apply, Undo and Redo changes through an owned Core Event hub.

**Parameter `observer`:** Synchronous callback reading the current committed settings; observer failures are logged and isolated.

**Returns:** A subscription owner that must be disposed before its feature or extension generation retires.

**Exception `T:System.ArgumentNullException`:** The observer is null.
