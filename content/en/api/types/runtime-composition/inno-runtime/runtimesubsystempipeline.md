---
title: "RuntimeSubsystemPipeline"
description: "Reference for RuntimeSubsystemPipeline in Inno.Runtime."
uid: api.inno.runtime.9ad25beaaa9b8c59
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `RuntimeSubsystemPipeline`

This reference describes `RuntimeSubsystemPipeline` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`BeginFrame`](#api-7982c75dc5e7cbfe) | Method |
| [`Dispose`](#api-e971f23160e47d85) | Method |
| [`EndFrame`](#api-480cbc02997fdee3) | Method |
| [`FixedUpdate`](#api-69c538a0095776f6) | Method |
| [```GetRequiredSubsystem``1```](#api-d1fd208575bd91ec) | Method |
| [`LateUpdate`](#api-bdb0528d16fc22c6) | Method |
| [`RenderFrame`](#api-2a74b319e144cb11) | Method |
| [`Update`](#api-84ea9998526cfad5) | Method |
| [`descriptors`](#api-88eaa4a177778640) | Property |
| [`startupDiagnostics`](#api-54f805cb06783ae6) | Property |

## Type declaration

<a id="api-9ad25beaaa9b8c59"></a>
<!-- api: T:Inno.Runtime.RuntimeSubsystemPipeline 2de6961c20f64acf0bdd0f4da39707955f03c2e212be6cae42aaf2ec745c7f61 -->

```csharp
public sealed class Inno.Runtime.RuntimeSubsystemPipeline : System.IDisposable
```

Owns the dependency-ordered runtime subsystem generation for one Host or Session scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L14).

## `BeginFrame`

<a id="api-7982c75dc5e7cbfe"></a>
<!-- api: M:Inno.Runtime.RuntimeSubsystemPipeline.BeginFrame(Inno.Runtime.Contracts.RuntimeFrame) 3774e7df004d17f2d41a039d511a3b0a265ee257c1ce267e275eaae1454b5478 -->

```csharp
public void Inno.Runtime.RuntimeSubsystemPipeline.BeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Opens foundation scopes and immutable snapshots for one owner frame.

**Parameter `frame`:** The frame timing snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L164).

## `Dispose`

<a id="api-e971f23160e47d85"></a>
<!-- api: M:Inno.Runtime.RuntimeSubsystemPipeline.Dispose 063cf770d0600fe4b7591488285a6a7a736f4a9a91fbd788b928d21c17bbd822 -->

```csharp
public void Inno.Runtime.RuntimeSubsystemPipeline.Dispose()
```

Detaches and disposes every subsystem in reverse dependency order.

**Throws `System.AggregateException`:** Thrown after every release stage is attempted when one or more subsystems fail to detach or dispose.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L309).

## `EndFrame`

<a id="api-480cbc02997fdee3"></a>
<!-- api: M:Inno.Runtime.RuntimeSubsystemPipeline.EndFrame(Inno.Runtime.Contracts.RuntimeFrame) 1a0ded5fa71ab33c606ced62d7f32f1a8c8d1a7744661bb5ea7f917911a5ff6f -->

```csharp
public void Inno.Runtime.RuntimeSubsystemPipeline.EndFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Closes every successfully opened frame scope in reverse dependency order.

**Parameter `frame`:** The frame being closed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L282).

## `FixedUpdate`

<a id="api-69c538a0095776f6"></a>
<!-- api: M:Inno.Runtime.RuntimeSubsystemPipeline.FixedUpdate(Inno.Runtime.Contracts.RuntimeFixedFrame) 2a1b5f51025eacb00bf7ff30d87ab0917f55692b14bcb7141cf9e4d26e04fe85 -->

```csharp
public void Inno.Runtime.RuntimeSubsystemPipeline.FixedUpdate(Inno.Runtime.Contracts.RuntimeFixedFrame frame)
```

Advances every subsystem by one deterministic fixed step.

**Parameter `frame`:** The fixed-step timing snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L184).

## ```GetRequiredSubsystem``1```

<a id="api-d1fd208575bd91ec"></a>
<!-- api: M:Inno.Runtime.RuntimeSubsystemPipeline.GetRequiredSubsystem``1 3c42a7966759f1b8070b5c0959cc1168361466abd7de3fd20fe924620394f6d5 -->

```csharp
public TFeature Inno.Runtime.RuntimeSubsystemPipeline.GetRequiredSubsystem<TFeature>() where TFeature : class, Inno.Runtime.Contracts.IRuntimeSubsystem
```

Resolves the unique active subsystem that implements the requested contract.

**Type parameter `TFeature`:** The subsystem contract or concrete subsystem type required by the composition root.

**Returns:** The unique compatible subsystem owned by this pipeline.

**Throws `System.InvalidOperationException`:** Thrown when no compatible subsystem exists or more than one compatible subsystem is active.

**Throws `System.ObjectDisposedException`:** Thrown after this pipeline has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L140).

## `LateUpdate`

<a id="api-bdb0528d16fc22c6"></a>
<!-- api: M:Inno.Runtime.RuntimeSubsystemPipeline.LateUpdate(Inno.Runtime.Contracts.RuntimeFrame) fbd8c78af00b3a4b9e828e7bad5190aebdf3dc4cbfcc4452d3a609caa8223590 -->

```csharp
public void Inno.Runtime.RuntimeSubsystemPipeline.LateUpdate(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Advances state that depends on completed simulation.

**Parameter `frame`:** The frame timing snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L214).

## `RenderFrame`

<a id="api-2a74b319e144cb11"></a>
<!-- api: M:Inno.Runtime.RuntimeSubsystemPipeline.RenderFrame(Inno.Runtime.Contracts.RuntimeFrame,System.Action) 0e3e4b02a383618d39e2b9416d0c048e7dbaccee93d1f39ffab24dd015eb69c1 -->

```csharp
public void Inno.Runtime.RuntimeSubsystemPipeline.RenderFrame(Inno.Runtime.Contracts.RuntimeFrame frame, System.Action? submit = null)
```

Opens output resources, accepts product requests and submits each owner's output once.

**Parameter `frame`:** The frame timing snapshot.

**Parameter `submit`:** Optional control-thread presentation code that submits requests while output is open.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L232).

## `Update`

<a id="api-84ea9998526cfad5"></a>
<!-- api: M:Inno.Runtime.RuntimeSubsystemPipeline.Update(Inno.Runtime.Contracts.RuntimeFrame) 2b86a4d6369d2c41735826d0461c8d2081e24927a668f6a5da6ffa32a729c28d -->

```csharp
public void Inno.Runtime.RuntimeSubsystemPipeline.Update(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Advances variable-clock domain state.

**Parameter `frame`:** The frame timing snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L199).

## `descriptors`

<a id="api-88eaa4a177778640"></a>
<!-- api: P:Inno.Runtime.RuntimeSubsystemPipeline.descriptors caf51530649fcd0fc0a3d849c73ce451bb542bf9db0768a675438e62dcdf9908 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.RuntimeSubsystemDescriptor> Inno.Runtime.RuntimeSubsystemPipeline.descriptors { get; }
```

Gets the active immutable subsystem descriptors in execution order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L118).

## `startupDiagnostics`

<a id="api-54f805cb06783ae6"></a>
<!-- api: P:Inno.Runtime.RuntimeSubsystemPipeline.startupDiagnostics f70184560076f18b951f160862a8557516188f4bf713fd6aa71145bd43244ee6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Diagnostics.Diagnostic> Inno.Runtime.RuntimeSubsystemPipeline.startupDiagnostics { get; }
```

Gets immutable diagnostics for unavailable optional subsystems; no exception or extension instance is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Subsystems/RuntimeSubsystemPipeline.cs#L123).
