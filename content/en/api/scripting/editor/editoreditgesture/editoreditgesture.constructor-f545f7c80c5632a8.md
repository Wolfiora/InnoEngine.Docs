---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f545f7c80c5632a8f829a7b2bdcfbcdd4697668abe9996a1d6f16b7c2f2da313
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorEditGesture.#ctor(InnoEditor.Interactions.IEditorHistory,System.String)
title: EditorEditGesture.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 399b3a871b4c8e2b06d31eefa81cc9a9da79473b34e6be5b4bc284c084349c5a
apiScope: Editor
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
