---
title: "IRenderResourceService"
description: "Reference for IRenderResourceService in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.edeeacffe2ee4bd7
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `IRenderResourceService`

This reference describes `IRenderResourceService` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`AcquireBuffer`](#api-88887d83fabf7ff1) | Method |
| [`AcquireComputePipeline`](#api-b36b3bc41557306a) | Method |
| [`AcquireGraphicsPipeline`](#api-e7b89e2336455cba) | Method |
| [`AcquireKtxTexture`](#api-d31224e2e2256acd) | Method |
| [`AcquireTexture`](#api-3d2a93ef925f3884) | Method |
| [`PrewarmMaterial`](#api-4f157b290cb5c29f) | Method |
| [`PrewarmTexture`](#api-3f0fa174289b7ebe) | Method |
| [`PrewarmTextureArtifact`](#api-ea9783c64f660b81) | Method |
| [`ReadTextureAsync`](#api-a80b792801acaf29) | Method |
| [`Release`](#api-437525fb433feea5) | Method |
| [`TryResolveComputeMaterial`](#api-48780bf270a5a596) | Method |
| [`TryResolveGeometry`](#api-067795da2a83cfa5) | Method |
| [`TryResolveGraphicsMaterial`](#api-b02c6b5d267ee1a0) | Method |
| [`TryResolveMaterialArtifact`](#api-830568ad6e5578e5) | Method |
| [`TryResolveTexture`](#api-d69edd1905522226) | Method |
| [`TryResolveTextureArtifact`](#api-2d343557a12a4412) | Method |
| [`UpdateTexture`](#api-e54c149883d2fc15) | Method |
| [`ValidateShaderArtifact`](#api-4bcee44788459485) | Method |
| [`capabilities`](#api-b1bf3a3054981a7e) | Property |

## Type declaration

<a id="api-edeeacffe2ee4bd7"></a>
<!-- api: T:Inno.Rendering.Runtime.IRenderResourceService 8271ccc091b7b57dfd54a15c76ff6949abec9a7f0151be1ba68f0e040c31c894 -->

```csharp
public interface Inno.Rendering.Runtime.IRenderResourceService
```

Resolves neutral assets and provider-owned uploads into opaque resources for the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L16).

## `AcquireBuffer`

<a id="api-88887d83fabf7ff1"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.AcquireBuffer(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.PersistentBufferDescriptor,System.ReadOnlyMemory{System.Byte},System.String) c196473eddbb0b5af3e17ce56b2788be22c4d82f2992f5bf1766b6afa869fe7f -->

```csharp
Inno.Rendering.PersistentBufferHandle Inno.Rendering.Runtime.IRenderResourceService.AcquireBuffer(Inno.Rendering.Runtime.RenderPersistentResourceId id, long revision, Inno.Rendering.PersistentBufferDescriptor descriptor, System.ReadOnlyMemory<byte> initialData, string name)
```

Acquires or atomically replaces a provider-owned persistent buffer.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete buffer descriptor.

**Parameter `initialData`:** Complete initial bytes.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L89).

## `AcquireComputePipeline`

<a id="api-b36b3bc41557306a"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.AcquireComputePipeline(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.ComputePipelineDescriptor,System.String) e6915bc18dbb05856c0ea1b906c6228c99eeb750dd3a3abc26dec91044fe4f58 -->

```csharp
Inno.Rendering.ComputePipelineHandle Inno.Rendering.Runtime.IRenderResourceService.AcquireComputePipeline(Inno.Rendering.Runtime.RenderPersistentResourceId id, long revision, Inno.Rendering.ComputePipelineDescriptor descriptor, string name)
```

Acquires or atomically replaces a provider-owned compute pipeline.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete target compute program and interface.

**Parameter `name`:** Diagnostic name.

**Returns:** A compute pipeline owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L237).

## `AcquireGraphicsPipeline`

<a id="api-e7b89e2336455cba"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.AcquireGraphicsPipeline(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.GraphicsPipelineDescriptor,System.String) ce31ccd6480d3ab4ecacd8c3f71b5cc38a4cb6b5d0bee2cd211165a74bb49dd4 -->

```csharp
Inno.Rendering.GraphicsPipelineHandle Inno.Rendering.Runtime.IRenderResourceService.AcquireGraphicsPipeline(Inno.Rendering.Runtime.RenderPersistentResourceId id, long revision, Inno.Rendering.GraphicsPipelineDescriptor descriptor, string name)
```

Acquires or atomically replaces a provider-owned graphics pipeline.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete target program, interface, layout, and raster state.

**Parameter `name`:** Diagnostic name.

**Returns:** A graphics pipeline owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L212).

## `AcquireKtxTexture`

<a id="api-d31224e2e2256acd"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.AcquireKtxTexture(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,System.ReadOnlyMemory{System.Byte},System.Boolean,System.String) 21c5bfc02ad0828ac8c7eaf3f4f59ed02bf6272bb69b1ac644e972da72b1b98f -->

```csharp
Inno.Rendering.PersistentTextureHandle Inno.Rendering.Runtime.IRenderResourceService.AcquireKtxTexture(Inno.Rendering.Runtime.RenderPersistentResourceId id, long revision, System.ReadOnlyMemory<byte> containerData, bool sRgb, string name)
```

Acquires or atomically replaces a sampled texture from a portable KTX container.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `containerData`:** Complete validated KTX bytes.

**Parameter `sRgb`:** Whether texture sampling performs sRGB decoding.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L147).

## `AcquireTexture`

<a id="api-3d2a93ef925f3884"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.AcquireTexture(Inno.Rendering.Runtime.RenderPersistentResourceId,System.Int64,Inno.Rendering.RenderTextureDescriptor,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderTextureSubresourceData},System.String) e35394d7e0bafae4fe672d1601a1ca9fe30b673563fafd6bd7117781a2bf9b4f -->

```csharp
Inno.Rendering.PersistentTextureHandle Inno.Rendering.Runtime.IRenderResourceService.AcquireTexture(Inno.Rendering.Runtime.RenderPersistentResourceId id, long revision, Inno.Rendering.RenderTextureDescriptor descriptor, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.RenderTextureSubresourceData> subresources, string name)
```

Acquires or atomically replaces a provider-owned persistent texture.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete texture descriptor.

**Parameter `subresources`:** Complete mip and layer uploads.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L118).

## `PrewarmMaterial`

<a id="api-4f157b290cb5c29f"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.PrewarmMaterial(Inno.Rendering.Assets.MaterialAsset) 934b4aac80b5952de42a4b5a21a01a841f71d661e0f38394456e68df96e4e77c -->

```csharp
Inno.Rendering.Runtime.RenderTargetArtifactStatus Inno.Rendering.Runtime.IRenderResourceService.PrewarmMaterial(Inno.Rendering.Assets.MaterialAsset material)
```

Queues all target shader work required by a material without blocking the render thread.

**Parameter `material`:** Material whose selected static variant should be prepared.

**Returns:** The exact target artifact state for this material variant: Ready includes a usable last-good artifact,
Pending means compilation is ongoing, and Failed or Unavailable means no artifact can currently be used.

**Throws `System.ArgumentException`:** The material has no shader or declares an invalid static variant.

**Throws `System.InvalidOperationException`:** No target artifact provider is available for this runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L50).

## `PrewarmTexture`

<a id="api-3f0fa174289b7ebe"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.PrewarmTexture(Inno.Rendering.Assets.TextureAsset) 8fbba8e7506337f1f6d1c9a5b80af4ab032cff84381433ce73832f2f38c4eccb -->

```csharp
void Inno.Rendering.Runtime.IRenderResourceService.PrewarmTexture(Inno.Rendering.Assets.TextureAsset texture)
```

Queues target texture conversion without blocking the render thread.

**Parameter `texture`:** Texture source to prepare.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L58).

## `PrewarmTextureArtifact`

<a id="api-ea9783c64f660b81"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.PrewarmTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference) 598142f4bc27c17af7dc531416fc15e6263d6f311970188310deb3b9e70374ac -->

```csharp
void Inno.Rendering.Runtime.IRenderResourceService.PrewarmTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference texture)
```

Queues target conversion for a texture slot owned by any imported asset.

**Parameter `texture`:** Stable texture artifact reference to prepare.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L66).

## `ReadTextureAsync`

<a id="api-a80b792801acaf29"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.ReadTextureAsync(Inno.Rendering.PersistentTextureHandle,System.Int32,System.Threading.CancellationToken) c3c153614ca627eb72567aa017b0fdd6c8123793e862664ae3748aba7908572e -->

```csharp
System.Threading.Tasks.ValueTask<Inno.Rendering.RenderTextureReadbackResult> Inno.Rendering.Runtime.IRenderResourceService.ReadTextureAsync(Inno.Rendering.PersistentTextureHandle texture, int mipLevel = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Asynchronously copies one complete persistent texture mip into CPU-visible memory.

**Parameter `texture`:** Texture created with `Inno.Rendering.RenderTextureUsage.Readback`.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `cancellationToken`:** Cancellation for the caller's wait.

**Returns:** The immutable readback result after a later GPU frame completes it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L188).

## `Release`

<a id="api-437525fb433feea5"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.Release(Inno.Rendering.Runtime.RenderPersistentResourceId) 13d746639110de9857bdaa83c2ec7851796fc00fddda9cd723c1860bb3c1abd4 -->

```csharp
void Inno.Rendering.Runtime.IRenderResourceService.Release(Inno.Rendering.Runtime.RenderPersistentResourceId id)
```

Releases cached resources with this provider-owned identifier at a safe GPU mutation point.

**Constraints:** Calls between frames or during graph execution queue neutral identities until the next frame;
    runtime shutdown also retires them. Calls must occur on the rendering owner thread. Unused identities are ignored.

**Parameter `id`:** Stable resource identifier to release.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L417).

## `TryResolveComputeMaterial`

<a id="api-48780bf270a5a596"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveComputeMaterial(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.Assets.MaterialPropertyBlock,Inno.Rendering.Runtime.RenderMaterialPass@) 6e8d413d796c346e30b58bcf6bdae1daade1d7a2c26328521561af19509afcde -->

```csharp
bool Inno.Rendering.Runtime.IRenderResourceService.TryResolveComputeMaterial(Inno.Rendering.Assets.MaterialAsset material, Inno.Rendering.Assets.ShaderContractId contractId, Inno.Rendering.Assets.ShaderPassRoleId passRoleId, Inno.Rendering.Assets.MaterialPropertyBlock? overrides, out Inno.Rendering.Runtime.RenderMaterialPass? materialPass)
```

Resolves one compute material pass through an open provider contract and role.

**Parameter `material`:** Material asset to resolve.

**Parameter `contractId`:** Provider-owned shader contract.

**Parameter `passRoleId`:** Provider-owned pass role.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

**Returns:** True when a current or last-good pass is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L350).

## `TryResolveGeometry`

<a id="api-067795da2a83cfa5"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveGeometry(Inno.Rendering.Assets.GeometryAsset,Inno.Rendering.Runtime.RenderGeometry@) c14942af940319af5bc5f6c60add26b11744589a481af39234c0f08723084738 -->

```csharp
bool Inno.Rendering.Runtime.IRenderResourceService.TryResolveGeometry(Inno.Rendering.Assets.GeometryAsset geometry, out Inno.Rendering.Runtime.RenderGeometry? resolvedGeometry)
```

Resolves imported helper geometry into persistent vertex and index buffers.

**Parameter `geometry`:** Imported geometry asset.

**Parameter `resolvedGeometry`:** Receives generation-scoped GPU geometry when successful.

**Returns:** True when current or last-good geometry is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L370).

## `TryResolveGraphicsMaterial`

<a id="api-b02c6b5d267ee1a0"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveGraphicsMaterial(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.RenderVertexLayout,Inno.Rendering.Assets.MaterialPropertyBlock,Inno.Rendering.Runtime.RenderMaterialPass@) cf9f4caf697e4f47b8f2d0ebba333e982986339210e6812f12097b1f1d877666 -->

```csharp
bool Inno.Rendering.Runtime.IRenderResourceService.TryResolveGraphicsMaterial(Inno.Rendering.Assets.MaterialAsset material, Inno.Rendering.Assets.ShaderContractId contractId, Inno.Rendering.Assets.ShaderPassRoleId passRoleId, Inno.Rendering.RenderVertexLayout? vertexLayout, Inno.Rendering.Assets.MaterialPropertyBlock? overrides, out Inno.Rendering.Runtime.RenderMaterialPass? materialPass)
```

Resolves one graphics material pass through an open provider contract and role.

**Parameter `material`:** Material asset to resolve.

**Parameter `contractId`:** Provider-owned shader contract.

**Parameter `passRoleId`:** Provider-owned pass role.

**Parameter `vertexLayout`:** Expected vertex layout, or null for procedural geometry.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

**Returns:** True when a current or last-good pass is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L268).

## `TryResolveMaterialArtifact`

<a id="api-830568ad6e5578e5"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveMaterialArtifact(Inno.Rendering.Runtime.RenderPersistentResourceId,Inno.Rendering.Assets.RenderShaderArtifact,Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.ShaderProgramKind,Inno.Rendering.RenderVertexLayout,Inno.Rendering.Assets.MaterialPropertyBlock,Inno.Core.Diagnostics.IDiagnosticReporter,Inno.Rendering.Runtime.RenderMaterialPass@) 4923a93cf3f7ecdd761d921878cfdf1bb025c48166691bc1253c0703b4cfc088 -->

```csharp
bool Inno.Rendering.Runtime.IRenderResourceService.TryResolveMaterialArtifact(Inno.Rendering.Runtime.RenderPersistentResourceId scope, Inno.Rendering.Assets.RenderShaderArtifact artifact, Inno.Rendering.Assets.MaterialAsset material, Inno.Rendering.Assets.ShaderContractId contractId, Inno.Rendering.Assets.ShaderPassRoleId passRoleId, Inno.Rendering.ShaderProgramKind programKind, Inno.Rendering.RenderVertexLayout? vertexLayout, Inno.Rendering.Assets.MaterialPropertyBlock? overrides, Inno.Core.Diagnostics.IDiagnosticReporter diagnostics, out Inno.Rendering.Runtime.RenderMaterialPass? materialPass)
```

Resolves an explicitly compiled candidate in a caller-owned publication scope, without publishing it as an asset.

**Parameter `scope`:** Non-empty resource identity for this isolated consumer; release it when the consumer closes.

**Parameter `artifact`:** Complete immutable candidate built for the active device and exact Material variant.

**Parameter `material`:** Invocation-local values and a persistent Shader reference; neither asset is changed or retained.

**Parameter `contractId`:** Required provider-owned Shader contract.

**Parameter `passRoleId`:** Required role within the selected Technique.

**Parameter `programKind`:** Required graphics or compute program kind.

**Parameter `vertexLayout`:** Graphics layout, or null for procedural or compute work.

**Parameter `overrides`:** Optional invocation-local Material values.

**Parameter `diagnostics`:** Consumer-owned diagnostic reporter, not retained or forwarded to canonical asset diagnostics.

**Parameter `materialPass`:** Receives the current or complete last-good scoped pass.

**Returns:** True when the isolated publication can satisfy this request; failure never changes canonical programs.

**Throws `System.InvalidOperationException`:** No artifact decoder is configured, or resource retirement cannot complete.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L316).

## `TryResolveTexture`

<a id="api-d69edd1905522226"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveTexture(Inno.Rendering.Assets.TextureAsset,Inno.Rendering.PersistentTextureHandle@) a1fcf06d6095972c5c0e09a2e65e30da7e86477d070b75e85ba618f6f81323a9 -->

```csharp
bool Inno.Rendering.Runtime.IRenderResourceService.TryResolveTexture(Inno.Rendering.Assets.TextureAsset texture, out Inno.Rendering.PersistentTextureHandle resolvedTexture)
```

Resolves an imported texture into a persistent sampled texture.

**Parameter `texture`:** Imported texture asset.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

**Returns:** True when current or last-good texture content is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L387).

## `TryResolveTextureArtifact`

<a id="api-2d343557a12a4412"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,Inno.Rendering.PersistentTextureHandle@) 0e300cdca8633872c24620b8a141cf842d1e6906e986a4d3a2d70e017bcf4f9a -->

```csharp
bool Inno.Rendering.Runtime.IRenderResourceService.TryResolveTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference texture, out Inno.Rendering.PersistentTextureHandle resolvedTexture)
```

Resolves one imported artifact texture into a persistent sampled texture.

**Parameter `texture`:** Stable texture artifact reference.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

**Returns:** `true` when current or last-good texture content is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L404).

## `UpdateTexture`

<a id="api-e54c149883d2fc15"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.UpdateTexture(Inno.Rendering.PersistentTextureHandle,Inno.Rendering.RenderTextureRegion,System.ReadOnlyMemory{System.Byte}) 04245b1a8fc6ad569a1fcb18d1d2a4312acca06631ee0d759f85fe7ed16097e1 -->

```csharp
void Inno.Rendering.Runtime.IRenderResourceService.UpdateTexture(Inno.Rendering.PersistentTextureHandle texture, Inno.Rendering.RenderTextureRegion region, System.ReadOnlyMemory<byte> data)
```

Updates a rectangular region of an active persistent texture without recreating it.

**Parameter `texture`:** Texture owned by the active device generation.

**Parameter `region`:** Destination mip, texel rectangle, and layer range.

**Parameter `data`:** Tightly packed region bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L167).

## `ValidateShaderArtifact`

<a id="api-4bcee44788459485"></a>
<!-- api: M:Inno.Rendering.Runtime.IRenderResourceService.ValidateShaderArtifact(Inno.Rendering.Assets.RenderShaderArtifact) 334efe5121f5e316a805709e217bb6b25e686c73d731f7a87b60d7aa3b321aa7 -->

```csharp
void Inno.Rendering.Runtime.IRenderResourceService.ValidateShaderArtifact(Inno.Rendering.Assets.RenderShaderArtifact artifact)
```

Creates and retires every program in one compiled artifact through the active device without publishing it.

**Parameter `artifact`:** Complete target artifact whose binaries, links, and reflected interfaces must be accepted by the active device.

**Throws `System.InvalidOperationException`:** The call is outside a frame resource-mutation safety point, or the artifact fails device validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L32).

## `capabilities`

<a id="api-b1bf3a3054981a7e"></a>
<!-- api: P:Inno.Rendering.Runtime.IRenderResourceService.capabilities b442df629b813f2ac3e6ea86bfdcea5f613b0228c2d2304c2349ac9b8a5f006c -->

```csharp
Inno.Rendering.GraphicsCapabilities Inno.Rendering.Runtime.IRenderResourceService.capabilities { get; }
```

Gets the active backend-neutral capability snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L21).
