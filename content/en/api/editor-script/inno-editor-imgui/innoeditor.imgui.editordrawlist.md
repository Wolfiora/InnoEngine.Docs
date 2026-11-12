---
title: "EditorDrawList"
description: "Reference for EditorDrawList in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.a0cd8395272eada5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `EditorDrawList`

This reference describes `EditorDrawList` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`FilledCircle`](#api-d664559c068eab41) | Method |
| [`FilledRectangle`](#api-aa4f01141d53e80c) | Method |
| [`Line`](#api-66ed8178a497ee2d) | Method |
| [`MergeChannels`](#api-7294187f40bc08cc) | Method |
| [`PopClip`](#api-4e57a84742499fb8) | Method |
| [`PushClip`](#api-0f24bbc863808999) | Method |
| [`Rectangle`](#api-808f85b2abd5164d) | Method |
| [`SetChannel`](#api-0ce9b56ed4d2c69d) | Method |
| [`SplitChannels`](#api-dbadff6c0fc04017) | Method |
| [`Text`](#api-9a85c41a6f26d87f) | Method |

## Type declaration

<a id="api-a0cd8395272eada5"></a>
<!-- api: T:InnoEditor.ImGui.EditorDrawList 523b14b51271642e7c9693a6225845425b5e2ad023912b5aafee3d02ad07b398 -->

```csharp
public readonly struct InnoEditor.ImGui.EditorDrawList
```

A pointer-free drawing borrow valid only in its original window, UI session and frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L11).

## `FilledCircle`

<a id="api-d664559c068eab41"></a>
<!-- api: M:InnoEditor.ImGui.EditorDrawList.FilledCircle(System.Numerics.Vector2,System.Single,System.UInt32) d38a594b157c8077f4f0ee9a5791094fbb545b16e6ed90af5ada9360927d2bef -->

```csharp
public void InnoEditor.ImGui.EditorDrawList.FilledCircle(System.Numerics.Vector2 center, float radius, uint color)
```

Adds a filled circle with backend-selected tessellation.

**Parameter `center`:** The screen-space center.

**Parameter `radius`:** The nonnegative radius.

**Parameter `color`:** Packed RGBA color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L107).

## `FilledRectangle`

<a id="api-aa4f01141d53e80c"></a>
<!-- api: M:InnoEditor.ImGui.EditorDrawList.FilledRectangle(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single,System.Boolean) aa120f53b80addad07a505952207eab3891a24130fd93a0bf015296f8dc66c04 -->

```csharp
public void InnoEditor.ImGui.EditorDrawList.FilledRectangle(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, uint color, float rounding = 0, bool topCornersOnly = false)
```

Adds a filled rectangular surface.

**Parameter `minimum`:** The upper-left corner.

**Parameter `maximum`:** The lower-right corner.

**Parameter `color`:** Packed RGBA color.

**Parameter `rounding`:** Corner radius.

**Parameter `topCornersOnly`:** Whether only the two top corners should be rounded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L63).

## `Line`

<a id="api-66ed8178a497ee2d"></a>
<!-- api: M:InnoEditor.ImGui.EditorDrawList.Line(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single) 42c888879759afe0f41f77627252873cc927a950f628a7aadb1c4bf0b9e56441 -->

```csharp
public void InnoEditor.ImGui.EditorDrawList.Line(System.Numerics.Vector2 start, System.Numerics.Vector2 end, uint color, float thickness = 1)
```

Adds a straight screen-space stroke.

**Parameter `start`:** The first endpoint.

**Parameter `end`:** The final endpoint.

**Parameter `color`:** Packed RGBA color.

**Parameter `thickness`:** Stroke width in UI pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L39).

## `MergeChannels`

<a id="api-7294187f40bc08cc"></a>
<!-- api: M:InnoEditor.ImGui.EditorDrawList.MergeChannels 0f5bbb6e07f4a9805364f9f32d1934471d27a6a988efa604bc6c4e780ecbefef -->

```csharp
public void InnoEditor.ImGui.EditorDrawList.MergeChannels()
```

Merges the current split back into ordered draw commands.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L192).

## `PopClip`

<a id="api-4e57a84742499fb8"></a>
<!-- api: M:InnoEditor.ImGui.EditorDrawList.PopClip 4f6a6ff27c1bd8249941d8f75677a573013e4727c061c524423f89542737d47b -->

```csharp
public void InnoEditor.ImGui.EditorDrawList.PopClip()
```

Restores the enclosing clip after a matching PushClip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L169).

## `PushClip`

<a id="api-0f24bbc863808999"></a>
<!-- api: M:InnoEditor.ImGui.EditorDrawList.PushClip(System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean) 30007c51920e6411c8135a6b582601d6c13f7261176cd06cf6b373d967da7326 -->

```csharp
public void InnoEditor.ImGui.EditorDrawList.PushClip(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, bool intersect = true)
```

Restricts subsequent drawing to one screen rectangle.

**Parameter `minimum`:** The clip minimum.

**Parameter `maximum`:** The clip maximum.

**Parameter `intersect`:** Whether to intersect the enclosing clip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L157).

## `Rectangle`

<a id="api-808f85b2abd5164d"></a>
<!-- api: M:InnoEditor.ImGui.EditorDrawList.Rectangle(System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single,System.Single) 61db650b01fae6d5e42d6184bab3e5027a7845ae19c7803af0d35ada37b3c829 -->

```csharp
public void InnoEditor.ImGui.EditorDrawList.Rectangle(System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum, uint color, float rounding = 0, float thickness = 1)
```

Adds a rectangular outline.

**Parameter `minimum`:** The upper-left corner.

**Parameter `maximum`:** The lower-right corner.

**Parameter `color`:** Packed RGBA color.

**Parameter `rounding`:** Corner radius.

**Parameter `thickness`:** Stroke width in UI pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L88).

## `SetChannel`

<a id="api-0ce9b56ed4d2c69d"></a>
<!-- api: M:InnoEditor.ImGui.EditorDrawList.SetChannel(System.Int32) efb8881c2288b86402b6815a9033e9e27af1734f4f420c3da3853285fee92aff -->

```csharp
public void InnoEditor.ImGui.EditorDrawList.SetChannel(int index)
```

Selects a channel from the current split.

**Parameter `index`:** The zero-based channel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L188).

## `SplitChannels`

<a id="api-dbadff6c0fc04017"></a>
<!-- api: M:InnoEditor.ImGui.EditorDrawList.SplitChannels(System.Int32) 6697069afb940f73dc5a7e877845854e33c520eaf8d45b8b765de6f08c5c52b0 -->

```csharp
public void InnoEditor.ImGui.EditorDrawList.SplitChannels(int count)
```

Begins ordered draw channels within this window.

**Parameter `count`:** The positive number of layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L176).

## `Text`

<a id="api-9a85c41a6f26d87f"></a>
<!-- api: M:InnoEditor.ImGui.EditorDrawList.Text(System.Numerics.Vector2,System.UInt32,System.String,System.Single) a3851c187f77acddf2a099038d5fd283434fa4639523beec3d43e44faa5d1fdc -->

```csharp
public void InnoEditor.ImGui.EditorDrawList.Text(System.Numerics.Vector2 position, uint color, string text, float scale = 1)
```

Adds literal text using the current font and an explicit scale.

**Parameter `position`:** Screen-space text origin.

**Parameter `color`:** Packed RGBA color.

**Parameter `text`:** Literal managed text; encoded only for this synchronous call.

**Parameter `scale`:** Positive scale relative to the current font size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/EditorDrawList.cs#L131).
