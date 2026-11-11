---
title: "RuntimeJobExecutionMode"
description: "Reference for RuntimeJobExecutionMode in Inno.Runtime."
uid: api.inno.runtime.e490bdc5692108e7
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `RuntimeJobExecutionMode`

This reference describes `RuntimeJobExecutionMode` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SingleThread`](#api-67efb15c322d4fd4) | Field |
| [`WorkerPool`](#api-63eecc1ea4fd3c48) | Field |

## Type declaration

<a id="api-e490bdc5692108e7"></a>
<!-- api: T:Inno.Runtime.RuntimeJobExecutionMode 0837e79f3d1f3b7cca16c09d5cc00a4dbcfeb301cb741c0d9e3ee55755e5ec5d -->

```csharp
public enum Inno.Runtime.RuntimeJobExecutionMode : int
```

Selects how one runtime session executes its frame jobs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeJobExecutionMode.cs#L6).

## `SingleThread`

<a id="api-67efb15c322d4fd4"></a>
<!-- api: F:Inno.Runtime.RuntimeJobExecutionMode.SingleThread 692d7089aee2f1877ecde8d3636fe2ceafaafc4f5b589d65ec134c75ebeb61a4 -->

```csharp
Inno.Runtime.RuntimeJobExecutionMode.SingleThread = 0
```

Executes jobs deterministically on the session owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeJobExecutionMode.cs#L11).

## `WorkerPool`

<a id="api-63eecc1ea4fd3c48"></a>
<!-- api: F:Inno.Runtime.RuntimeJobExecutionMode.WorkerPool 0535b75eb7370d96ec7f7ffe01b88670e8a95f9c08280e3c71c248f8ed31f0d1 -->

```csharp
Inno.Runtime.RuntimeJobExecutionMode.WorkerPool = 1
```

Executes ready jobs on a bounded worker pool owned by the session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeJobExecutionMode.cs#L16).
