---
title: "EditorDropContext`2"
description: "Reference for EditorDropContext`2 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.40ac93bc872510e8
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# ``EditorDropContext`2``

This reference describes ``EditorDropContext`2`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e6cc6cf12369bfd9) | Method |
| [`area`](#api-66c76c1db9fd3fe8) | Property |
| [`editor`](#api-6866dbc731679cc7) | Property |
| [`interactions`](#api-806aee38fa8a1b97) | Property |
| [`placement`](#api-45d5b4f5bdb2c4c3) | Property |
| [`source`](#api-26c70acf1975f9b8) | Property |
| [`target`](#api-2dea3a11b0dd7b18) | Property |
| [`untyped`](#api-00da53be7f739570) | Property |

## Type declaration

<a id="api-40ac93bc872510e8"></a>
<!-- api: T:InnoEditor.Interactions.EditorDropContext`2 1b2fafb7142eef17ffa735f92013ccfe9fbe9912b1a61e7de6cb2c1fe4fbf94b -->

```csharp
public sealed class InnoEditor.Interactions.EditorDropContext<TSource, TTarget> where TSource : class where TTarget : class
```

Provides strongly typed source and target values to a drop operation.

**Type parameter `TSource`:** The managed drag-source type.

**Type parameter `TTarget`:** The managed drop-target type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L135).

## `#ctor`

<a id="api-e6cc6cf12369bfd9"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropContext`2.#ctor 94eca7507e643f6623e6457510655ced0397dfa990a3cb3829b89ca6f52def32 -->

```csharp
public InnoEditor.Interactions.EditorDropContext<TSource, TTarget>.EditorDropContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L135).

## `area`

<a id="api-66c76c1db9fd3fe8"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext`2.area 620319e2351359a486e8a2f2f0ce1c1ff8255c5739ba3ee6d9b446b9b02ca937 -->

```csharp
public string InnoEditor.Interactions.EditorDropContext<TSource, TTarget>.area { get; }
```

Gets the interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L167).

## `editor`

<a id="api-6866dbc731679cc7"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext`2.editor 9093b94e70aaf0b4121f175aa810b1b98e6d03840863e6c3828850af20b0a8c2 -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Interactions.EditorDropContext<TSource, TTarget>.editor { get; }
```

Gets the active editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L157).

## `interactions`

<a id="api-806aee38fa8a1b97"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext`2.interactions 7d55571c20870c90e4357f8946a46d499735250d1b43069f484be8d5fb5f999f -->

```csharp
public InnoEditor.Interactions.EditorInteractions InnoEditor.Interactions.EditorDropContext<TSource, TTarget>.interactions { get; }
```

Gets the active interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L162).

## `placement`

<a id="api-45d5b4f5bdb2c4c3"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext`2.placement 49d0c5b4db41a29195c3629e924c365146b07b1a981ce0e7131bb962bf520a6e -->

```csharp
public InnoEditor.Interactions.EditorDropPlacement InnoEditor.Interactions.EditorDropContext<TSource, TTarget>.placement { get; }
```

Gets the requested placement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L182).

## `source`

<a id="api-26c70acf1975f9b8"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext`2.source ec6d341eb632792ca534b2600143b1f5789ee80f9b9197e11d824a74fb4b2a5a -->

```csharp
public TSource InnoEditor.Interactions.EditorDropContext<TSource, TTarget>.source { get; }
```

Gets the typed drag source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L172).

## `target`

<a id="api-2dea3a11b0dd7b18"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext`2.target 4a8cb4fcf129e95513f7c9a38ec15c454c0d9de63d24d5a4efb8b7b79d74ccf7 -->

```csharp
public TTarget InnoEditor.Interactions.EditorDropContext<TSource, TTarget>.target { get; }
```

Gets the typed drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L177).

## `untyped`

<a id="api-00da53be7f739570"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext`2.untyped 7d2956d7487e29be617acaa8cba211db69836e20ba2a72bba49f101e0d45a433 -->

```csharp
public InnoEditor.Interactions.EditorDropContext InnoEditor.Interactions.EditorDropContext<TSource, TTarget>.untyped { get; }
```

Gets the untyped drop context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L152).
