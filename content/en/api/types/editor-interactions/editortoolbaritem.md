---
title: "EditorToolbarItem"
description: "Reference for EditorToolbarItem in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.802a0b6147324452
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorToolbarItem`

This reference describes `EditorToolbarItem` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`actionId`](#api-6182bb4cdcc54168) | Property |
| [`icon`](#api-a728382ece18b048) | Property |
| [`order`](#api-c35b42a510fb64e0) | Property |
| [`status`](#api-f6aa342f1fc05fc1) | Property |
| [`tooltip`](#api-b4019a1ce092d75c) | Property |

## Type declaration

<a id="api-802a0b6147324452"></a>
<!-- api: T:Inno.Editor.Interactions.EditorToolbarItem 54e377e89351886a2b3ce805dab8716ccad8221ae58f1f4d30c41934d2baa489 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorToolbarItem
```

Describes one resolved toolbar command.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L6).

## `actionId`

<a id="api-6182bb4cdcc54168"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarItem.actionId 91222b6994e7f6156ced0925cd6915045afc07cac75a5eea5eb49924ab1b5bb4 -->

```csharp
public string Inno.Editor.Interactions.EditorToolbarItem.actionId { get; }
```

Gets the stable action dispatched when this item is pressed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L25).

## `icon`

<a id="api-a728382ece18b048"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarItem.icon fdd8cef72144798ee17f101c9b770ec3e5c84dff4ba41b5498beb31525a74bd8 -->

```csharp
public Inno.Editor.Interactions.EditorToolbarIcon Inno.Editor.Interactions.EditorToolbarItem.icon { get; }
```

Gets the resolved presentation-independent symbol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L30).

## `order`

<a id="api-c35b42a510fb64e0"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarItem.order c998990de5291603e9ffd7f8934f00808882c1eeb90841d401e1ff86ee6536a6 -->

```csharp
public int Inno.Editor.Interactions.EditorToolbarItem.order { get; }
```

Gets the stable ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L40).

## `status`

<a id="api-f6aa342f1fc05fc1"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarItem.status 31867c3913e462524145fa056113ffaf4a20ad248bce97f54bf5632b7028f995 -->

```csharp
public Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorToolbarItem.status { get; }
```

Gets the current action availability and checked state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L45).

## `tooltip`

<a id="api-b4019a1ce092d75c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarItem.tooltip 10cb9dce979ca690f1c43d2e9ad887ac5901f21e18968a699e3829c68624f8c0 -->

```csharp
public string Inno.Editor.Interactions.EditorToolbarItem.tooltip { get; }
```

Gets the resolved contextual tooltip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L35).
