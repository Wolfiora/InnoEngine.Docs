---
title: "ShaderPropertyInspector"
description: "Reference for ShaderPropertyInspector in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.e38461a281490c0a
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders-imgui
---
# `ShaderPropertyInspector`

This reference describes `ShaderPropertyInspector` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ApplyEdit`](#api-2b6675d470fafd65) | Method |
| [`Compatible`](#api-474eda70ae65fbf0) | Method |
| [`Draw`](#api-e0ff279ee4200c6a) | Method |

## Type declaration

<a id="api-e38461a281490c0a"></a>
<!-- api: T:Inno.Editor.Shaders.ImGui.ShaderPropertyInspector dbf929b32cbc3848d4560b1e88597bfa86117d97f12a1dd48daaaaae7ceb3b61 -->

```csharp
public static class Inno.Editor.Shaders.ImGui.ShaderPropertyInspector
```

Uses the shared Inspector drawers for both Shader defaults and Material overrides.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Materials/ShaderPropertyInspector.cs#L13).

## `ApplyEdit`

<a id="api-2b6675d470fafd65"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderPropertyInspector.ApplyEdit(Inno.Rendering.ShaderPropertyType,Inno.Rendering.Assets.MaterialValue,Inno.Rendering.Assets.MaterialValue,Inno.Rendering.Assets.MaterialValue) 3d3768a8e7a4b96f3207725b788a38764f46a13687adbd8018b6f19b6838e456 -->

```csharp
public static Inno.Rendering.Assets.MaterialValue Inno.Editor.Shaders.ImGui.ShaderPropertyInspector.ApplyEdit(Inno.Rendering.ShaderPropertyType type, Inno.Rendering.Assets.MaterialValue before, Inno.Rendering.Assets.MaterialValue edited, Inno.Rendering.Assets.MaterialValue target)
```

Applies the edited components of a representative value without replacing unrelated mixed components.

**Parameter `type`:** Common exact Shader property type.

**Parameter `before`:** Representative value before the control gesture sample.

**Parameter `edited`:** Representative value after this sample.

**Parameter `target`:** Another selected Material's current effective value.

**Returns:** A detached value preserving the target's untouched channels, texture or sampler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Materials/ShaderPropertyInspector.cs#L125).

## `Compatible`

<a id="api-474eda70ae65fbf0"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderPropertyInspector.Compatible(Inno.Rendering.ShaderPropertyType,Inno.Rendering.Assets.MaterialValueKind) 58cfbb356a8a0f6a2fa79b17e6a18a013ca99a8dc0ce4a5cc86ce4d103a32627 -->

```csharp
public static bool Inno.Editor.Shaders.ImGui.ShaderPropertyInspector.Compatible(Inno.Rendering.ShaderPropertyType type, Inno.Rendering.Assets.MaterialValueKind kind)
```

Tests whether a stored override has the exact representation expected by a declaration.

**Parameter `type`:** Declared material type.

**Parameter `kind`:** Stored representation.

**Returns:** True only for supported matching kinds; no lossy conversion is performed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Materials/ShaderPropertyInspector.cs#L95).

## `Draw`

<a id="api-e0ff279ee4200c6a"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderPropertyInspector.Draw(Inno.Editor.Inspection.InspectionDrawContext,System.Object,System.String,Inno.Rendering.Assets.ShaderPropertyDefinition,Inno.Rendering.Assets.MaterialValue,System.Action{Inno.Rendering.Assets.MaterialValue},Inno.Editor.Inspection.IInspectionPropertyEditService,System.Boolean,Inno.Editor.Shaders.ShaderParameterPresentation) 6727b99649ce8796ffc9c3b789bf9996139e25b848012d48f8824fbd5eabc5ff -->

```csharp
public static void Inno.Editor.Shaders.ImGui.ShaderPropertyInspector.Draw(Inno.Editor.Inspection.InspectionDrawContext context, object owner, string path, Inno.Rendering.Assets.ShaderPropertyDefinition property, Inno.Rendering.Assets.MaterialValue value, System.Action<Inno.Rendering.Assets.MaterialValue> setter, Inno.Editor.Inspection.IInspectionPropertyEditService edits, bool readOnly, Inno.Editor.Shaders.ShaderParameterPresentation? presentation = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Materials/ShaderPropertyInspector.cs#L45).
