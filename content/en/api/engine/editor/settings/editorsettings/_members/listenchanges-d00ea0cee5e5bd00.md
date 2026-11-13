---
uid: api.d00ea0cee5e5bd00839166dbca15fddc1f9d691646dc99b432ece29c6983f29d
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSettings.ListenChanges(System.Action{Inno.Editor.Settings.EditorSettings})"
source: xml
reviewed: 5cb1d95c63439ad8468c2eeb3e9c5e752116896983210dbdd8cc6d9c57b82735
title: "ListenChanges"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Observes committed Apply, Undo and Redo changes through an owned Core Event hub.

**Parameter `observer`:** Synchronous callback reading the current committed settings; observer failures are logged and isolated.

**Returns:** A subscription owner that must be disposed before its feature or extension generation retires.

**Exception `T:System.ArgumentNullException`:** The observer is null.
