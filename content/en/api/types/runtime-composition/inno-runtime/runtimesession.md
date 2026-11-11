---
title: "RuntimeSession"
description: "Reference for RuntimeSession in Inno.Runtime."
uid: api.inno.runtime.e413326fc8cd828f
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `RuntimeSession`

This reference describes `RuntimeSession` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-79a4935802ccf59e) | Method |
| [`EnterExecutionScope`](#api-e5d606b73ceba010) | Method |
| [`StopCoroutines`](#api-7db9f85302f443cd) | Method |
| [`Tick`](#api-38412f8fde2655df) | Method |
| [`assets`](#api-840040aae9596476) | Property |
| [`events`](#api-f98a36b2ab875d1b) | Property |
| [`identities`](#api-8c2769cd03e67acc) | Property |
| [`isPaused`](#api-e5f3399229993f58) | Property |
| [`options`](#api-58a022ad38a092d9) | Property |
| [`references`](#api-7dae707facad8f64) | Property |
| [`scenes`](#api-7b3383ce85b1bf26) | Property |
| [`sessionId`](#api-aaf89f39b1478f29) | Property |
| [`subsystems`](#api-ba9340270ae16b56) | Property |
| [`timeScale`](#api-2175ebc7a85c836e) | Property |

## Type declaration

<a id="api-e413326fc8cd828f"></a>
<!-- api: T:Inno.Runtime.RuntimeSession de79fe40996887a0f22057241ec1b26e8116207bf7aaf1a990694250f72d45f6 -->

```csharp
public sealed class Inno.Runtime.RuntimeSession : System.IDisposable
```

Owns all mutable simulation, identity, asset, scheduling, and logging state for one isolated execution session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L22).

## `Dispose`

<a id="api-79a4935802ccf59e"></a>
<!-- api: M:Inno.Runtime.RuntimeSession.Dispose f0772fb34283ba17c2ad175020f0928c61ba26c8092b1a50b942a72ce9fbcc4c -->

```csharp
public void Inno.Runtime.RuntimeSession.Dispose()
```

Releases scene, asset, scheduling, serialization, and logging ownership for this session.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Session work has not drained or a shared generation still owns live dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L299).

## `EnterExecutionScope`

<a id="api-e5d606b73ceba010"></a>
<!-- api: M:Inno.Runtime.RuntimeSession.EnterExecutionScope 3e2d086a7cf1398aaa883710fd43e338bf79dc4c378e72a4c19853dde9e5cf6a -->

```csharp
public System.IDisposable Inno.Runtime.RuntimeSession.EnterExecutionScope()
```

Binds this session's script façades to the current asynchronous execution context.

**Returns:** A strict last-in-first-out scope owned by the caller.

**Throws `System.ObjectDisposedException`:** Thrown when this session has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L181).

## `StopCoroutines`

<a id="api-7db9f85302f443cd"></a>
<!-- api: M:Inno.Runtime.RuntimeSession.StopCoroutines(System.Object) ab40e74514720828bfca1f1b1bdaee8ddb03ddfaa59ce301213c9800a9abb198 -->

```csharp
public void Inno.Runtime.RuntimeSession.StopCoroutines(object owner)
```

Stops every coroutine owned by a runtime object before that object is retired by an atomic reload.

**Parameter `owner`:** The exact owner identity supplied when its coroutines were started.

**Throws `System.ArgumentNullException`:** Thrown when `owner` is null.

**Throws `System.ObjectDisposedException`:** Thrown when this session has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L286).

## `Tick`

<a id="api-38412f8fde2655df"></a>
<!-- api: M:Inno.Runtime.RuntimeSession.Tick(System.Single) fde6690443341a7c5a6aa6a558774093ddd9735feb87e97b3c3e4d9fabbbf3c1 -->

```csharp
public void Inno.Runtime.RuntimeSession.Tick(float deltaTime)
```

Advances session events, jobs, coroutines, and scene lifecycle by one frame.

**Parameter `deltaTime`:** The elapsed frame time in seconds; negative values are treated as zero.

**Throws `System.ObjectDisposedException`:** Thrown when this session has been disposed.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A faulted generation still owns live dependencies and cannot execute another frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L216).

## `assets`

<a id="api-840040aae9596476"></a>
<!-- api: P:Inno.Runtime.RuntimeSession.assets bdf1f755b8d22d6fccfd16ea424a73bdc890b28d500c212a72a005a073b1207f -->

```csharp
public Inno.Assets.AssetDatabase Inno.Runtime.RuntimeSession.assets { get; }
```

Gets the source-free runtime asset database configured for this session.

**Throws `System.InvalidOperationException`:** Thrown when this Edit or Play session was composed without a runtime content deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L168).

## `events`

<a id="api-f98a36b2ab875d1b"></a>
<!-- api: P:Inno.Runtime.RuntimeSession.events afbaeda4b88a318f0270b49692268b4e46a67d2a79b71bdc3e3dcc8941d0dd5c -->

```csharp
public Inno.Core.Events.EventDispatcher Inno.Runtime.RuntimeSession.events { get; }
```

Gets the event dispatcher owned by this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L118).

## `identities`

<a id="api-8c2769cd03e67acc"></a>
<!-- api: P:Inno.Runtime.RuntimeSession.identities 831683661f5f261458f50b098afbe5ae5cc3f158cb9030d4682d32197d1ca3ca -->

```csharp
public Inno.Core.Identity.IdentityAllocator Inno.Runtime.RuntimeSession.identities { get; }
```

Gets the identity domain that owns every live object in this isolated session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L123).

## `isPaused`

<a id="api-e5f3399229993f58"></a>
<!-- api: P:Inno.Runtime.RuntimeSession.isPaused 533a282373cfb61abe443b730e5aa6335461a85259f64d8861f8bc2efbe70077 -->

```csharp
public bool Inno.Runtime.RuntimeSession.isPaused { get; set; }
```

Gets or sets whether scaled simulation is paused while unscaled subsystems continue to receive frames.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L151).

## `options`

<a id="api-58a022ad38a092d9"></a>
<!-- api: P:Inno.Runtime.RuntimeSession.options af9b76a8e8fbc49590846a2da90dd486b1d1f8912c8bc50102f11ab35badd27f -->

```csharp
public Inno.Runtime.RuntimeSessionOptions Inno.Runtime.RuntimeSession.options { get; }
```

Gets the validated immutable options used to create this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L108).

## `references`

<a id="api-7dae707facad8f64"></a>
<!-- api: P:Inno.Runtime.RuntimeSession.references ca74f5267d2f1c87fb7f604acfe6768083d3efaf911c85b40177a8cd234adc64 -->

```csharp
public Inno.References.ReferenceCatalog Inno.Runtime.RuntimeSession.references { get; }
```

Gets the immutable cross-domain reference resolver generation owned by this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L128).

## `scenes`

<a id="api-7b3383ce85b1bf26"></a>
<!-- api: P:Inno.Runtime.RuntimeSession.scenes 9bec5ca2f2a2b1898506f76e47543974ff980511237a68758330549232235a32 -->

```csharp
public Inno.Scene.SceneWorld Inno.Runtime.RuntimeSession.scenes { get; private set; }
```

Gets the isolated scene world owned by this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L160).

## `sessionId`

<a id="api-aaf89f39b1478f29"></a>
<!-- api: P:Inno.Runtime.RuntimeSession.sessionId c32120ee90d6a0f6cf824cdece64c060bc0f95bc13242498df18825ec1225b12 -->

```csharp
public Inno.Core.Logging.LogSessionId Inno.Runtime.RuntimeSession.sessionId { get; }
```

Gets the unique logging identity assigned to this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L113).

## `subsystems`

<a id="api-ba9340270ae16b56"></a>
<!-- api: P:Inno.Runtime.RuntimeSession.subsystems 31d51fa71894ec3abbcaddc47085edbd84f60de37550774e3d41a17ad0ae63c4 -->

```csharp
public Inno.Runtime.RuntimeSubsystemPipeline Inno.Runtime.RuntimeSession.subsystems { get; }
```

Gets the dependency-ordered subsystem generation owned by this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L133).

## `timeScale`

<a id="api-2175ebc7a85c836e"></a>
<!-- api: P:Inno.Runtime.RuntimeSession.timeScale a0e173e3af15e03f7a825bf32e320c9f67ebb3a6916e340d6b6ce9e570e8998d -->

```csharp
public float Inno.Runtime.RuntimeSession.timeScale { get; set; }
```

Gets or sets the finite non-negative simulation time multiplier.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when the assigned value is negative, NaN, or infinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSession.cs#L142).
