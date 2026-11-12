---
title: "ShaderPropertyInspector"
description: "Reference for ShaderPropertyInspector in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.editor-script.78f13d4d057ba2a2
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-shaders-imgui
  - manual.scripting.use-script-api
---
# `ShaderPropertyInspector`

This reference describes `ShaderPropertyInspector` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ApplyEdit`](#api-07f11e9dcbbc3326) | Method |
| [`Compatible`](#api-ea35454531828c2d) | Method |
| [`Draw`](#api-ea6dd0cb24d618ce) | Method |

## Type declaration

<a id="api-78f13d4d057ba2a2"></a>
<!-- api: T:InnoEditor.Shaders.ShaderPropertyInspector 719925bd8c81adfda3a7e644ac65390807c1bc3ab1fa323bdc969b63216b84f6 -->

```csharp
public static class InnoEditor.Shaders.ShaderPropertyInspector
```

Uses the shared Inspector drawers for both Shader defaults and Material overrides.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Materials/ShaderPropertyInspector.cs#L13).

## `ApplyEdit`

<a id="api-07f11e9dcbbc3326"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPropertyInspector.ApplyEdit(InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.MaterialValue,InnoEngine.Rendering.MaterialValue,InnoEngine.Rendering.MaterialValue) a0e92d11eca68d7b32f0a8b3ea7e93d625abb602282fe39de7928f4d72f45106 -->

```csharp
public static InnoEngine.Rendering.MaterialValue InnoEditor.Shaders.ShaderPropertyInspector.ApplyEdit(InnoEngine.Rendering.ShaderPropertyType type, InnoEngine.Rendering.MaterialValue before, InnoEngine.Rendering.MaterialValue edited, InnoEngine.Rendering.MaterialValue target)
```

Applies the edited components of a representative value without replacing unrelated mixed components.

**Parameter `type`:** Common exact Shader property type.

**Parameter `before`:** Representative value before the control gesture sample.

**Parameter `edited`:** Representative value after this sample.

**Parameter `target`:** Another selected Material's current effective value.

**Returns:** A detached value preserving the target's untouched channels, texture or sampler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Materials/ShaderPropertyInspector.cs#L125).

## `Compatible`

<a id="api-ea35454531828c2d"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPropertyInspector.Compatible(InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.MaterialValueKind) 06c19e7e722eeda35c79e597cb682d555f88316d46c2eb4c1bb0f003e5467f2b -->

```csharp
public static bool InnoEditor.Shaders.ShaderPropertyInspector.Compatible(InnoEngine.Rendering.ShaderPropertyType type, InnoEngine.Rendering.MaterialValueKind kind)
```

Tests whether a stored override has the exact representation expected by a declaration.

**Parameter `type`:** Declared material type.

**Parameter `kind`:** Stored representation.

**Returns:** True only for supported matching kinds; no lossy conversion is performed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Materials/ShaderPropertyInspector.cs#L95).

## `Draw`

<a id="api-ea6dd0cb24d618ce"></a>
<!-- api: M:InnoEditor.Shaders.ShaderPropertyInspector.Draw(InnoEditor.Inspection.InspectionDrawContext,System.Object,System.String,InnoEngine.Rendering.ShaderPropertyDefinition,InnoEngine.Rendering.MaterialValue,System.Action{InnoEngine.Rendering.MaterialValue},InnoEditor.Inspection.IInspectionPropertyEditService,System.Boolean,InnoEditor.Shaders.ShaderParameterPresentation) e786189a28d4e5ef8d993d71f88426ac9b147f5c691a9dd2a040f4c5f57d36d5 -->

```csharp
public static void InnoEditor.Shaders.ShaderPropertyInspector.Draw(InnoEditor.Inspection.InspectionDrawContext context, object owner, string path, InnoEngine.Rendering.ShaderPropertyDefinition property, InnoEngine.Rendering.MaterialValue value, System.Action<InnoEngine.Rendering.MaterialValue> setter, InnoEditor.Inspection.IInspectionPropertyEditService edits, bool readOnly, InnoEditor.Shaders.ShaderParameterPresentation? presentation = null)
```

Draws a typed value without choosing its persistence or history policy.

**Parameter `context`:** Current Inspector invocation.

**Parameter `owner`:** Detached draft owner used for widget identity.

**Parameter `path`:** Stable draft property path.

**Parameter `property`:** Current Shader declaration.

**Parameter `value`:** Current default or override, never mutated.

**Parameter `setter`:** Writes only the host's detached draft.

**Parameter `edits`:** Host-owned gesture and history service.

**Parameter `readOnly`:** Whether this source is editable.

**Parameter `presentation`:** Optional Editor-only description and scalar bounds; it never changes inherited or stored values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Materials/ShaderPropertyInspector.cs#L45).
