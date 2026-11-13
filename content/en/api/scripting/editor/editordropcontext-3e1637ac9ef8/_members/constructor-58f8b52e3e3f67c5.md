---
uid: api.58f8b52e3e3f67c557b0574201703ec2b5cc37a2c6918e73bdda073fa1161c95
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorDropContext.#ctor(InnoEditor.Core.EditorContext,InnoEditor.Interactions.EditorInteractions,System.String,InnoEditor.Interactions.EditorDragData,InnoEngine.Core.IdentityObject,System.Object,InnoEditor.Interactions.EditorDropPlacement)"
source: xml
reviewed: d40f60e612f60035b24c31e767b1aee55f8d4451c6ca4bdbbaf86668ebb80cb1
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a managed drop request.

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The target interaction area.

**Parameter `data`:** The active identity-based drag data.

**Parameter `source`:** The live source resolved from `data` for this operation only.

**Parameter `target`:** The managed target object exposed to typed handlers.

**Parameter `placement`:** The requested position relative to the target.

**Exception `T:System.ArgumentNullException`:** Thrown when `editor`, `interactions`, `data`, `source`, or `target` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
