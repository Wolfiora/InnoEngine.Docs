---
uid: api.56eaf2323fb86a0d1bf2045e4474511f30418872ddd6beafc7614c03943afe3e
symbol: "scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderPropertyInspector.Compatible(InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.MaterialValueKind)"
source: xml
reviewed: 375b3062ff1f306a642808ff3c0e467dc0a9ff716a00d5b58c776d9cfda8cb55
title: "Compatible"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Tests whether a stored override has the exact representation expected by a declaration.

**Parameter `type`:** Declared material type.

**Parameter `kind`:** Stored representation.

**Returns:** True only for supported matching kinds; no lossy conversion is performed.
