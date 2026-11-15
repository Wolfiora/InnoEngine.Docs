---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f545f7c80c5632a8f829a7b2bdcfbcdd4697668abe9996a1d6f16b7c2f2da313
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorEditGesture.#ctor(InnoEditor.Interactions.IEditorHistory,System.String)
title: EditorEditGesture.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: aeef98440fe6f2525e0112b33b1594e539f428ebe88a9bd6033aab50f1696ec8
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `history`:** The authoritative History for the current editor session.

**Parameter `name`:** The operation name displayed by Undo and Redo after a successful commit.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The History owner is null.

**Exception `T:System.InvalidOperationException`:** History cannot begin a transaction in its current state.
