---
title: "EditorViewportCursor"
description: "Reference for EditorViewportCursor in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.f534c65fa4eeebc5
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorViewportCursor`

This reference describes `EditorViewportCursor` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Arrow`](#api-03b2a36b0811db84) | Field |
| [`Crosshair`](#api-78d246237e716d9b) | Field |
| [`Hand`](#api-7fded7fa9fb7b78b) | Field |
| [`Hidden`](#api-ccb437d8d7320d9c) | Field |
| [`Move`](#api-de77935492e7c344) | Field |
| [`ResizeHorizontal`](#api-7608dcae29515e01) | Field |
| [`ResizeVertical`](#api-c270990d2da5b4df) | Field |

## Type declaration

<a id="api-f534c65fa4eeebc5"></a>
<!-- api: T:Inno.Editor.Interactions.EditorViewportCursor 1012182201d43f8240e83e90dd6f87d9a1e792136f7d2a158f9e65ea67dcc5ee -->

```csharp
public enum Inno.Editor.Interactions.EditorViewportCursor : int
```

Selects a presentation-independent cursor requested by a viewport tool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L33).

## `Arrow`

<a id="api-03b2a36b0811db84"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportCursor.Arrow 6553b4c8d5f3bc1f51066c2c0545600b65be4c73c14194902226dff87e11c27f -->

```csharp
Inno.Editor.Interactions.EditorViewportCursor.Arrow = 0
```

Uses the normal arrow cursor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L38).

## `Crosshair`

<a id="api-78d246237e716d9b"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportCursor.Crosshair e924727d53e5c735fedb169ab0a7ce3aa43d1be1ee1b3b6a8038744f8e2297cd -->

```csharp
Inno.Editor.Interactions.EditorViewportCursor.Crosshair = 1
```

Uses a precise crosshair.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L42).

## `Hand`

<a id="api-7fded7fa9fb7b78b"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportCursor.Hand 4bf8439831e5600be18fc0c3baa24997553e451a97e7f6f5c1cf8b2ca9d09dd2 -->

```csharp
Inno.Editor.Interactions.EditorViewportCursor.Hand = 2
```

Uses a hand suitable for panning.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L46).

## `Hidden`

<a id="api-ccb437d8d7320d9c"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportCursor.Hidden 4cb6e8191ee3d924247e5780a7b87706204c9b75a4dadefdd1e77e2fd1f0f05d -->

```csharp
Inno.Editor.Interactions.EditorViewportCursor.Hidden = 6
```

Hides the pointer while the tool owns it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L62).

## `Move`

<a id="api-de77935492e7c344"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportCursor.Move 26a8aa00af9b6ee34256ed63b43d715be288474c1d242228091b13838d1a2dd6 -->

```csharp
Inno.Editor.Interactions.EditorViewportCursor.Move = 3
```

Uses four-direction movement arrows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L50).

## `ResizeHorizontal`

<a id="api-7608dcae29515e01"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportCursor.ResizeHorizontal 66aeb8365548455d6e9b438190bb36493ff5e76a78badd7ec2ecae1cd5273591 -->

```csharp
Inno.Editor.Interactions.EditorViewportCursor.ResizeHorizontal = 4
```

Uses horizontal resizing arrows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L54).

## `ResizeVertical`

<a id="api-c270990d2da5b4df"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportCursor.ResizeVertical 15d821a4df6e0ee94257fef877373dab6425e4051f5251a7731a17d14d60a83d -->

```csharp
Inno.Editor.Interactions.EditorViewportCursor.ResizeVertical = 5
```

Uses vertical resizing arrows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L58).
