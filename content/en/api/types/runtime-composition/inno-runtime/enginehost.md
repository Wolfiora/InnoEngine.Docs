---
title: "EngineHost"
description: "Reference for EngineHost in Inno.Runtime."
uid: api.inno.runtime.bce3909bbd9352b8
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `EngineHost`

This reference describes `EngineHost` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateHostPipeline`](#api-b24b9c88102d5b84) | Method |
| [`CreateSession`](#api-6b21628f9d91b3d8) | Method |
| [`Dispose`](#api-d8f34e31f8504934) | Method |
| [`diagnostics`](#api-d15bf2c3cb7f27e9) | Property |
| [`generations`](#api-b774e691e5e5dbe4) | Property |
| [`logs`](#api-4c4ea6455c64f172) | Property |
| [`modules`](#api-8a6d9a9ac9391a28) | Property |
| [`serialization`](#api-b8f3002c8cccd3e0) | Property |
| [`types`](#api-26174eb31fe2f38a) | Property |

## Type declaration

<a id="api-bce3909bbd9352b8"></a>
<!-- api: T:Inno.Runtime.EngineHost a2619ea3ae97bcf6111a5ad004f097e89fbc675d92fdc52ff2eb3193f704e7f4 -->

```csharp
public sealed class Inno.Runtime.EngineHost : System.IDisposable
```

Owns application-level engine services and creates isolated runtime sessions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHost.cs#L20).

## `CreateHostPipeline`

<a id="api-b24b9c88102d5b84"></a>
<!-- api: M:Inno.Runtime.EngineHost.CreateHostPipeline(System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.IRuntimeSubsystemFactory},System.Collections.Generic.IReadOnlyList{Inno.Runtime.Contracts.RuntimeCapabilityId}) 009ee2483dfcdb50a8071a59d17a610f40cf00d7b3b35e3188f04d37c29c5296 -->

```csharp
public Inno.Runtime.RuntimeSubsystemPipeline Inno.Runtime.EngineHost.CreateHostPipeline(System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.IRuntimeSubsystemFactory> factories, System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.RuntimeCapabilityId>? capabilities = null)
```

Creates host-owned subsystems that outlive individual Edit, Play or Player sessions.

**Parameter `factories`:** The complete host factory set; session-lifetime factories are rejected.

**Parameter `capabilities`:** Backend-neutral capabilities verified by the application's selected services.

**Returns:** A pipeline owned by this EngineHost and borrowed by the application's Shell.

**Throws `System.ObjectDisposedException`:** The engine host is disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHost.cs#L143).

## `CreateSession`

<a id="api-6b21628f9d91b3d8"></a>
<!-- api: M:Inno.Runtime.EngineHost.CreateSession(Inno.Runtime.RuntimeSessionOptions) 774f2140e2a8c485f5dd77ae4bf0c82514e37c1e3d3cc3b7439ded531f2aa15e -->

```csharp
public Inno.Runtime.RuntimeSession Inno.Runtime.EngineHost.CreateSession(Inno.Runtime.RuntimeSessionOptions options)
```

Creates an isolated Edit, Play, or Player runtime session.

**Parameter `options`:** The validated ownership, storage, and timing options for the session.

**Returns:** A started session owned by this host and the caller.

**Throws `System.ArgumentNullException`:** Thrown when `options` is null.

**Throws `System.ObjectDisposedException`:** Thrown when this host has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHost.cs#L104).

## `Dispose`

<a id="api-d8f34e31f8504934"></a>
<!-- api: M:Inno.Runtime.EngineHost.Dispose 5fc52ceadf46d3f6d0e012205a45572fb2c06c9cdfd36d1e83925a1ca1642708 -->

```csharp
public void Inno.Runtime.EngineHost.Dispose()
```

Disposes every owned session before releasing application metadata services.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Owned work is still draining, or a generation deadline failed. Dependencies remain owned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHost.cs#L178).

## `diagnostics`

<a id="api-d15bf2c3cb7f27e9"></a>
<!-- api: P:Inno.Runtime.EngineHost.diagnostics 5dcd40b98e202c66e179f31005105521521950dcc4912be71aa773a4866bdcd6 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticHub Inno.Runtime.EngineHost.diagnostics { get; }
```

Gets the isolated diagnostic state hub owned by this host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHost.cs#L67).

## `generations`

<a id="api-b774e691e5e5dbe4"></a>
<!-- api: P:Inno.Runtime.EngineHost.generations 3c10002f13d1d5a64d3972fbda8b8f99ba015acc0bb780a3713d1e0b5eca5aec -->

```csharp
public Inno.Extensibility.Reload.GenerationCoordinator Inno.Runtime.EngineHost.generations { get; }
```

Gets the shared admission gate for reload, recovery, Play, Build and Export.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHost.cs#L72).

## `logs`

<a id="api-4c4ea6455c64f172"></a>
<!-- api: P:Inno.Runtime.EngineHost.logs 5cf41455aa860fa5aa1fb2f8766fadfd3b6cd61a3eeacf77e91189e73c7870cd -->

```csharp
public Inno.Core.Logging.LogRouter Inno.Runtime.EngineHost.logs { get; }
```

Gets the isolated logging router using this host's configured delivery policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHost.cs#L62).

## `modules`

<a id="api-8a6d9a9ac9391a28"></a>
<!-- api: P:Inno.Runtime.EngineHost.modules a99110599afd24c99c90f9b9ecb3c387fbc6965aa7ef7d6deb9417bf7dd0b32b -->

```csharp
public Inno.Extensibility.Modules.ModuleHost Inno.Runtime.EngineHost.modules { get; private set; }
```

Gets the isolated managed module host that owns this engine host's reload generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHost.cs#L77).

## `serialization`

<a id="api-b8f3002c8cccd3e0"></a>
<!-- api: P:Inno.Runtime.EngineHost.serialization e4047c7255bb1bd358c54194df26322d832ca405492e2bc7d4be5ca9464b57ef -->

```csharp
public Inno.Core.Serialization.SerializationRegistry Inno.Runtime.EngineHost.serialization { get; private set; }
```

Gets the isolated serialization registry derived from this host's active type generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHost.cs#L87).

## `types`

<a id="api-26174eb31fe2f38a"></a>
<!-- api: P:Inno.Runtime.EngineHost.types 1988b43d8108e7561aebba904e2dc374d6b6c9a1db0e4270de9035a8d2d299ab -->

```csharp
public Inno.Extensibility.Types.TypeCatalog Inno.Runtime.EngineHost.types { get; private set; }
```

Gets the isolated immutable type catalog derived from this host's active modules.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHost.cs#L82).
