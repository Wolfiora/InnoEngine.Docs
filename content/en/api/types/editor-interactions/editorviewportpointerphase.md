---
title: "EditorViewportPointerPhase"
description: "Reference for EditorViewportPointerPhase in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.57f16c90b92060c2
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorViewportPointerPhase`

This reference describes `EditorViewportPointerPhase` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Cancel`](#api-819caa86668ee9af) | Field |
| [`Down`](#api-f54b503cb875b20e) | Field |
| [`Move`](#api-926652c6496fd2b4) | Field |
| [`Up`](#api-507baf03d761e780) | Field |

## Type declaration

<a id="api-57f16c90b92060c2"></a>
<!-- api: T:Inno.Editor.Interactions.EditorViewportPointerPhase 0ce63273faa6d99ddb0e5cf00ef5adc194a2cf6eb4757674acabcf328299d141 -->

```csharp
public enum Inno.Editor.Interactions.EditorViewportPointerPhase : int
```

Selects the lifecycle phase of one viewport pointer sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L10).

## `Cancel`

<a id="api-819caa86668ee9af"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportPointerPhase.Cancel 1c8853850bdafca497d101cb9bcc6571e902e1428537345998fbecf9f2e0aa09 -->

```csharp
Inno.Editor.Interactions.EditorViewportPointerPhase.Cancel = 3
```

The platform cancelled the gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L27).

## `Down`

<a id="api-f54b503cb875b20e"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportPointerPhase.Down 4ae4770293727cc0484749471c9f1c1d8d1c44ce14db5bcb2fcfd922a2d45537 -->

```csharp
Inno.Editor.Interactions.EditorViewportPointerPhase.Down = 0
```

The pointer button began a gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L15).

## `Move`

<a id="api-926652c6496fd2b4"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportPointerPhase.Move 26e28a274aea74abcb6682199e338ef492c5254df89229cf72ff724f694ad22a -->

```csharp
Inno.Editor.Interactions.EditorViewportPointerPhase.Move = 1
```

The pointer moved or changed hover position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L19).

## `Up`

<a id="api-507baf03d761e780"></a>
<!-- api: F:Inno.Editor.Interactions.EditorViewportPointerPhase.Up b07a8059f33b27c3294b266aef9bbd3c3125635caf23ddfba2895b28e4cdfa18 -->

```csharp
Inno.Editor.Interactions.EditorViewportPointerPhase.Up = 2
```

The pointer button ended a gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L23).
