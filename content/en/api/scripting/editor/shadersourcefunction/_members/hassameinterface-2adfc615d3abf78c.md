---
uid: api.2adfc615d3abf78cd69624eb1b06bce5901f0c27070cac5c12e37533e64dd1ce
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderSourceFunction.HasSameInterface(InnoEditor.Rendering.Shaders.ShaderSourceFunction)"
source: xml
reviewed: 13b4f9019c1e191d3e2c8e4ebf03dc5251c9e395044694f49731c1944b45cd0a
title: "HasSameInterface"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Validates alternative implementations by semantic names, types, direction, and call order.

**Parameter `other`:** Candidate interface, whose private implementation function name may differ.

**Returns:** True when both implementations expose the same graph ports and calling interface.
