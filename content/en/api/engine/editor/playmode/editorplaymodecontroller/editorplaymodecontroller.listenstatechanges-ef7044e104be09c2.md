---
uid: api.ef7044e104be09c20c7f35ea360876db5d739c4a7f5e59c4ce9fd0ff6afa22af
symbol: "engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeController.ListenStateChanges(System.Action{Inno.Editor.PlayMode.EditorPlayModeState})"
source: xml
reviewed: 4cd5d71d54415beee9d49267349855ec85a2e5c2eda923954134ff2203b89f3b
title: "EditorPlayModeController.ListenStateChanges"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
---

Subscribes to committed state transitions through the Core event lifetime.

## Parameters

**Parameter `listener`:** The observer invoked synchronously after a transition.

## Returns

An independently disposable subscription; dispose it before retiring the observer.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The listener is null.
