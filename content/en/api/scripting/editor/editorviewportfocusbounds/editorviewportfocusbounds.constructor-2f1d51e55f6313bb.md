---
uid: api.2f1d51e55f6313bbbc2e9c22b0233b6b39a61c0073a7263c8eb66c9a308cf162
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportFocusBounds.#ctor(InnoEngine.Mathematics.Vector3,System.Single)"
source: xml
reviewed: 03b114d71a43a01465b21d134bcf0878978f6f78430c5e2e85838dba757ba2d7
title: "EditorViewportFocusBounds.Constructor"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Creates a finite focus bound.

**Parameter `center`:** World-space focus center.

**Parameter `radius`:** Non-negative world-space radius.

**Exception `T:System.ArgumentException`:** Thrown when the center contains a non-finite value.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when the radius is negative or non-finite.
