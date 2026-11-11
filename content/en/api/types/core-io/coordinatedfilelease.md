---
title: "CoordinatedFileLease"
description: "Reference for CoordinatedFileLease in Inno.Core.IO."
uid: api.inno.core.io.6daee97a7d12cdb0
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `CoordinatedFileLease`

This reference describes `CoordinatedFileLease` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireAsync`](#api-0259bb932eff0f2c) | Method |
| [`Dispose`](#api-bec24e840b687710) | Method |

## Type declaration

<a id="api-6daee97a7d12cdb0"></a>
<!-- api: T:Inno.Core.IO.CoordinatedFileLease 59646709b19428b7c0be2d114d95430045921faa3e10bc270de7cc21126d8ece -->

```csharp
public sealed class Inno.Core.IO.CoordinatedFileLease : System.IDisposable
```

Holds a persistent owner gate throughout waiting for and using a retireable leaf lease.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/CoordinatedFileLease.cs#L12).

## `AcquireAsync`

<a id="api-0259bb932eff0f2c"></a>
<!-- api: M:Inno.Core.IO.CoordinatedFileLease.AcquireAsync(System.String,System.String,System.TimeSpan,System.Boolean,System.Threading.CancellationToken) a617b40d79fb76810b7b0a88a06765f1aa1f6e6adc0a1ddef9d71e1ca6d0ff9e -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Core.IO.CoordinatedFileLease> Inno.Core.IO.CoordinatedFileLease.AcquireAsync(string coordinationPath, string leafPath, System.TimeSpan timeout, bool shared = false, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Acquires owner reading rights before opening or waiting for a leaf lease.

**Parameter `coordinationPath`:** The persistent owner gate, never removed by retirement.

**Parameter `leafPath`:** A distinct leaf path within the same owner boundary.

**Parameter `timeout`:** The complete wait budget, or infinite.

**Parameter `shared`:** Whether the leaf permits simultaneous readers.

**Parameter `cancellationToken`:** Cancellation while waiting for either gate.

**Returns:** Ownership retaining both gates until disposal.

**Throws `System.ArgumentException`:** A path is relative, the leaf escapes its owner, or the budget is invalid.

**Throws `System.TimeoutException`:** The complete wait budget expires.

**Throws `System.OperationCanceledException`:** The caller cancels before ownership is returned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/CoordinatedFileLease.cs#L55).

## `Dispose`

<a id="api-bec24e840b687710"></a>
<!-- api: M:Inno.Core.IO.CoordinatedFileLease.Dispose 12acaf245b396bb186afb9b3c99e7ac619683c6f8a2ce8d9fbb9dd2cdf4b3f9a -->

```csharp
public void Inno.Core.IO.CoordinatedFileLease.Dispose()
```

Releases the leaf before its persistent owner gate; neither file is deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/CoordinatedFileLease.cs#L98).
