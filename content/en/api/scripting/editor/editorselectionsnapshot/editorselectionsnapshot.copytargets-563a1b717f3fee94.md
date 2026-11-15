---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.563a1b717f3fee94ec6f025f7c858022dc4bdaf8b1c2517fdae335232ea8c224
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorSelectionSnapshot.CopyTargets``1(InnoEditor.Interactions.EditorInteractions,System.Collections.Generic.ICollection{``0})
title: EditorSelectionSnapshot.CopyTargets
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: aa8b14bf8f200f768ada2a9b73eec9ae8941376b12f253ae53b4fae01f599a4d
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Resolves this immutable selection in its original domains, including same-identity recovery after a generation change.

## Type parameters

**Type parameter `TTarget`:** The target type accepted by the current presenter.

## Parameters

**Parameter `interactions`:** The active session supplying the original identity domains.

**Parameter `destination`:** A temporary caller-owned collection to clear and fill.

## Returns

The number of currently available compatible targets; missing members remain represented by this snapshot.
