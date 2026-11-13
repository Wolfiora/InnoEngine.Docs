---
uid: api.ebca4621e3cace974c77c1379772b9c81ce91b1862f02136cf5e63873640cd57
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorDropContext.#ctor(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorInteractions,System.String,Inno.Editor.Interactions.EditorDragData,Inno.Core.Identity.IdentityObject,System.Object,Inno.Editor.Interactions.EditorDropPlacement)"
source: xml
reviewed: d9439646a810c7a7ea6f21e792287a2478241c4ae7464edbba11018f49bb2254
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
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
