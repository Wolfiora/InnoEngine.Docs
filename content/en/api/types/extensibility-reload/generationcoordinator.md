---
title: "GenerationCoordinator"
description: "Reference for GenerationCoordinator in Inno.Extensibility.Reload."
uid: api.inno.extensibility.reload.7dea96ba0ecafdeb
kind: api
owners:
  - Inno.Extensibility.Reload
apiSurface: source-clr
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# `GenerationCoordinator`

This reference describes `GenerationCoordinator` in `Inno.Extensibility.Reload`. Read the [shared contract](../../projects/inno-extensibility-reload.md#shared-admission-and-retirement-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c67f1a6086d8a5d0) | Method |
| [`AcquireOperation`](#api-7d69a2b465f7f97b) | Method |
| [`AcquireRead`](#api-f9eb1d3fa3f25ef5) | Method |
| [`Advance`](#api-e7b4be4d75c839ab) | Method |
| [`Configure`](#api-871e140e2395e87a) | Method |
| [`EnsureReady`](#api-d3dc56bd93ca57b8) | Method |
| [`EnsureRetirementSafe`](#api-57e05dfa78bacf43) | Method |
| [```Execute``1```](#api-dd8e02ceec182a3f) | Method |
| [`Fault`](#api-b5c0bb41b0d76a4d) | Method |
| [`TrackRetirement`](#api-2ac042bb045e344d) | Method |
| [`TryAcquireChange`](#api-4d4523ad98b3a4cc) | Method |
| [`Wait`](#api-6d7734fc5cc219bc) | Method |
| [`failure`](#api-efc9e6984c661eee) | Property |
| [`state`](#api-97c2110b10aa02cf) | Property |

## Type declaration

<a id="api-7dea96ba0ecafdeb"></a>
<!-- api: T:Inno.Extensibility.Reload.GenerationCoordinator 63838bf75a84203aaa32e2b1dfd863ed6cfdb38f4e8d998ddcf009bdd088f261 -->

```csharp
public sealed class Inno.Extensibility.Reload.GenerationCoordinator
```

Owns generation admission, atomic domain changes, rollback, and non-bypassable weak unload verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L13).

## `#ctor`

<a id="api-c67f1a6086d8a5d0"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.#ctor 1cdab85c0b19fd0be224bc2ae1f80e43c52fad71c33bc6150288193ec3bd05d1 -->

```csharp
public Inno.Extensibility.Reload.GenerationCoordinator.GenerationCoordinator()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L13).

## `AcquireOperation`

<a id="api-7d69a2b465f7f97b"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.AcquireOperation(System.String) cf2b5abc863e823ff2442cb4017172d404b5280d7ced594067ab06322a9689bc -->

```csharp
public System.IDisposable Inno.Extensibility.Reload.GenerationCoordinator.AcquireOperation(string operation)
```

Keeps one synchronous operation on the published generation and defers automatic catalog replacement.

**Parameter `operation`:** The operation name included in admission failures.

**Returns:** A scope for the entire operation, or a borrowed scope inside publication on its own control thread.

**Constraints:** Published data remains readable while old contexts await collection. This scope does not authorize Play,
Build, Export or a new generation transaction; those owners must still use their strict admission boundary.

**Throws `System.InvalidOperationException`:** Another thread is publishing or the owner is Faulted.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Retirement has failed without releasing its dependent owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L143).

## `AcquireRead`

<a id="api-f9eb1d3fa3f25ef5"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.AcquireRead(System.String) 01db83a55243d9b33f4bda5c536755b8d34f771309a617f8289fc9b028338f4f -->

```csharp
public System.IDisposable Inno.Extensibility.Reload.GenerationCoordinator.AcquireRead(string operation)
```

Pins generation admission for a Build or Export operation, including asynchronous snapshot consumers.

**Parameter `operation`:** The diagnostic operation name.

**Returns:** A lease that must be disposed after every snapshot and asynchronous consumer has retired.

**Throws `System.InvalidOperationException`:** Admission is blocked by another operation or a retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L110).

## `Advance`

<a id="api-e7b4be4d75c839ab"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.Advance 5a2bea7abe29b545b153327626787a708eb9fe930614a5c08c7879cb7b3903df -->

```csharp
public bool Inno.Extensibility.Reload.GenerationCoordinator.Advance()
```

Runs a due Full GC/finalizer/Full GC cycle only after candidate stack frames have unwound.

**Returns:** True only when every tracked context is unreachable and admission is ready.

**Throws `System.InvalidOperationException`:** The gate is terminally Faulted.

**Throws `Inno.Extensibility.Reload.AssemblyUnloadException`:** A retained context exceeded the configured deadline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L341).

## `Configure`

<a id="api-871e140e2395e87a"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.Configure(Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions) 12f73ae39ce45a2232d9e2d5d5ba3cac6f3aa5b65998369c0a4cc400f8592cce -->

```csharp
public void Inno.Extensibility.Reload.GenerationCoordinator.Configure(Inno.Extensibility.Reload.AssemblyUnloadBarrierOptions options)
```

Configures collection cadence before beginning a generation or retirement.

**Parameter `options`:** The collection and retention policy, copied by the coordinator.

**Throws `System.InvalidOperationException`:** The gate is not ready.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L60).

## `EnsureReady`

<a id="api-d3dc56bd93ca57b8"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.EnsureReady(System.String) f5868a6f365ade513fc2ecd60cd3cbf46a0a6b7aaf18ef4855825af14d41d6d5 -->

```csharp
public void Inno.Extensibility.Reload.GenerationCoordinator.EnsureReady(string operation)
```

Rejects work while a candidate, retained context or terminal failure is pending.

**Parameter `operation`:** The caller's operation name included in rejection diagnostics.

**Throws `System.InvalidOperationException`:** Admission is blocked or the host requires restart.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L82).

## `EnsureRetirementSafe`

<a id="api-57e05dfa78bacf43"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.EnsureRetirementSafe 19836f5581e5ec4ebd3e1f1fe0eda8b17c2d751a313d53b0173bd7cf58f3d656 -->

```csharp
public void Inno.Extensibility.Reload.GenerationCoordinator.EnsureRetirementSafe()
```

Rejects dependency destruction after a generation owner reported unfinished retirement.

**Constraints:** Ordinary terminal cleanup failures do not prevent remaining cleanup. Unfinished retirement remains
blocking even if an earlier ordinary error is the primary diagnostic failure.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A failed generation still owns live work; its dependencies must remain owned until host restart.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L431).

## ```Execute``1```

<a id="api-dd8e02ceec182a3f"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.Execute``1(System.String,Inno.Extensibility.Reload.IGenerationPublication{``0},System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Reload.IGenerationChange}) 3e7e665ecdee47a9ceff86820321b5b969f26770e6e1f3b3990da3f2fb486ce3 -->

```csharp
public TProbe Inno.Extensibility.Reload.GenerationCoordinator.Execute<TProbe>(string operation, Inno.Extensibility.Reload.IGenerationPublication<TProbe> publication, System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Reload.IGenerationChange> changes) where TProbe : Inno.Extensibility.Reload.IAssemblyUnloadProbe
```

Activates one publication and its captured domain changes, preserving all rollback and cleanup failures.

**Type parameter `TProbe`:** The publication's weak unload monitor.

**Parameter `operation`:** A stable diagnostic name for the generation operation.

**Parameter `publication`:** The prepared candidate publication.

**Parameter `changes`:** Captured domain changes in deterministic dependency order.

**Returns:** The retirement monitor; admission remains blocked until all monitors pass verification.

**Throws `System.AggregateException`:** An irreversible cleanup or rollback stage failed and the gate is Faulted.

**Throws `System.InvalidOperationException`:** Another generation or retirement is pending.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L239).

## `Fault`

<a id="api-b5c0bb41b0d76a4d"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.Fault(System.Exception) 265388b9727b7b5dcde2019c9646d7a7b155a736a15cdd0256dbaa63059c638a -->

```csharp
public void Inno.Extensibility.Reload.GenerationCoordinator.Fault(System.Exception exception)
```

Permanently closes admission when an owner cannot safely retire or restore generation state.

**Parameter `exception`:** The cleanup or rollback failure retained for diagnostics until the host restarts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L410).

## `TrackRetirement`

<a id="api-2ac042bb045e344d"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.TrackRetirement(Inno.Extensibility.Reload.IAssemblyUnloadProbe) f3bd8037d45da640ef8f3ccdab28b03bdc62cd7af8b0cd944e2137d38ac94d5e -->

```csharp
public void Inno.Extensibility.Reload.GenerationCoordinator.TrackRetirement(Inno.Extensibility.Reload.IAssemblyUnloadProbe probe)
```

Registers every retired or discarded context without dropping already pending monitors.

**Parameter `probe`:** A stable engine-owned weak monitor that must not retain the collectible context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L202).

## `TryAcquireChange`

<a id="api-4d4523ad98b3a4cc"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.TryAcquireChange(System.String,System.IDisposable@) 4e09a5aaec08660a2804c4949e8496f6198278835eee9d7a2e8e339616445c49 -->

```csharp
public bool Inno.Extensibility.Reload.GenerationCoordinator.TryAcquireChange(string operation, out System.IDisposable? reservation)
```

Tries to reserve exclusive owner-controlled publication without disturbing active read leases.

**Parameter `operation`:** The operation name used when a terminal failure rejects admission.

**Parameter `reservation`:** Receives the exclusive reservation, or null when the caller must defer mutation.

**Returns:** True only when no reader, generation change or retirement is active.

**Throws `System.InvalidOperationException`:** The generation owner is Faulted and requires a host restart.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L177).

## `Wait`

<a id="api-6d7734fc5cc219bc"></a>
<!-- api: M:Inno.Extensibility.Reload.GenerationCoordinator.Wait(System.Threading.CancellationToken) 48c50e87f720161b2b17eea9b5f860a82c638899c73c3acd3a42478bdc44f452 -->

```csharp
public void Inno.Extensibility.Reload.GenerationCoordinator.Wait(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Waits for all retirements while preserving pending monitors on cancellation or failure.

**Parameter `cancellationToken`:** Cancellation for the wait, not permission to resume generation changes.

**Throws `System.OperationCanceledException`:** The caller canceled before retirement completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L395).

## `failure`

<a id="api-efc9e6984c661eee"></a>
<!-- api: P:Inno.Extensibility.Reload.GenerationCoordinator.failure 5c3ff66b7353b250300f634c2038a627b73fe63eb1628f5bcb8fc275bb86beab -->

```csharp
public System.Exception? Inno.Extensibility.Reload.GenerationCoordinator.failure { get; }
```

Gets the terminal failure, retained until the entire host is discarded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L42).

## `state`

<a id="api-97c2110b10aa02cf"></a>
<!-- api: P:Inno.Extensibility.Reload.GenerationCoordinator.state ef9d3c19ddb150253f1a3ed6e35f051de5327d2bcc257ba369921ed2ee2bb5be -->

```csharp
public Inno.Extensibility.Reload.GenerationState Inno.Extensibility.Reload.GenerationCoordinator.state { get; }
```

Gets the gate state shared by reload, Play, Build and Export owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Reload/GenerationCoordinator.cs#L30).
