---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.20370a77434f4a8d3e1d5d5ac93f1ff0c0463ad0536fc06f22737c8ef126ccf5
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.BeginHistoryIsolation
title: EditorInteractions.BeginHistoryIsolation
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 777efbb51cd16bd84a5f5e116f76391470f92a5b965cc85c9e90cddaaa7e2630
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A scope that restores the retained history branch when disposed.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown during an Undo, Redo, transaction, or another isolated branch.

## Remarks

Disposing the returned scope releases every temporary operation and restores the retained branch. This host-level boundary is intended for transient editor sessions such as Play Mode.
