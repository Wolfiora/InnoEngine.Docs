---
title: "IAssetArtifactLookup"
description: "Reference for IAssetArtifactLookup in Inno.Assets."
uid: api.inno.assets.66ee3b34aa4f6278
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `IAssetArtifactLookup`

This reference describes `IAssetArtifactLookup` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireArtifact`](#api-227b1da82fdf7c44) | Method |
| [`TryGetArtifact`](#api-fb4a51439ed7f490) | Method |

## Type declaration

<a id="api-66ee3b34aa4f6278"></a>
<!-- api: T:Inno.Assets.IAssetArtifactLookup 6c36d9a7cd7068717bd7d6dd5a5c61206d3c6b56ac058f9df0fcd97d62cec929 -->

```csharp
public interface Inno.Assets.IAssetArtifactLookup
```

Resolves verified named outputs from immutable asset artifact bundles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/IAssetArtifactLookup.cs#L8).

## `AcquireArtifact`

<a id="api-227b1da82fdf7c44"></a>
<!-- api: M:Inno.Assets.IAssetArtifactLookup.AcquireArtifact(System.Guid,System.String) a91a063d5cf6153332465a6d1841dd394b27f24a247091bb694ee43d24268d28 -->

```csharp
Inno.Assets.ArtifactLease Inno.Assets.IAssetArtifactLookup.AcquireArtifact(System.Guid persistentId, string outputName)
```

Retains one verified output so cache collection cannot remove an active generation.

**Parameter `persistentId`:** The persistent asset identity.

**Parameter `outputName`:** The required output protocol.

**Returns:** A caller-owned immutable artifact lease.

**Throws `System.InvalidOperationException`:** The requested output is unavailable or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/IAssetArtifactLookup.cs#L25).

## `TryGetArtifact`

<a id="api-fb4a51439ed7f490"></a>
<!-- api: M:Inno.Assets.IAssetArtifactLookup.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@) 9a3fbc9fa8feb96c25e20a302250b26309530cb4681ce6328dd251f6b22da22c -->

```csharp
bool Inno.Assets.IAssetArtifactLookup.TryGetArtifact(System.Guid persistentId, string outputName, out Inno.Assets.AssetArtifactInfo? artifact)
```

Tries to resolve one named immutable artifact output by persistent asset identity.

**Parameter `persistentId`:** Persistent identity of the artifact owner.

**Parameter `outputName`:** Exact stable artifact output name.

**Parameter `artifact`:** Receives verified output metadata without exposing the provider's physical location.

**Returns:** `true` when the artifact output exists and passes integrity validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Artifacts/IAssetArtifactLookup.cs#L45).
