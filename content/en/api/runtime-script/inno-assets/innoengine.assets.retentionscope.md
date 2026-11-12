---
title: "RetentionScope"
description: "Reference for RetentionScope in Inno.Assets."
uid: api.inno.assets.runtime-script.66faaf5a41d90ab6
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `RetentionScope`

This reference describes `RetentionScope` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-64c20003bd017670) | Method |
| [`Dispose`](#api-b8dd0a0d07fb0d9d) | Method |
| [```Retain``1```](#api-7e403f2a9eb2e811) | Method |

## Type declaration

<a id="api-66faaf5a41d90ab6"></a>
<!-- api: T:InnoEngine.Assets.RetentionScope eb2824902c27b6e4617e06a1d5caa56ac1f389426cb9aeb64faf3d0667bb8568 -->

```csharp
public sealed class InnoEngine.Assets.RetentionScope : System.IDisposable
```

Owns multiple asset, artifact, or subsystem leases as one reverse-order lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L253).

## `#ctor`

<a id="api-64c20003bd017670"></a>
<!-- api: M:InnoEngine.Assets.RetentionScope.#ctor 2986e28a421cced31bf7fbe7a9b1af4435e73cb81042ea484e2d79fc792acad9 -->

```csharp
public InnoEngine.Assets.RetentionScope.RetentionScope()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L253).

## `Dispose`

<a id="api-b8dd0a0d07fb0d9d"></a>
<!-- api: M:InnoEngine.Assets.RetentionScope.Dispose 600b387ca1ea9e13cfd17e6850979b12ab979674550eb2fb2961c880b4739508 -->

```csharp
public void InnoEngine.Assets.RetentionScope.Dispose()
```

Releases all retained leases in reverse acquisition order.

**Throws `System.AggregateException`:** Thrown after every lease is attempted when one or more releases fail.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A lease is not retired. The current and remaining dependencies are retained for retry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L287).

## ```Retain``1```

<a id="api-7e403f2a9eb2e811"></a>
<!-- api: M:InnoEngine.Assets.RetentionScope.Retain``1(``0) 8eeb34f20958575f638517b3ad9e9e76d4c6d76c48bded5e8db3bf8436dc9c81 -->

```csharp
public TLease InnoEngine.Assets.RetentionScope.Retain<TLease>(TLease lease) where TLease : System.IDisposable
```

Transfers one lease into this scope.

**Type parameter `TLease`:** Disposable lease type.

**Parameter `lease`:** Lease whose disposal ownership transfers to this scope.

**Returns:** The same lease for convenient initialization.

**Throws `System.InvalidOperationException`:** Retirement has begun and the scope cannot accept another lease.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L272).
