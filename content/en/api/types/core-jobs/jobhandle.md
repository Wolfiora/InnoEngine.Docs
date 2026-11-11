---
title: "JobHandle"
description: "Reference for JobHandle in Inno.Core.Jobs."
uid: api.inno.core.jobs.43b1819a53c1f814
kind: api
owners:
  - Inno.Core.Jobs
apiSurface: source-clr
contracts:
  - project.inno-core-jobs#frame-and-queue-contract
---
# `JobHandle`

This reference describes `JobHandle` in `Inno.Core.Jobs`. Read the [shared contract](../../projects/inno-core-jobs.md#frame-and-queue-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`isValid`](#api-08df93504e3ce771) | Property |

## Type declaration

<a id="api-43b1819a53c1f814"></a>
<!-- api: T:Inno.Core.Jobs.JobHandle d9fd384e8b10e6c6d22f023f69aa685a8abf629d977237b87a1123fd9d2544f9 -->

```csharp
public readonly struct Inno.Core.Jobs.JobHandle
```

Opaque handle representing a scheduled job.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobHandle.cs#L6).

## `isValid`

<a id="api-08df93504e3ce771"></a>
<!-- api: P:Inno.Core.Jobs.JobHandle.isValid c083f6e48731e0e6740fcc895378dbb7bb6ecc0a8b64a39710852776a00998c1 -->

```csharp
public bool Inno.Core.Jobs.JobHandle.isValid { get; }
```

Gets whether this handle contains a valid identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobHandle.cs#L22).
