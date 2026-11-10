---
title: "EditorMenuModel"
description: "Reference for EditorMenuModel in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.e0d9ee2f42da4670
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorMenuModel`

This reference describes `EditorMenuModel` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3a4d0e02b60b8bf9) | Method |
| [`items`](#api-781b1af6826f0fb9) | Property |

## Type declaration

<a id="api-e0d9ee2f42da4670"></a>
<!-- api: T:Inno.Editor.Interactions.EditorMenuModel fda7faabf1cb021325dde52a58e4c13d87cf43590520c22682c20a2fa6db0058 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorMenuModel
```

Contains a complete immutable menu tree.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuModel.cs#L9).

## `#ctor`

<a id="api-3a4d0e02b60b8bf9"></a>
<!-- api: M:Inno.Editor.Interactions.EditorMenuModel.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Editor.Interactions.EditorMenuItem}) b3bfffb3e79d5de3c07d1715d397a1f01773cade1c16435f2d092ed90e02161e -->

```csharp
public Inno.Editor.Interactions.EditorMenuModel.EditorMenuModel(System.Collections.Generic.IReadOnlyList<Inno.Editor.Interactions.EditorMenuItem>? items)
```

Creates a complete immutable menu tree from resolved root nodes.

**Parameter `items`:** The root nodes in stable display order, or `null` for an empty menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuModel.cs#L17).

## `items`

<a id="api-781b1af6826f0fb9"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuModel.items e9814295c6cf4032de15b4033d4131091e34fe2df794a360cad591dabb1e2190 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Interactions.EditorMenuItem> Inno.Editor.Interactions.EditorMenuModel.items { get; }
```

Gets root menu nodes in display order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuModel.cs#L25).
