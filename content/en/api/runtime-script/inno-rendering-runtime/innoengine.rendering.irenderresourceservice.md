---
title: "IRenderResourceService"
description: "Reference for IRenderResourceService in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.b7a56edb685caf93
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `IRenderResourceService`

This reference describes `IRenderResourceService` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`AcquireBuffer`](#api-f22c26511ab5011d) | Method |
| [`AcquireComputePipeline`](#api-7ee8bb1cc5b59896) | Method |
| [`AcquireGraphicsPipeline`](#api-5264c89d4fea0780) | Method |
| [`AcquireKtxTexture`](#api-c284f09febec6b2b) | Method |
| [`AcquireTexture`](#api-314863dcd79e8c5d) | Method |
| [`PrewarmMaterial`](#api-cdcf9d62896a553e) | Method |
| [`PrewarmTexture`](#api-2d8aa93bcc029c77) | Method |
| [`PrewarmTextureArtifact`](#api-84f77f20071b531a) | Method |
| [`ReadTextureAsync`](#api-ee925a69634be771) | Method |
| [`Release`](#api-8392ae08ff3a12fa) | Method |
| [`TryResolveComputeMaterial`](#api-7c49bf888c7aef60) | Method |
| [`TryResolveGeometry`](#api-b3a1d624cb1b23b0) | Method |
| [`TryResolveGraphicsMaterial`](#api-06e808a5661dd9ba) | Method |
| [`TryResolveMaterialArtifact`](#api-68aeadab023e54c9) | Method |
| [`TryResolveTexture`](#api-7568e4f56a885275) | Method |
| [`TryResolveTextureArtifact`](#api-e4158ca62a87bfe6) | Method |
| [`UpdateTexture`](#api-509a268c98a2d863) | Method |
| [`ValidateShaderArtifact`](#api-a81dbeb8cdb23a9c) | Method |
| [`capabilities`](#api-3f556d69d18ed5af) | Property |

## Type declaration

<a id="api-b7a56edb685caf93"></a>
<!-- api: T:InnoEngine.Rendering.IRenderResourceService 1baee222bd77fdc331e42c513e30939ea5a117e9ec7f56d68343422865b96273 -->

```csharp
public interface InnoEngine.Rendering.IRenderResourceService
```

Resolves neutral assets and provider-owned uploads into opaque resources for the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L16).

## `AcquireBuffer`

<a id="api-f22c26511ab5011d"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.AcquireBuffer(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.PersistentBufferDescriptor,System.ReadOnlyMemory{System.Byte},System.String) 00fc17880ca85d50870b3a2a605a08d26f81582b2bb9c6801330e3b3e3adabcb -->

```csharp
InnoEngine.Rendering.PersistentBufferHandle InnoEngine.Rendering.IRenderResourceService.AcquireBuffer(InnoEngine.Rendering.RenderPersistentResourceId id, long revision, InnoEngine.Rendering.PersistentBufferDescriptor descriptor, System.ReadOnlyMemory<byte> initialData, string name)
```

Acquires or atomically replaces a provider-owned persistent buffer.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete buffer descriptor.

**Parameter `initialData`:** Complete initial bytes.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L89).

## `AcquireComputePipeline`

<a id="api-7ee8bb1cc5b59896"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.AcquireComputePipeline(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.ComputePipelineDescriptor,System.String) 6bbf7f3543120b845dfb3f21e00d3dc8dbc9335df7d52079f03750d4641b7640 -->

```csharp
InnoEngine.Rendering.ComputePipelineHandle InnoEngine.Rendering.IRenderResourceService.AcquireComputePipeline(InnoEngine.Rendering.RenderPersistentResourceId id, long revision, InnoEngine.Rendering.ComputePipelineDescriptor descriptor, string name)
```

Acquires or atomically replaces a provider-owned compute pipeline.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete target compute program and interface.

**Parameter `name`:** Diagnostic name.

**Returns:** A compute pipeline owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L237).

## `AcquireGraphicsPipeline`

<a id="api-5264c89d4fea0780"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.AcquireGraphicsPipeline(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.GraphicsPipelineDescriptor,System.String) 775f206faedf4220a5965aa165cd75ddcf39223f3edc3ab99fa5fa48928951ab -->

```csharp
InnoEngine.Rendering.GraphicsPipelineHandle InnoEngine.Rendering.IRenderResourceService.AcquireGraphicsPipeline(InnoEngine.Rendering.RenderPersistentResourceId id, long revision, InnoEngine.Rendering.GraphicsPipelineDescriptor descriptor, string name)
```

Acquires or atomically replaces a provider-owned graphics pipeline.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete target program, interface, layout, and raster state.

**Parameter `name`:** Diagnostic name.

**Returns:** A graphics pipeline owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L212).

## `AcquireKtxTexture`

<a id="api-c284f09febec6b2b"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.AcquireKtxTexture(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,System.ReadOnlyMemory{System.Byte},System.Boolean,System.String) 6fa7d52456724b6014a6200f8e63944d6ea22c7f4b783e4020294cb51a4d6e32 -->

```csharp
InnoEngine.Rendering.PersistentTextureHandle InnoEngine.Rendering.IRenderResourceService.AcquireKtxTexture(InnoEngine.Rendering.RenderPersistentResourceId id, long revision, System.ReadOnlyMemory<byte> containerData, bool sRgb, string name)
```

Acquires or atomically replaces a sampled texture from a portable KTX container.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `containerData`:** Complete validated KTX bytes.

**Parameter `sRgb`:** Whether texture sampling performs sRGB decoding.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L147).

## `AcquireTexture`

<a id="api-314863dcd79e8c5d"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.AcquireTexture(InnoEngine.Rendering.RenderPersistentResourceId,System.Int64,InnoEngine.Rendering.RenderTextureDescriptor,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderTextureSubresourceData},System.String) 0b38c49c31bbb12a95d64bad4e4969078162ab0cb317e4b49530e7f3765ba14e -->

```csharp
InnoEngine.Rendering.PersistentTextureHandle InnoEngine.Rendering.IRenderResourceService.AcquireTexture(InnoEngine.Rendering.RenderPersistentResourceId id, long revision, InnoEngine.Rendering.RenderTextureDescriptor descriptor, System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderTextureSubresourceData> subresources, string name)
```

Acquires or atomically replaces a provider-owned persistent texture.

**Parameter `id`:** Globally stable provider-owned resource ID.

**Parameter `revision`:** Provider-controlled content revision.

**Parameter `descriptor`:** Complete texture descriptor.

**Parameter `subresources`:** Complete mip and layer uploads.

**Parameter `name`:** Diagnostic name.

**Returns:** A handle owned by the active device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L118).

## `PrewarmMaterial`

<a id="api-cdcf9d62896a553e"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.PrewarmMaterial(InnoEngine.Rendering.MaterialAsset) aac3fe3ea44782e42d0c0b94fa884524fb51430537bfacbb5d68849b5a42b423 -->

```csharp
InnoEngine.Rendering.RenderTargetArtifactStatus InnoEngine.Rendering.IRenderResourceService.PrewarmMaterial(InnoEngine.Rendering.MaterialAsset material)
```

Queues all target shader work required by a material without blocking the render thread.

**Parameter `material`:** Material whose selected static variant should be prepared.

**Returns:** The exact target artifact state for this material variant: Ready includes a usable last-good artifact,
Pending means compilation is ongoing, and Failed or Unavailable means no artifact can currently be used.

**Throws `System.ArgumentException`:** The material has no shader or declares an invalid static variant.

**Throws `System.InvalidOperationException`:** No target artifact provider is available for this runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L50).

## `PrewarmTexture`

<a id="api-2d8aa93bcc029c77"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.PrewarmTexture(InnoEngine.Rendering.TextureAsset) 609127f12f1192b6bf653ef2c787cec3dd2e984252a2bdb178ac692e826c9a5b -->

```csharp
void InnoEngine.Rendering.IRenderResourceService.PrewarmTexture(InnoEngine.Rendering.TextureAsset texture)
```

Queues target texture conversion without blocking the render thread.

**Parameter `texture`:** Texture source to prepare.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L58).

## `PrewarmTextureArtifact`

<a id="api-84f77f20071b531a"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.PrewarmTextureArtifact(InnoEngine.Rendering.RenderTextureArtifactReference) e38f25c2bf4d354758c77e978b87f49cebe9b767183a55bce5b867695c90f571 -->

```csharp
void InnoEngine.Rendering.IRenderResourceService.PrewarmTextureArtifact(InnoEngine.Rendering.RenderTextureArtifactReference texture)
```

Queues target conversion for a texture slot owned by any imported asset.

**Parameter `texture`:** Stable texture artifact reference to prepare.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L66).

## `ReadTextureAsync`

<a id="api-ee925a69634be771"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.ReadTextureAsync(InnoEngine.Rendering.PersistentTextureHandle,System.Int32,System.Threading.CancellationToken) 8466de5ddf4ce63fa5ff5dc6deca4c9aaf257c0976325877b942493a4383c71e -->

```csharp
System.Threading.Tasks.ValueTask<InnoEngine.Rendering.RenderTextureReadbackResult> InnoEngine.Rendering.IRenderResourceService.ReadTextureAsync(InnoEngine.Rendering.PersistentTextureHandle texture, int mipLevel = 0, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Asynchronously copies one complete persistent texture mip into CPU-visible memory.

**Parameter `texture`:** Texture created with `InnoEngine.Rendering.RenderTextureUsage.Readback`.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `cancellationToken`:** Cancellation for the caller's wait.

**Returns:** The immutable readback result after a later GPU frame completes it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L188).

## `Release`

<a id="api-8392ae08ff3a12fa"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.Release(InnoEngine.Rendering.RenderPersistentResourceId) 026f1092f6a315270009303c263c27e191b1526ba1a39918455170e91eccfe45 -->

```csharp
void InnoEngine.Rendering.IRenderResourceService.Release(InnoEngine.Rendering.RenderPersistentResourceId id)
```

Releases cached resources with this provider-owned identifier at a safe GPU mutation point.

**Constraints:** Calls between frames or during graph execution queue neutral identities until the next frame;
            runtime shutdown also retires them. Calls must occur on the rendering owner thread. Unused identities are ignored.

**Parameter `id`:** Stable resource identifier to release.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L417).

## `TryResolveComputeMaterial`

<a id="api-7c49bf888c7aef60"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.TryResolveComputeMaterial(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.MaterialPropertyBlock,InnoEngine.Rendering.RenderMaterialPass@) 86207ac96be8ad4784b3203cf5163360fe5211eb4aa76d5f444864b1accc608a -->

```csharp
bool InnoEngine.Rendering.IRenderResourceService.TryResolveComputeMaterial(InnoEngine.Rendering.MaterialAsset material, InnoEngine.Rendering.ShaderContractId contractId, InnoEngine.Rendering.ShaderPassRoleId passRoleId, InnoEngine.Rendering.MaterialPropertyBlock? overrides, out InnoEngine.Rendering.RenderMaterialPass? materialPass)
```

Resolves one compute material pass through an open provider contract and role.

**Parameter `material`:** Material asset to resolve.

**Parameter `contractId`:** Provider-owned shader contract.

**Parameter `passRoleId`:** Provider-owned pass role.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

**Returns:** True when a current or last-good pass is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L350).

## `TryResolveGeometry`

<a id="api-b3a1d624cb1b23b0"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.TryResolveGeometry(InnoEngine.Rendering.GeometryAsset,InnoEngine.Rendering.RenderGeometry@) c16af034de5a40fd9972a4fed0a36e0494d4e00aee4f793f973d72f3c258b2cf -->

```csharp
bool InnoEngine.Rendering.IRenderResourceService.TryResolveGeometry(InnoEngine.Rendering.GeometryAsset geometry, out InnoEngine.Rendering.RenderGeometry? resolvedGeometry)
```

Resolves imported helper geometry into persistent vertex and index buffers.

**Parameter `geometry`:** Imported geometry asset.

**Parameter `resolvedGeometry`:** Receives generation-scoped GPU geometry when successful.

**Returns:** True when current or last-good geometry is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L370).

## `TryResolveGraphicsMaterial`

<a id="api-06e808a5661dd9ba"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.TryResolveGraphicsMaterial(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.MaterialPropertyBlock,InnoEngine.Rendering.RenderMaterialPass@) 101539391d303e2eaf6d7831411861bc79bc5bc7a0e8c38bcf13a36bc9bb3821 -->

```csharp
bool InnoEngine.Rendering.IRenderResourceService.TryResolveGraphicsMaterial(InnoEngine.Rendering.MaterialAsset material, InnoEngine.Rendering.ShaderContractId contractId, InnoEngine.Rendering.ShaderPassRoleId passRoleId, InnoEngine.Rendering.RenderVertexLayout? vertexLayout, InnoEngine.Rendering.MaterialPropertyBlock? overrides, out InnoEngine.Rendering.RenderMaterialPass? materialPass)
```

Resolves one graphics material pass through an open provider contract and role.

**Parameter `material`:** Material asset to resolve.

**Parameter `contractId`:** Provider-owned shader contract.

**Parameter `passRoleId`:** Provider-owned pass role.

**Parameter `vertexLayout`:** Expected vertex layout, or null for procedural geometry.

**Parameter `overrides`:** Optional frame-local material values.

**Parameter `materialPass`:** Receives the resolved pass when successful.

**Returns:** True when a current or last-good pass is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L268).

## `TryResolveMaterialArtifact`

<a id="api-68aeadab023e54c9"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.TryResolveMaterialArtifact(InnoEngine.Rendering.RenderPersistentResourceId,InnoEngine.Rendering.RenderShaderArtifact,InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.ShaderProgramKind,InnoEngine.Rendering.RenderVertexLayout,InnoEngine.Rendering.MaterialPropertyBlock,InnoEngine.Diagnostics.IDiagnosticReporter,InnoEngine.Rendering.RenderMaterialPass@) 653f51b54e26a661e5e5f49e0045a85eaf3e783c9be2b619c7282f3732856d46 -->

```csharp
bool InnoEngine.Rendering.IRenderResourceService.TryResolveMaterialArtifact(InnoEngine.Rendering.RenderPersistentResourceId scope, InnoEngine.Rendering.RenderShaderArtifact artifact, InnoEngine.Rendering.MaterialAsset material, InnoEngine.Rendering.ShaderContractId contractId, InnoEngine.Rendering.ShaderPassRoleId passRoleId, InnoEngine.Rendering.ShaderProgramKind programKind, InnoEngine.Rendering.RenderVertexLayout? vertexLayout, InnoEngine.Rendering.MaterialPropertyBlock? overrides, InnoEngine.Diagnostics.IDiagnosticReporter diagnostics, out InnoEngine.Rendering.RenderMaterialPass? materialPass)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L316).

## `TryResolveTexture`

<a id="api-7568e4f56a885275"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.TryResolveTexture(InnoEngine.Rendering.TextureAsset,InnoEngine.Rendering.PersistentTextureHandle@) 37f97be03a29915fcdca4505b68a17c8dd9ae1c4af47074d16768e1f9f121fe6 -->

```csharp
bool InnoEngine.Rendering.IRenderResourceService.TryResolveTexture(InnoEngine.Rendering.TextureAsset texture, out InnoEngine.Rendering.PersistentTextureHandle resolvedTexture)
```

Resolves an imported texture into a persistent sampled texture.

**Parameter `texture`:** Imported texture asset.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

**Returns:** True when current or last-good texture content is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L387).

## `TryResolveTextureArtifact`

<a id="api-e4158ca62a87bfe6"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.TryResolveTextureArtifact(InnoEngine.Rendering.RenderTextureArtifactReference,InnoEngine.Rendering.PersistentTextureHandle@) 0733a4c7c0327b493b0a8744cb6f43b937cc98262065f0c725cd5d81cdb49146 -->

```csharp
bool InnoEngine.Rendering.IRenderResourceService.TryResolveTextureArtifact(InnoEngine.Rendering.RenderTextureArtifactReference texture, out InnoEngine.Rendering.PersistentTextureHandle resolvedTexture)
```

Resolves one imported artifact texture into a persistent sampled texture.

**Parameter `texture`:** Stable texture artifact reference.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

**Returns:** `true` when current or last-good texture content is usable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L404).

## `UpdateTexture`

<a id="api-509a268c98a2d863"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.UpdateTexture(InnoEngine.Rendering.PersistentTextureHandle,InnoEngine.Rendering.RenderTextureRegion,System.ReadOnlyMemory{System.Byte}) 93ac5f75674f16d47474d926895ad3a0bd87cf3f1a310e8e7de63352acf3e53d -->

```csharp
void InnoEngine.Rendering.IRenderResourceService.UpdateTexture(InnoEngine.Rendering.PersistentTextureHandle texture, InnoEngine.Rendering.RenderTextureRegion region, System.ReadOnlyMemory<byte> data)
```

Updates a rectangular region of an active persistent texture without recreating it.

**Parameter `texture`:** Texture owned by the active device generation.

**Parameter `region`:** Destination mip, texel rectangle, and layer range.

**Parameter `data`:** Tightly packed region bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L167).

## `ValidateShaderArtifact`

<a id="api-a81dbeb8cdb23a9c"></a>
<!-- api: M:InnoEngine.Rendering.IRenderResourceService.ValidateShaderArtifact(InnoEngine.Rendering.RenderShaderArtifact) 7f3047ddd1aa0084c3e1fff06b332c9f1d49556c7138b94f8cb6790b48512a35 -->

```csharp
void InnoEngine.Rendering.IRenderResourceService.ValidateShaderArtifact(InnoEngine.Rendering.RenderShaderArtifact artifact)
```

Creates and retires every program in one compiled artifact through the active device without publishing it.

**Parameter `artifact`:** Complete target artifact whose binaries, links, and reflected interfaces must be accepted by the active device.

**Throws `System.InvalidOperationException`:** The call is outside a frame resource-mutation safety point, or the artifact fails device validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L32).

## `capabilities`

<a id="api-3f556d69d18ed5af"></a>
<!-- api: P:InnoEngine.Rendering.IRenderResourceService.capabilities b70e767dea0e5a3d608aa0a50f15492277b3cd371b3da2ca0e3d19c9b6219e12 -->

```csharp
InnoEngine.Rendering.GraphicsCapabilities InnoEngine.Rendering.IRenderResourceService.capabilities { get; }
```

Gets the active backend-neutral capability snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/IRenderResourceService.cs#L21).
