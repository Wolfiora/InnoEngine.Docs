---
title: "RenderGraphMutationScope"
description: "Reference for RenderGraphMutationScope in Inno.Rendering."
uid: api.inno.rendering.13d20e7fc6aec15b
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderGraphMutationScope`

This reference describes `RenderGraphMutationScope` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Commit`](#api-4a64fd5e8d117ed5) | Method |
| [`Dispose`](#api-c89c7570a25bedfa) | Method |

## Type declaration

<a id="api-13d20e7fc6aec15b"></a>
<!-- api: T:Inno.Rendering.RenderGraphMutationScope ea8e39c143f22a01e667509524f668c112a7287108d535dead965dfc04a663ad -->

```csharp
public sealed class Inno.Rendering.RenderGraphMutationScope : System.IDisposable
```

Owns isolated graph additions; earlier pass declarations are frozen and failure removes every addition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphMutationScope.cs#L9).

## `Commit`

<a id="api-4a64fd5e8d117ed5"></a>
<!-- api: M:Inno.Rendering.RenderGraphMutationScope.Commit 87214c861367671b42684b6ed1afbc53b3be14402ed7709d0c21f38bce8692d8 -->

```csharp
public void Inno.Rendering.RenderGraphMutationScope.Commit()
```

Validates and freezes additions in the current scope. Dispose must still end the scope before new work.

**Throws `System.InvalidOperationException`:** The scope is not current, was already committed, or the graph additions are invalid.

**Throws `System.ObjectDisposedException`:** This scope has already ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphMutationScope.cs#L40).

## `Dispose`

<a id="api-c89c7570a25bedfa"></a>
<!-- api: M:Inno.Rendering.RenderGraphMutationScope.Dispose cf138fc8c4ef126a13ea385d5ba2b7afdf85e9afc80b78c2720671e29b11410c -->

```csharp
public void Inno.Rendering.RenderGraphMutationScope.Dispose()
```

Ends the current scope and removes all uncommitted additions, including output and name declarations.

**Throws `System.InvalidOperationException`:** A nested mutation scope must be ended first.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphMutationScope.cs#L52).
