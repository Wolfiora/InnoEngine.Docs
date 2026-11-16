---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.185baa58f2c1619f16df3e12be233c73d664ff2a6be22059aeda689ca7238e48
symbol: scripting:Inno.Editor.PlayMode:M:InnoEditor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{InnoEditor.PlayMode.EditorPlayModeState})
title: IEditorPlayMode.ListenStateChanges
kind: api
owners:
- Inno.Editor.PlayMode
apiSurface: editor-script
reviewed: 7b409b2361649b7e7894fa6f8d83bfae5bbaf3f9d3b2c8affb9150597b3de6b8
apiScope: Editor
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
