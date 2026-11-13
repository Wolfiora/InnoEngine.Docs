---
uid: api.56eaf2323fb86a0d1bf2045e4474511f30418872ddd6beafc7614c03943afe3e
symbol: "scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderPropertyInspector.Compatible(InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.MaterialValueKind)"
source: xml
reviewed: 04490cb27d9d78e8ca9b756fd317dd9719c5fa439de0a86ea21a2eeb635f0cac
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
