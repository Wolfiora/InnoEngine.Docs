---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.563a1b717f3fee94ec6f025f7c858022dc4bdaf8b1c2517fdae335232ea8c224
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorSelectionSnapshot.CopyTargets``1(InnoEditor.Interactions.EditorInteractions,System.Collections.Generic.ICollection{``0})
title: EditorSelectionSnapshot.CopyTargets
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 7a2d41bc269f1359110808fe0a7e0fd65c726399733ee8a782b425b280443678
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
