---
title: "EditorDropVisual"
description: "Reference for EditorDropVisual in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.31bc2b26f85aff6e
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDropVisual`

This reference describes `EditorDropVisual` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Disabled`](#api-eab6df7fdb651868) | Field |
| [`Highlight`](#api-1ce1f551122c95d0) | Field |
| [`InsertAfter`](#api-c6be329805002343) | Field |
| [`InsertBefore`](#api-9690f5a4ce8780d0) | Field |
| [`None`](#api-3138bc2f1c73feb6) | Field |

## Type declaration

<a id="api-31bc2b26f85aff6e"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDropVisual 57e3790d221c9cbeaff9eb7a31127625fd9ca5da8dc1fe5136dde40509fae352 -->

```csharp
public enum Inno.Editor.Interactions.EditorDropVisual : int
```

Defines the standard visual used for a compatible drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L6).

## `Disabled`

<a id="api-eab6df7fdb651868"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDropVisual.Disabled ebdfc2ad9d2e4d8b26bdebe17ae4368b01deafbd1ec23e175b23b9ec6ced2343 -->

```csharp
Inno.Editor.Interactions.EditorDropVisual.Disabled = 4
```

Draw a disabled target visual.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L31).

## `Highlight`

<a id="api-1ce1f551122c95d0"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDropVisual.Highlight 3b0e4e0cc76bebe181fcdcc8583dbf9584fd09a6d722c92aeef33a97de6465cb -->

```csharp
Inno.Editor.Interactions.EditorDropVisual.Highlight = 1
```

Draw a content highlight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L16).

## `InsertAfter`

<a id="api-c6be329805002343"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDropVisual.InsertAfter 6060c52715c567da1c2fb08d5d47803131e268627852a84158c68fa26a91d3a8 -->

```csharp
Inno.Editor.Interactions.EditorDropVisual.InsertAfter = 3
```

Draw an insertion line after the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L26).

## `InsertBefore`

<a id="api-9690f5a4ce8780d0"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDropVisual.InsertBefore 2b3ef3348c37f276a9bd7f93308e6a9c0c0c4e09ad665d6229f412bf622e6ac5 -->

```csharp
Inno.Editor.Interactions.EditorDropVisual.InsertBefore = 2
```

Draw an insertion line before the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L21).

## `None`

<a id="api-3138bc2f1c73feb6"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDropVisual.None 9fc5e70a023a8942ec84a40a407048d80ab1c296d3c73c5531fbd28b0e72c9c1 -->

```csharp
Inno.Editor.Interactions.EditorDropVisual.None = 0
```

No visual is drawn.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L11).
