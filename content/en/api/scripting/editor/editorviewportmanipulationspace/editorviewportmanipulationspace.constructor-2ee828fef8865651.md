---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2ee828fef8865651eb2946c0d09e460dfb9b3ec74636d92d0800ab98ca591bc6
symbol: scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportManipulationSpace.#ctor(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Matrix,System.Boolean,InnoEditor.Rendering.EditorViewportManipulationPlane)
title: EditorViewportManipulationSpace.Constructor
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: editor-script
sourceFingerprint: a1f84560e92ac924dad28a5581b067b9b5018d9ec7904e0e607bcea4fa5432f6
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `viewMatrix`:** World-to-view matrix used by the submitted frame.

**Parameter `projectionMatrix`:** View-to-clip matrix used by the submitted frame.

**Parameter `isOrthographic`:** Whether the projection is orthographic; this does not imply planar manipulation.

**Parameter `plane`:** The contributor-selected transform handle orientation, independent of projection.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The plane is not one of the defined neutral manipulation orientations.
