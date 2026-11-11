---
title: "AssetSampleTransformContext"
description: "Reference for AssetSampleTransformContext in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.cbcaeb79a1baa438
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetSampleTransformContext`

This reference describes `AssetSampleTransformContext` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`MapType`](#api-823abae8bd8559c2) | Method |
| [`TryGetSourceIdentity`](#api-bac748244cbe6896) | Method |
| [`cancellationToken`](#api-9a3fe3feff749939) | Property |
| [`identityMap`](#api-a5dacef7f8dbda36) | Property |
| [`source`](#api-de0086401ae91e80) | Property |
| [`stagedRoot`](#api-58fdd81b3d312e34) | Property |
| [`target`](#api-bd3cf3d874a8e35c) | Property |

## Type declaration

<a id="api-cbcaeb79a1baa438"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetSampleTransformContext 620089ccb15c5590753ce22d304de7ce4b8930ce5da8e450e5711dc9595e5b07 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetSampleTransformContext
```

Gives a source-language extension access to a staged sample clone before serialized references are remapped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L12).

## `MapType`

<a id="api-823abae8bd8559c2"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSampleTransformContext.MapType(System.Guid,System.Guid) 721d6c854c2498609c096b56d8be6e57221f3578945cda19c53ba169c5adfe3c -->

```csharp
public void Inno.Assets.Pipeline.AssetSampleTransformContext.MapType(System.Guid oldId, System.Guid newId)
```

Registers one source-language type replacement for subsequent structured asset rewriting.

**Parameter `oldId`:** The type identity stored in installed sample assets.

**Parameter `newId`:** The type identity declared by the cloned source.

**Throws `System.IO.InvalidDataException`:** A source identity is reused inconsistently.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L102).

## `TryGetSourceIdentity`

<a id="api-bac748244cbe6896"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSampleTransformContext.TryGetSourceIdentity(System.String,System.Guid@,System.Guid@) 453ec1843b00b9eb9a0c21659d34049d11b8aa2644ddd90d549427d4ec8c3d6c -->

```csharp
public bool Inno.Assets.Pipeline.AssetSampleTransformContext.TryGetSourceIdentity(string relativePath, out System.Guid oldId, out System.Guid newId)
```

Resolves the source and clone identity of one file relative to the sample directory.

**Parameter `relativePath`:** Slash-separated source-local file path below the sample directory.

**Parameter `oldId`:** Receives the installed source identity.

**Parameter `newId`:** Receives the writable clone identity.

**Returns:** Whether both identities were recorded from sample metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L73).

## `cancellationToken`

<a id="api-9a3fe3feff749939"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSampleTransformContext.cancellationToken 8bb78536177e9f4c30d45ef0fbf73a1c1a9b249763a0470b608fc17740b864ee -->

```csharp
public System.Threading.CancellationToken Inno.Assets.Pipeline.AssetSampleTransformContext.cancellationToken { get; }
```

Gets cancellation for this private, generation-pinned transformation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L51).

## `identityMap`

<a id="api-a5dacef7f8dbda36"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSampleTransformContext.identityMap 13027c92a10a3d3383e2311985783b7ff94ca6915fa18c9ff1eb605e8546a2e3 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<System.Guid, System.Guid> Inno.Assets.Pipeline.AssetSampleTransformContext.identityMap { get; }
```

Gets cloned source identities, including directory and file metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L56).

## `source`

<a id="api-de0086401ae91e80"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSampleTransformContext.source 6bc80be1d78aacdfb2881ad9c2ab42f6d843eb99340d9245f2e74b28f9ea5bd4 -->

```csharp
public Inno.Assets.AssetPath Inno.Assets.Pipeline.AssetSampleTransformContext.source { get; }
```

Gets the installed sample source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L41).

## `stagedRoot`

<a id="api-58fdd81b3d312e34"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSampleTransformContext.stagedRoot da5d26cb6cb5f796c28adb9bc125198574ea51325fa2125834ddaa8da62873c3 -->

```csharp
public string Inno.Assets.Pipeline.AssetSampleTransformContext.stagedRoot { get; }
```

Gets the absolute private staging directory; files here are committed only after all transforms succeed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L36).

## `target`

<a id="api-bd3cf3d874a8e35c"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSampleTransformContext.target 596d5410ee8310400d0341fe57477980dcf2ddb7b9335881f6abcb45924181fa -->

```csharp
public Inno.Assets.AssetPath Inno.Assets.Pipeline.AssetSampleTransformContext.target { get; }
```

Gets the writable project destination path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L46).
