---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.185baa58f2c1619f16df3e12be233c73d664ff2a6be22059aeda689ca7238e48
symbol: scripting:Inno.Editor.PlayMode:M:InnoEditor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{InnoEditor.PlayMode.EditorPlayModeState})
title: IEditorPlayMode.ListenStateChanges
kind: api
owners:
- Inno.Editor.PlayMode
apiSurface: editor-script
reviewed: c4c87676e6757ffd7ca08fd44e6839be9551f2920a6c0d979ad085dca4409e61
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Subscribes to committed state transitions through the Core event lifetime.

## Parameters

**Parameter `listener`:** The observer invoked synchronously after a transition.

## Returns

An independently disposable subscription; dispose it before retiring the observer.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The listener is null.
