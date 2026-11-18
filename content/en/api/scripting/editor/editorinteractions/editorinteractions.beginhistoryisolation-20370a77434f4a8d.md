---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.20370a77434f4a8d3e1d5d5ac93f1ff0c0463ad0536fc06f22737c8ef126ccf5
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.BeginHistoryIsolation
title: EditorInteractions.BeginHistoryIsolation
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 8b84edc39d1ada906f7eff770fefc913f32102abb36be7685c9d9ba3ff528cf0
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Disposing the returned scope releases every temporary operation and restores the retained branch. This host-level boundary is intended for transient editor sessions such as Play Mode.

## Returns

A scope that restores the retained history branch when disposed.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown during an Undo, Redo, transaction, or another isolated branch.
