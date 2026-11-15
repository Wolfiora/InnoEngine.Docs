---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2f1d51e55f6313bbbc2e9c22b0233b6b39a61c0073a7263c8eb66c9a308cf162
symbol: scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportFocusBounds.#ctor(InnoEngine.Mathematics.Vector3,System.Single)
title: EditorViewportFocusBounds.Constructor
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: editor-script
reviewed: 03b114d71a43a01465b21d134bcf0878978f6f78430c5e2e85838dba757ba2d7
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `center`:** World-space focus center.

**Parameter `radius`:** Non-negative world-space radius.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the center contains a non-finite value.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when the radius is negative or non-finite.
