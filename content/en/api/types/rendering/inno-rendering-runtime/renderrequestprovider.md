---
title: "RenderRequestProvider"
description: "Reference for RenderRequestProvider in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.d97f66c0c7a431ad
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderRequestProvider`

This reference describes `RenderRequestProvider` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-50589c9741f477a5) | Method |
| [`Dispose`](#api-ed330ccdae3ce491) | Method |
| [`Dispose`](#api-44cc12008a7e068f) | Method |
| [`Submit`](#api-7dde9b79b22f298b) | Method |

## Type declaration

<a id="api-d97f66c0c7a431ad"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderRequestProvider d609d1300de8c4ab1468a767abaca5f3b127aeb154a22d54a49732ce4b7a53d1 -->

```csharp
public abstract class Inno.Rendering.Runtime.RenderRequestProvider : System.IDisposable
```

Produces arbitrary render requests without prescribing a scene or rendering model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L162).

## `#ctor`

<a id="api-50589c9741f477a5"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRequestProvider.#ctor 95c714440b935d844911790169ecf1249b06e3e7d87bc692d83a91fce04d4b10 -->

```csharp
protected Inno.Rendering.Runtime.RenderRequestProvider.RenderRequestProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L162).

## `Dispose`

<a id="api-ed330ccdae3ce491"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRequestProvider.Dispose 7565dac4785296dac34c7b81df5f48c6bb3642293d93c9b38cdf6f945e1cebeb -->

```csharp
public void Inno.Rendering.Runtime.RenderRequestProvider.Dispose()
```

Releases generation-scoped provider state.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Provider work is still active. The owner must retain this instance and retry before releasing dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L180).

## `Dispose`

<a id="api-44cc12008a7e068f"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRequestProvider.Dispose(System.Boolean) 8bbf98e86f5309525153e3e1874a97be832d1bc8e60a147ff58c82bb6832fea8 -->

```csharp
protected virtual void Inno.Rendering.Runtime.RenderRequestProvider.Dispose(bool disposing)
```

Releases managed generation-scoped state.

**Parameter `disposing`:** Always true for explicit disposal.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Retirement cannot complete yet; subsequent calls resume this hook with its remaining owned resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L210).

## `Submit`

<a id="api-7dde9b79b22f298b"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRequestProvider.Submit(Inno.Rendering.Runtime.RenderRequestProviderContext) 92335523cd41926ed230db3409a56142abc91cb7486b14e9f1bca936ee1a2540 -->

```csharp
public abstract void Inno.Rendering.Runtime.RenderRequestProvider.Submit(Inno.Rendering.Runtime.RenderRequestProviderContext context)
```

Submits zero or more requests for the current frame.

**Parameter `context`:** Frame-scoped provider context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderRequestProvider.cs#L172).
