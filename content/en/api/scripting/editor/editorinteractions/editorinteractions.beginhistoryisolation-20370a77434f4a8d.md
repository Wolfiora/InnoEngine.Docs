---
uid: api.20370a77434f4a8d3e1d5d5ac93f1ff0c0463ad0536fc06f22737c8ef126ccf5
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.BeginHistoryIsolation"
source: xml
reviewed: 892f3fb99d3f8b7e6b29bfcfe7cf1f9f1fdd32be4061f77774836fd57d764fd6
title: "EditorInteractions.BeginHistoryIsolation"
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
