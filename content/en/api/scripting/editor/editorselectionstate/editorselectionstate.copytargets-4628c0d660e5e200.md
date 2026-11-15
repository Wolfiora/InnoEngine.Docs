---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4628c0d660e5e20032dca45a007278de96d2bb951a4859a0a46555b9e0fb326a
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorSelectionState.CopyTargets``1(System.Collections.Generic.ICollection{``0})
title: EditorSelectionState.CopyTargets
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 906d1fca4d5c5179ec8484312a1405deaec43f64085072b12ea496defbb1f044
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Copies currently available selected targets into a caller-owned temporary collection.

## Type parameters

**Type parameter `TTarget`:** The target type accepted by the caller.

## Parameters

**Parameter `destination`:** The collection to clear and fill; do not retain live entries across callbacks.

## Returns

The number of targets resolved in this callback.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The destination is null.
