---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.802d0ac871c7c9e29babe49b2507462811997d973fe9beb10221f7e1d0d616db
symbol: scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderPropertyInspector.Draw(InnoEditor.Inspection.InspectionDrawContext,System.Object,System.String,InnoEngine.Rendering.ShaderPropertyDefinition,InnoEngine.Rendering.MaterialValue,System.Action{InnoEngine.Rendering.MaterialValue},InnoEditor.Inspection.IInspectionPropertyEditService,System.Boolean,InnoEditor.Shaders.ShaderParameterPresentation)
title: ShaderPropertyInspector.Draw
kind: api
owners:
- Inno.Editor.Shaders.ImGui
apiSurface: editor-script
reviewed: 2b01ca57b4826b8f5a44e4744765464024e19b01ff5221a02f4616490ab1f334
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** Current Inspector invocation.

**Parameter `owner`:** Detached draft owner used for widget identity.

**Parameter `path`:** Stable draft property path.

**Parameter `property`:** Current Shader declaration.

**Parameter `value`:** Current default or override, never mutated.

**Parameter `setter`:** Writes only the host's detached draft.

**Parameter `edits`:** Host-owned gesture and history service.

**Parameter `readOnly`:** Whether this source is editable.

**Parameter `presentation`:** Optional Editor-only description and scalar bounds; it never changes inherited or stored values.
