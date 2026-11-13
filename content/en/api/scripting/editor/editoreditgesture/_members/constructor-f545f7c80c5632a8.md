---
uid: api.f545f7c80c5632a8f829a7b2bdcfbcdd4697668abe9996a1d6f16b7c2f2da313
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorEditGesture.#ctor(InnoEditor.Interactions.IEditorHistory,System.String)"
source: xml
reviewed: 2e8db320eef73f0149c5c50b6f754a9b8435345917ce4a8dbbcbecec7010f078
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Begins an edit whose updates use the existing domain mutation and History protocols.

**Parameter `history`:** The authoritative History for the current editor session.

**Parameter `name`:** The operation name displayed by Undo and Redo after a successful commit.

**Exception `T:System.ArgumentNullException`:** The History owner is null.

**Exception `T:System.InvalidOperationException`:** History cannot begin a transaction in its current state.
