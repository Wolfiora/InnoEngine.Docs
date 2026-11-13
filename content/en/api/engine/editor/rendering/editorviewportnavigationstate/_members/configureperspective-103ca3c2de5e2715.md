---
uid: api.103ca3c2de5e2715415c958eb568873869382c0a2c114b15c01e5c2da3cdc3a3
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorViewportNavigationState.ConfigurePerspective(Inno.Core.Mathematics.Vector3,Inno.Core.Mathematics.Quaternion,System.Single,System.Single,System.Single)"
source: xml
reviewed: c00ad91f2d53c74806cf6532de9c6f5ec77d994255fd9a23e3e2e870a8c7c873
title: "ConfigurePerspective"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Atomically initializes a perspective navigation view.

**Parameter `position`:** Provider-defined world-space position.

**Parameter `rotation`:** Provider-defined world-space rotation.

**Parameter `fieldOfView`:** Perspective vertical field of view in degrees.

**Parameter `nearClip`:** Positive near clipping distance.

**Parameter `farClip`:** Far clipping distance greater than `nearClip`.
