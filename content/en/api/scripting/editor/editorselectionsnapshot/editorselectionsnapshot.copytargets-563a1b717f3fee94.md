---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.563a1b717f3fee94ec6f025f7c858022dc4bdaf8b1c2517fdae335232ea8c224
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorSelectionSnapshot.CopyTargets``1(InnoEditor.Interactions.EditorInteractions,System.Collections.Generic.ICollection{``0})
title: EditorSelectionSnapshot.CopyTargets
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: d9405fdd7752a9b5348a93402876dce8c2d4da3d0296062524b7572d6622282b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TTarget`:** The target type accepted by the current presenter.

## Parameters

**Parameter `interactions`:** The active session supplying the original identity domains.

**Parameter `destination`:** A temporary caller-owned collection to clear and fill.

## Returns

The number of currently available compatible targets; missing members remain represented by this snapshot.
