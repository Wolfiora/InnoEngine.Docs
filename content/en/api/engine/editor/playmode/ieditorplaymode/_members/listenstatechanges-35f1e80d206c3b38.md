---
uid: api.35f1e80d206c3b386e151a904bb553ab57a08ba5a6f0baf9128b928b2e278c1c
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{Inno.Editor.PlayMode.EditorPlayModeState})"
source: xml
reviewed: 878e076ca480c394ee327cf745580cd262beeab56370d082c5c20bcac425a9ec
title: "ListenStateChanges"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Subscribes to committed state transitions through the Core event lifetime.

**Parameter `listener`:** The observer invoked synchronously after a transition.

**Returns:** An independently disposable subscription; dispose it before retiring the observer.

**Exception `T:System.ArgumentNullException`:** The listener is null.
