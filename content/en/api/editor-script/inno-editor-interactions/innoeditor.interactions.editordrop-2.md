---
title: "EditorDrop`2"
description: "Reference for EditorDrop`2 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.6ee41d1a4efbf482
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# ``EditorDrop`2``

This reference describes ``EditorDrop`2`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Interactions.EditorDrop`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-837d196bb7ccf79a) | Method |
| [`Drop`](#api-7e3e3a1049fa6fa0) | Method |
| [`Drop`](#api-0f9a6306d1d203e5) | Method |
| [`Query`](#api-1ed2d4103eb30f56) | Method |
| [`Query`](#api-866a9d15f58b7613) | Method |
| [`sourceType`](#api-6a6ab4c8e3cbf14e) | Property |
| [`targetType`](#api-1731873d39e60ce5) | Property |

## Type declaration

<a id="api-6ee41d1a4efbf482"></a>
<!-- api: T:InnoEditor.Interactions.EditorDrop`2 652a5f8e016b024bb72960c2788208318c0c510cd00e5e557af6f62954ce132c -->

```csharp
public abstract class InnoEditor.Interactions.EditorDrop<TSource, TTarget> where TSource : InnoEngine.Core.IdentityObject where TTarget : class : InnoEditor.Interactions.EditorDrop
```

Defines a typed drop operation for one managed source and target pair.

**Type parameter `TSource`:** The managed drag-source type accepted by the operation.

**Type parameter `TTarget`:** The managed drop-target type accepted by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L55).

## `#ctor`

<a id="api-837d196bb7ccf79a"></a>
<!-- api: M:InnoEditor.Interactions.EditorDrop`2.#ctor ec74eb128499e8c5c21c9a44672bc67c929b496d282798aafbdb25ce64ddc241 -->

```csharp
protected InnoEditor.Interactions.EditorDrop<TSource, TTarget>.EditorDrop()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L55).

## `Drop`

<a id="api-7e3e3a1049fa6fa0"></a>
<!-- api: M:InnoEditor.Interactions.EditorDrop`2.Drop(InnoEditor.Interactions.EditorDropContext) 67a05a51cc8f0835c541eab72cecef2956d24f2420bdf916188657d521481e07 -->

```csharp
public override sealed InnoEditor.Interactions.EditorDropResult InnoEditor.Interactions.EditorDrop<TSource, TTarget>.Drop(InnoEditor.Interactions.EditorDropContext context)
```

Validates and applies the current editor drag-and-drop interaction atomically.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated editor drop result that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L95).

## `Drop`

<a id="api-0f9a6306d1d203e5"></a>
<!-- api: M:InnoEditor.Interactions.EditorDrop`2.Drop(InnoEditor.Interactions.EditorDropContext{`0,`1}) 7efb7166b106aade55df27640234103bc4c5011dd8c6e8299d5be58febc0f389 -->

```csharp
protected abstract InnoEditor.Interactions.EditorDropResult InnoEditor.Interactions.EditorDrop<TSource, TTarget>.Drop(InnoEditor.Interactions.EditorDropContext<TSource, TTarget> context)
```

Executes a delivered drop for the strongly typed source and target.

**Parameter `context`:** The typed source, target, surface, and requested placement.

**Returns:** The observable selection and reveal result of the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L123).

## `Query`

<a id="api-1ed2d4103eb30f56"></a>
<!-- api: M:InnoEditor.Interactions.EditorDrop`2.Query(InnoEditor.Interactions.EditorDropContext) 8eb425cd14e06952217cf92dc3a2cc3dbecce35be2ed8b6b2f7395134f291937 -->

```csharp
public override sealed InnoEditor.Interactions.EditorDropStatus InnoEditor.Interactions.EditorDrop<TSource, TTarget>.Query(InnoEditor.Interactions.EditorDropContext context)
```

Evaluates the operation's current availability and presentation state.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated editor drop status that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L78).

## `Query`

<a id="api-866a9d15f58b7613"></a>
<!-- api: M:InnoEditor.Interactions.EditorDrop`2.Query(InnoEditor.Interactions.EditorDropContext{`0,`1}) f9175a027a58d99a9dd919edc972cecb299ad2c5ee0cb6800cc56f849af1d58c -->

```csharp
protected abstract InnoEditor.Interactions.EditorDropStatus InnoEditor.Interactions.EditorDrop<TSource, TTarget>.Query(InnoEditor.Interactions.EditorDropContext<TSource, TTarget> context)
```

Evaluates whether the strongly typed source may be dropped on the strongly typed target.

**Parameter `context`:** The typed source, target, surface, and requested placement.

**Returns:** The compatibility state and standard target visual.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L112).

## `sourceType`

<a id="api-6a6ab4c8e3cbf14e"></a>
<!-- api: P:InnoEditor.Interactions.EditorDrop`2.sourceType 800d8328625ebca852e65b63d193567e42dae0468b1747df76186a976f8504e6 -->

```csharp
public override sealed System.Type InnoEditor.Interactions.EditorDrop<TSource, TTarget>.sourceType { get; }
```

Gets the concrete type handled by this extension implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L62).

## `targetType`

<a id="api-1731873d39e60ce5"></a>
<!-- api: P:InnoEditor.Interactions.EditorDrop`2.targetType a2e985fcf16d76535bebbfaea7912b8d82ef1e17d16d64a8eb25c777fead01f3 -->

```csharp
public override sealed System.Type InnoEditor.Interactions.EditorDrop<TSource, TTarget>.targetType { get; }
```

Gets the concrete type handled by this extension implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L67).
