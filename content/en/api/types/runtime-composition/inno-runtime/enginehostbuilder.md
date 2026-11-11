---
title: "EngineHostBuilder"
description: "Reference for EngineHostBuilder in Inno.Runtime."
uid: api.inno.runtime.5b69221d0cee0cef
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `EngineHostBuilder`

This reference describes `EngineHostBuilder` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9add284ee3ac519d) | Method |
| [`Build`](#api-c91d390e81b80540) | Method |
| [`UseLogDelivery`](#api-7280e6cd2d6588f4) | Method |
| [`UseMetadataSources`](#api-2803bf9bd7a1e777) | Method |
| [`UseRetirementTimeout`](#api-01ab5206907e994d) | Method |

## Type declaration

<a id="api-5b69221d0cee0cef"></a>
<!-- api: T:Inno.Runtime.EngineHostBuilder 1ded3595939014b605676688ea929f51813ed5b7fdcb5709688cb85c16f19e31 -->

```csharp
public sealed class Inno.Runtime.EngineHostBuilder
```

Collects application-level runtime services before creating an `Inno.Runtime.EngineHost`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHostBuilder.cs#L12).

## `#ctor`

<a id="api-9add284ee3ac519d"></a>
<!-- api: M:Inno.Runtime.EngineHostBuilder.#ctor ec5824b6952798b47e25c801ac97df37c937d3da92a1527ce4852623619063b2 -->

```csharp
public Inno.Runtime.EngineHostBuilder.EngineHostBuilder()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHostBuilder.cs#L12).

## `Build`

<a id="api-c91d390e81b80540"></a>
<!-- api: M:Inno.Runtime.EngineHostBuilder.Build 3122be57dd532348170518f0327d4630d5d3c4c022975f7f042c486b366db92d -->

```csharp
public Inno.Runtime.EngineHost Inno.Runtime.EngineHostBuilder.Build()
```

Creates an application host and acquires its immutable metadata services.

**Returns:** A host owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHostBuilder.cs#L46).

## `UseLogDelivery`

<a id="api-7280e6cd2d6588f4"></a>
<!-- api: M:Inno.Runtime.EngineHostBuilder.UseLogDelivery(Inno.Core.Logging.LogDeliveryMode) bd83ff02e950ca9c1bc3042822dfde94d7754a0cda2160d918efde84df13ce78 -->

```csharp
public Inno.Runtime.EngineHostBuilder Inno.Runtime.EngineHostBuilder.UseLogDelivery(Inno.Core.Logging.LogDeliveryMode deliveryMode)
```

Selects the host router's delivery policy for host and session sinks.

**Parameter `deliveryMode`:** Background worker or inline producer-thread delivery.

**Returns:** This builder for fluent host composition.

**Throws `System.ArgumentOutOfRangeException`:** The policy is undefined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHostBuilder.cs#L101).

## `UseMetadataSources`

<a id="api-2803bf9bd7a1e777"></a>
<!-- api: M:Inno.Runtime.EngineHostBuilder.UseMetadataSources(Inno.Extensibility.Modules.IAssemblyCatalogSource,Inno.Extensibility.Types.ITypeCatalogSource,Inno.Core.Serialization.ISerializationMetadataSource) 65bf11931fc5e0062fb2c903341de9328b2fde24679f5260bdfc46afb89b8d2e -->

```csharp
public Inno.Runtime.EngineHostBuilder Inno.Runtime.EngineHostBuilder.UseMetadataSources(Inno.Extensibility.Modules.IAssemblyCatalogSource modules, Inno.Extensibility.Types.ITypeCatalogSource types, Inno.Core.Serialization.ISerializationMetadataSource serialization)
```

Selects the code and metadata implementation before creating the application host.

**Parameter `modules`:** The host catalog source; ownership transfers to the built EngineHost.

**Parameter `types`:** The type metadata provider corresponding to the same code deployment strategy.

**Returns:** This builder for fluent composition.

**Parameter `serialization`:** The declaration access provider corresponding to the same managed deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHostBuilder.cs#L73).

## `UseRetirementTimeout`

<a id="api-01ab5206907e994d"></a>
<!-- api: M:Inno.Runtime.EngineHostBuilder.UseRetirementTimeout(System.TimeSpan) 57186bcebbb07e3c1b6e9b8e13b993b0fabff80efe634118e0630a7d2ec369f7 -->

```csharp
public Inno.Runtime.EngineHostBuilder Inno.Runtime.EngineHostBuilder.UseRetirementTimeout(System.TimeSpan timeout)
```

Sets the maximum owner-thread drain duration before retirement faults the host.

**Parameter `timeout`:** A positive deadline shared by failed startup, session stop and host shutdown.

**Returns:** This builder for fluent configuration.

**Throws `System.ArgumentOutOfRangeException`:** The timeout is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/EngineHostBuilder.cs#L32).
