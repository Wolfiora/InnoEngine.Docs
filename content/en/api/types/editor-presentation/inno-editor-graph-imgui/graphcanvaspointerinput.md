---
title: "GraphCanvasPointerInput"
description: "Reference for GraphCanvasPointerInput in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.ca0039c903ea9266
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-graph-imgui
---
# `GraphCanvasPointerInput`

This reference describes `GraphCanvasPointerInput` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`cancel`](#api-ff6514b9d70d5d84) | Property |
| [`isDown`](#api-05eeb15c1473ff9c) | Property |
| [`isHovered`](#api-5300c1749449cc50) | Property |
| [`isPressed`](#api-55cbb4594dd1d7a3) | Property |
| [`isReleased`](#api-1d2e5298e3bbfcb4) | Property |
| [`position`](#api-362a0947de7236d6) | Property |
| [`readOnly`](#api-6658d8548bef03c3) | Property |
| [`shift`](#api-31f1fb2fa65cecf4) | Property |

## Type declaration

<a id="api-ca0039c903ea9266"></a>
<!-- api: T:Inno.Editor.Graph.ImGui.GraphCanvasPointerInput b736e8cfa51d3053ffb47404c61aa4b5332a337c87ee3c9ef0b0868da0845d1d -->

```csharp
public readonly struct Inno.Editor.Graph.ImGui.GraphCanvasPointerInput
```

Carries one frame's already-routed pointer input without depending on a native backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L8).

## `cancel`

<a id="api-ff6514b9d70d5d84"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.cancel 86c2ce4b6444d554c02db1a74043967b8fa6272db34bd600199c6293e59babfe -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.cancel { get; init; }
```

Gets whether the current preview must be canceled without modifying document data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L43).

## `isDown`

<a id="api-05eeb15c1473ff9c"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.isDown 1ba4c51a87b74aa5f00aafe1c88d9d3ff7c131c559dda227b51f998efd68aa46 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.isDown { get; init; }
```

Gets whether the primary pointer button remains held.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L28).

## `isHovered`

<a id="api-5300c1749449cc50"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.isHovered ba7031af8394c54dc1787b89c3b0ec55d4c78d9f5b008a06d0893bdb88ef1a6a -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.isHovered { get; init; }
```

Gets whether this canvas owns the pointer for starting an interaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L18).

## `isPressed`

<a id="api-55cbb4594dd1d7a3"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.isPressed df4783be28b69daee245b6f36f1243ecd3cbc04933c6779ed46da0ce67511f05 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.isPressed { get; init; }
```

Gets whether the primary pointer button was pressed this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L23).

## `isReleased`

<a id="api-1d2e5298e3bbfcb4"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.isReleased 366832105f8f46cdd0110380584a4e1655d5e14aefece89f0f279726870ff761 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.isReleased { get; init; }
```

Gets whether the primary pointer button was released this frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L33).

## `position`

<a id="api-362a0947de7236d6"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.position dc5cfd92efb6d309bd8ea333545099d041a9b82564a3272381b06d6ce2691a68 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.position { get; init; }
```

Gets the screen-space pointer position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L13).

## `readOnly`

<a id="api-6658d8548bef03c3"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.readOnly 1d5975084cca69a843ee5e9d3ae3fb4dd71bb794d00778ba949d49f01f24f341 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.readOnly { get; init; }
```

Gets whether selection is allowed while data-editing intents are prohibited.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L48).

## `shift`

<a id="api-31f1fb2fa65cecf4"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.shift d55ddf3254185b593bccd3b19fa02d25520336fa5ad3249098eab2c11b138bf3 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasPointerInput.shift { get; init; }
```

Gets whether selection extension is requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasPointerInput.cs#L38).
