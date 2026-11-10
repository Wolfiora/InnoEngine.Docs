---
title: "EditorDrop`2"
description: "Reference for EditorDrop`2 in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.b26d3b6076d96255
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# ``EditorDrop`2``

This reference describes ``EditorDrop`2`` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Interactions.EditorDrop`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0de0427f82f3f318) | Method |
| [`Drop`](#api-6701032ce129f329) | Method |
| [`Drop`](#api-8159c18b3bab6ef6) | Method |
| [`Query`](#api-765b9ecc892ef307) | Method |
| [`Query`](#api-74a9fc5e70751a96) | Method |
| [`sourceType`](#api-66c1830493f79651) | Property |
| [`targetType`](#api-4ade1b2fe25744a8) | Property |

## Type declaration

<a id="api-b26d3b6076d96255"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDrop`2 384e08e922d42f6295530af252cfd6e96c94f520c9d7cf94c2d414cf4ce1c400 -->

```csharp
public abstract class Inno.Editor.Interactions.EditorDrop<TSource, TTarget> where TSource : Inno.Core.Identity.IdentityObject where TTarget : class : Inno.Editor.Interactions.EditorDrop
```

Defines a typed drop operation for one managed source and target pair.

**Type parameter `TSource`:** The managed drag-source type accepted by the operation.

**Type parameter `TTarget`:** The managed drop-target type accepted by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L55).

## `#ctor`

<a id="api-0de0427f82f3f318"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDrop`2.#ctor fcc329618d69cf2876a9c4aa7d0f990950ec23b5cefc94f60d7c26032610adcd -->

```csharp
protected Inno.Editor.Interactions.EditorDrop<TSource, TTarget>.EditorDrop()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L55).

## `Drop`

<a id="api-6701032ce129f329"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDrop`2.Drop(Inno.Editor.Interactions.EditorDropContext) 73b5f4640e035c500034b26dcbd82bb7c05999cfd2ea57549d1e05e50d4557b5 -->

```csharp
public override sealed Inno.Editor.Interactions.EditorDropResult Inno.Editor.Interactions.EditorDrop<TSource, TTarget>.Drop(Inno.Editor.Interactions.EditorDropContext context)
```

Validates and applies the current editor drag-and-drop interaction atomically.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated editor drop result that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L95).

## `Drop`

<a id="api-8159c18b3bab6ef6"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDrop`2.Drop(Inno.Editor.Interactions.EditorDropContext{`0,`1}) 1f9cf288ccc9fe08bbdb77636b0d32b830fc0d0f8672fc06fb822eed17f16e2c -->

```csharp
protected abstract Inno.Editor.Interactions.EditorDropResult Inno.Editor.Interactions.EditorDrop<TSource, TTarget>.Drop(Inno.Editor.Interactions.EditorDropContext<TSource, TTarget> context)
```

Executes a delivered drop for the strongly typed source and target.

**Parameter `context`:** The typed source, target, surface, and requested placement.

**Returns:** The observable selection and reveal result of the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L123).

## `Query`

<a id="api-765b9ecc892ef307"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDrop`2.Query(Inno.Editor.Interactions.EditorDropContext) 6cc84fa0d44b815be57adafcc8b271b8ccec1be7248acfdb9688a122f998ea39 -->

```csharp
public override sealed Inno.Editor.Interactions.EditorDropStatus Inno.Editor.Interactions.EditorDrop<TSource, TTarget>.Query(Inno.Editor.Interactions.EditorDropContext context)
```

Evaluates the operation's current availability and presentation state.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** The validated editor drop status that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L78).

## `Query`

<a id="api-74a9fc5e70751a96"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDrop`2.Query(Inno.Editor.Interactions.EditorDropContext{`0,`1}) 34f8ff1044bdf27908f27b4750d9ed3a96671913923028707647f34c06655a4e -->

```csharp
protected abstract Inno.Editor.Interactions.EditorDropStatus Inno.Editor.Interactions.EditorDrop<TSource, TTarget>.Query(Inno.Editor.Interactions.EditorDropContext<TSource, TTarget> context)
```

Evaluates whether the strongly typed source may be dropped on the strongly typed target.

**Parameter `context`:** The typed source, target, surface, and requested placement.

**Returns:** The compatibility state and standard target visual.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L112).

## `sourceType`

<a id="api-66c1830493f79651"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDrop`2.sourceType dcd76d8f6e138e50a704941dc172ea705c51091c1f951c52b51f2f5bd1db0920 -->

```csharp
public override sealed System.Type Inno.Editor.Interactions.EditorDrop<TSource, TTarget>.sourceType { get; }
```

Gets the concrete type handled by this extension implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L62).

## `targetType`

<a id="api-4ade1b2fe25744a8"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDrop`2.targetType 0f18bfef479b557b83685db29f86154ea385afe4548def3483c3a86ce80dd09b -->

```csharp
public override sealed System.Type Inno.Editor.Interactions.EditorDrop<TSource, TTarget>.targetType { get; }
```

Gets the concrete type handled by this extension implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L67).
