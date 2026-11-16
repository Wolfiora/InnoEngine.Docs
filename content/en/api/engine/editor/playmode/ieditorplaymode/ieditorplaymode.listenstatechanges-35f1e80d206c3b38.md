---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.35f1e80d206c3b386e151a904bb553ab57a08ba5a6f0baf9128b928b2e278c1c
symbol: engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{Inno.Editor.PlayMode.EditorPlayModeState})
title: IEditorPlayMode.ListenStateChanges
kind: api
owners:
- Inno.Editor.PlayMode
apiSurface: source-clr
reviewed: a33920c6c2ddd7093608c0e97b994e59a42fdb5669ef588e9b2b76e43aa17533
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
