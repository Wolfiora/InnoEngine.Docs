---
uid: api.3bafdfbda624a91df42d44a2a5580450d28b04842fed7b76550084b0d30e921d
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorEditGesture.#ctor(Inno.Editor.Interactions.IEditorHistory,System.String)"
source: xml
reviewed: b6105f89f00acc4ee0bb39a7f8d0daf3526bc2f475995ca0fa30eb0d03012f69
title: "EditorEditGesture.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Begins an edit whose updates use the existing domain mutation and History protocols.

**Parameter `history`:** The authoritative History for the current editor session.

**Parameter `name`:** The operation name displayed by Undo and Redo after a successful commit.

**Exception `T:System.ArgumentNullException`:** The History owner is null.

**Exception `T:System.InvalidOperationException`:** History cannot begin a transaction in its current state.
