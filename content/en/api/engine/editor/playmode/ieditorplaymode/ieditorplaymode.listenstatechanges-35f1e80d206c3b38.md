---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.35f1e80d206c3b386e151a904bb553ab57a08ba5a6f0baf9128b928b2e278c1c
symbol: engine:Inno.Editor.PlayMode:M:Inno.Editor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{Inno.Editor.PlayMode.EditorPlayModeState})
title: IEditorPlayMode.ListenStateChanges
kind: api
owners:
- Inno.Editor.PlayMode
apiSurface: source-clr
sourceFingerprint: d5db22a2d82e22558c1f9925771242a79ec884cf695d29a641c2ad3900abdc02
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
