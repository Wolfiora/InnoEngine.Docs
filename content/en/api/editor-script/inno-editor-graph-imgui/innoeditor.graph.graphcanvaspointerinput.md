---
title: "GraphCanvasPointerInput"
description: "Reference for GraphCanvasPointerInput in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.editor-script.551be4df40c2eb14
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-graph-imgui
  - manual.scripting.use-script-api
---
# `GraphCanvasPointerInput`

This reference describes `GraphCanvasPointerInput` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`cancel`](#api-7c0829fced9b0e71) | Property |
| [`isDown`](#api-2df8a52f8f0eb7dd) | Property |
| [`isHovered`](#api-3b46545bf90e92b0) | Property |
| [`isPressed`](#api-6d0f9ac70971e93d) | Property |
| [`isReleased`](#api-8cc5f22a6b0c26ea) | Property |
| [`position`](#api-2334c88ff60e91f3) | Property |
| [`readOnly`](#api-13cc534401f7f40b) | Property |
| [`shift`](#api-8a99ddb6901645c3) | Property |

## Type declaration

<a id="api-551be4df40c2eb14"></a>
<!-- api: T:InnoEditor.Graph.GraphCanvasPointerInput aa58ace4b8c69ecbf3d79bd13af8b9a0d92f1531a75119a766efdc66c154eed5 -->

```csharp
public readonly struct InnoEditor.Graph.GraphCanvasPointerInput
```

Carries one frame's already-routed pointer input without depending on a native backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L8).

## `cancel`

<a id="api-7c0829fced9b0e71"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerInput.cancel 4dfd38bc3d8b39a51de2c607d01653fdf8345b45924c4cc3aed031e8d42921e6 -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPointerInput.cancel { get; set; }
```

Gets whether the current preview must be canceled without modifying document data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L43).

## `isDown`

<a id="api-2df8a52f8f0eb7dd"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerInput.isDown 150d9efc543855092b6e1b28ea4ed390ba7fb81f7ffece0c15126a66f8235e5f -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPointerInput.isDown { get; set; }
```

Gets whether the primary pointer button remains held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L28).

## `isHovered`

<a id="api-3b46545bf90e92b0"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerInput.isHovered b633dccc7721c332271d24027af7fdf9d17c42309a006cff1f2201729bbe62e9 -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPointerInput.isHovered { get; set; }
```

Gets whether this canvas owns the pointer for starting an interaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L18).

## `isPressed`

<a id="api-6d0f9ac70971e93d"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerInput.isPressed d42353023a57821dcd9fe588c650dc5b1137121414ba707a36508ae51a7c9553 -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPointerInput.isPressed { get; set; }
```

Gets whether the primary pointer button was pressed this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L23).

## `isReleased`

<a id="api-8cc5f22a6b0c26ea"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerInput.isReleased c94a9fac11339c5d13466e4c13b1facc251f4d5090f7f39e3d02282d1add683b -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPointerInput.isReleased { get; set; }
```

Gets whether the primary pointer button was released this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L33).

## `position`

<a id="api-2334c88ff60e91f3"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerInput.position 553464c3b64988d0cbd2e070096f89ea3e9459c9a2b2a25bae0187af7fa0c127 -->

```csharp
public System.Numerics.Vector2 InnoEditor.Graph.GraphCanvasPointerInput.position { get; set; }
```

Gets the screen-space pointer position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L13).

## `readOnly`

<a id="api-13cc534401f7f40b"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerInput.readOnly f4ca750cc6dd5a7afca806eefd7498edfb58c2a152f3457032376c2f9ea84489 -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPointerInput.readOnly { get; set; }
```

Gets whether selection is allowed while data-editing intents are prohibited.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L48).

## `shift`

<a id="api-8a99ddb6901645c3"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasPointerInput.shift d7ad925083617ad3a583c8541e3a6bb0ffb37e1c64901d2b1fd935932628ebf1 -->

```csharp
public bool InnoEditor.Graph.GraphCanvasPointerInput.shift { get; set; }
```

Gets whether selection extension is requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L38).
