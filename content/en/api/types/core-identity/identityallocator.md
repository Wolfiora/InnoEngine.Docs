---
title: IdentityAllocator
description: Owns the persistent-to-runtime identity map for one isolated runtime session.
uid: api.core-identity.identityallocator
kind: api
owners:
  - Inno.Core.Identity
apiSurface: source-clr
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
---
# IdentityAllocator

Owns the persistent-to-runtime identity map for one isolated runtime session.

**Namespace:** `Inno.Core.Identity`  
**Project:** [Inno.Core.Identity](../../projects/inno-core-identity.md)  
**Surface:** Evaluated CLR source, Debug configuration. Script-projection availability requires its own manifest.

## Type declaration

<a id="api-f78dd27950048801"></a>
<!-- api: T:Inno.Core.Identity.IdentityAllocator 71eac4e4b19542242c806a9417adabf4f50c3ddd07584cf3b315a39136443e6c -->

```csharp
public sealed class Inno.Core.Identity.IdentityAllocator
```

**Base type:** `object`.

[Register and release an identity object](../../../manual/register-identity.md) shows the owner and lifetime sequence. Read the [shared lifecycle and failure contracts](../../projects/inno-core-identity.md#lifecycle-and-failure-contracts) before using these members.

## Members

| Member | Kind |
| --- | --- |
| [`IdentityAllocator`](#api-fb1a4cbd6bf3937e) | Method |
| [`hasCurrent`](#api-d8de76ab90605d01) | Property |
| [`current`](#api-1ce87a44000ebb99) | Property |
| [`count`](#api-17b69b81370f7a3e) | Property |
| [`domainId`](#api-bd2f6bcd3e638afc) | Property |
| [`ObjectUnregistered`](#api-832408f50987af75) | Event |
| [`EnterScope`](#api-6f5a0a8b6a323668) | Method |
| [`Register(IdentityObject,Guid?)`](#api-9bfe47e598e6ac94) | Method |
| [`InitializePersistentIdentity(IdentityObject,Guid)`](#api-d528fbadbd0d8873) | Method |
| [`Unregister(IdentityObject)`](#api-9ac6b3624b129f7c) | Method |
| [`Get<TIdentity>(int)`](#api-05ce7a7720d9674e) | Method |
| [`Get<TIdentity>(RuntimeIdentity)`](#api-9fb0cfdc2ff030dc) | Method |
| [`Get<TIdentity>(Guid)`](#api-d4f47120ddfd836e) | Method |

## `IdentityAllocator`

<a id="api-fb1a4cbd6bf3937e"></a>
<!-- api: M:Inno.Core.Identity.IdentityAllocator.#ctor ba67a1be3b834d56934b6a4262f7b6a8967e36126a0830d0a6208fa56f3f6bd5 -->

```csharp
public Inno.Core.Identity.IdentityAllocator.IdentityAllocator()
```

Creates an isolated runtime identity domain.

**Throws `System.InvalidOperationException`:** Thrown if the process exhausts the available identity-domain values.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L24).

## `hasCurrent`

<a id="api-d8de76ab90605d01"></a>
<!-- api: P:Inno.Core.Identity.IdentityAllocator.hasCurrent 5556b93f4568c5a362440b07d900be1550f9eca1664277a4d8210ce333a5fa7e -->

```csharp
public static bool Inno.Core.Identity.IdentityAllocator.hasCurrent { get; }
```

Gets whether the current asynchronous execution context is bound to an allocator.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L36).

## `current`

<a id="api-1ce87a44000ebb99"></a>
<!-- api: P:Inno.Core.Identity.IdentityAllocator.current b58f0bc971a5390e04ad99eea9076166161fbdc23b9707ec9d563d229cd1be39 -->

```csharp
public static Inno.Core.Identity.IdentityAllocator Inno.Core.Identity.IdentityAllocator.current { get; }
```

Gets the allocator bound to the current asynchronous execution context.

**Throws `System.InvalidOperationException`:** Thrown when the caller is outside a runtime session execution scope.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L44).

## `count`

<a id="api-17b69b81370f7a3e"></a>
<!-- api: P:Inno.Core.Identity.IdentityAllocator.count 0530fe54d82648977af79947067ef72b698cb34eb2a70e789da5acebe96f2baf -->

```csharp
public int Inno.Core.Identity.IdentityAllocator.count { get; }
```

Gets the number of currently registered identity entries.

**Constraints:** Registry entries are weak. An entry whose object has been collected may remain counted until a lookup or registration observes and removes it. This property is not a strong-reference count or a liveness test.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L53).

## `domainId`

<a id="api-bd2f6bcd3e638afc"></a>
<!-- api: P:Inno.Core.Identity.IdentityAllocator.domainId 35c9fbc45a2cc2cb0c7a32f34ccf1ae050385c68be62716d4ee85e92c1729735 -->

```csharp
public Inno.Core.Identity.IdentityDomainId Inno.Core.Identity.IdentityAllocator.domainId { get; }
```

Gets the process-unique domain that qualifies every runtime identity allocated here.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L58).

## `ObjectUnregistered`

<a id="api-832408f50987af75"></a>
<!-- api: E:Inno.Core.Identity.IdentityAllocator.ObjectUnregistered 4d1da146e134d923faa1829c9592eb944bde2ce5cbc31f4b42a89a0b9aba1b54 -->

```csharp
public System.Action<Inno.Core.Identity.IdentityObject>? Inno.Core.Identity.IdentityAllocator.ObjectUnregistered
```

Occurs after an object has been permanently removed from this allocator.

**Constraints:** Every observer is invoked. Multiple observer failures are reported as one `System.AggregateException` after notification completes.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L67).

## `EnterScope`

<a id="api-6f5a0a8b6a323668"></a>
<!-- api: M:Inno.Core.Identity.IdentityAllocator.EnterScope 58ab0cd9fba870b0119a9802e0be854b38052b25e11104869ba9f58baea89a39 -->

```csharp
public System.IDisposable Inno.Core.Identity.IdentityAllocator.EnterScope()
```

Binds this allocator to the current asynchronous execution context until the returned scope is disposed.

**Returns:** A strict last-in-first-out scope owned by the caller.

**Throws `System.InvalidOperationException`:** Thrown when scopes are disposed out of order.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L78).

## `Register(IdentityObject,Guid?)`

<a id="api-9bfe47e598e6ac94"></a>
<!-- api: M:Inno.Core.Identity.IdentityAllocator.Register(Inno.Core.Identity.IdentityObject,System.Nullable{System.Guid}) eda085c2ab82320e1e7b63e9c717656d1f24828de8da489b0ab3826e4bce54d7 -->

```csharp
public bool Inno.Core.Identity.IdentityAllocator.Register(Inno.Core.Identity.IdentityObject obj, System.Guid? persistentId = null)
```

Registers an object and assigns its session-local runtime identity.

**Parameter `obj`:** The identity object owned by this runtime session.

**Parameter `persistentId`:** An optional persistent identity override. When omitted, the object's existing persistent identity is retained. An empty resolved identity is replaced with a newly generated identity.

**Returns:** `true` when the object was newly registered; otherwise, `false`.

**Throws `System.ArgumentNullException`:** Thrown when `obj` is null.

**Throws `System.InvalidOperationException`:** Thrown when a different live object is already registered with the resolved persistent identity.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L102).

## `InitializePersistentIdentity(IdentityObject,Guid)`

<a id="api-d528fbadbd0d8873"></a>
<!-- api: M:Inno.Core.Identity.IdentityAllocator.InitializePersistentIdentity(Inno.Core.Identity.IdentityObject,System.Guid) 1cff89322d4a7d5a7d0f0dd728cf7899ccb05357127b5701c5b91edc0f625b73 -->

```csharp
public void Inno.Core.Identity.IdentityAllocator.InitializePersistentIdentity(Inno.Core.Identity.IdentityObject obj, System.Guid persistentId)
```

Assigns a persistent identity to a detached object without allocating a runtime identity.

**Parameter `obj`:** The detached identity object to initialize.

**Parameter `persistentId`:** The non-empty persistent identity to assign.

**Throws `System.ArgumentNullException`:** Thrown when `obj` is null.

**Throws `System.ArgumentException`:** Thrown when `persistentId` is empty.

**Throws `System.InvalidOperationException`:** Thrown when the object already has a live runtime identity.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L125).

## `Unregister(IdentityObject)`

<a id="api-9ac6b3624b129f7c"></a>
<!-- api: M:Inno.Core.Identity.IdentityAllocator.Unregister(Inno.Core.Identity.IdentityObject) ca348d607b0388fbaa0feea1025465265e11dcaab8cdbb383e1fb7a7a4226622 -->

```csharp
public bool Inno.Core.Identity.IdentityAllocator.Unregister(Inno.Core.Identity.IdentityObject obj)
```

Removes an object from this session and notifies every unregistration observer.

**Parameter `obj`:** The identity object to remove.

**Returns:** `true` when the object was registered; otherwise, `false`.

**Throws `System.AggregateException`:** Thrown after removal when one or more observers fail.

**Throws `System.ArgumentNullException`:** Thrown when `obj` is null.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L152).

## `Get<TIdentity>(int)`

<a id="api-05ce7a7720d9674e"></a>
<!-- api: M:Inno.Core.Identity.IdentityAllocator.Get``1(System.Int32) b8d359ab7db5c4b32da7d4a22f128c7dfac97b6381b8b70e6de0584ad07bd6f0 -->

```csharp
public TIdentity? Inno.Core.Identity.IdentityAllocator.Get<TIdentity>(int runtimeId) where TIdentity : Inno.Core.Identity.IdentityObject
```

Resolves a registered object by its session-local runtime identity.

**Type parameter `TIdentity`:** The required identity object contract.

**Parameter `runtimeId`:** The packed runtime identity allocated by this instance.

**Returns:** The live compatible object, or `null` when no matching object exists.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L190).

## `Get<TIdentity>(RuntimeIdentity)`

<a id="api-9fb0cfdc2ff030dc"></a>
<!-- api: M:Inno.Core.Identity.IdentityAllocator.Get``1(Inno.Core.Identity.RuntimeIdentity) b5350b9c92820a6bcf89571e274bea0e2ee4512b6c545695a10c7279396800d2 -->

```csharp
public TIdentity? Inno.Core.Identity.IdentityAllocator.Get<TIdentity>(Inno.Core.Identity.RuntimeIdentity identity) where TIdentity : Inno.Core.Identity.IdentityObject
```

Resolves a domain-qualified runtime identity without allowing cross-session aliasing.

**Type parameter `TIdentity`:** The required identity object contract.

**Parameter `identity`:** The transient identity containing both its owner domain and runtime identifier.

**Returns:** The live compatible object, or `null` when the domain, generation, or type does not match.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L206).

## `Get<TIdentity>(Guid)`

<a id="api-d4f47120ddfd836e"></a>
<!-- api: M:Inno.Core.Identity.IdentityAllocator.Get``1(System.Guid) 4c859c635a73b32d88a1d7813be59c370b206864b6be25f9e0f1d3a38291b684 -->

```csharp
public TIdentity? Inno.Core.Identity.IdentityAllocator.Get<TIdentity>(System.Guid persistentId) where TIdentity : Inno.Core.Identity.IdentityObject
```

Resolves a registered object by its persistent identity.

**Type parameter `TIdentity`:** The required identity object contract.

**Parameter `persistentId`:** The non-empty persistent identity to resolve.

**Returns:** The live compatible object, or `null` when no matching object exists.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/foundation/core/Inno.Core.Identity/IdentityAllocator.cs#L224).