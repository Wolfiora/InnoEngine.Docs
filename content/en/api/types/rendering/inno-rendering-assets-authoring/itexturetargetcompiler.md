---
title: "ITextureTargetCompiler"
description: "Reference for ITextureTargetCompiler in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.ebc5fc87b6071bc8
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ITextureTargetCompiler`

This reference describes `ITextureTargetCompiler` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CompileKtxAsync`](#api-26db0bf667b10e1e) | Method |

## Type declaration

<a id="api-ebc5fc87b6071bc8"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ITextureTargetCompiler 90e60ec1d4546014ae5ae42c03a58500fdad9d88512f1cf87315ef3c2ce0460f -->

```csharp
public interface Inno.Rendering.Assets.Authoring.ITextureTargetCompiler
```

Converts supported artist texture sources into a validated portable runtime container.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/TextureTargetCompiler.cs#L14).

## `CompileKtxAsync`

<a id="api-26db0bf667b10e1e"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ITextureTargetCompiler.CompileKtxAsync(System.IO.Stream,Inno.Rendering.Assets.TextureColorSpace,System.Threading.CancellationToken) de90ec7de25f2fba63ecc0113992b83686ccfcfb74d0b2d1a9e8c2d1a704926b -->

```csharp
System.Threading.Tasks.ValueTask<byte[]> Inno.Rendering.Assets.Authoring.ITextureTargetCompiler.CompileKtxAsync(System.IO.Stream source, Inno.Rendering.Assets.TextureColorSpace colorSpace, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Compiles one source texture into an uncompressed KTX artifact with a complete mip chain.

**Parameter `source`:** Borrowed encoded image stream retained by the caller until compilation completes.

**Parameter `colorSpace`:** Sampling color-space contract.

**Parameter `cancellationToken`:** Cancellation for the offline compiler process.

**Returns:** An operation producing complete KTX bytes suitable for a backend-neutral texture container upload.

**Throws `System.InvalidOperationException`:** Thrown when the target compiler rejects the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/TextureTargetCompiler.cs#L34).
