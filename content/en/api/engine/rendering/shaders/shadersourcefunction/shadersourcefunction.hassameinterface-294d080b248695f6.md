---
uid: api.294d080b248695f6d1c99f45f2476a6e48f66963841558bf91b47b7446df0cd6
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderSourceFunction.HasSameInterface(Inno.Rendering.Shaders.ShaderSourceFunction)"
source: xml
reviewed: 1a67f5398320ac5c5bf000db105969a35db47d4b9da19ffddb86409b68982958
title: "ShaderSourceFunction.HasSameInterface"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Validates alternative implementations by semantic names, types, direction, and call order.

## Parameters

**Parameter `other`:** Candidate interface, whose private implementation function name may differ.

## Returns

True when both implementations expose the same graph ports and calling interface.
