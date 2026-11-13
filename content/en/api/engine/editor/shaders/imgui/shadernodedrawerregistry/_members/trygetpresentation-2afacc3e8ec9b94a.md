---
uid: api.2afacc3e8ec9b94a8b558cd622d2dcef6ede434fdd48fa4e76c4e72937046c3b
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.TryGetPresentation(System.String,Inno.Editor.Shaders.ImGui.ShaderNodePresentation@)"
source: xml
reviewed: ea5eed827dd01879788d24fd6dcd11df5de800d07430cc99adab90f542da41e5
title: "TryGetPresentation"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Gets optional creation-menu presentation without executing the drawer.

**Parameter `definitionId`:** Stable compiler-independent node identity.

**Parameter `presentation`:** Receives immutable creation-menu presentation when registered.

**Returns:** True when the current generation contributes presentation for the node; otherwise false.
