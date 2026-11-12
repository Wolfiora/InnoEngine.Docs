---
title: "RenderGraphMutationScope"
description: "Reference for RenderGraphMutationScope in Inno.Rendering."
uid: api.inno.rendering.runtime-script.586621e9879d4158
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderGraphMutationScope`

This reference describes `RenderGraphMutationScope` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-de68707c50b3ac9c) | Method |
| [`Commit`](#api-e145d95c3e901d65) | Method |
| [`Dispose`](#api-7b7c2a501c7b0f04) | Method |

## Type declaration

<a id="api-586621e9879d4158"></a>
<!-- api: T:InnoEngine.Rendering.RenderGraphMutationScope 0bab0ae37cec10ff1504c460d803d0d51944b8e23d7af35e8744139abffa3c87 -->

```csharp
public sealed class InnoEngine.Rendering.RenderGraphMutationScope : System.IDisposable
```

Owns isolated graph additions; earlier pass declarations are frozen and failure removes every addition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphMutationScope.cs#L9).

## `#ctor`

<a id="api-de68707c50b3ac9c"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphMutationScope.#ctor cf8e249b6b38ac86dfa2bb02ed67d7fb4f38c64e7aaf4a2f32da91fa6565cf84 -->

```csharp
public InnoEngine.Rendering.RenderGraphMutationScope.RenderGraphMutationScope()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphMutationScope.cs#L9).

## `Commit`

<a id="api-e145d95c3e901d65"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphMutationScope.Commit 220d533c81119520f1d958a2b49e72b7152e8e399a01ca59a9bd405b4ade171f -->

```csharp
public void InnoEngine.Rendering.RenderGraphMutationScope.Commit()
```

Validates and freezes additions in the current scope. Dispose must still end the scope before new work.

**Throws `System.InvalidOperationException`:** The scope is not current, was already committed, or the graph additions are invalid.

**Throws `System.ObjectDisposedException`:** This scope has already ended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphMutationScope.cs#L40).

## `Dispose`

<a id="api-7b7c2a501c7b0f04"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphMutationScope.Dispose d8e34d7fb2677a4cfb42b00af29904073bdcc2a46e040d2012d85524ebdc6343 -->

```csharp
public void InnoEngine.Rendering.RenderGraphMutationScope.Dispose()
```

Ends the current scope and removes all uncommitted additions, including output and name declarations.

**Throws `System.InvalidOperationException`:** A nested mutation scope must be ended first.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphMutationScope.cs#L52).
