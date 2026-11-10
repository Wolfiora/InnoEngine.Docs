---
title: "EditorToolbarModel"
description: "Reference for EditorToolbarModel in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.370c91e5e0bf433d
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorToolbarModel`

This reference describes `EditorToolbarModel` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`items`](#api-dc4a9dc7008296a0) | Property |

## Type declaration

<a id="api-370c91e5e0bf433d"></a>
<!-- api: T:Inno.Editor.Interactions.EditorToolbarModel b8acdfe14fc34ef99e1c60ef879f278eeb87e6d9c4ddb1e7045fc8983a80df37 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorToolbarModel
```

Contains an immutable resolved toolbar for one interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarModel.cs#L8).

## `items`

<a id="api-dc4a9dc7008296a0"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarModel.items b496bbcacfcc7ad88e32787d64f4a10d1a1c336d8bc4e544c534b61d4a29dea3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Interactions.EditorToolbarItem> Inno.Editor.Interactions.EditorToolbarModel.items { get; }
```

Gets visible toolbar commands in deterministic display order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarModel.cs#L18).
