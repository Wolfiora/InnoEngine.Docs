---
uid: api.2afacc3e8ec9b94a8b558cd622d2dcef6ede434fdd48fa4e76c4e72937046c3b
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.TryGetPresentation(System.String,Inno.Editor.Shaders.ImGui.ShaderNodePresentation@)"
source: xml
reviewed: 100b00123dff4860a3bdc309bf49788e88699b7f4722ab62b996fe1c38f8f519
title: "ShaderNodeDrawerRegistry.TryGetPresentation"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Gets optional creation-menu presentation without executing the drawer.

**Parameter `definitionId`:** Stable compiler-independent node identity.

**Parameter `presentation`:** Receives immutable creation-menu presentation when registered.

**Returns:** True when the current generation contributes presentation for the node; otherwise false.
