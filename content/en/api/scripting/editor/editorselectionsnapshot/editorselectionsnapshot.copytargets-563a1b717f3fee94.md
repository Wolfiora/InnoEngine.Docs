---
uid: api.563a1b717f3fee94ec6f025f7c858022dc4bdaf8b1c2517fdae335232ea8c224
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorSelectionSnapshot.CopyTargets\u0060\u00601(InnoEditor.Interactions.EditorInteractions,System.Collections.Generic.ICollection{\u0060\u00600})"
source: xml
reviewed: aa8b14bf8f200f768ada2a9b73eec9ae8941376b12f253ae53b4fae01f599a4d
title: "EditorSelectionSnapshot.CopyTargets"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Resolves this immutable selection in its original domains, including same-identity recovery after a generation change.

## Type parameters

**Type parameter `TTarget`:** The target type accepted by the current presenter.

## Parameters

**Parameter `interactions`:** The active session supplying the original identity domains.

**Parameter `destination`:** A temporary caller-owned collection to clear and fill.

## Returns

The number of currently available compatible targets; missing members remain represented by this snapshot.
