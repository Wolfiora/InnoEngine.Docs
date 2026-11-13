---
uid: api.2ee828fef8865651eb2946c0d09e460dfb9b3ec74636d92d0800ab98ca591bc6
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportManipulationSpace.#ctor(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Matrix,System.Boolean,InnoEditor.Rendering.EditorViewportManipulationPlane)"
source: xml
reviewed: eccb2556f227cbdfdef9b1419c6dd3dd82724180ff042fe072149cd0404f7747
title: "Constructor"
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
