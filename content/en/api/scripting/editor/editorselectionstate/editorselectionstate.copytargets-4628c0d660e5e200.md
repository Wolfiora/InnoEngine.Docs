---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4628c0d660e5e20032dca45a007278de96d2bb951a4859a0a46555b9e0fb326a
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorSelectionState.CopyTargets``1(System.Collections.Generic.ICollection{``0})
title: EditorSelectionState.CopyTargets
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: b1fc6c25bdff5018bfe80b21e723cd563a698da2ea76511048ecf4a0fd1c295b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TTarget`:** The target type accepted by the caller.

## Parameters

**Parameter `destination`:** The collection to clear and fill; do not retain live entries across callbacks.

## Returns

The number of targets resolved in this callback.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The destination is null.
