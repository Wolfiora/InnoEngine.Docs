---
uid: api.c61d83a805ce37736f7f2fe8ed584d9bf68c7885cbe6a68b501803ac2e4bbc5d
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderPropertyInspector.Compatible(Inno.Rendering.ShaderPropertyType,Inno.Rendering.Assets.MaterialValueKind)"
source: xml
reviewed: 0ff268dc1e3a8602e8b9dca6a49a6cc307bb7074917d345e23778868d4002cf0
title: "ShaderPropertyInspector.Compatible"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Tests whether a stored override has the exact representation expected by a declaration.

**Parameter `type`:** Declared material type.

**Parameter `kind`:** Stored representation.

**Returns:** True only for supported matching kinds; no lossy conversion is performed.
