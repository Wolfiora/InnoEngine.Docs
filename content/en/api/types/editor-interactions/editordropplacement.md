---
title: "EditorDropPlacement"
description: "Reference for EditorDropPlacement in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.1b39545bf495a2e4
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDropPlacement`

This reference describes `EditorDropPlacement` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`After`](#api-de3ae1501f7060f5) | Field |
| [`Before`](#api-70a81b41f6f1e5da) | Field |
| [`Into`](#api-80b60143e1a8090e) | Field |
| [`None`](#api-dcc85ced9ea1eb19) | Field |

## Type declaration

<a id="api-1b39545bf495a2e4"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDropPlacement b82e2e722c6fd9e8adfe2bd5fcb8f1cf7cf42a737b479ffddc1498843ec3591b -->

```csharp
public enum Inno.Editor.Interactions.EditorDropPlacement : int
```

Describes the requested placement relative to an editor drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropPlacement.cs#L6).

## `After`

<a id="api-de3ae1501f7060f5"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDropPlacement.After 7197caa124258af49f641277b3426605ea286c1430d7808d990bdd614b4fda87 -->

```csharp
Inno.Editor.Interactions.EditorDropPlacement.After = 3
```

Insert after the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropPlacement.cs#L26).

## `Before`

<a id="api-70a81b41f6f1e5da"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDropPlacement.Before b259f84e92ae759ed6b99deafa2ecf0d8750f92f762b4ea2b51299548ea017b1 -->

```csharp
Inno.Editor.Interactions.EditorDropPlacement.Before = 1
```

Insert before the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropPlacement.cs#L16).

## `Into`

<a id="api-80b60143e1a8090e"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDropPlacement.Into c790c1c1defa7cabf96f89517649b431d434c41b7ecba73297366e907eb4bc00 -->

```csharp
Inno.Editor.Interactions.EditorDropPlacement.Into = 2
```

Drop into the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropPlacement.cs#L21).

## `None`

<a id="api-dcc85ced9ea1eb19"></a>
<!-- api: F:Inno.Editor.Interactions.EditorDropPlacement.None 993614bbb631ae72ceeb8db46317ebac2a06b012b7aa0fb901b998ec52535466 -->

```csharp
Inno.Editor.Interactions.EditorDropPlacement.None = 0
```

No positional placement is requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropPlacement.cs#L11).
