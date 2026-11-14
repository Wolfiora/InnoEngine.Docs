---
uid: api.abe852fb707133fe329de12be8cfe639c5ff08be836082e8eb3e47a0439ec3a4
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorDragContext.#ctor(InnoEditor.Core.EditorContext,InnoEditor.Interactions.EditorInteractions,System.String,InnoEditor.Interactions.EditorDragData)"
source: xml
reviewed: 24d3ac911b000bc00069b6bea508ec6ee2fe472786fefc78e3537c95b50e2dc2
title: "EditorDragContext.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a managed editor drag request.

## Parameters

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The interaction area that produced the source.

**Parameter `data`:** The transient source identity and preview label.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `editor`, `interactions`, or `data` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
