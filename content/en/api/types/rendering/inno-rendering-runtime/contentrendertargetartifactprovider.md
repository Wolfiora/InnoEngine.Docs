---
title: "ContentRenderTargetArtifactProvider"
description: "Reference for ContentRenderTargetArtifactProvider in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.66fac24184577469
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `ContentRenderTargetArtifactProvider`

This reference describes `ContentRenderTargetArtifactProvider` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.Runtime.IRenderTargetArtifactProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bde5d8add0b04ba5) | Method |
| [`GetShaderArtifact`](#api-a5e6f5bfe491df90) | Method |
| [`GetTextureArtifact`](#api-b97261d90a146217) | Method |
| [`ReadShaderDefinition`](#api-13492b94b5aec691) | Method |

## Type declaration

<a id="api-66fac24184577469"></a>
<!-- api: T:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider b28935a2457721ed8704a24f130f2f667f489a3490497cef5b52ede58e2551a6 -->

```csharp
public sealed class Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider : Inno.Rendering.Runtime.IRenderTargetArtifactProvider
```

Reads immutable render target artifacts from one verified logical content store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/ContentRenderTargetArtifactProvider.cs#L15).

## `#ctor`

<a id="api-bde5d8add0b04ba5"></a>
<!-- api: M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.#ctor(Inno.Content.IRuntimeContentStore,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) e479ec35bedc1c98a5b5405b9b34554135043d3f3f4e68fc7bf58f4bdce92553 -->

```csharp
public Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.ContentRenderTargetArtifactProvider(Inno.Content.IRuntimeContentStore content, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Creates a provider borrowing one source-free content store.

**Parameter `content`:** The verified immutable content store, borrowed for this provider's lifetime.

**Throws `System.ArgumentNullException`:** A required content or serialization service is null.

**Parameter `serialization`:** The runtime owner serialization registry.

**Parameter `context`:** Complete runtime asset/reference context used to resolve captured texture defaults.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/ContentRenderTargetArtifactProvider.cs#L37).

## `GetShaderArtifact`

<a id="api-a5e6f5bfe491df90"></a>
<!-- api: M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Assets.RenderShaderArtifact@) aba6c02c6a313ad3fd6e5e78328cfab02151ceb8613fda15fbc0bfac43f1ce3b -->

```csharp
public Inno.Rendering.Runtime.RenderTargetArtifactStatus Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset shader, Inno.Rendering.Assets.RenderShaderVariant variant, Inno.Rendering.GraphicsCapabilities capabilities, out Inno.Rendering.Assets.RenderShaderArtifact? artifact)
```

Loads and validates one packaged shader target artifact when it exists.

**Parameter `shader`:** The imported backend-neutral shader asset.

**Parameter `variant`:** The exact material keyword selection.

**Parameter `capabilities`:** The active graphics capability snapshot.

**Parameter `artifact`:** Receives the decoded artifact when present.

**Returns:** `Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when the deployed artifact exists; otherwise,
    `Inno.Rendering.Runtime.RenderTargetArtifactStatus.Unavailable`.

**Throws `System.IO.InvalidDataException`:** Thrown when a deployed artifact exists but is corrupt or mismatched.

**Throws `System.ArgumentNullException`:** Thrown when `shader` or `capabilities` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/ContentRenderTargetArtifactProvider.cs#L87).

## `GetTextureArtifact`

<a id="api-b97261d90a146217"></a>
<!-- api: M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.ReadOnlyMemory{System.Byte}@) 6a144a3c2cca6eedf2012b305de8e6674956bfd87b8edf419653e62d80ead606 -->

```csharp
public Inno.Rendering.Runtime.RenderTargetArtifactStatus Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference texture, out System.ReadOnlyMemory<byte> artifact)
```

Loads one packaged portable texture artifact when it exists.

**Parameter `texture`:** The imported texture description.

**Parameter `artifact`:** Receives immutable KTX bytes when present.

**Returns:** `Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when the deployed artifact exists; otherwise,
    `Inno.Rendering.Runtime.RenderTargetArtifactStatus.Unavailable`.

**Throws `System.IO.InvalidDataException`:** Thrown when a deployed texture artifact is empty.

**Throws `System.ArgumentNullException`:** Thrown when `texture` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/ContentRenderTargetArtifactProvider.cs#L145).

## `ReadShaderDefinition`

<a id="api-13492b94b5aec691"></a>
<!-- api: M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.ReadShaderDefinition(Inno.Rendering.Assets.RenderShaderArtifact) 31bf8bd7b7e84252746f0dcb495f7b4dc43a74ace60cb5727f33deddba10ff0d -->

```csharp
public Inno.Rendering.Assets.ShaderDefinition Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.ReadShaderDefinition(Inno.Rendering.Assets.RenderShaderArtifact artifact)
```

Reads and validates the shader definition value from its authoritative source.

**Parameter `artifact`:** The resolved immutable artifact payload returned to the caller.

**Returns:** The validated shader definition that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/ContentRenderTargetArtifactProvider.cs#L56).
