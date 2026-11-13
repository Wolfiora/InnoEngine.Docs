---
uid: api.e41beb928b118b6036c7055554e2ae9b6404054b1acfcbacc4c354c1d95c4812
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportNavigationState.ConfigurePerspective(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Quaternion,System.Single,System.Single,System.Single)"
source: xml
reviewed: 56889102d266b900a1b58d520e3982afd9a32c29be574b7ed8fd305b0c6b7a8b
title: "ConfigurePerspective"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Atomically initializes a perspective navigation view.

**Parameter `position`:** Provider-defined world-space position.

**Parameter `rotation`:** Provider-defined world-space rotation.

**Parameter `fieldOfView`:** Perspective vertical field of view in degrees.

**Parameter `nearClip`:** Positive near clipping distance.

**Parameter `farClip`:** Far clipping distance greater than `nearClip`.
