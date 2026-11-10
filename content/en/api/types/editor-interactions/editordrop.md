---
title: "EditorDrop"
description: "Reference for EditorDrop in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.bcb0df6c8d496566
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDrop`

This reference describes `EditorDrop` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-31b7f560922de3d0) | Method |
| [`Drop`](#api-47babd2325d8ecea) | Method |
| [`Query`](#api-ec2f2e721953e424) | Method |
| [`sourceType`](#api-e3a9e6c0fa823b1c) | Property |
| [`targetType`](#api-5937097701fa7e45) | Property |

## Type declaration

<a id="api-bcb0df6c8d496566"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDrop 1f04cebf69ce744567e853a71c2dd7770e102774d363aa5f5c8a7441c72d483e -->

```csharp
public abstract class Inno.Editor.Interactions.EditorDrop
```

Defines one discoverable typed editor drop operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L11).

## `#ctor`

<a id="api-31b7f560922de3d0"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDrop.#ctor 74ea0ddf18d53dd2cd92f8dee43ae20419eb95a726699938d0af62a04275fe32 -->

```csharp
protected Inno.Editor.Interactions.EditorDrop.EditorDrop()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L11).

## `Drop`

<a id="api-47babd2325d8ecea"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDrop.Drop(Inno.Editor.Interactions.EditorDropContext) 50f3c3a1d23e23aedc66d2a74aacdaf38941178baa021466fc63ec187a57088c -->

```csharp
public abstract Inno.Editor.Interactions.EditorDropResult Inno.Editor.Interactions.EditorDrop.Drop(Inno.Editor.Interactions.EditorDropContext context)
```

Executes a delivered drop after a successful compatibility query.

**Parameter `context`:** The untyped source, target, surface, and requested placement.

**Returns:** The observable selection and reveal result of the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L43).

## `Query`

<a id="api-ec2f2e721953e424"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDrop.Query(Inno.Editor.Interactions.EditorDropContext) 8bfbd582f45b5fa96bc6a868f4c5c89999ba29067891128302ec751561e51b8a -->

```csharp
public abstract Inno.Editor.Interactions.EditorDropStatus Inno.Editor.Interactions.EditorDrop.Query(Inno.Editor.Interactions.EditorDropContext context)
```

Evaluates whether the current managed source may be dropped on the supplied target.

**Parameter `context`:** The untyped source, target, surface, and requested placement.

**Returns:** The compatibility state and standard target visual.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L32).

## `sourceType`

<a id="api-e3a9e6c0fa823b1c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDrop.sourceType d3d103d3ca4a667d3f1e637c0edede8d5b5094d1ba7bd28edb3dcc74447f9c57 -->

```csharp
public abstract System.Type Inno.Editor.Interactions.EditorDrop.sourceType { get; }
```

Gets the accepted drag source type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L16).

## `targetType`

<a id="api-5937097701fa7e45"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDrop.targetType e8b43a9e280278b7a4c619ee05ba37f271322ea61f97221f6d3715068bcbca47 -->

```csharp
public abstract System.Type Inno.Editor.Interactions.EditorDrop.targetType { get; }
```

Gets the accepted drop target type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L21).
