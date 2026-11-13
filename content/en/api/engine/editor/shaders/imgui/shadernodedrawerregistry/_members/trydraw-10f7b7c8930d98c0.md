---
uid: api.10f7b7c8930d98c0968845a890c6c08dd8997714ac6b1115fa2e2accc5dd575c
symbol: "engine:Inno.Editor.Shaders.ImGui:M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.TryDraw(System.String,Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext)"
source: xml
reviewed: 729f140443d34f915bce1667ffee9e754e3906c6ea710479ca438d6c8c2ff8cb
title: "TryDraw"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: source-clr
---

Invokes optional node controls within one generation lease.

**Parameter `definitionId`:** Stable node definition identity.

**Parameter `context`:** Invocation-scoped host values, history callback and previews.

**Returns:** True when a registered drawer rendered the controls; false leaves presentation to the host.
