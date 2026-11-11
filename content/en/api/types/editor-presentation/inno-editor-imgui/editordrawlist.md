---
title: "EditorDrawList"
description: "Reference for EditorDrawList in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.bade0edb5de76f88
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `EditorDrawList`

This reference describes `EditorDrawList` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`FilledCircle`](#api-57b36537a5cbfc3c) | Method |
| [`FilledRectangle`](#api-6a7bb5cfcad4daf2) | Method |
| [`Line`](#api-cf54e3fd3010bae8) | Method |
| [`MergeChannels`](#api-fff5578481653b5f) | Method |
| [`PopClip`](#api-b00a17c861770930) | Method |
| [`PushClip`](#api-3484f8b6551018f7) | Method |
| [`Rectangle`](#api-9dd10b0c40600cf2) | Method |
| [`SetChannel`](#api-6012d9300ea77e9e) | Method |
| [`SplitChannels`](#api-83ac0d92a488b33c) | Method |
| [`Text`](#api-5ca147868c2504bf) | Method |

## Type declaration

<a id="api-bade0edb5de76f88"></a>
<!-- api: T:Inno.Editor.ImGui.EditorDrawList 27f30fe86aecf2aeed34ef4b28729468f6c9754c402bfa62ee90b8fec8b899d9 -->

```csharp
public readonly struct Inno.Editor.ImGui.EditorDrawList
```

A pointer-free drawing borrow valid only in its original window, UI session and frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L11).

## `FilledCircle`

<a id="api-57b36537a5cbfc3c"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDrawList.FilledCircle(System.Numerics.Vector2,System.Single,System.UInt32) 55e697660525b76390509b3193e29fcb87b355b5a7f80898f3b65a83b4a1e3ee -->

```csharp
public void Inno.Editor.ImGui.EditorDrawList.FilledCircle(System.Numerics.Vector2 center, float radius, uint color)
```

Adds a filled circle with backend-selected tessellation.

**Parameter `center`:** The screen-space center.

**Parameter `radius`:** The nonnegative radius.

**Parameter `color`:** Packed RGBA color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L107).

## `FilledRectangle`

<a id="api-6a7bb5cfcad4daf2"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDrawList.FilledRectangle(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single,System.Boolean) e82c4144873d7ee0cce7d124c469471e95bc9f92118bee5302e131b4bfa1a8c8 -->

```csharp
public void Inno.Editor.ImGui.EditorDrawList.FilledRectangle(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, uint color, float rounding = 0, bool topCornersOnly = false)
```

Adds a filled rectangular surface.

**Parameter `minimum`:** The upper-left corner.

**Parameter `maximum`:** The lower-right corner.

**Parameter `color`:** Packed RGBA color.

**Parameter `rounding`:** Corner radius.

**Parameter `topCornersOnly`:** Whether only the two top corners should be rounded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L63).

## `Line`

<a id="api-cf54e3fd3010bae8"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDrawList.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single) 86d10c0812dd79b3acbe83fb0bc879b246a3ff792ecf165ad5cffdee553a0528 -->

```csharp
public void Inno.Editor.ImGui.EditorDrawList.Line(System.Numerics.Vector2 start, System.Numerics.Vector2 end, uint color, float thickness = 1)
```

Adds a straight screen-space stroke.

**Parameter `start`:** The first endpoint.

**Parameter `end`:** The final endpoint.

**Parameter `color`:** Packed RGBA color.

**Parameter `thickness`:** Stroke width in UI pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L39).

## `MergeChannels`

<a id="api-fff5578481653b5f"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDrawList.MergeChannels a925d08c9dd646463c7062016cfe5a101de09900f7b7de7dd6e2f34bc8945f6e -->

```csharp
public void Inno.Editor.ImGui.EditorDrawList.MergeChannels()
```

Merges the current split back into ordered draw commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L192).

## `PopClip`

<a id="api-b00a17c861770930"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDrawList.PopClip 954d86d2f1385af547aceae6512f35f7e9a2502988c29704ef58ff8cb9c3f000 -->

```csharp
public void Inno.Editor.ImGui.EditorDrawList.PopClip()
```

Restores the enclosing clip after a matching PushClip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L169).

## `PushClip`

<a id="api-3484f8b6551018f7"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDrawList.PushClip(System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean) d302d5c04cb249f8d742baa134f87fa8b26fc578acfce9f9b061898dd8398beb -->

```csharp
public void Inno.Editor.ImGui.EditorDrawList.PushClip(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, bool intersect = true)
```

Restricts subsequent drawing to one screen rectangle.

**Parameter `minimum`:** The clip minimum.

**Parameter `maximum`:** The clip maximum.

**Parameter `intersect`:** Whether to intersect the enclosing clip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L157).

## `Rectangle`

<a id="api-9dd10b0c40600cf2"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDrawList.Rectangle(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single,System.Single) cc905b3c83dadd724ffdb8ed2942242f0769a57e68794473ab767ead9c8bd1e0 -->

```csharp
public void Inno.Editor.ImGui.EditorDrawList.Rectangle(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, uint color, float rounding = 0, float thickness = 1)
```

Adds a rectangular outline.

**Parameter `minimum`:** The upper-left corner.

**Parameter `maximum`:** The lower-right corner.

**Parameter `color`:** Packed RGBA color.

**Parameter `rounding`:** Corner radius.

**Parameter `thickness`:** Stroke width in UI pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L88).

## `SetChannel`

<a id="api-6012d9300ea77e9e"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDrawList.SetChannel(System.Int32) ff32750c6c57ef4f4711be44d5a23b36e0422b357e8596f0fb262257bf536138 -->

```csharp
public void Inno.Editor.ImGui.EditorDrawList.SetChannel(int index)
```

Selects a channel from the current split.

**Parameter `index`:** The zero-based channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L188).

## `SplitChannels`

<a id="api-83ac0d92a488b33c"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDrawList.SplitChannels(System.Int32) 61df5117ef18c2bf6961775176601d783778066b73b690fb667476254bb6c907 -->

```csharp
public void Inno.Editor.ImGui.EditorDrawList.SplitChannels(int count)
```

Begins ordered draw channels within this window.

**Parameter `count`:** The positive number of layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L176).

## `Text`

<a id="api-5ca147868c2504bf"></a>
<!-- api: M:Inno.Editor.ImGui.EditorDrawList.Text(System.Numerics.Vector2,System.UInt32,System.String,System.Single) 75c6f6a6d55595dcb1ce85a2cfb6508fb2d94b1dedeedb0a7965a8d9162204fe -->

```csharp
public void Inno.Editor.ImGui.EditorDrawList.Text(System.Numerics.Vector2 position, uint color, string text, float scale = 1)
```

Adds literal text using the current font and an explicit scale.

**Parameter `position`:** Screen-space text origin.

**Parameter `color`:** Packed RGBA color.

**Parameter `text`:** Literal managed text; encoded only for this synchronous call.

**Parameter `scale`:** Positive scale relative to the current font size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L131).
