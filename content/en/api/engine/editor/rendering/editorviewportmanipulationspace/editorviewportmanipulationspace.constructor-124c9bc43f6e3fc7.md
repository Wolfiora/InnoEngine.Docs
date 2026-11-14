---
uid: api.124c9bc43f6e3fc7698cfccbefc8f0061ff6d8c63a00e6fe2103af84c2bf7601
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorViewportManipulationSpace.#ctor(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Matrix,System.Boolean,Inno.Editor.Rendering.EditorViewportManipulationPlane)"
source: xml
reviewed: 8f822e1fe860678f3146c6ab5c672c3264540692766ef8e1eadf8c3c8a72d0cd
title: "EditorViewportManipulationSpace.Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Creates a manipulation space matching one rendered viewport frame.

## Parameters

**Parameter `viewMatrix`:** World-to-view matrix used by the submitted frame.

**Parameter `projectionMatrix`:** View-to-clip matrix used by the submitted frame.

**Parameter `isOrthographic`:** Whether the projection is orthographic; this does not imply planar manipulation.

**Parameter `plane`:** The contributor-selected transform handle orientation, independent of projection.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The plane is not one of the defined neutral manipulation orientations.
