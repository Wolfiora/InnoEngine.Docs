---
uid: api.802d0ac871c7c9e29babe49b2507462811997d973fe9beb10221f7e1d0d616db
symbol: "scripting:Inno.Editor.Shaders.ImGui:M:InnoEditor.Shaders.ShaderPropertyInspector.Draw(InnoEditor.Inspection.InspectionDrawContext,System.Object,System.String,InnoEngine.Rendering.ShaderPropertyDefinition,InnoEngine.Rendering.MaterialValue,System.Action{InnoEngine.Rendering.MaterialValue},InnoEditor.Inspection.IInspectionPropertyEditService,System.Boolean,InnoEditor.Shaders.ShaderParameterPresentation)"
source: xml
reviewed: 04a12bb51a269e68c4029a5987f584d8d90c1ac23b8b54f9a2f487f38ac40ea7
title: "ShaderPropertyInspector.Draw"
kind: api
owners: [Inno.Editor.Shaders.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a typed value without choosing its persistence or history policy.

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
