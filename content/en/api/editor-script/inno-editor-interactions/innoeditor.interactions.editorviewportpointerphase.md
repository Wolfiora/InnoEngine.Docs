---
title: "EditorViewportPointerPhase"
description: "Reference for EditorViewportPointerPhase in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.ef654ed224e53ff7
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorViewportPointerPhase`

This reference describes `EditorViewportPointerPhase` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Cancel`](#api-6c858e120c1aa928) | Field |
| [`Down`](#api-1172010f04a434de) | Field |
| [`Move`](#api-3fe883a05036bb99) | Field |
| [`Up`](#api-decc1b9f75ff47c2) | Field |

## Type declaration

<a id="api-ef654ed224e53ff7"></a>
<!-- api: T:InnoEditor.Interactions.EditorViewportPointerPhase b801f404534a024383e06c1c003e1b4f9c23860c606269d0a209ae9be62ebdd7 -->

```csharp
public enum InnoEditor.Interactions.EditorViewportPointerPhase : int
```

Selects the lifecycle phase of one viewport pointer sample.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L10).

## `Cancel`

<a id="api-6c858e120c1aa928"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportPointerPhase.Cancel b1100203333e99971d8c7a0ed7aa4abecdeb9b652b217fb589eb98533324b971 -->

```csharp
InnoEditor.Interactions.EditorViewportPointerPhase.Cancel = 3
```

The platform cancelled the gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L27).

## `Down`

<a id="api-1172010f04a434de"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportPointerPhase.Down 6322c07069057219e4f68ae128d2eee08a3903415cdc3aff37017c690c1836c9 -->

```csharp
InnoEditor.Interactions.EditorViewportPointerPhase.Down = 0
```

The pointer button began a gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L15).

## `Move`

<a id="api-3fe883a05036bb99"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportPointerPhase.Move abf5886c4dac18fa2cdc5f9e781c94c8e10417f8df215221ae4a8d539cd2076f -->

```csharp
InnoEditor.Interactions.EditorViewportPointerPhase.Move = 1
```

The pointer moved or changed hover position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L19).

## `Up`

<a id="api-decc1b9f75ff47c2"></a>
<!-- api: F:InnoEditor.Interactions.EditorViewportPointerPhase.Up d78e313a3dbe493b1ae57e040e75debc50dd8edfae5b4268cfde7a42d06405a4 -->

```csharp
InnoEditor.Interactions.EditorViewportPointerPhase.Up = 2
```

The pointer button ended a gesture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L23).
