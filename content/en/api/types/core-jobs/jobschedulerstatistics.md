---
title: "JobSchedulerStatistics"
description: "Reference for JobSchedulerStatistics in Inno.Core.Jobs."
uid: api.inno.core.jobs.d9b1f213435f4b15
kind: api
owners:
  - Inno.Core.Jobs
apiSurface: source-clr
contracts:
  - project.inno-core-jobs#frame-and-queue-contract
---
# `JobSchedulerStatistics`

This reference describes `JobSchedulerStatistics` in `Inno.Core.Jobs`. Read the [shared contract](../../projects/inno-core-jobs.md#frame-and-queue-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Jobs.JobSchedulerStatistics>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-188e29fe98969383) | Method |
| [`Equals`](#api-dc76fc85a2346763) | Method |
| [`GetHashCode`](#api-6f179ab2824699c4) | Method |
| [`op_Equality`](#api-88ba43022b6d21a2) | Method |
| [`op_Inequality`](#api-95009abe889562ee) | Method |
| [`ToString`](#api-c611ae2261378ddb) | Method |
| [`frameJobs`](#api-aff7e986b10f86f4) | Property |
| [`mainThreadCanceled`](#api-7539b72d77f7c58c) | Property |
| [`mainThreadPeak`](#api-4f3159036b903564) | Property |
| [`mainThreadPending`](#api-41dccec09176c673) | Property |
| [`mainThreadRejected`](#api-224abe4984a0ded1) | Property |
| [`peakFrameJobs`](#api-333bb346b5814c87) | Property |
| [`rejectedJobs`](#api-fa6b7be801699372) | Property |

## Type declaration

<a id="api-d9b1f213435f4b15"></a>
<!-- api: T:Inno.Core.Jobs.JobSchedulerStatistics 21fb32821a63f03755168c0702342f20eaf66ea8452f88208d3b2579e4a98003 -->

```csharp
public readonly record struct Inno.Core.Jobs.JobSchedulerStatistics : System.IEquatable<Inno.Core.Jobs.JobSchedulerStatistics>
```

Reports lifetime admission and bounded owner-thread queue measurements without retaining job delegates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L6).

## `Equals`

<a id="api-188e29fe98969383"></a>
<!-- api: M:Inno.Core.Jobs.JobSchedulerStatistics.Equals(Inno.Core.Jobs.JobSchedulerStatistics) a0dda35f948e32fd419856e8c618d4c9900823535cad39ce8a4a4af2effc03d9 -->

```csharp
public bool Inno.Core.Jobs.JobSchedulerStatistics.Equals(Inno.Core.Jobs.JobSchedulerStatistics other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L6).

## `Equals`

<a id="api-dc76fc85a2346763"></a>
<!-- api: M:Inno.Core.Jobs.JobSchedulerStatistics.Equals(System.Object) 6090832aee142e138f2708fca7c6a2af073d5ddc032e8a907567bfd300606cd5 -->

```csharp
public override bool Inno.Core.Jobs.JobSchedulerStatistics.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L6).

## `GetHashCode`

<a id="api-6f179ab2824699c4"></a>
<!-- api: M:Inno.Core.Jobs.JobSchedulerStatistics.GetHashCode 0b5caf5746e0d6126fb7574deaa627171415f6d0009fb39397f3285c1bd61949 -->

```csharp
public override int Inno.Core.Jobs.JobSchedulerStatistics.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L6).

## `op_Equality`

<a id="api-88ba43022b6d21a2"></a>
<!-- api: M:Inno.Core.Jobs.JobSchedulerStatistics.op_Equality(Inno.Core.Jobs.JobSchedulerStatistics,Inno.Core.Jobs.JobSchedulerStatistics) 358eee3d3704375c3762c9b9534c4c279edb60ad551571c11f156c3f861fb2c8 -->

```csharp
public static bool Inno.Core.Jobs.JobSchedulerStatistics.operator ==(Inno.Core.Jobs.JobSchedulerStatistics left, Inno.Core.Jobs.JobSchedulerStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L6).

## `op_Inequality`

<a id="api-95009abe889562ee"></a>
<!-- api: M:Inno.Core.Jobs.JobSchedulerStatistics.op_Inequality(Inno.Core.Jobs.JobSchedulerStatistics,Inno.Core.Jobs.JobSchedulerStatistics) 2f08fc8fe45aca826b1ce23aa1b6e0a4e400f3786b5799769c84a362620a0320 -->

```csharp
public static bool Inno.Core.Jobs.JobSchedulerStatistics.operator !=(Inno.Core.Jobs.JobSchedulerStatistics left, Inno.Core.Jobs.JobSchedulerStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L6).

## `ToString`

<a id="api-c611ae2261378ddb"></a>
<!-- api: M:Inno.Core.Jobs.JobSchedulerStatistics.ToString 999a918237ab8e1dcb9d7aef2c078235a76289d2f43c2ad42b4d8cb12a77c7a9 -->

```csharp
public override string Inno.Core.Jobs.JobSchedulerStatistics.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L6).

## `frameJobs`

<a id="api-aff7e986b10f86f4"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerStatistics.frameJobs 89bdd0093825af975628cf07d6470042bf87618b089c011b21729f1ca38d41e0 -->

```csharp
public int Inno.Core.Jobs.JobSchedulerStatistics.frameJobs { get; init; }
```

Gets jobs admitted in the current frame, including completed jobs awaiting EndFrame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L11).

## `mainThreadCanceled`

<a id="api-7539b72d77f7c58c"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerStatistics.mainThreadCanceled ec78a95b0f1a41003940658e893d2008bcc4f0069bc14c4193060afe84abb0ab -->

```csharp
public long Inno.Core.Jobs.JobSchedulerStatistics.mainThreadCanceled { get; init; }
```

Gets accepted callbacks canceled before execution during shutdown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L35).

## `mainThreadPeak`

<a id="api-4f3159036b903564"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerStatistics.mainThreadPeak 86e9fa93a22d82975b5986d7ab176e96e168f75a45a635da381652ada1bc3330 -->

```csharp
public int Inno.Core.Jobs.JobSchedulerStatistics.mainThreadPeak { get; init; }
```

Gets the largest simultaneous owner-thread queue occupancy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L27).

## `mainThreadPending`

<a id="api-41dccec09176c673"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerStatistics.mainThreadPending 53adca8dcafc8484d942ba03492aadf31def1262ca5bc9c32f4cf713231d3007 -->

```csharp
public int Inno.Core.Jobs.JobSchedulerStatistics.mainThreadPending { get; init; }
```

Gets queued or retirement-pending owner-thread callbacks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L23).

## `mainThreadRejected`

<a id="api-224abe4984a0ded1"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerStatistics.mainThreadRejected 09803b8d9e2cd0359a124d4518d394320e656f4bc971ce4aeea8450d55ee7317 -->

```csharp
public long Inno.Core.Jobs.JobSchedulerStatistics.mainThreadRejected { get; init; }
```

Gets callbacks rejected because the queue was full or closed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L31).

## `peakFrameJobs`

<a id="api-333bb346b5814c87"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerStatistics.peakFrameJobs d703abab38daa97869bb06465a7e7ed2ca1bf7087df99363265d8aa7d487828d -->

```csharp
public int Inno.Core.Jobs.JobSchedulerStatistics.peakFrameJobs { get; init; }
```

Gets the largest admitted frame since scheduler creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L15).

## `rejectedJobs`

<a id="api-fa6b7be801699372"></a>
<!-- api: P:Inno.Core.Jobs.JobSchedulerStatistics.rejectedJobs 50f9e2bff536e1bd72c67a76f07ae4509df2faf1769fe1fae4c9b3e52a1eff78 -->

```csharp
public long Inno.Core.Jobs.JobSchedulerStatistics.rejectedJobs { get; init; }
```

Gets rejected job admissions caused by the finite frame capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Jobs/JobSchedulerStatistics.cs#L19).
