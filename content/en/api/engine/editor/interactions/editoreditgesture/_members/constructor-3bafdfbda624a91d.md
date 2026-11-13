---
uid: api.3bafdfbda624a91df42d44a2a5580450d28b04842fed7b76550084b0d30e921d
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorEditGesture.#ctor(Inno.Editor.Interactions.IEditorHistory,System.String)"
source: xml
reviewed: d48fd7c60a5b9aacb153d3605fc24e30e670c41264c976d79d7af108063abacb
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Begins an edit whose updates use the existing domain mutation and History protocols.

**Parameter `history`:** The authoritative History for the current editor session.

**Parameter `name`:** The operation name displayed by Undo and Redo after a successful commit.

**Exception `T:System.ArgumentNullException`:** The History owner is null.

**Exception `T:System.InvalidOperationException`:** History cannot begin a transaction in its current state.
