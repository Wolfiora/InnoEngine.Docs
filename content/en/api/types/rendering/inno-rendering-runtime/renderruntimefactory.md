---
title: "RenderRuntimeFactory"
description: "Reference for RenderRuntimeFactory in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.cbad366b06cfa760
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderRuntimeFactory`

This reference describes `RenderRuntimeFactory` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Runtime.Contracts.IRuntimeSubsystemFactory`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5a3724bc3e36248c) | Method |
| [`Create`](#api-4736e6265b7ae34b) | Method |
| [`descriptor`](#api-4922f7ff8022b836) | Property |

## Type declaration

<a id="api-cbad366b06cfa760"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderRuntimeFactory 57d7d34de941851b1c06ab4dcd2c16a352c6153783460dc477101e899753c6f2 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderRuntimeFactory : Inno.Runtime.Contracts.IRuntimeSubsystemFactory
```

Creates one rendering lifecycle feature for every isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntimeFactory.cs#L11).

## `#ctor`

<a id="api-5a3724bc3e36248c"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntimeFactory.#ctor(System.Func{Inno.Runtime.Contracts.RuntimeSubsystemContext,Inno.Rendering.Runtime.RenderRuntime}) 034a631f10d4f771d9f029b0a657b497693c9d5e23c6f0d038c3cfff846581fa -->

```csharp
public Inno.Rendering.Runtime.RenderRuntimeFactory.RenderRuntimeFactory(System.Func<Inno.Runtime.Contracts.RuntimeSubsystemContext, Inno.Rendering.Runtime.RenderRuntime> runtimeFactory)
```

Creates a reusable factory around a composition-owned rendering runtime callback.

**Parameter `runtimeFactory`:** The callback that creates a distinct rendering runtime for the supplied session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntimeFactory.cs#L21).

## `Create`

<a id="api-4736e6265b7ae34b"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext) 835f7138bd9b60e8960b5fe1a59bab42563ebd25b1054f50cdd405cb53750ad3 -->

```csharp
public Inno.Runtime.Contracts.IRuntimeSubsystem Inno.Rendering.Runtime.RenderRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext context)
```

Creates a rendering feature over a newly allocated runtime layer.

**Parameter `context`:** The isolated session context passed to the rendering runtime factory.

**Returns:** A new feature that exclusively owns its rendering runtime layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntimeFactory.cs#L43).

## `descriptor`

<a id="api-4922f7ff8022b836"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRuntimeFactory.descriptor fda304ec4f1abcc0081e92e1704b7b2ef33eacb2af745efe524471e47f5755b8 -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemDescriptor Inno.Rendering.Runtime.RenderRuntimeFactory.descriptor { get; }
```

Gets stable ordering metadata that places rendering after simulation features.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntimeFactory.cs#L29).
