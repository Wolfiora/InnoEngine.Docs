---
title: "IRenderTargetArtifactProvider"
description: "Reference for IRenderTargetArtifactProvider in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.e4b5ceb7a8cb047c
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IRenderTargetArtifactProvider`

This reference describes `IRenderTargetArtifactProvider` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`GetShaderArtifact`](#api-944da27f32e5f1a4) | Method |
| [`GetTextureArtifact`](#api-ad1576c3a9c153f6) | Method |
| [`ReadShaderDefinition`](#api-5d4f1ca42118655a) | Method |

## Type declaration

<a id="api-e4b5ceb7a8cb047c"></a>
<!-- api: T:Inno.Rendering.Runtime.IRenderTargetArtifactProvider 57f8de17a9013b434219af33ad9729df387374d3a28c6ce6e632bcf28d0c464f -->

```csharp
public interface Inno.Rendering.Runtime.IRenderTargetArtifactProvider
```

Resolves immutable, source-free target artifacts for the active rendering device.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/IRenderTargetArtifactProvider.cs#L11).

## `GetShaderArtifact`

<a id="api-944da27f32e5f1a4"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Assets.RenderShaderArtifact@) 3609c14c9ed374fcd32a3c2cc29ef1c4843cbcd5d4ba6f1ad93771a975cbadd5 -->

```csharp
Inno.Rendering.Runtime.RenderTargetArtifactStatus Inno.Rendering.Runtime.IRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset shader, Inno.Rendering.Assets.RenderShaderVariant variant, Inno.Rendering.GraphicsCapabilities capabilities, out Inno.Rendering.Assets.RenderShaderArtifact? artifact)
```

Resolves the target shader matching one runtime asset, variant, and device capability snapshot.

**Parameter `shader`:** The imported runtime shader description.

**Parameter `variant`:** The exact material keyword selection.

**Parameter `capabilities`:** The active device capabilities used to select a packaged backend target.

**Parameter `artifact`:** Receives the validated source-free artifact when it exists.

**Returns:** The current artifact availability. `Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` guarantees that
`artifact` is non-null.

**Throws `System.ArgumentException`:** Thrown when `shader` or `capabilities` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/IRenderTargetArtifactProvider.cs#L49).

## `GetTextureArtifact`

<a id="api-ad1576c3a9c153f6"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.ReadOnlyMemory{System.Byte}@) d9af13029a2a0f33e5856c2f966d5cccb0fb8752ad56e28289080827dff7fdf6 -->

```csharp
Inno.Rendering.Runtime.RenderTargetArtifactStatus Inno.Rendering.Runtime.IRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference texture, out System.ReadOnlyMemory<byte> artifact)
```

Resolves the portable KTX artifact for one imported runtime texture.

**Parameter `texture`:** Stable reference to the imported texture slot.

**Parameter `artifact`:** Receives immutable KTX bytes when the artifact exists and is non-empty.

**Returns:** The current artifact availability. `Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` guarantees that
`artifact` is non-empty.

**Throws `System.ArgumentNullException`:** Thrown when `texture` is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/IRenderTargetArtifactProvider.cs#L72).

## `ReadShaderDefinition`

<a id="api-5d4f1ca42118655a"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.ReadShaderDefinition(Inno.Rendering.Assets.RenderShaderArtifact) 5c14d9497306e7e3628884c30d823bd6a5744f47ed1641a28b36d3ee7ba80e82 -->

```csharp
Inno.Rendering.Assets.ShaderDefinition Inno.Rendering.Runtime.IRenderTargetArtifactProvider.ReadShaderDefinition(Inno.Rendering.Assets.RenderShaderArtifact artifact)
```

Resolves the exact material contract stored with a compiled program using the current owner reference context.

**Parameter `artifact`:** One immutable program publication, including its native-serialized runtime definition.

**Returns:** A detached definition belonging to this artifact, never the latest uncompiled source definition.

**Throws `System.InvalidOperationException`:** The publication cannot be decoded in the current owner generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Deployment/IRenderTargetArtifactProvider.cs#L25).
