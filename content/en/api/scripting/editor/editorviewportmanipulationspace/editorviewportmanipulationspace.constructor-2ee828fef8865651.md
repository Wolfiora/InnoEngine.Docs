---
uid: api.2ee828fef8865651eb2946c0d09e460dfb9b3ec74636d92d0800ab98ca591bc6
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportManipulationSpace.#ctor(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Matrix,System.Boolean,InnoEditor.Rendering.EditorViewportManipulationPlane)"
source: xml
reviewed: 1c28126e0e17c7eea522748b30492cf00da10af1d3c8c98f03a683c48e2a6ede
title: "EditorViewportManipulationSpace.Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Creates a manipulation space matching one rendered viewport frame.

**Parameter `viewMatrix`:** World-to-view matrix used by the submitted frame.

**Parameter `projectionMatrix`:** View-to-clip matrix used by the submitted frame.

**Parameter `isOrthographic`:** Whether the projection is orthographic; this does not imply planar manipulation.

**Parameter `plane`:** The contributor-selected transform handle orientation, independent of projection.

**Exception `T:System.ArgumentOutOfRangeException`:** The plane is not one of the defined neutral manipulation orientations.
