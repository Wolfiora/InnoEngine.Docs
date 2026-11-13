---
uid: api.c61d83a805ce37736f7f2fe8ed584d9bf68c7885cbe6a68b501803ac2e4bbc5d
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderPropertyInspector.Compatible(Inno.Rendering.ShaderPropertyType,Inno.Rendering.Assets.MaterialValueKind)"
source: xml
reviewed: ab7128d84094b9ddbd95a50158504e3d285a73e364543d908d8ffdf613b7e13b
title: "Compatible"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Tests whether a stored override has the exact representation expected by a declaration.

**Parameter `type`:** Declared material type.

**Parameter `kind`:** Stored representation.

**Returns:** True only for supported matching kinds; no lossy conversion is performed.
