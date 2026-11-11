---
title: "RuntimeSubsystem"
description: "Reference for RuntimeSubsystem in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.5f32ef0057834e35
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `RuntimeSubsystem`

This reference describes `RuntimeSubsystem` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Runtime.Contracts.IRuntimeSubsystem`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4d56c6c4c2b425b1) | Method |
| [`AfterRender`](#api-093d46ae60e6ba82) | Method |
| [`Attach`](#api-af217e8280ea137b) | Method |
| [`BeforeRender`](#api-be4722cacf0dfcb6) | Method |
| [`BeginFrame`](#api-4978295976a1beb6) | Method |
| [`Detach`](#api-3984d3d5aa5a5d12) | Method |
| [`Dispose`](#api-1e3e4f8431da66dd) | Method |
| [`EndFrame`](#api-bec987ddad7ba01b) | Method |
| [`FixedUpdate`](#api-5dc8fa4cbb6d5c3c) | Method |
| [`LateUpdate`](#api-b2434b1c9a079b75) | Method |
| [`OnBeginFrame`](#api-63a7f41dc7095a4d) | Method |
| [`OnCompleteOutput`](#api-a76a3a8bd71686a1) | Method |
| [`OnEndFrame`](#api-4dca8c06bc47cee2) | Method |
| [`OnFixedUpdate`](#api-09ab8e48315d9df2) | Method |
| [`OnLateUpdate`](#api-c6d860477bc3ccf6) | Method |
| [`OnPrepareOutput`](#api-f82c1242a6320c2f) | Method |
| [`OnProduceOutput`](#api-b7f7a725eedc1675) | Method |
| [`OnStart`](#api-a9fbda8fe104277c) | Method |
| [`OnStop`](#api-5b6d1fa272929cb7) | Method |
| [`OnUpdate`](#api-a6395ad0feac3b77) | Method |
| [`OwnFrameScope`](#api-7413c02f443af663) | Method |
| [`Render`](#api-9f7fc0627335a31c) | Method |
| [`Update`](#api-d1e3e4fc2d4062fd) | Method |
| [`isStarted`](#api-3487a7f1eef35995) | Property |
| [`lifetime`](#api-199befd627820a05) | Property |

## Type declaration

<a id="api-5f32ef0057834e35"></a>
<!-- api: T:Inno.Runtime.Contracts.RuntimeSubsystem 3fc08491479fc97b1a33c16ba884cd8dfd3a0f9014ad8ad85746fe6c4dc46a68 -->

```csharp
public abstract class Inno.Runtime.Contracts.RuntimeSubsystem : Inno.Runtime.Contracts.IRuntimeSubsystem
```

Enforces one control-thread lifecycle while derived runtimes compose their own domain services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L10).

## `#ctor`

<a id="api-4d56c6c4c2b425b1"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.#ctor 055f9c8e798f634ae435277777b7a7d76489500b3f775ebceb789fb1e97755a6 -->

```csharp
protected Inno.Runtime.Contracts.RuntimeSubsystem.RuntimeSubsystem()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L10).

## `AfterRender`

<a id="api-093d46ae60e6ba82"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.AfterRender(Inno.Runtime.Contracts.RuntimeFrame) 62273b1f611b3fdb304657b065fbe0e12b4d8f2192934a8e0496f9b6421fb6b9 -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.AfterRender(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Finalizes frame output even when rendering fails.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L149).

## `Attach`

<a id="api-af217e8280ea137b"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.Attach 9e605d91c939da49bf0564d86a33c1329d30d5bb6199b5e3be025601119309ba -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.Attach()
```

Acquires session resources after every dependency has attached.

**Constraints:** The caller must own this instance before attachment. Failed attachment stops admission but leaves partial
resources with that owner, which must drive Dispose through any pending retirement.

**Throws `System.InvalidOperationException`:** The subsystem is already started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L41).

## `BeforeRender`

<a id="api-be4722cacf0dfcb6"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.BeforeRender(Inno.Runtime.Contracts.RuntimeFrame) d04e13a00aaaff5c98916abd1c71238647fac08ae422beacae91b9fd5751374b -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.BeforeRender(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Prepares frame output after simulation has completed.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L127).

## `BeginFrame`

<a id="api-4978295976a1beb6"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.BeginFrame(Inno.Runtime.Contracts.RuntimeFrame) ecb26f5d023f34202222170eb8ad84aeeded8f43740b5bce8da6496a90559b3f -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.BeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Begins one frame before event dispatch and simulation.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L65).

## `Detach`

<a id="api-3984d3d5aa5a5d12"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.Detach ea7bdc294ba3ad1a1ba79724f6d7f1cea62d6001fb9b697f46daa91f4b581e48 -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.Detach()
```

Releases attached session resources before dependencies detach.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L176).

## `Dispose`

<a id="api-1e3e4f8431da66dd"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.Dispose 1f2db5ecf200eed5d9fcf8f6710b06e857a89812ec37d33a495479e2c18b3314 -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.Dispose()
```

Releases this owner's registrations and resources exactly once.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Tracked work, the stop hook or a child resource is still draining. Retry without releasing dependencies.

**Throws `System.AggregateException`:** Retirement failed after every cleanup stage was attempted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L186).

## `EndFrame`

<a id="api-bec987ddad7ba01b"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.EndFrame(Inno.Runtime.Contracts.RuntimeFrame) ad67b904aad0acb5f6866e4d9416e7f17cd2f830b6011e2b9ecdeabafa6d5021 -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.EndFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Ends one frame and releases frame-scoped state.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L160).

## `FixedUpdate`

<a id="api-5dc8fa4cbb6d5c3c"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.FixedUpdate(Inno.Runtime.Contracts.RuntimeFixedFrame) c632f6d2cf2c66382225c39e3eeff40276826e25ddda3c05dfc67e7202df829f -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.FixedUpdate(Inno.Runtime.Contracts.RuntimeFixedFrame frame)
```

Advances one deterministic simulation step.

**Parameter `frame`:** The immutable fixed-step state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L94).

## `LateUpdate`

<a id="api-b2434b1c9a079b75"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.LateUpdate(Inno.Runtime.Contracts.RuntimeFrame) a018c4730846b9d221b053dbf6581c8dfac4cbbe079d69f1b7bb9e754373fd9e -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.LateUpdate(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Advances state that depends on completed variable simulation.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L116).

## `OnBeginFrame`

<a id="api-63a7f41dc7095a4d"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame) 83b84694ffd6c4dcc42611dda7eecfd884abbb9fe307de53f0e3b5cf03286509 -->

```csharp
protected virtual void Inno.Runtime.Contracts.RuntimeSubsystem.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Captures snapshots and binds service façades.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L235).

## `OnCompleteOutput`

<a id="api-a76a3a8bd71686a1"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OnCompleteOutput(Inno.Runtime.Contracts.RuntimeFrame) 2e5b3dfe6e5dd124832850ed0e7b157646fb2408a3edeeff8bd9c9dfc7aceb12 -->

```csharp
protected virtual void Inno.Runtime.Contracts.RuntimeSubsystem.OnCompleteOutput(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Submits output and closes output-specific temporary resources.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L277).

## `OnEndFrame`

<a id="api-4dca8c06bc47cee2"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OnEndFrame(Inno.Runtime.Contracts.RuntimeFrame) 95519b26e0052cf8e28a65ece49fd4c0b82ab1fbab14f045a9143079fd4b3b00 -->

```csharp
protected virtual void Inno.Runtime.Contracts.RuntimeSubsystem.OnEndFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Finalizes control-thread frame state before execution bindings are revoked.

**Parameter `frame`:** The frame being closed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L284).

## `OnFixedUpdate`

<a id="api-09ab8e48315d9df2"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OnFixedUpdate(Inno.Runtime.Contracts.RuntimeFixedFrame) db2f5ad17bb50f22cfbbaa473e502c61d1d3fddb54c88174765411d45e91e772 -->

```csharp
protected virtual void Inno.Runtime.Contracts.RuntimeSubsystem.OnFixedUpdate(Inno.Runtime.Contracts.RuntimeFixedFrame frame)
```

Advances one deterministic fixed step.

**Parameter `frame`:** The fixed-step timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L242).

## `OnLateUpdate`

<a id="api-c6d860477bc3ccf6"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OnLateUpdate(Inno.Runtime.Contracts.RuntimeFrame) 9c9929944d26f5bfda819f1dc7e56cda4c1c5954aadffdc099c6cce6225876f3 -->

```csharp
protected virtual void Inno.Runtime.Contracts.RuntimeSubsystem.OnLateUpdate(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Updates state that depends on completed simulation.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L256).

## `OnPrepareOutput`

<a id="api-f82c1242a6320c2f"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OnPrepareOutput(Inno.Runtime.Contracts.RuntimeFrame) 155837155e34f1d26f234c8223e649b42a37a8b303c3ee552d3278e383cf0885 -->

```csharp
protected virtual void Inno.Runtime.Contracts.RuntimeSubsystem.OnPrepareOutput(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Opens resources required for this frame's output.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L263).

## `OnProduceOutput`

<a id="api-b7f7a725eedc1675"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OnProduceOutput(Inno.Runtime.Contracts.RuntimeFrame) d90f42e057f281dede4bca884efc93f2380ac621f46fb753b9d575bb77205c00 -->

```csharp
protected virtual void Inno.Runtime.Contracts.RuntimeSubsystem.OnProduceOutput(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Collects output commands without executing managed code on a native realtime callback.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L270).

## `OnStart`

<a id="api-a9fbda8fe104277c"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OnStart 90590b22854dd6fe3d69fa03d5ecae6892d13060743bacedf81aef063caaf6b4 -->

```csharp
protected virtual void Inno.Runtime.Contracts.RuntimeSubsystem.OnStart()
```

Acquires resources after dependencies have started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L228).

## `OnStop`

<a id="api-5b6d1fa272929cb7"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OnStop 353b0a90648503171963c40f3553afba5cd8dfbf7d5cefdab72d1b624a51facc -->

```csharp
protected virtual void Inno.Runtime.Contracts.RuntimeSubsystem.OnStop()
```

Releases domain resources, including allocations made before attachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L288).

## `OnUpdate`

<a id="api-a6395ad0feac3b77"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OnUpdate(Inno.Runtime.Contracts.RuntimeFrame) 4d14c16ae6cbcac1ebad4d27a360d7c7a0114fcd9be28b4deb85d2c34ea0b935 -->

```csharp
protected virtual void Inno.Runtime.Contracts.RuntimeSubsystem.OnUpdate(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Advances domain state on the variable clock.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L249).

## `OwnFrameScope`

<a id="api-7413c02f443af663"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.OwnFrameScope(System.IDisposable) cfb762903e576cdc4941432249c83a2a29bf05df6d4faa60d9a89d6603778980 -->

```csharp
protected void Inno.Runtime.Contracts.RuntimeSubsystem.OwnFrameScope(System.IDisposable scope)
```

Registers a binding that must close even when a frame hook fails.

**Parameter `scope`:** The newly entered execution scope.

**Throws `System.InvalidOperationException`:** No subsystem frame is open.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L218).

## `Render`

<a id="api-9f7fc0627335a31c"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.Render(Inno.Runtime.Contracts.RuntimeFrame) cf713dae3b1765c3d294c1ba5cf453bce6cded8d148a910ed957a84f7f443376 -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.Render(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Produces frame output owned by this subsystem.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L138).

## `Update`

<a id="api-d1e3e4fc2d4062fd"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystem.Update(Inno.Runtime.Contracts.RuntimeFrame) bd66cff648e0f09db16cf1e67893772e413f178709390a2313a46e846f5e3f35 -->

```csharp
public void Inno.Runtime.Contracts.RuntimeSubsystem.Update(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Advances variable simulation state.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L105).

## `isStarted`

<a id="api-3487a7f1eef35995"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystem.isStarted 68254979e5ede186b13ed884bf87c038aa4c4a5a4abd7d747a78b40800b46bbe -->

```csharp
public bool Inno.Runtime.Contracts.RuntimeSubsystem.isStarted { get; }
```

Gets whether this instance is attached to an owner and has not retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L25).

## `lifetime`

<a id="api-199befd627820a05"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystem.lifetime 0ec7871bcfa6f0a09d2b49f5a0a84442026981ac20fea11ea9e91a59dbe4c6b0 -->

```csharp
protected Inno.Core.Execution.LifetimeScope Inno.Runtime.Contracts.RuntimeSubsystem.lifetime { get; }
```

Gets resources and cancellation owned exclusively by this subsystem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystem.cs#L30).
