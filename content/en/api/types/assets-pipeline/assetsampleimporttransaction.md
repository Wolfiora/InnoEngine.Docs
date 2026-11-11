---
title: "AssetSampleImportTransaction"
description: "Reference for AssetSampleImportTransaction in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.425e1bd0143d29e6
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetSampleImportTransaction`

This reference describes `AssetSampleImportTransaction` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Advance`](#api-a7fa6565886859ca) | Method |
| [`BeginValidation`](#api-a592a34f8b7a7d5a) | Method |
| [`Cancel`](#api-ab72e3441685e7aa) | Method |
| [`Commit`](#api-aef00f8427fa376e) | Method |
| [`Dispose`](#api-419e12e45427bf5a) | Method |
| [`Rollback`](#api-cf6a68ab6f989512) | Method |
| [`isFaulted`](#api-839ad51f3d1f919b) | Property |
| [`isValidationComplete`](#api-d7c44679909b779e) | Property |
| [`target`](#api-3dd4470a66250f59) | Property |

## Type declaration

<a id="api-425e1bd0143d29e6"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetSampleImportTransaction adc8a5e7dee8238898cfd1d07b8df05fdbe73a5d1081ed59153919c34c9ad5b3 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetSampleImportTransaction : System.IDisposable
```

Owns a cancellable sample clone, its pinned generation and its owner-thread publication.

**Constraints:** Advance and Commit run on the AssetPipeline initialization thread. A prepared copy is indexed
in an isolated catalog for validation without publishing Changed; ordinary mutations and generation changes are deferred.
Rollback must finish before the pipeline or any validation dependency can be released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleImportTransaction.cs#L22).

## `Advance`

<a id="api-a7fa6565886859ca"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSampleImportTransaction.Advance b3136dce97d4b0e84de5ef8607f80db9c4d1a26a9757a23dacfe627daaafe8ae -->

```csharp
public bool Inno.Assets.Pipeline.AssetSampleImportTransaction.Advance()
```

Starts background indexing after cloning, then adopts its completed catalog without waiting.

**Returns:** True when the candidate is indexed and ready for BeginValidation; false while preparation is pending.

**Throws `System.InvalidOperationException`:** The transaction is finished or the caller is not its initialization thread.

**Throws `System.OperationCanceledException`:** Preparation or indexing observed cancellation before a candidate could be adopted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleImportTransaction.cs#L113).

## `BeginValidation`

<a id="api-a592a34f8b7a7d5a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSampleImportTransaction.BeginValidation(System.Func{Inno.Assets.Pipeline.IAssetSourceSnapshot,System.Threading.CancellationToken,System.Threading.Tasks.ValueTask}) d448a558846cbebde3d394a83a2b117ba361c2cb1604e46c50e7663e81846ea6 -->

```csharp
public void Inno.Assets.Pipeline.AssetSampleImportTransaction.BeginValidation(System.Func<Inno.Assets.Pipeline.IAssetSourceSnapshot, System.Threading.CancellationToken, System.Threading.Tasks.ValueTask> validate)
```

Starts one authoring preflight after indexing, retaining its dependencies until it drains.

**Parameter `validate`:** Owner-thread capture followed by asynchronous validation. Continuations must not mutate live Assets.

**Throws `System.ArgumentNullException`:** The validation callback is null.

**Throws `System.InvalidOperationException`:** The candidate is not indexed, validation already started, or the transaction is finished.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleImportTransaction.cs#L167).

## `Cancel`

<a id="api-ab72e3441685e7aa"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSampleImportTransaction.Cancel 107a3d33b5063d18b6511c110e4bd49f457f424a69386da0634bcf597f53635e -->

```csharp
public void Inno.Assets.Pipeline.AssetSampleImportTransaction.Cancel()
```

Requests cancellation of copying and validation while retaining all dependencies.

**Constraints:** Cancellation does not wait. Continue owner-thread retirement until Rollback or Dispose completes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleImportTransaction.cs#L222).

## `Commit`

<a id="api-aef00f8427fa376e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSampleImportTransaction.Commit(System.Action{Inno.Assets.AssetPath}) 1f9a1ba70d2543c0a124de41c6f7ee5c15d2205c626cbe5f510c1c265d2942a5 -->

```csharp
public void Inno.Assets.Pipeline.AssetSampleImportTransaction.Commit(System.Action<Inno.Assets.AssetPath>? beforePublish = null)
```

Publishes a successfully validated import exactly once, without waiting for unfinished work.

**Parameter `beforePublish`:** Optional owner-thread finalization, such as recording neutral History data. Failure leaves the
transaction open for Rollback and no Changed notification is published.

**Throws `System.InvalidOperationException`:** Validation is unfinished, the transaction is finished, or the caller is not its owner thread.

**Throws `System.OperationCanceledException`:** The import or its validation was canceled before publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleImportTransaction.cs#L203).

## `Dispose`

<a id="api-419e12e45427bf5a"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSampleImportTransaction.Dispose 24908f12372e808ef4db1e93a4bc794d9c0dbacf97f200debd5e493c9c6151c4 -->

```csharp
public void Inno.Assets.Pipeline.AssetSampleImportTransaction.Dispose()
```

Retires an uncommitted import on its owner thread after cancellation has drained.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Canceled work has not drained; disposal must be retried without releasing its owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleImportTransaction.cs#L271).

## `Rollback`

<a id="api-cf6a68ab6f989512"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSampleImportTransaction.Rollback e290ab665f03bfffdf0db31c9a269e14c708375a3f036f0e72fd9208cbd46ecd -->

```csharp
public void Inno.Assets.Pipeline.AssetSampleImportTransaction.Rollback()
```

Cancels work and removes an uncommitted copy after all background consumers have drained.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Background work is still draining; retain the transaction and retry on its owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleImportTransaction.cs#L230).

## `isFaulted`

<a id="api-839ad51f3d1f919b"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSampleImportTransaction.isFaulted a7b7eabc081d46e57eca7ea25b751a1bb2832b09b0205243c87e8a6f2400401d -->

```csharp
public bool Inno.Assets.Pipeline.AssetSampleImportTransaction.isFaulted { get; }
```

Gets whether failed publication or retirement has faulted the host and requires a restart.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleImportTransaction.cs#L94).

## `isValidationComplete`

<a id="api-d7c44679909b779e"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSampleImportTransaction.isValidationComplete b5aec98f513f732d0b7c3c80731602379b9c8a79998ba6a3776ccb5fadedb9da -->

```csharp
public bool Inno.Assets.Pipeline.AssetSampleImportTransaction.isValidationComplete { get; }
```

Gets whether background validation has drained and Commit can inspect its outcome.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleImportTransaction.cs#L99).

## `target`

<a id="api-3dd4470a66250f59"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSampleImportTransaction.target 6b26344dc575d95908044381d521fbdb92906d244925f352f1e75ec913fd4ddb -->

```csharp
public Inno.Assets.AssetPath Inno.Assets.Pipeline.AssetSampleImportTransaction.target { get; }
```

Gets the destination path with the original sample directory name preserved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleImportTransaction.cs#L89).
