---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.56eaf2323fb86a0d1bf2045e4474511f30418872ddd6beafc7614c03943afe3e
symbol: scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderPropertyInspector.Compatible(InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.MaterialValueKind)
title: ShaderPropertyInspector.Compatible
kind: api
owners:
- Inno.Editor.Shaders.ImGui
apiSurface: editor-script
reviewed: 375b3062ff1f306a642808ff3c0e467dc0a9ff716a00d5b58c776d9cfda8cb55
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Tests whether a stored override has the exact representation expected by a declaration.

## Parameters

**Parameter `type`:** Declared material type.

**Parameter `kind`:** Stored representation.

## Returns

True only for supported matching kinds; no lossy conversion is performed.
