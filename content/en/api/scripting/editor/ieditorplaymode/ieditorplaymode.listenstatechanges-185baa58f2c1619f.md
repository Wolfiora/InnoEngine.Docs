---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.185baa58f2c1619f16df3e12be233c73d664ff2a6be22059aeda689ca7238e48
symbol: scripting:Inno.Editor.PlayMode:M:InnoEditor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{InnoEditor.PlayMode.EditorPlayModeState})
title: IEditorPlayMode.ListenStateChanges
kind: api
owners:
- Inno.Editor.PlayMode
apiSurface: editor-script
sourceFingerprint: d5d929600193db15bf1843c9182ba10eab958f9f2dcdd407027a2eb41346ed0c
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
