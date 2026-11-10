---
title: "EditorDropContext`2"
description: "Reference for EditorDropContext`2 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.c0b713a2d6d9666e
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# ``EditorDropContext`2``

This reference describes ``EditorDropContext`2`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`area`](#api-fa0a5d2cff65beff) | Property |
| [`editor`](#api-292fbed047e6f532) | Property |
| [`interactions`](#api-74fb26f93b6ba38b) | Property |
| [`placement`](#api-ff24b830a777eb5b) | Property |
| [`source`](#api-f45590f39b50d5ba) | Property |
| [`target`](#api-bc4c383930caa0d2) | Property |
| [`untyped`](#api-deede0048cae33f5) | Property |

## Type declaration

<a id="api-c0b713a2d6d9666e"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDropContext`2 32b2b7304aceeba41e1a8421fd3ca5875af5fa6bc1f8c2ab98c3f39e49e46ca8 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorDropContext<TSource, TTarget> where TSource : class where TTarget : class
```

Provides strongly typed source and target values to a drop operation.

**Type parameter `TSource`:** The managed drag-source type.

**Type parameter `TTarget`:** The managed drop-target type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L135).

## `area`

<a id="api-fa0a5d2cff65beff"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext`2.area a73276ceb74e3f60f15560bc1ded042fd012d3705eec9d9fc970edbc28906d47 -->

```csharp
public string Inno.Editor.Interactions.EditorDropContext<TSource, TTarget>.area { get; }
```

Gets the interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L167).

## `editor`

<a id="api-292fbed047e6f532"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext`2.editor c7716d44aca6a85555f95f47f8dd2a14b769a2f954847d0a6f2239852c3be6bf -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Interactions.EditorDropContext<TSource, TTarget>.editor { get; }
```

Gets the active editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L157).

## `interactions`

<a id="api-74fb26f93b6ba38b"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext`2.interactions 2e1fe4cf9a17866b6be0e43b9e1712fb766b62204186b79183129c866a7b42d2 -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Interactions.EditorDropContext<TSource, TTarget>.interactions { get; }
```

Gets the active interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L162).

## `placement`

<a id="api-ff24b830a777eb5b"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext`2.placement 7c47e9e48619457ccff1c6ad4239888846667ca9a4b33d3e8ed320c28ace80c8 -->

```csharp
public Inno.Editor.Interactions.EditorDropPlacement Inno.Editor.Interactions.EditorDropContext<TSource, TTarget>.placement { get; }
```

Gets the requested placement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L182).

## `source`

<a id="api-f45590f39b50d5ba"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext`2.source 2079993b444ebf6d36591a237740f11c0f3d2dd4c0c3c2e7a2192cee5de9fb40 -->

```csharp
public TSource Inno.Editor.Interactions.EditorDropContext<TSource, TTarget>.source { get; }
```

Gets the typed drag source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L172).

## `target`

<a id="api-bc4c383930caa0d2"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext`2.target c7580e99916a076b14ac1226b8f80b68cf9a961b552d6c6c674933493bb9cbd5 -->

```csharp
public TTarget Inno.Editor.Interactions.EditorDropContext<TSource, TTarget>.target { get; }
```

Gets the typed drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L177).

## `untyped`

<a id="api-deede0048cae33f5"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext`2.untyped f75d3b7ba71dc534f42c0ff08bda31a7bf40b993076f4f6e4178e3244f8d3506 -->

```csharp
public Inno.Editor.Interactions.EditorDropContext Inno.Editor.Interactions.EditorDropContext<TSource, TTarget>.untyped { get; }
```

Gets the untyped drop context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L152).
