---
title: "EditorToolbarIcon"
description: "Reference for EditorToolbarIcon in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.8b978f5981365170
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorToolbarIcon`

This reference describes `EditorToolbarIcon` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Edit`](#api-73cae23e8629e366) | Field |
| [`None`](#api-9b1f67128938942f) | Field |
| [`Pause`](#api-8e14c4e68ed531b4) | Field |
| [`Play`](#api-64a3bcf7cc58f849) | Field |
| [`Step`](#api-07cc563a3489eb19) | Field |
| [`Stop`](#api-3d2ed396028b2c14) | Field |

## Type declaration

<a id="api-8b978f5981365170"></a>
<!-- api: T:Inno.Editor.Interactions.EditorToolbarIcon 4b6086e05f875f220e5246719aadd6573b5f6865fb0051366f27c200bf4a59b7 -->

```csharp
public enum Inno.Editor.Interactions.EditorToolbarIcon : int
```

Identifies a presentation-independent symbol for an editor toolbar command.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L6).

## `Edit`

<a id="api-73cae23e8629e366"></a>
<!-- api: F:Inno.Editor.Interactions.EditorToolbarIcon.Edit d3017d3c05c1f7829975879849528531c9ae089bb8c82ec27a083b6288589f4e -->

```csharp
Inno.Editor.Interactions.EditorToolbarIcon.Edit = 5
```

Returns to an editing state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L36).

## `None`

<a id="api-9b1f67128938942f"></a>
<!-- api: F:Inno.Editor.Interactions.EditorToolbarIcon.None 111497190d8fc31e5165539e25020bd377e8f444486eb019ea12566b3b2dd761 -->

```csharp
Inno.Editor.Interactions.EditorToolbarIcon.None = 0
```

No symbol is requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L11).

## `Pause`

<a id="api-8e14c4e68ed531b4"></a>
<!-- api: F:Inno.Editor.Interactions.EditorToolbarIcon.Pause 2f0ebe29edefb7a43a55d33957638b746b890fb57287eafdc8c39bfe82e3b86c -->

```csharp
Inno.Editor.Interactions.EditorToolbarIcon.Pause = 3
```

Pauses an operation or simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L26).

## `Play`

<a id="api-64a3bcf7cc58f849"></a>
<!-- api: F:Inno.Editor.Interactions.EditorToolbarIcon.Play a9284c1373163bf91abeec61d5ee66f5fd1e6d05edd34ac8cb5a99b0d0671408 -->

```csharp
Inno.Editor.Interactions.EditorToolbarIcon.Play = 1
```

Starts an operation or simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L16).

## `Step`

<a id="api-07cc563a3489eb19"></a>
<!-- api: F:Inno.Editor.Interactions.EditorToolbarIcon.Step 80ceaf7170f089ceec1f59cf6338bcb7a5f8bcb8e5520361184e4014f19473b5 -->

```csharp
Inno.Editor.Interactions.EditorToolbarIcon.Step = 4
```

Advances a paused operation by one step.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L31).

## `Stop`

<a id="api-3d2ed396028b2c14"></a>
<!-- api: F:Inno.Editor.Interactions.EditorToolbarIcon.Stop b0d3757ce76fc21557d5bbe90348bb102fc40442b2a60a4ce1b38ededf2bce20 -->

```csharp
Inno.Editor.Interactions.EditorToolbarIcon.Stop = 2
```

Stops an operation or simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L21).
