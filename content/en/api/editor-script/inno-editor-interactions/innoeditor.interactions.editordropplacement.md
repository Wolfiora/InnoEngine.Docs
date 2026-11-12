---
title: "EditorDropPlacement"
description: "Reference for EditorDropPlacement in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.1f8fbbef77b7ae42
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDropPlacement`

This reference describes `EditorDropPlacement` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`After`](#api-6d4b2a7e0d5a6df3) | Field |
| [`Before`](#api-7d89e20ffb948f19) | Field |
| [`Into`](#api-70f1a81ef8848763) | Field |
| [`None`](#api-48fb5a1e0dc63790) | Field |

## Type declaration

<a id="api-1f8fbbef77b7ae42"></a>
<!-- api: T:InnoEditor.Interactions.EditorDropPlacement d6e8ae49147ecb8257ba4a85cd785e1cdb9a9427192dcaa7a4059e7a9791c1d3 -->

```csharp
public enum InnoEditor.Interactions.EditorDropPlacement : int
```

Describes the requested placement relative to an editor drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropPlacement.cs#L6).

## `After`

<a id="api-6d4b2a7e0d5a6df3"></a>
<!-- api: F:InnoEditor.Interactions.EditorDropPlacement.After 2de173a8d4a38a8f640bb7da2f59d86ae6e07b70097c8e65ba479c527137dfdc -->

```csharp
InnoEditor.Interactions.EditorDropPlacement.After = 3
```

Insert after the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropPlacement.cs#L26).

## `Before`

<a id="api-7d89e20ffb948f19"></a>
<!-- api: F:InnoEditor.Interactions.EditorDropPlacement.Before fea220a140fe248811d444282d5f8ccec7cdd3c16adfa23427f048050f43c606 -->

```csharp
InnoEditor.Interactions.EditorDropPlacement.Before = 1
```

Insert before the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropPlacement.cs#L16).

## `Into`

<a id="api-70f1a81ef8848763"></a>
<!-- api: F:InnoEditor.Interactions.EditorDropPlacement.Into 8ae075bf919645a1b2ab440d7b563922b180a5126f08c33de8b4df80e1a82642 -->

```csharp
InnoEditor.Interactions.EditorDropPlacement.Into = 2
```

Drop into the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropPlacement.cs#L21).

## `None`

<a id="api-48fb5a1e0dc63790"></a>
<!-- api: F:InnoEditor.Interactions.EditorDropPlacement.None db00f2487ab9e5dbecf0f8fc81fcb254dd5e4c9404ef459ea976e6b712a88278 -->

```csharp
InnoEditor.Interactions.EditorDropPlacement.None = 0
```

No positional placement is requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropPlacement.cs#L11).
