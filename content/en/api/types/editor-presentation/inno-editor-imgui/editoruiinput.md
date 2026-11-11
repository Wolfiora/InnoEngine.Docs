---
title: "EditorUiInput"
description: "Reference for EditorUiInput in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.79a98f28e1998b49
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `EditorUiInput`

This reference describes `EditorUiInput` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`alt`](#api-e9ef272a77f61aef) | Property |
| [`control`](#api-587172e3ba1d43e2) | Property |
| [`deltaTime`](#api-8d9d97164cc5e55a) | Property |
| [`framebufferScale`](#api-a31d42bf6ded3756) | Property |
| [`mouseDelta`](#api-b3eaa8463d701130) | Property |
| [`shift`](#api-10c1a43a72c0e728) | Property |
| [`super`](#api-7bac60f8c9614f4c) | Property |
| [`wantsText`](#api-c40b11f16e0e03e9) | Property |
| [`wheel`](#api-69eecfd2272477ac) | Property |

## Type declaration

<a id="api-79a98f28e1998b49"></a>
<!-- api: T:Inno.Editor.ImGui.EditorUiInput 94263062132f81ea1d81f74e14d2cec2edb26c634b226bbbd9ebd212768d7f34 -->

```csharp
public readonly struct Inno.Editor.ImGui.EditorUiInput
```

Copies frame input facts used by presentation without exposing native input storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L8).

## `alt`

<a id="api-e9ef272a77f61aef"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiInput.alt c07d099650f0337286d2ff4452d45f736209778a589ce7bdbcb59e25bb475ccc -->

```csharp
public bool Inno.Editor.ImGui.EditorUiInput.alt { get; }
```

Gets whether Alt is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L13).

## `control`

<a id="api-587172e3ba1d43e2"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiInput.control e5b0b9a9c9a1cb2bbed9880924a6dac1074601ffa1cd9be5f4d81a01dbcf81ee -->

```csharp
public bool Inno.Editor.ImGui.EditorUiInput.control { get; }
```

Gets whether the physical Control modifier is held, independently of native shortcut conventions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L17).

## `deltaTime`

<a id="api-8d9d97164cc5e55a"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiInput.deltaTime 55c0967a63a81e34445665837edc7183c0fe2893edba40ebacc04a861d0155be -->

```csharp
public float Inno.Editor.ImGui.EditorUiInput.deltaTime { get; }
```

Gets the frame duration in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L41).

## `framebufferScale`

<a id="api-a31d42bf6ded3756"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiInput.framebufferScale f6799650137825dce8c005fa04a3b0af228f33fc4f43604cb48b05f8382e64f1 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.EditorUiInput.framebufferScale { get; }
```

Gets the drawable pixel scale relative to logical UI coordinates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L45).

## `mouseDelta`

<a id="api-b3eaa8463d701130"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiInput.mouseDelta 4e2bc47bb75a95188357b397b2c61a170b0c5abb56887c739ddb09a56f58ed09 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.EditorUiInput.mouseDelta { get; }
```

Gets the current pointer movement in UI units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L33).

## `shift`

<a id="api-10c1a43a72c0e728"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiInput.shift e38fc49e745044250c9c06c85150876c01a1a2a5c484dbacf602b5dc0f6dd4c8 -->

```csharp
public bool Inno.Editor.ImGui.EditorUiInput.shift { get; }
```

Gets whether Shift is held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L21).

## `super`

<a id="api-7bac60f8c9614f4c"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiInput.super 262460235d2cd81cd382a22abd1ffb7175fdc14c75efd8f85d2025215de91c1f -->

```csharp
public bool Inno.Editor.ImGui.EditorUiInput.super { get; }
```

Gets whether the physical Super modifier is held, independently of native shortcut conventions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L25).

## `wantsText`

<a id="api-c40b11f16e0e03e9"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiInput.wantsText 120e941affa588a64322b104b3492cd0a4f11a6634d800e285125dec940077b0 -->

```csharp
public bool Inno.Editor.ImGui.EditorUiInput.wantsText { get; }
```

Gets whether an active control owns text input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L29).

## `wheel`

<a id="api-69eecfd2272477ac"></a>
<!-- api: P:Inno.Editor.ImGui.EditorUiInput.wheel b2bb4a8df269ad1a290d1d5efe422e60a0e1c63e1c9ea993e2518d8afde3db9f -->

```csharp
public float Inno.Editor.ImGui.EditorUiInput.wheel { get; }
```

Gets the vertical scroll movement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorUiInput.cs#L37).
