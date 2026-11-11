---
title: "ArtifactLease"
description: "Reference for ArtifactLease in Inno.Assets."
uid: api.inno.assets.c2652dab8f13f789
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `ArtifactLease`

This reference describes `ArtifactLease` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-3d1c044af81d7da6) | Method |
| [`OpenRead`](#api-bf0edfa2f856a457) | Method |
| [`ReadAllBytes`](#api-514191706160904e) | Method |
| [`info`](#api-95f13d6893bf7c69) | Property |

## Type declaration

<a id="api-c2652dab8f13f789"></a>
<!-- api: T:Inno.Assets.ArtifactLease 93ea9774b31515f19c776bd6e2196d652e0dc6489e49a89658e6d6fd9c46dfd9 -->

```csharp
public sealed class Inno.Assets.ArtifactLease : System.IDisposable
```

Keeps one verified immutable artifact generation available for an explicit lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L171).

## `Dispose`

<a id="api-3d1c044af81d7da6"></a>
<!-- api: M:Inno.Assets.ArtifactLease.Dispose cb928cbe930e04e51a74f7c19ff192c81a2982c708c8e8185758788d1ea424a6 -->

```csharp
public void Inno.Assets.ArtifactLease.Dispose()
```

Releases artifact ownership, retaining metadata and callback while the provider reports Pending.

**Constraints:** Pending may be wrapped in another exception; classify the complete failure with RetirementPendingException.Find.
Ordinary sibling failures remain observable after a later release attempt succeeds.
New reads stop when release begins; already opened streams retain their independent provider pins.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Provider retirement is unfinished or a concurrent release is in progress; retain this lease and retry at a safe point.

**Throws `System.AggregateException`:** The provider reports a wrapped failure, or release completes with ordinary errors retained from earlier pending attempts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L242).

## `OpenRead`

<a id="api-bf0edfa2f856a457"></a>
<!-- api: M:Inno.Assets.ArtifactLease.OpenRead 4e10d736456c338cc396ce8aaa443d491a02dd99c67b5aa1b9ec2b64de675c7d -->

```csharp
public System.IO.Stream Inno.Assets.ArtifactLease.OpenRead()
```

Opens a read-only stream over the retained immutable artifact.

**Returns:** A new independently owned read stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L197).

## `ReadAllBytes`

<a id="api-514191706160904e"></a>
<!-- api: M:Inno.Assets.ArtifactLease.ReadAllBytes 3a1d1dd9ab7cae248111a81cf989b3bde6d8665ffb9a95e3ef310a6671434bee -->

```csharp
public byte[] Inno.Assets.ArtifactLease.ReadAllBytes()
```

Reads one indexed payload through this lease's independently pinned stream.

**Returns:** Newly owned bytes with the exact indexed length; oversized or truncated payloads fail explicitly.

**Throws `System.IO.InvalidDataException`:** The payload exceeds the supported array size or does not have its indexed length.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L215).

## `info`

<a id="api-95f13d6893bf7c69"></a>
<!-- api: P:Inno.Assets.ArtifactLease.info a8d281289ad7b1222b08947da2007c402125f42abec2b150d63b3c1808c9a43b -->

```csharp
public Inno.Assets.AssetArtifactInfo Inno.Assets.ArtifactLease.info { get; }
```

Gets verified metadata for the retained artifact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Runtime/AssetResidency.cs#L189).
