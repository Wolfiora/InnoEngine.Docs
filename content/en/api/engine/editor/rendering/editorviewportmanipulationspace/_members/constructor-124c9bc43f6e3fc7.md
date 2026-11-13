---
uid: api.124c9bc43f6e3fc7698cfccbefc8f0061ff6d8c63a00e6fe2103af84c2bf7601
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorViewportManipulationSpace.#ctor(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Matrix,System.Boolean,Inno.Editor.Rendering.EditorViewportManipulationPlane)"
source: xml
reviewed: 2ff4e738bd2550c5adacdfda840796739698eeb35bbd906b65fa89bc24555bed
title: "Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Creates a manipulation space matching one rendered viewport frame.

**Parameter `viewMatrix`:** World-to-view matrix used by the submitted frame.

**Parameter `projectionMatrix`:** View-to-clip matrix used by the submitted frame.

**Parameter `isOrthographic`:** Whether the projection is orthographic; this does not imply planar manipulation.

**Parameter `plane`:** The contributor-selected transform handle orientation, independent of projection.

**Exception `T:System.ArgumentOutOfRangeException`:** The plane is not one of the defined neutral manipulation orientations.
