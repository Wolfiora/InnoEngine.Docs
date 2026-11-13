---
uid: api.abe852fb707133fe329de12be8cfe639c5ff08be836082e8eb3e47a0439ec3a4
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorDragContext.#ctor(InnoEditor.Core.EditorContext,InnoEditor.Interactions.EditorInteractions,System.String,InnoEditor.Interactions.EditorDragData)"
source: xml
reviewed: 4414b50e39fe8ffd7717f617a1d4954ac1c3421da0f77bd84e724c51637a05ed
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a managed editor drag request.

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The interaction area that produced the source.

**Parameter `data`:** The transient source identity and preview label.

**Exception `T:System.ArgumentNullException`:** Thrown when `editor`, `interactions`, or `data` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
