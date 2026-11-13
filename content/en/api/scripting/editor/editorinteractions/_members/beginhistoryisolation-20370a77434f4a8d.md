---
uid: api.20370a77434f4a8d3e1d5d5ac93f1ff0c0463ad0536fc06f22737c8ef126ccf5
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.BeginHistoryIsolation"
source: xml
reviewed: fc92d9942da9cb3df3a3f0126942cf98c9554bee1c2c4f45a29138a9f10f25b6
title: "BeginHistoryIsolation"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Starts an isolated temporary Undo and Redo branch while retaining the current editing branch.

## Remarks

Disposing the returned scope releases every temporary operation and restores the retained branch. This host-level boundary is intended for transient editor sessions such as Play Mode.

**Returns:** A scope that restores the retained history branch when disposed.

**Exception `T:System.InvalidOperationException`:** Thrown during an Undo, Redo, transaction, or another isolated branch.
