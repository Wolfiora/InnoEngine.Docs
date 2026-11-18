---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ef7044e104be09c20c7f35ea360876db5d739c4a7f5e59c4ce9fd0ff6afa22af
symbol: engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.EditorPlayModeController.ListenStateChanges(System.Action{Inno.Editor.PlayMode.EditorPlayModeState})
title: EditorPlayModeController.ListenStateChanges
kind: api
owners:
- Inno.Editor.PlayMode
apiSurface: source-clr
sourceFingerprint: 9e1f2a32a0bea46136b46188fd3fa995e0b94693534ac10b7ce13d6e73448fd8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `listener`:** The observer invoked synchronously after a transition.

## Returns

An independently disposable subscription; dispose it before retiring the observer.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The listener is null.
