---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ebca4621e3cace974c77c1379772b9c81ce91b1862f02136cf5e63873640cd57
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorDropContext.#ctor(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorInteractions,System.String,Inno.Editor.Interactions.EditorDragData,Inno.Core.Identity.IdentityObject,System.Object,Inno.Editor.Interactions.EditorDropPlacement)
title: EditorDropContext.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: b31d6a542c1f770bb900d676a7faf8777d09fdf4f72122180986ef90c90b3f76
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The target interaction area.

**Parameter `data`:** The active identity-based drag data.

**Parameter `source`:** The live source resolved from `data` for this operation only.

**Parameter `target`:** The managed target object exposed to typed handlers.

**Parameter `placement`:** The requested position relative to the target.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `editor`, `interactions`, `data`, `source`, or `target` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
