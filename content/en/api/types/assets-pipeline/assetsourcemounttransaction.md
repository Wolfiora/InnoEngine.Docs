---
title: "AssetSourceMountTransaction"
description: "Reference for AssetSourceMountTransaction in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.f2b9d351ad4b7b18
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetSourceMountTransaction`

This reference describes `AssetSourceMountTransaction` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`, `Inno.Assets.Pipeline.IAssetSourceSnapshot`.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireArtifact`](#api-57deecc3975965ce) | Method |
| [`Activate`](#api-5c0fa79d8dcf1880) | Method |
| [`Complete`](#api-6a62d6fc850ff199) | Method |
| [`Dispose`](#api-9d7ed9d419213c83) | Method |
| [`GetFileSystemEntries`](#api-4649b3036c776bb2) | Method |
| [```Load``1```](#api-0db7fd5417d29f6c) | Method |
| [`Rollback`](#api-6138496dadbc3d3e) | Method |
| [`TryGetArtifact`](#api-bb524121ffcc8905) | Method |
| [`TryGetInfo`](#api-7717a5c02476d245) | Method |
| [`recoveryChanges`](#api-ea610917a15859e6) | Property |
| [`sourceMounts`](#api-3758b9cccae119c1) | Property |

## Type declaration

<a id="api-f2b9d351ad4b7b18"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetSourceMountTransaction a8d96fd765a731ae54489e502576c40da8e85c08f984a521bb24b735b6837255 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetSourceMountTransaction : System.IDisposable, Inno.Assets.Pipeline.IAssetSourceSnapshot
```

Holds an isolated source-mount candidate that can be inspected before it atomically replaces the active Asset Database.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L15).

## `AcquireArtifact`

<a id="api-57deecc3975965ce"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMountTransaction.AcquireArtifact(System.Guid,System.String) a60047742cc2080dd5a6120dabf8236ae493196933ffd2f137b22043681a36e0 -->

```csharp
public Inno.Assets.ArtifactLease Inno.Assets.Pipeline.AssetSourceMountTransaction.AcquireArtifact(System.Guid persistentId, string outputName)
```

Retains one verified output so cache collection cannot remove an active generation.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `outputName`:** The required output protocol.

**Returns:** A caller-owned immutable artifact lease.

**Throws `System.InvalidOperationException`:** The requested output is unavailable or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L136).

## `Activate`

<a id="api-5c0fa79d8dcf1880"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Activate 70ba9391ed1cc584bc4c0c67da6671165e2de4842c09255114e2e95b24e8e2d9 -->

```csharp
public void Inno.Assets.Pipeline.AssetSourceMountTransaction.Activate()
```

Activates this candidate without releasing the previous generation or notifying observers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L173).

## `Complete`

<a id="api-6a62d6fc850ff199"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Complete 98c8fa368ffda4f2ffc7e2db11aef61bd3487ba862fb0a14beda8d553046998f -->

```csharp
public void Inno.Assets.Pipeline.AssetSourceMountTransaction.Complete()
```

Commits an activated candidate, notifies observers, and retires the previous generation.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Retirement exceeded its deadline. Both generations remain owned and the host must restart.

**Throws `System.AggregateException`:** Publication or completed retirement failed; the host generation gate is faulted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L197).

## `Dispose`

<a id="api-9d7ed9d419213c83"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Dispose ebc8c958c4a8753c89f99fd84cd0c3c2bf874247373b2a73d29378a57df9909e -->

```csharp
public void Inno.Assets.Pipeline.AssetSourceMountTransaction.Dispose()
```

Discards an unfinished candidate and releases its rebuildable staging storage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L249).

## `GetFileSystemEntries`

<a id="api-4649b3036c776bb2"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMountTransaction.GetFileSystemEntries(System.Boolean) c1b47059b12ff184869bd1ac795a9cc47efd2209025098358c4825f10ba6a96b -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetFileEntry> Inno.Assets.Pipeline.AssetSourceMountTransaction.GetFileSystemEntries(bool includeDirectories = true)
```

Gets candidate source entries without publishing them to active AssetPipeline consumers.

**Parameter `includeDirectories`:** Whether directory entries should be included.

**Returns:** A stable candidate entry snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L83).

## ```Load``1```

<a id="api-0db7fd5417d29f6c"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Load``1(Inno.Assets.AssetPath) e8da348f632cfac66e12059f5404e69f40a8f01eeaa4dcfff12d38b5df008aaa -->

```csharp
public TAsset Inno.Assets.Pipeline.AssetSourceMountTransaction.Load<TAsset>(Inno.Assets.AssetPath path) where TAsset : Inno.Assets.AssetObject
```

Loads one candidate asset by isolated source path.

**Type parameter `TAsset`:** Required asset type.

**Parameter `path`:** Candidate source path.

**Returns:** The candidate asset instance.

**Throws `System.InvalidOperationException`:** Thrown when no compatible candidate asset exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L105).

## `Rollback`

<a id="api-6138496dadbc3d3e"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMountTransaction.Rollback cc26321a00c8c85f21f13c5720f2fe97942e41757ed891b8f2f29dfffd86549a -->

```csharp
public void Inno.Assets.Pipeline.AssetSourceMountTransaction.Rollback()
```

Discards the candidate or restores the previous generation after provisional activation.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Candidate retirement exceeded its deadline; its owners remain retained until host restart.

**Throws `System.AggregateException`:** Compensation or completed retirement failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L223).

## `TryGetArtifact`

<a id="api-bb524121ffcc8905"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMountTransaction.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@) c472decae2b2d5a565fb26db7991379de38c46054e2e58f7b174fc006455857f -->

```csharp
public bool Inno.Assets.Pipeline.AssetSourceMountTransaction.TryGetArtifact(System.Guid persistentId, string outputName, out Inno.Assets.AssetArtifactInfo? artifact)
```

Tries to resolve one named candidate artifact.

**Parameter `persistentId`:** Candidate asset identity.

**Parameter `outputName`:** Named artifact output.

**Parameter `artifact`:** Artifact information when available.

**Returns:** True when the candidate output exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L160).

## `TryGetInfo`

<a id="api-7717a5c02476d245"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSourceMountTransaction.TryGetInfo(Inno.Assets.AssetPath,Inno.Assets.AssetInfo@) ba2c7012232f681e8f157b6c8f71986c95590d5071db7922937c19143d928511 -->

```csharp
public bool Inno.Assets.Pipeline.AssetSourceMountTransaction.TryGetInfo(Inno.Assets.AssetPath path, out Inno.Assets.AssetInfo? info)
```

Tries to get candidate catalog information by isolated source path.

**Parameter `path`:** Candidate source path.

**Parameter `info`:** Candidate catalog information when available.

**Returns:** True when the candidate path is cataloged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L126).

## `recoveryChanges`

<a id="api-ea610917a15859e6"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSourceMountTransaction.recoveryChanges f1a191fe9853342e8d266e4976860a4d3e670ea7717968a91e5dfa16325e0e62 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.References.ReferenceRecoveryChange> Inno.Assets.Pipeline.AssetSourceMountTransaction.recoveryChanges { get; }
```

Gets neutral canonical reference outcomes after activation, or an empty set before activation or after rollback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L71).

## `sourceMounts`

<a id="api-3758b9cccae119c1"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSourceMountTransaction.sourceMounts 69ccf35e885ec3538bc3859fbfa9ae185f1aea4442e511a31e605e3d4264df5d -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetSourceMount> Inno.Assets.Pipeline.AssetSourceMountTransaction.sourceMounts { get; }
```

Gets the complete isolated mount snapshot represented by this candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/AssetSourceMountTransaction.cs#L65).
