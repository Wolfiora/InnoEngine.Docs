---
title: "ShaderInspectionSelection"
description: "Reference for ShaderInspectionSelection in Inno.Editor.Shaders."
uid: api.inno.editor.shaders.3a7d973faf8a593f
kind: api
owners:
  - Inno.Editor.Shaders
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders
---
# `ShaderInspectionSelection`

This reference describes `ShaderInspectionSelection` in `Inno.Editor.Shaders`. Read the [shared contract](../../../projects/inno-editor-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9b9c7a7246c3c287) | Method |
| [`assetId`](#api-978a076c153d9685) | Property |
| [`nodes`](#api-236e5adaf565c713) | Property |

## Type declaration

<a id="api-3a7d973faf8a593f"></a>
<!-- api: T:Inno.Editor.Shaders.ShaderInspectionSelection 8e06df79ba9dcd40a45ba763c5f9858979da6381980a512c17248dd5030d5308 -->

```csharp
public sealed class Inno.Editor.Shaders.ShaderInspectionSelection
```

Identifies a shader document and selected nodes without retaining a graph, extension object or delegate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Nodes/ShaderInspectionSelection.cs#L11).

## `#ctor`

<a id="api-9b9c7a7246c3c287"></a>
<!-- api: M:Inno.Editor.Shaders.ShaderInspectionSelection.#ctor(System.Guid,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId}) e4446925d124a6c7ae5fc9ac72bd21c34c363986396f4f024010b54f97a4a349 -->

```csharp
public Inno.Editor.Shaders.ShaderInspectionSelection.ShaderInspectionSelection(System.Guid assetId, System.Collections.Generic.IEnumerable<Inno.Core.Graphs.GraphNodeId> nodes)
```

Creates a neutral Inspector selection separate from the Asset Browser's navigation.

**Parameter `assetId`:** Persistent shader asset identity.

**Parameter `nodes`:** Selected stable node identities; empty selects document settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Nodes/ShaderInspectionSelection.cs#L23).

## `assetId`

<a id="api-978a076c153d9685"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderInspectionSelection.assetId e9c4903274ec0328cef80cd28681803a1d2ec9530359f98237f349abfe7ebd83 -->

```csharp
public System.Guid Inno.Editor.Shaders.ShaderInspectionSelection.assetId { get; }
```

Gets the persistent shader identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Nodes/ShaderInspectionSelection.cs#L36).

## `nodes`

<a id="api-236e5adaf565c713"></a>
<!-- api: P:Inno.Editor.Shaders.ShaderInspectionSelection.nodes de51770b383d5be45f16e5f44adf75c52eb22a50a2d08fe86cc74c079c03de27 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Graphs.GraphNodeId> Inno.Editor.Shaders.ShaderInspectionSelection.nodes { get; }
```

Gets selected stable node identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Nodes/ShaderInspectionSelection.cs#L40).
