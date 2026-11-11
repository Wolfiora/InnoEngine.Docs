---
title: "RetentionScope"
description: "Reference for RetentionScope in Inno.Assets."
uid: api.inno.assets.fd5df7a5fba4e47d
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `RetentionScope`

This reference describes `RetentionScope` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3f03fe344ab75fbd) | Method |
| [`Dispose`](#api-ed2a35c4b60a26a6) | Method |
| [```Retain``1```](#api-36b85e7c02331dfb) | Method |

## Type declaration

<a id="api-fd5df7a5fba4e47d"></a>
<!-- api: T:Inno.Assets.RetentionScope 747ede8ceb753f30c9f5a0190391df697df12542c0fee6b7c97d2fb2a16797d1 -->

```csharp
public sealed class Inno.Assets.RetentionScope : System.IDisposable
```

Owns multiple asset, artifact, or subsystem leases as one reverse-order lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L253).

## `#ctor`

<a id="api-3f03fe344ab75fbd"></a>
<!-- api: M:Inno.Assets.RetentionScope.#ctor 711a77eb41c44506d7fb742a1a62d554aa5293288847e860d82e31dc9baa0d33 -->

```csharp
public Inno.Assets.RetentionScope.RetentionScope()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L253).

## `Dispose`

<a id="api-ed2a35c4b60a26a6"></a>
<!-- api: M:Inno.Assets.RetentionScope.Dispose e635172a052b59b42fdc9cf421386a67f075324dcc4f40439ac590b72ef22516 -->

```csharp
public void Inno.Assets.RetentionScope.Dispose()
```

Releases all retained leases in reverse acquisition order.

**Throws `System.AggregateException`:** Thrown after every lease is attempted when one or more releases fail.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A lease is not retired. The current and remaining dependencies are retained for retry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L287).

## ```Retain``1```

<a id="api-36b85e7c02331dfb"></a>
<!-- api: M:Inno.Assets.RetentionScope.Retain``1(``0) 20c7aa5759acb918d989c1a550b0c6918c225d3cc70f9cd99568af0af30b8a3b -->

```csharp
public TLease Inno.Assets.RetentionScope.Retain<TLease>(TLease lease) where TLease : System.IDisposable
```

Transfers one lease into this scope.

**Type parameter `TLease`:** Disposable lease type.

**Parameter `lease`:** Lease whose disposal ownership transfers to this scope.

**Returns:** The same lease for convenient initialization.

**Throws `System.InvalidOperationException`:** Retirement has begun and the scope cannot accept another lease.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L272).
