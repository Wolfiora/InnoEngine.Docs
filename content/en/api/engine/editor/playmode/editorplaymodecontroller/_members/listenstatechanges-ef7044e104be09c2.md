---
uid: api.ef7044e104be09c20c7f35ea360876db5d739c4a7f5e59c4ce9fd0ff6afa22af
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeController.ListenStateChanges(System.Action{Inno.Editor.PlayMode.EditorPlayModeState})"
source: xml
reviewed: 455a6c5f312cb154d4130c2ca70fded6d58278fb13c622f59079fe078f426e63
title: "ListenStateChanges"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Subscribes to committed state transitions through the Core event lifetime.

**Parameter `listener`:** The observer invoked synchronously after a transition.

**Returns:** An independently disposable subscription; dispose it before retiring the observer.

**Exception `T:System.ArgumentNullException`:** The listener is null.
