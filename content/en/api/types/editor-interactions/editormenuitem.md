---
title: "EditorMenuItem"
description: "Reference for EditorMenuItem in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.dc492a727d975049
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorMenuItem`

This reference describes `EditorMenuItem` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`actionId`](#api-1eabde63e580f363) | Property |
| [`argument`](#api-a549dd73c5118f07) | Property |
| [`children`](#api-243dd780780e184c) | Property |
| [`label`](#api-5876a95e5ba00219) | Property |
| [`order`](#api-d0fc5379c6508cca) | Property |
| [`separatorBefore`](#api-6cb35224ac2475c3) | Property |
| [`status`](#api-7cf63cd0497b2197) | Property |

## Type declaration

<a id="api-dc492a727d975049"></a>
<!-- api: T:Inno.Editor.Interactions.EditorMenuItem fb9aca0e02642895dbc86aad2bc2da4050873e86cbfe44330fd2f6c5ce124bc4 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorMenuItem
```

Represents one immutable contextual menu node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L11).

## `actionId`

<a id="api-1eabde63e580f363"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuItem.actionId 367271e41bd9759a7298c7744e8316314b9e60f8bf86eab8b30129354b9d980d -->

```csharp
public string Inno.Editor.Interactions.EditorMenuItem.actionId { get; }
```

Gets the stable action identifier consumed by a presentation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L64).

## `argument`

<a id="api-a549dd73c5118f07"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuItem.argument 4329ab00376ee1c8befa78c5fe0b272931986ade8171fb880667ca2db1cb00c6 -->

```csharp
public object? Inno.Editor.Interactions.EditorMenuItem.argument { get; }
```

Gets the generation-local action argument consumed by a presentation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L90).

## `children`

<a id="api-243dd780780e184c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuItem.children daad811d0625ad9347bb96331028a41c4aaf3ddd9916c14d43e0e7ae97363708 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Interactions.EditorMenuItem> Inno.Editor.Interactions.EditorMenuItem.children { get; }
```

Gets child menu nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L84).

## `label`

<a id="api-5876a95e5ba00219"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuItem.label d6625246f7acaaf07807504caa6fd463bcab7bc5d884b43d63b62b1946298633 -->

```csharp
public string Inno.Editor.Interactions.EditorMenuItem.label { get; }
```

Gets the visible node label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L58).

## `order`

<a id="api-d0fc5379c6508cca"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuItem.order f88d46921acee88c476bec29cc994e489242e6477be9f4a4a32c26b696dbbaaf -->

```csharp
public int Inno.Editor.Interactions.EditorMenuItem.order { get; }
```

Gets the stable ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L69).

## `separatorBefore`

<a id="api-6cb35224ac2475c3"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuItem.separatorBefore b94eeae41651e154effd872b4d1fde418b21ab301a19225fcfdc2e1f487d026c -->

```csharp
public bool Inno.Editor.Interactions.EditorMenuItem.separatorBefore { get; }
```

Gets whether a separator precedes this node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L74).

## `status`

<a id="api-7cf63cd0497b2197"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuItem.status 5fea3b1d6a7a4ab32f9996d23011fa5aa851a7d66c29cff89e1749d88acd5e01 -->

```csharp
public Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorMenuItem.status { get; }
```

Gets the current command presentation state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L79).
