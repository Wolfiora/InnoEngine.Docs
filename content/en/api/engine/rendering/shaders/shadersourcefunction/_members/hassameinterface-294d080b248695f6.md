---
uid: api.294d080b248695f6d1c99f45f2476a6e48f66963841558bf91b47b7446df0cd6
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFunction.HasSameInterface(Inno.Rendering.Shaders.ShaderSourceFunction)"
source: xml
reviewed: e0ce1dd3294a2b7c5f15c9ed35c4a245dd793ed930622a36b6ff384cb52c3e5f
title: "HasSameInterface"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Validates alternative implementations by semantic names, types, direction, and call order.

**Parameter `other`:** Candidate interface, whose private implementation function name may differ.

**Returns:** True when both implementations expose the same graph ports and calling interface.
