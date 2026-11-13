---
uid: api.e41beb928b118b6036c7055554e2ae9b6404054b1acfcbacc4c354c1d95c4812
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.EditorViewportNavigationState.ConfigurePerspective(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Quaternion,System.Single,System.Single,System.Single)"
source: xml
reviewed: 7f4f9ef1041f0af1d3e49d796c5c6e2e294f4338e25b9f6a1fb4727aac0eb6d0
title: "EditorViewportNavigationState.ConfigurePerspective"
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
