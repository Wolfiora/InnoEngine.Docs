---
uid: api.185baa58f2c1619f16df3e12be233c73d664ff2a6be22059aeda689ca7238e48
symbol: "scripting:Inno.Editor.PlayMode:M:InnoEditor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{InnoEditor.PlayMode.EditorPlayModeState})"
source: xml
reviewed: c4c87676e6757ffd7ca08fd44e6839be9551f2920a6c0d979ad085dca4409e61
title: "ListenStateChanges"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: editor-script
apiScope: Editor
---

Subscribes to committed state transitions through the Core event lifetime.

**Parameter `listener`:** The observer invoked synchronously after a transition.

**Returns:** An independently disposable subscription; dispose it before retiring the observer.

**Exception `T:System.ArgumentNullException`:** The listener is null.
