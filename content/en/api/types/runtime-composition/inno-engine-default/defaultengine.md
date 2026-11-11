---
title: "DefaultEngine"
description: "Reference for DefaultEngine in Inno.Engine.Default."
uid: api.inno.engine.default.49f06bf2574683f1
kind: api
owners:
  - Inno.Engine.Default
apiSurface: source-clr
contracts:
  - project.inno-engine-default
---
# `DefaultEngine`

This reference describes `DefaultEngine` in `Inno.Engine.Default`. Read the [shared contract](../../../projects/inno-engine-default.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateHostSubsystems`](#api-963bc67075c1d0fd) | Method |
| [`CreateSessionSubsystems`](#api-7f727ac402f953e7) | Method |

## Type declaration

<a id="api-49f06bf2574683f1"></a>
<!-- api: T:Inno.Engine.Default.DefaultEngine aa43ae53b19b59c8d3a8c8dc1ae9a4c710f6324b0665ee5ed094d92e6c4a23eb -->

```csharp
public static class Inno.Engine.Default.DefaultEngine
```

Provides build-generated default engine assembly, independent of Editor and Player loop implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/DefaultEngine.cs#L10).

## `CreateHostSubsystems`

<a id="api-963bc67075c1d0fd"></a>
<!-- api: M:Inno.Engine.Default.DefaultEngine.CreateHostSubsystems(Inno.Rendering.Runtime.RenderRuntime) 2a061cfdc15ba9139db103fbd240e2e584e1982d1431b8d9213b436960530fb1 -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.IRuntimeSubsystemFactory> Inno.Engine.Default.DefaultEngine.CreateHostSubsystems(Inno.Rendering.Runtime.RenderRuntime context)
```

Creates the default host factory set over the product-configured rendering runtime.

**Parameter `context`:** The rendering runtime whose domain resources are owned by this host.

**Returns:** A frozen host-lifetime factory list that is never inserted into a session pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/DefaultEngine.cs#L34).

## `CreateSessionSubsystems`

<a id="api-7f727ac402f953e7"></a>
<!-- api: M:Inno.Engine.Default.DefaultEngine.CreateSessionSubsystems(Inno.Engine.Default.EngineSessionComposition) 8fa6bea86db4a6a311ff9b5fcfcd49f63d42c1c58751eee7c289fef62c329a7b -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.IRuntimeSubsystemFactory> Inno.Engine.Default.DefaultEngine.CreateSessionSubsystems(Inno.Engine.Default.EngineSessionComposition context)
```

Creates the complete default session factory set from local subsystem declarations.

**Parameter `context`:** The strongly typed composition inputs borrowed during factory creation.

**Returns:** A frozen deterministic factory list; the receiving RuntimeSession owns the created subsystems.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/DefaultEngine.cs#L22).
