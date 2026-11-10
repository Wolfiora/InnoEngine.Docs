---
title: Identity
description: Identity payload for an object, carrying persistent id and runtime id.
uid: api.core-identity.identity
kind: api
owners:
  - Inno.Core.Identity
apiSurface: source-clr
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
---
# Identity

Identity payload for an object, carrying persistent id and runtime id.

**Namespace:** `Inno.Core.Identity`  
**Project:** [Inno.Core.Identity](../../projects/inno-core-identity.md)  
**Surface:** Evaluated CLR source, Debug configuration. Script-projection availability requires its own manifest.

## Type declaration

<a id="api-9347eae8dc0c5be0"></a>
<!-- api: T:Inno.Core.Identity.Identity ae23d98bdf9addebb36a5cdec1884ce3e8a5cbfff1648a0a5fb7a638d86432d3 -->

```csharp
public struct Inno.Core.Identity.Identity
```

**Base type:** `System.ValueType`.

[Register and release an identity object](../../../manual/register-identity.md) shows the owner and lifetime sequence. Read the [shared lifecycle and failure contracts](../../projects/inno-core-identity.md#lifecycle-and-failure-contracts) before using these members.

## Members

| Member | Kind |
| --- | --- |
| [`persistentId`](#api-7a0513ed5e0290ca) | Property |
| [`runtimeId`](#api-4ce65b0bd5c32a01) | Property |
| [`runtimeIdentity`](#api-670eede97a80627e) | Property |
| [`Identity(Guid)`](#api-ceccb7f74f56ec26) | Method |
| [`Resolve<TObject>`](#api-18eb14fb3da25d77) | Method |

## `persistentId`

<a id="api-7a0513ed5e0290ca"></a>
<!-- api: P:Inno.Core.Identity.Identity.persistentId a4ac3f1ea5bd679ec19b677170829f55a8500fe5aa9e9fa4dbb5e6a98fb4bd6b -->

```csharp
public System.Guid Inno.Core.Identity.Identity.persistentId { get; private set; }
```

Gets the stable identifier preserved by serialization and runtime reconstruction.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/Identity.cs#L13).

## `runtimeId`

<a id="api-4ce65b0bd5c32a01"></a>
<!-- api: P:Inno.Core.Identity.Identity.runtimeId 1f45203ef6fc65bba21cbbb7b7d67d5ab3fea24eeace44b360dec6c2224c7b4d -->

```csharp
public int? Inno.Core.Identity.Identity.runtimeId { get; }
```

Gets the identifier assigned by the currently bound runtime registry.

**Constraints:** The value is `null` while this identity is not bound to a live registry.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/Identity.cs#L21).

## `runtimeIdentity`

<a id="api-670eede97a80627e"></a>
<!-- api: P:Inno.Core.Identity.Identity.runtimeIdentity c4997aeab9543bfc113c0d259077ed0cb6e820747651a007a14c1f7534a8cf9e -->

```csharp
public Inno.Core.Identity.RuntimeIdentity? Inno.Core.Identity.Identity.runtimeIdentity { get; }
```

Gets the domain-qualified runtime identity while this object is registered.

**Constraints:** The value is `null` when this identity is detached or its registry is no longer reachable.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/Identity.cs#L38).

## `Identity(Guid)`

<a id="api-ceccb7f74f56ec26"></a>
<!-- api: M:Inno.Core.Identity.Identity.#ctor(System.Guid) 3f6f58cc730d5183f117bd8f35bf9af6d0fc7f8313548d6fbf5d54d4714bc735 -->

```csharp
public Inno.Core.Identity.Identity.Identity(System.Guid persistentId)
```

Creates an unbound identity with the supplied persistent identifier.

**Parameter `persistentId`:** The stable identifier to preserve across serialization boundaries.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/Identity.cs#L59).

## `Resolve<TObject>`

<a id="api-18eb14fb3da25d77"></a>
<!-- api: M:Inno.Core.Identity.Identity.Resolve``1 186569f2c8abd3318142e3fb438df276f7d0a3cb164c0eb1e7d64b7d74d3008a -->

```csharp
public TObject? Inno.Core.Identity.Identity.Resolve<TObject>() where TObject : Inno.Core.Identity.IdentityObject
```

Resolves this transient snapshot through its original weak identity registry.

**Type parameter `TObject`:** The expected identity object type.

**Returns:** The current object, or null if the registry retired, the slot changed generation, or the type differs.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/Identity.cs#L99).