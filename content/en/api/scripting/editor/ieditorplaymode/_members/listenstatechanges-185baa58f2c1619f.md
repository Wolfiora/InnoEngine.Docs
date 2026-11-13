---
uid: api.185baa58f2c1619f16df3e12be233c73d664ff2a6be22059aeda689ca7238e48
symbol: "scripting:Inno.Editor.PlayMode:M:InnoEditor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{InnoEditor.PlayMode.EditorPlayModeState})"
source: xml
reviewed: 9e9bfe4089573600cd83697b58d1737fac063d7c9ec25b72c747823fb005d473
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
