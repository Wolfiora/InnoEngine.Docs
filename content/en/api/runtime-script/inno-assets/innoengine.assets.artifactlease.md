---
title: "ArtifactLease"
description: "Reference for ArtifactLease in Inno.Assets."
uid: api.inno.assets.runtime-script.083a94a96c0372fd
kind: api
owners:
  - Inno.Assets
apiSurface: runtime-script
contracts:
  - project.inno-assets
  - manual.scripting.use-script-api
---
# `ArtifactLease`

This reference describes `ArtifactLease` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2a1d40dd9a7e8fcf) | Method |
| [`Dispose`](#api-a263a673f2e914aa) | Method |
| [`OpenRead`](#api-0df823f3c6d5da06) | Method |
| [`ReadAllBytes`](#api-85acd68a90e75563) | Method |
| [`info`](#api-2f0fa5d26f058535) | Property |

## Type declaration

<a id="api-083a94a96c0372fd"></a>
<!-- api: T:InnoEngine.Assets.ArtifactLease db8fcb7685a75d3bb7b2f9243830d5dcf0a406026eec7875750acc1978760207 -->

```csharp
public sealed class InnoEngine.Assets.ArtifactLease : System.IDisposable
```

Keeps one verified immutable artifact generation available for an explicit lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L171).

## `#ctor`

<a id="api-2a1d40dd9a7e8fcf"></a>
<!-- api: M:InnoEngine.Assets.ArtifactLease.#ctor d50bfb5d729ce1dc415c435f6c0e076182a40dad95dec260fe81cbc4428441c9 -->

```csharp
public InnoEngine.Assets.ArtifactLease.ArtifactLease()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L171).

## `Dispose`

<a id="api-a263a673f2e914aa"></a>
<!-- api: M:InnoEngine.Assets.ArtifactLease.Dispose 5a398d3516ce6baf787501caa73ee316fbfe595f12e7c0fda980381351452919 -->

```csharp
public void InnoEngine.Assets.ArtifactLease.Dispose()
```

Releases artifact ownership, retaining metadata and callback while the provider reports Pending.

**Constraints:** Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find.
Ordinary sibling failures remain observable after a later release attempt succeeds.
New reads stop when release begins; already opened streams retain their independent provider pins.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Throws `System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L242).

## `OpenRead`

<a id="api-0df823f3c6d5da06"></a>
<!-- api: M:InnoEngine.Assets.ArtifactLease.OpenRead 485f2b8d832f95f0373d0ff2722d44b6a34d0dfff7402faa9b422aa1cae64e70 -->

```csharp
public System.IO.Stream InnoEngine.Assets.ArtifactLease.OpenRead()
```

Opens a read-only stream over the retained immutable artifact.

**Returns:** A new independently owned read stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L197).

## `ReadAllBytes`

<a id="api-85acd68a90e75563"></a>
<!-- api: M:InnoEngine.Assets.ArtifactLease.ReadAllBytes b47022ef422c6e3be4807bd361dcc99890c4d5ac37b0430681453370a46508f8 -->

```csharp
public byte[] InnoEngine.Assets.ArtifactLease.ReadAllBytes()
```

Reads one indexed payload through this lease's independently pinned stream.

**Returns:** Newly owned bytes with the exact indexed length; oversized or truncated payloads fail explicitly.

**Throws `System.IO.InvalidDataException`:** The payload exceeds the supported array size or does not have its indexed length.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L215).

## `info`

<a id="api-2f0fa5d26f058535"></a>
<!-- api: P:InnoEngine.Assets.ArtifactLease.info afa7383e65343b8d43b687cf321cd7716d1e19892af3815557c4033dbc9f511b -->

```csharp
public InnoEngine.Assets.AssetArtifactInfo InnoEngine.Assets.ArtifactLease.info { get; }
```

Gets verified metadata for the retained artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L189).
