---
title: "TypeRegistry`1"
description: "Reference for TypeRegistry`1 in Inno.Extensibility.Types."
uid: api.inno.extensibility.types.cc29493ab20a2809
kind: api
owners:
  - Inno.Extensibility.Types
apiSurface: source-clr
contracts:
  - project.inno-extensibility-types
---
# ``TypeRegistry`1``

This reference describes ``TypeRegistry`1`` in `Inno.Extensibility.Types`. Read the [shared contract](../../projects/inno-extensibility-types.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9aa0793281fd1399) | Method |
| [`Build`](#api-33575575ba6083ff) | Method |
| [`Clear`](#api-c90d6912d59861e3) | Method |
| [```CreateExtension``1```](#api-86ad2ba4adf04653) | Method |
| [`Dispose`](#api-7bd1676c54d2dae5) | Method |
| [`DisposeExtensions`](#api-2137b172918345b0) | Method |
| [`DisposeSnapshot`](#api-9b52ceb59af66d67) | Method |
| [`OnActivating`](#api-31e3b00f8f21dbb5) | Method |
| [`OnActivationCompleted`](#api-2b3dcfb4ecbbafc6) | Method |
| [`OnActivationRolledBack`](#api-6cad800e107503da) | Method |
| [`OnCleanupFailed`](#api-63a10a9df7d4a8c6) | Method |
| [```OwnCandidateExtension``1```](#api-73a18f735b8b452c) | Method |
| [`Refresh`](#api-08a498c559d9871a) | Method |
| [`ReportRetirementFailure`](#api-1f4f75df6685fe62) | Method |
| [`RetireResource`](#api-a674743724d826f4) | Method |
| [`current`](#api-f5178efc052d31b5) | Property |
| [`isInitialized`](#api-6e337e4c6e4f9d61) | Property |

## Type declaration

<a id="api-cc29493ab20a2809"></a>
<!-- api: T:Inno.Extensibility.Types.TypeRegistry`1 5827a0c8da88f00591676b5a5c7a1cd2932b6e86011bf665faebb6b0dbdf83cb -->

```csharp
public abstract class Inno.Extensibility.Types.TypeRegistry<TSnapshot> where TSnapshot : class : System.IDisposable
```

Builds immutable extension registries from versioned type-cache snapshots.

**Type parameter `TSnapshot`:** The immutable registry snapshot type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L16).

## `#ctor`

<a id="api-9aa0793281fd1399"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.#ctor(Inno.Extensibility.Types.TypeCatalog,System.Nullable{System.TimeSpan}) f3b1d6f4af36071ff74c0986dfbfce36b6202406695e783f787cdc0a1c4d9276 -->

```csharp
protected Inno.Extensibility.Types.TypeRegistry<TSnapshot>.TypeRegistry(Inno.Extensibility.Types.TypeCatalog types, System.TimeSpan? retirementTimeout = null)
```

Creates and registers a refreshable type registry.

**Parameter `types`:** The type catalog that coordinates this registry's candidate generations.

**Parameter `retirementTimeout`:** The positive owner-thread drain deadline; omitted values use thirty seconds.

**Throws `System.ArgumentNullException`:** Thrown when `types` is null.

**Throws `System.ArgumentOutOfRangeException`:** The retirement timeout is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L49).

## `Build`

<a id="api-33575575ba6083ff"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.Build(Inno.Extensibility.Types.TypeCacheSnapshot) 9aa532cc3b8733c94ed36e9f8124f58fe488e365166c08217b93101bf021e2a3 -->

```csharp
protected abstract TSnapshot Inno.Extensibility.Types.TypeRegistry<TSnapshot>.Build(Inno.Extensibility.Types.TypeCacheSnapshot types)
```

Builds a complete candidate registry without changing the active snapshot.

**Parameter `types`:** The candidate type-cache snapshot.

**Returns:** The complete immutable registry snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L231).

## `Clear`

<a id="api-c90d6912d59861e3"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.Clear a1e7323855ec484b00cc518e620b7a5179e14ec7d3eab5e931e8a11be12ac6ad -->

```csharp
public void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.Clear()
```

Releases the active snapshot while keeping the registry reusable.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Generation work could not retire safely. The snapshot remains owned and this registry cannot be reused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L130).

## ```CreateExtension``1```

<a id="api-86ad2ba4adf04653"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.CreateExtension``1(System.Type) c6077305c96ba2c8d39b430c868d9a099af6f7ae6342a0931d65ddbbc843d58d -->

```csharp
protected TExtension Inno.Extensibility.Types.TypeRegistry<TSnapshot>.CreateExtension<TExtension>(System.Type type)
```

Creates a validated extension instance using a parameterless constructor.

**Type parameter `TExtension`:** The required extension contract.

**Parameter `type`:** The concrete implementation type.

**Returns:** A newly created extension, retained for rollback until the complete candidate snapshot takes ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L349).

## `Dispose`

<a id="api-7bd1676c54d2dae5"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.Dispose c83f949e862621176f62f38ca1cc414907a1c0f4bf8be1fac6475373d1fccb9b -->

```csharp
public void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.Dispose()
```

Releases the current registry snapshot.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Live generation work remains; repeated disposal cannot bypass its retained ownership barrier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L169).

## `DisposeExtensions`

<a id="api-2137b172918345b0"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.DisposeExtensions(System.Collections.Generic.IEnumerable{System.Object}) 790d779a2e9e4bdc02ad33bb62cde73abafcda370dd17a7290e83a711619dadc -->

```csharp
protected void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.DisposeExtensions(System.Collections.Generic.IEnumerable<object> extensions)
```

Retires distinct disposable extensions in reverse order, draining pending work before lower dependencies.

**Parameter `extensions`:** Instances whose ownership has ended; duplicate references are disposed once.

**Throws `System.AggregateException`:** One or more instances failed retirement after all remaining instances were attempted.

**Throws `Inno.Core.Execution.RetirementTimeoutException`:** An instance did not drain. The registry retains the batch and faults its shared generation gate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L408).

## `DisposeSnapshot`

<a id="api-9b52ceb59af66d67"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.DisposeSnapshot(`0) f066143feb8264a71606a62a0043791baae8eaee8cc1e768f2f77399daf00e2f -->

```csharp
protected virtual void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.DisposeSnapshot(TSnapshot snapshot)
```

Releases resources owned by a registry snapshot.

**Parameter `snapshot`:** The snapshot that is no longer active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L296).

## `OnActivating`

<a id="api-31e3b00f8f21dbb5"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.OnActivating(`0,`0) 3d4282679a026d267f2faad104e47f06868701657b991875fdd44192f9cf723c -->

```csharp
protected virtual void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.OnActivating(TSnapshot? previous, TSnapshot candidate)
```

Reversibly activates a complete candidate while the previous snapshot remains available.

**Parameter `previous`:** The previous active snapshot, or `null` during initial activation.

**Parameter `candidate`:** The candidate exposed through ``Inno.Extensibility.Types.TypeRegistry`1.current`` during this callback.

**Constraints:** Implementations may perform fallible lifecycle work here. They must keep enough local state for
``Inno.Extensibility.Types.TypeRegistry`1.OnActivationRolledBack(`0,`0)`` to reverse every completed step.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L246).

## `OnActivationCompleted`

<a id="api-2b3dcfb4ecbbafc6"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.OnActivationCompleted(`0,`0) 1842809605fca1eb2eb48402201072dc307b9ad0d4a8949695f231de5facd74e -->

```csharp
protected virtual void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.OnActivationCompleted(TSnapshot? previous, TSnapshot currentSnapshot)
```

Finalizes a successfully activated candidate after every coordinated registry has activated.

**Parameter `previous`:** The previous snapshot that is about to be released, or `null`.

**Parameter `currentSnapshot`:** The committed active snapshot.

**Constraints:** This is a cleanup-only phase and must not perform fallible publication work. Exceptions are reported
through ``Inno.Extensibility.Types.TypeRegistry`1.OnCleanupFailed(System.String,System.Exception)`` and cannot cause the completed activation to roll back.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L284).

## `OnActivationRolledBack`

<a id="api-6cad800e107503da"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.OnActivationRolledBack(`0,`0) 95b0dfed83b7f63f997ea1c681426fc2f7aad41af0ce27723bc6e7d94595b59f -->

```csharp
protected virtual void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.OnActivationRolledBack(TSnapshot? previous, TSnapshot candidate)
```

Reverses lifecycle work performed while activating a candidate snapshot.

**Parameter `previous`:** The restored active snapshot, or `null` when none existed.

**Parameter `candidate`:** The rejected candidate snapshot.

**Constraints:** Ordinary failures are reported through ``Inno.Extensibility.Types.TypeRegistry`1.OnCleanupFailed(System.String,System.Exception)`` and aggregated across registries.
Unfinished retirement retains dependencies and stops further rollback until the host is restarted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L265).

## `OnCleanupFailed`

<a id="api-63a10a9df7d4a8c6"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.OnCleanupFailed(System.String,System.Exception) c545d0b6794fec6a38919e67232256511ac277e4a2fe79506b0d51cbeeb8c614 -->

```csharp
protected virtual void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.OnCleanupFailed(string phase, System.Exception exception)
```

Reports an exception raised while rolling back activation, completing activation, or
releasing a snapshot.

**Parameter `phase`:** The non-transactional phase that raised the exception.

**Parameter `exception`:** The cleanup exception.

**Constraints:** This callback is diagnostic only. Exceptions raised by an override are ignored so cleanup can continue.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L315).

## ```OwnCandidateExtension``1```

<a id="api-73a18f735b8b452c"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.OwnCandidateExtension``1(``0) 898de4422eca6c97fe998a635271c3983dbb1ca3971e5a46a9c3620fd01843a2 -->

```csharp
protected TExtension Inno.Extensibility.Types.TypeRegistry<TSnapshot>.OwnCandidateExtension<TExtension>(TExtension extension)
```

Adds a newly constructed extension to the current build's rollback ownership before further validation.

**Type parameter `TExtension`:** The newly constructed extension contract.

**Parameter `extension`:** A new instance, never an instance borrowed from the active snapshot.

**Returns:** The same instance. After a successful build its containing snapshot must own its retirement.

**Throws `System.InvalidOperationException`:** This method is called outside synchronous candidate construction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L386).

## `Refresh`

<a id="api-08a498c559d9871a"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.Refresh 489139a516bb16969402998053b461597fabcec770b068a3dbd41bc570d06da8 -->

```csharp
public void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.Refresh()
```

Refreshes this registry from the currently active type snapshot.

**Constraints:** Each refresh iteration is a complete transaction. If the active type snapshot changes during
activation, convergence runs as a separate transaction after the completed transaction returns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L81).

## `ReportRetirementFailure`

<a id="api-1f4f75df6685fe62"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.ReportRetirementFailure(System.Exception) 19a37c2f9ed21e454a39bb7879fd0443b36a534158f5161d446a399f614e6705 -->

```csharp
protected void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.ReportRetirementFailure(System.Exception exception)
```

Faults the shared generation gate when a resource composed from this registry cannot retire safely.

**Parameter `exception`:** The retirement or compensation failure; this notification never makes publication reversible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L331).

## `RetireResource`

<a id="api-a674743724d826f4"></a>
<!-- api: M:Inno.Extensibility.Types.TypeRegistry`1.RetireResource(System.String,System.Action) 5e5862379a91b84ae1498665684dee18012f6c1bad676391d2610145becaa3d3 -->

```csharp
protected void Inno.Extensibility.Types.TypeRegistry<TSnapshot>.RetireResource(string owner, System.Action retire)
```

Drains one retryable lifecycle operation at the control-thread safe point before releasing dependencies.

**Parameter `owner`:** The resource or extension identifier included in deadline diagnostics.

**Parameter `retire`:** The retirement operation, including owner-thread completion pumping when required.

**Throws `Inno.Core.Execution.RetirementTimeoutException`:** The operation exceeded its deadline. Its closure stays owned and further retirement or refresh is blocked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L429).

## `current`

<a id="api-f5178efc052d31b5"></a>
<!-- api: P:Inno.Extensibility.Types.TypeRegistry`1.current 4ae0b890aed00669600dbda6f8054611d803d5811ce4266bbb7b6f86254a75a7 -->

```csharp
protected TSnapshot Inno.Extensibility.Types.TypeRegistry<TSnapshot>.current { get; }
```

Gets the current snapshot, refreshing it when the type catalog changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L204).

## `isInitialized`

<a id="api-6e337e4c6e4f9d61"></a>
<!-- api: P:Inno.Extensibility.Types.TypeRegistry`1.isInitialized 9e37c0908ba2efb4fb98303d610c6866efe1026ad2be0f5179ff2d1987328d44 -->

```csharp
public bool Inno.Extensibility.Types.TypeRegistry<TSnapshot>.isInitialized { get; }
```

Gets whether the registry has built its first snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Types/TypeRegistry.cs#L65).
