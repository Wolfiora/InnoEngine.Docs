---
title: "RuntimeSessionOptions"
description: "Reference for RuntimeSessionOptions in Inno.Runtime."
uid: api.inno.runtime.4f43c7f1378d7e55
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `RuntimeSessionOptions`

This reference describes `RuntimeSessionOptions` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5e30b58d11883fbd) | Method |
| [`applicationId`](#api-1fb174095a4a3d5d) | Property |
| [`assetPreparationBudgetBytes`](#api-a89f4e50029a7b05) | Property |
| [`assetResidencyBudgetBytes`](#api-e9cd508cab831a11) | Property |
| [`capabilities`](#api-0334b11652adc73f) | Property |
| [`contentStore`](#api-3ead7b03c4415f48) | Property |
| [`createLogSink`](#api-d5b8699f0b3a7208) | Property |
| [`createSubsystems`](#api-f15ff6e5b6118a1c) | Property |
| [`fixedDeltaTime`](#api-b2acb2096fc20457) | Property |
| [`jobExecutionMode`](#api-1f30690285b766b9) | Property |
| [`jobWorkerCount`](#api-bbedfdae9874115d) | Property |
| [`kind`](#api-a13f8aebe50d37ad) | Property |
| [`maxFixedStepsPerFrame`](#api-af4168babc4a8bd7) | Property |
| [`maxFrameDeltaTime`](#api-19f6c2a994801ac3) | Property |
| [`referenceResolvers`](#api-32533e7f8474d191) | Property |

## Type declaration

<a id="api-4f43c7f1378d7e55"></a>
<!-- api: T:Inno.Runtime.RuntimeSessionOptions 66445aa3d7474f4574bb34543a57b5f8b59a2fad776062d49614dacec299c305 -->

```csharp
public sealed class Inno.Runtime.RuntimeSessionOptions
```

Defines storage, scheduling, and timing policy for one runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L14).

## `#ctor`

<a id="api-5e30b58d11883fbd"></a>
<!-- api: M:Inno.Runtime.RuntimeSessionOptions.#ctor 0e4b272ec4e06c22d1869e90a563ae9ad9b7721b3a2ba4c0b76aa12da6e4ec20 -->

```csharp
public Inno.Runtime.RuntimeSessionOptions.RuntimeSessionOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L14).

## `applicationId`

<a id="api-1fb174095a4a3d5d"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.applicationId c1ede67ff72fec60c41870d43a558e222a10d528ab367e53e75441d66eecf20e -->

```csharp
public string Inno.Runtime.RuntimeSessionOptions.applicationId { get; init; }
```

Gets or initializes the stable application identifier used to isolate persistent data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L24).

## `assetPreparationBudgetBytes`

<a id="api-a89f4e50029a7b05"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.assetPreparationBudgetBytes b11ee5f8cca90fc3f64ea1d36375f241aa8fdaf96c5051618766c1294c6cf2ee -->

```csharp
public long Inno.Runtime.RuntimeSessionOptions.assetPreparationBudgetBytes { get; init; }
```

Gets or initializes the maximum simultaneous cold asset payload preparation bytes before admission is rejected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L53).

## `assetResidencyBudgetBytes`

<a id="api-e9cd508cab831a11"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.assetResidencyBudgetBytes 76ec62e8c52479838de3c686c7e9dd9571d625063f81c655979ba25070040be5 -->

```csharp
public long Inno.Runtime.RuntimeSessionOptions.assetResidencyBudgetBytes { get; init; }
```

Gets or initializes the runtime asset payload residency budget in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L48).

## `capabilities`

<a id="api-0334b11652adc73f"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.capabilities ca2020fcdccf52e86ade5591449dd4067869a477ae373174b05363d6dac5333c -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.RuntimeCapabilityId> Inno.Runtime.RuntimeSessionOptions.capabilities { get; init; }
```

Gets or initializes capabilities verified by composition for this session's selected services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L89).

## `contentStore`

<a id="api-3ead7b03c4415f48"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.contentStore c10b1eefba8049fe9029ac0afd41f6995411c0413013f2d373ef8608ec4a952b -->

```csharp
public Inno.Content.IRuntimeContentStore? Inno.Runtime.RuntimeSessionOptions.contentStore { get; init; }
```

Gets or initializes the immutable content store borrowed for the session lifetime.

**Constraints:** Player sessions require this store. Edit and Play sessions may omit it when an authoring asset
service is composed by the Editor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L33).

## `createLogSink`

<a id="api-d5b8699f0b3a7208"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.createLogSink ba8e2a4dad9793798ccb9764e2ee5dc979cf2cbd32edb8a7741b246cbfea465d -->

```csharp
public System.Func<Inno.Core.Logging.LogSessionId, Inno.Core.Logging.ILogSink>? Inno.Runtime.RuntimeSessionOptions.createLogSink { get; init; }
```

Gets or initializes the optional factory that transfers one session log sink to this session.

**Constraints:** The factory receives the session identity. The returned sink receives only this session's entries
and is disposed during retirement when it implements `IDisposable`.
A null factory leaves logging to the host router's existing sinks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L43).

## `createSubsystems`

<a id="api-f15ff6e5b6118a1c"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.createSubsystems e4395d2394a541b7a6436204e7d7b820921ebd6558027b680f91062e356eda63 -->

```csharp
public System.Func<Inno.Runtime.RuntimeSession, System.Collections.Generic.IReadOnlyList<Inno.Runtime.Contracts.IRuntimeSubsystemFactory>> Inno.Runtime.RuntimeSessionOptions.createSubsystems { get; init; }
```

Gets or initializes the backend-neutral subsystem factories composed into each session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L83).

## `fixedDeltaTime`

<a id="api-b2acb2096fc20457"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.fixedDeltaTime 4f9eb80fe8be639951bccd76962d85a753350a586511be702a842132b23ec6b0 -->

```csharp
public float Inno.Runtime.RuntimeSessionOptions.fixedDeltaTime { get; init; }
```

Gets or initializes the fixed simulation interval in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L58).

## `jobExecutionMode`

<a id="api-1f30690285b766b9"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.jobExecutionMode 02331f15d66ba2d7a42e871242e055695d9aee30329c30cb77b9629d14918a27 -->

```csharp
public Inno.Runtime.RuntimeJobExecutionMode Inno.Runtime.RuntimeSessionOptions.jobExecutionMode { get; init; }
```

Gets or initializes the job execution strategy owned by this session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L73).

## `jobWorkerCount`

<a id="api-bbedfdae9874115d"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.jobWorkerCount 31b8383887a267e2fd46844eba05d8227880da5ef44f1f0e16564ce346869e0e -->

```csharp
public int Inno.Runtime.RuntimeSessionOptions.jobWorkerCount { get; init; }
```

Gets or initializes the worker count used by the work-stealing scheduler; zero selects the default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L78).

## `kind`

<a id="api-a13f8aebe50d37ad"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.kind 77f02ebd37d4dffedce5a47c934e431127833d5248cf54c207ff7c5fb455ae09 -->

```csharp
public Inno.Runtime.RuntimeSessionKind Inno.Runtime.RuntimeSessionOptions.kind { get; init; }
```

Gets or initializes the session role.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L19).

## `maxFixedStepsPerFrame`

<a id="api-af4168babc4a8bd7"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.maxFixedStepsPerFrame a966be5eb983cf49b0696226096b8c0e8842158075619849bb373977cd0cb099 -->

```csharp
public int Inno.Runtime.RuntimeSessionOptions.maxFixedStepsPerFrame { get; init; }
```

Gets or initializes the maximum number of fixed updates performed by one frame tick.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L68).

## `maxFrameDeltaTime`

<a id="api-19f6c2a994801ac3"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.maxFrameDeltaTime d0958314a1cb04fdd7ad40557d8e84934f7a1801896a6543f0bdbf773f36c88f -->

```csharp
public float Inno.Runtime.RuntimeSessionOptions.maxFrameDeltaTime { get; init; }
```

Gets or initializes the maximum accepted variable frame interval in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L63).

## `referenceResolvers`

<a id="api-32533e7f8474d191"></a>
<!-- api: P:Inno.Runtime.RuntimeSessionOptions.referenceResolvers c92d82be56a045bc4435d7ea865af8ec15363a940eefbcf1f7c3775088fd6a8d -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.References.IReferenceResolver> Inno.Runtime.RuntimeSessionOptions.referenceResolvers { get; init; }
```

Gets or initializes owner-provided resolvers included in this session's immutable reference catalog.

**Constraints:** A deployed `AssetDatabase` automatically contributes its asset resolver and must not be repeated here.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionOptions.cs#L97).
