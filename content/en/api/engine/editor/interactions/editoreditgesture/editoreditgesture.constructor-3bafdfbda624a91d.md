---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3bafdfbda624a91df42d44a2a5580450d28b04842fed7b76550084b0d30e921d
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorEditGesture.#ctor(Inno.Editor.Interactions.IEditorHistory,System.String)
title: EditorEditGesture.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 9fe375c7325f7092405baa9f48be87224d42b906e55d4206ba547306c0f9eae8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `history`:** The authoritative History for the current editor session.

**Parameter `name`:** The operation name displayed by Undo and Redo after a successful commit.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The History owner is null.

**Exception `T:System.InvalidOperationException`:** History cannot begin a transaction in its current state.
