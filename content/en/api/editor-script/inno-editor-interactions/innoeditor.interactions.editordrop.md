---
title: "EditorDrop"
description: "Reference for EditorDrop in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.be6915618c696aaf
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDrop`

This reference describes `EditorDrop` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-55a1d25f764ae707) | Method |
| [`Drop`](#api-fed84c449c181d49) | Method |
| [`Query`](#api-0f2396a9db68e874) | Method |
| [`sourceType`](#api-1dcf4e2b1efbe338) | Property |
| [`targetType`](#api-b1bb3faad9eaa9e7) | Property |

## Type declaration

<a id="api-be6915618c696aaf"></a>
<!-- api: T:InnoEditor.Interactions.EditorDrop 36f02d8bb05da2d0f3e721aa67207cc534d934d4344b9c4249944832e60a7e7f -->

```csharp
public abstract class InnoEditor.Interactions.EditorDrop
```

Defines one discoverable typed editor drop operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L11).

## `#ctor`

<a id="api-55a1d25f764ae707"></a>
<!-- api: M:InnoEditor.Interactions.EditorDrop.#ctor 17d39dc09b4e8dda1ffb68e02cbf1439b13a6e9ae700b29b10766cad7be3e5f1 -->

```csharp
protected InnoEditor.Interactions.EditorDrop.EditorDrop()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L11).

## `Drop`

<a id="api-fed84c449c181d49"></a>
<!-- api: M:InnoEditor.Interactions.EditorDrop.Drop(InnoEditor.Interactions.EditorDropContext) 7eac50e4b298d4f7c68da2e384f99a8175353ff712e6dad112d47beaaeda1ea1 -->

```csharp
public abstract InnoEditor.Interactions.EditorDropResult InnoEditor.Interactions.EditorDrop.Drop(InnoEditor.Interactions.EditorDropContext context)
```

Executes a delivered drop after a successful compatibility query.

**Parameter `context`:** The untyped source, target, surface, and requested placement.

**Returns:** The observable selection and reveal result of the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L43).

## `Query`

<a id="api-0f2396a9db68e874"></a>
<!-- api: M:InnoEditor.Interactions.EditorDrop.Query(InnoEditor.Interactions.EditorDropContext) e8822194fc1f34317e6de0e2112d0bca87c65e7e81581c5d4839923dba63e4eb -->

```csharp
public abstract InnoEditor.Interactions.EditorDropStatus InnoEditor.Interactions.EditorDrop.Query(InnoEditor.Interactions.EditorDropContext context)
```

Evaluates whether the current managed source may be dropped on the supplied target.

**Parameter `context`:** The untyped source, target, surface, and requested placement.

**Returns:** The compatibility state and standard target visual.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L32).

## `sourceType`

<a id="api-1dcf4e2b1efbe338"></a>
<!-- api: P:InnoEditor.Interactions.EditorDrop.sourceType 96724731d6c0b8ad37586e7a45b5940cc3997ec2e82a2d32d5a7f730aebe2cc4 -->

```csharp
public abstract System.Type InnoEditor.Interactions.EditorDrop.sourceType { get; }
```

Gets the accepted drag source type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L16).

## `targetType`

<a id="api-b1bb3faad9eaa9e7"></a>
<!-- api: P:InnoEditor.Interactions.EditorDrop.targetType 32da26a1d1cb3baf5c7fa3cb7083419e31dd204be21475df05831f7199f33345 -->

```csharp
public abstract System.Type InnoEditor.Interactions.EditorDrop.targetType { get; }
```

Gets the accepted drop target type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDrop.cs#L21).
