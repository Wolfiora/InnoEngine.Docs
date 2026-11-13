---
uid: api.35f1e80d206c3b386e151a904bb553ab57a08ba5a6f0baf9128b928b2e278c1c
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{Inno.Editor.PlayMode.EditorPlayModeState})"
source: xml
reviewed: 1440018dbdf94db50dd6bebe851d2037fd1e5812571475838ae687f500dc907a
title: "ListenStateChanges"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Subscribes to committed state transitions through the Core event lifetime.

**Parameter `listener`:** The observer invoked synchronously after a transition.

**Returns:** An independently disposable subscription; dispose it before retiring the observer.

**Exception `T:System.ArgumentNullException`:** The listener is null.
