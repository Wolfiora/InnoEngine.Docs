---
title: "FileLease"
description: "Reference for FileLease in Inno.Core.IO."
uid: api.inno.core.io.965d4a56845471e3
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `FileLease`

This reference describes `FileLease` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireAsync`](#api-05f88da98b063b98) | Method |
| [`AcquireSharedAsync`](#api-d95e7b761992a35e) | Method |
| [`Dispose`](#api-81ed969f476b3edd) | Method |

## Type declaration

<a id="api-965d4a56845471e3"></a>
<!-- api: T:Inno.Core.IO.FileLease 7d52408dbb67bc4519bf988da4006cef2252415bfcb1a063af7e73c869326975 -->

```csharp
public sealed class Inno.Core.IO.FileLease : System.IDisposable
```

Owns shared reading or exclusive writing rights coordinated by independent processes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileLease.cs#L12).

## `AcquireAsync`

<a id="api-05f88da98b063b98"></a>
<!-- api: M:Inno.Core.IO.FileLease.AcquireAsync(System.String,System.TimeSpan,System.Threading.CancellationToken) fb42377fed0a00e1f73f8615a36ae7f11e209c431e36a90e6d73fd3e904c3261 -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Core.IO.FileLease> Inno.Core.IO.FileLease.AcquireAsync(string path, System.TimeSpan timeout, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Waits for exclusive ownership without blocking an owner thread or changing shared data.

**Parameter `path`:** The absolute lease file path; all participants must use the same persistent path.

**Parameter `timeout`:** The maximum wait, or `System.Threading.Timeout.InfiniteTimeSpan` for no time limit.

**Parameter `cancellationToken`:** Cancels waiting before ownership is returned.

**Returns:** The exclusive lease whose disposal permits the next participant to acquire ownership.

**Constraints:** Lease files remain after disposal. Removing them would let Unix processes lock different
inodes for the same path while an earlier participant still owns the original inode.

**Throws `System.ArgumentException`:** The path is empty or relative, or the timeout is negative and not infinite.

**Throws `System.TimeoutException`:** Another participant retains ownership beyond the permitted wait.

**Throws `System.OperationCanceledException`:** Waiting was canceled; no lease is returned.

**Throws `System.IO.IOException`:** The lease cannot be opened for a reason other than competing ownership.

**Throws `System.UnauthorizedAccessException`:** The operating system denies access to the lease path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileLease.cs#L52).

## `AcquireSharedAsync`

<a id="api-d95e7b761992a35e"></a>
<!-- api: M:Inno.Core.IO.FileLease.AcquireSharedAsync(System.String,System.TimeSpan,System.Threading.CancellationToken) 398e4018412b6403c21edf9a73b0bd94ceabcc5bfe0e1396ad5721d754d87a96 -->

```csharp
public static System.Threading.Tasks.ValueTask<Inno.Core.IO.FileLease> Inno.Core.IO.FileLease.AcquireSharedAsync(string path, System.TimeSpan timeout, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Pins an existing generation against exclusive retirement while permitting other readers.

**Parameter `path`:** The absolute persistent lease path previously initialized by an exclusive owner.

**Parameter `timeout`:** The maximum wait, or `System.Threading.Timeout.InfiniteTimeSpan` for no time limit.

**Parameter `cancellationToken`:** Cancels waiting before ownership is returned.

**Returns:** A shared lease; an exclusive lease cannot be acquired until every reader releases ownership.

**Throws `System.IO.FileNotFoundException`:** The owner has not initialized the persistent lease file.

**Throws `System.TimeoutException`:** An exclusive owner retains the file beyond the permitted wait.

**Throws `System.OperationCanceledException`:** Waiting was canceled; no lease is returned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileLease.cs#L83).

## `Dispose`

<a id="api-81ed969f476b3edd"></a>
<!-- api: M:Inno.Core.IO.FileLease.Dispose 0f0eb882bd3b84003d59c367c63d7da8a344f9448da71049e6bb56b18b0a0cdc -->

```csharp
public void Inno.Core.IO.FileLease.Dispose()
```

Releases ownership; repeated disposal has no effect and the lease file is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/FileLease.cs#L93).
