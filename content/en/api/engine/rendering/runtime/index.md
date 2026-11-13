---
uid: api.directory.engine.rendering.runtime
title: "Runtime"
kind: landing
owners: []
---

# Runtime

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [ContentRenderTargetArtifactProvider](contentrendertargetartifactprovider/index.md) | Reads immutable render target artifacts from one verified logical content store. |
| [GraphicsSettings](graphicssettings/index.md) | Exposes current rendering configuration and immutable device state. |
| [IPreparedViewDrawable](ipreparedviewdrawable/index.md) | Encodes a resource-ready draw into the owning model&#39;s scene pass. |
| [IRenderModel](irendermodel/index.md) | Builds view requests from host output sessions without owning a host window. |
| [IRenderRequestSink](irenderrequestsink/index.md) | Accepts rendering-model-neutral requests without exposing runtime or backend ownership. |
| [IRenderResourceService](irenderresourceservice/index.md) | Resolves neutral assets and provider-owned uploads into opaque resources for the active device generation. |
| [IRenderRuntimeReloadTransaction](irenderruntimereloadtransaction/index.md) | Controls one isolated rendering-extension candidate from preparation through atomic completion. |
| [IRenderTargetArtifactProvider](irendertargetartifactprovider/index.md) | Resolves immutable, source-free target artifacts for the active rendering device. |
| [IViewContentCollector](iviewcontentcollector/index.md) | Collects all active world-content sources for one exact view. |
| [IViewContentFrameSource](iviewcontentframesource/index.md) | Completes frame-local input after every output has routed its views. |
| [IViewContentSink](iviewcontentsink/index.md) | Receives world items without imposing a rendering-model sort key. |
| [IViewContentSource](iviewcontentsource/index.md) | Contributes model-independent world items to selected views. |
| [IViewDrawable](iviewdrawable/index.md) | Prepares one model-independent drawable for a specific render pass. |
| [IViewPointerTarget](iviewpointertarget/index.md) | Receives pointer input after the rendering model resolves visible draw order. |
| [RenderExtensionStateContext](renderextensionstatecontext/index.md) | Restores neutral render settings through the canonical asset&#39;s actual owner and pinned references. |
| [RenderFeatureContext](renderfeaturecontext/index.md) | Supplies one configured feature with frame-scoped graph services. |
| [RenderFeatureExtensionAttribute](renderfeatureextensionattribute/index.md) | Marks a reloadable pipeline feature implementation with a stable extension identifier. |
| [RenderFrameData](renderframedata/index.md) | Carries generation-scoped, frame-only payloads between a request producer and its pipeline. |
| [RenderFrameStatistics](renderframestatistics/index.md) | Reports read-only statistics for the most recently completed render frame. |
| [RenderGeometry](rendergeometry/index.md) | Provides generation-scoped GPU buffers for an imported geometry helper asset. |
| [RenderGeometrySection](rendergeometrysection/index.md) | Describes one indexed range in resolved backend-neutral geometry. |
| [RenderMaterialPass](rendermaterialpass/index.md) | Represents one frame-resolved material pass and its material-owned bindings. |
| [RenderModelExtensionAttribute](rendermodelextensionattribute/index.md) | Marks a reloadable rendering model with a stable identity. |
| [RenderModelOutput](rendermodeloutput/index.md) | Gets one model&#39;s prepared pipeline data for a host-owned target. |
| [RenderOutputInput](renderoutputinput/index.md) | Frame-local input located in the output viewport&#39;s physical pixels. |
| [RenderOutputLayer](renderoutputlayer/index.md) | Assigns exactly one rendering model and its world-content sources to an output layer. |
| [RenderOutputRoute](renderoutputroute/index.md) | States the exact model order and exclusive world-content assignment for one output. |
| [RenderOutputSession](renderoutputsession/index.md) | Declares a host output without naming a camera or scene model. |
| [RenderPersistentResourceId](renderpersistentresourceid/index.md) | Identifies one provider-owned persistent GPU resource without exposing a native handle. |
| [RenderPipeline](renderpipeline/index.md) | Builds frame-local passes without prescribing a rendering model. |
| [RenderPipelineContext](renderpipelinecontext/index.md) | Supplies one request and frame-scoped services to a render pipeline. |
| [RenderPipelineExtensionAttribute](renderpipelineextensionattribute/index.md) | Marks a reloadable render pipeline implementation with a stable extension identifier. |
| [RenderPipelineFeature](renderpipelinefeature/index.md) | Adds capability-aware passes without owning frame graph state. |
| [RenderRequest](renderrequest/index.md) | Requests one pipeline-defined rendering operation without prescribing world semantics. |
| [RenderRequestProvider](renderrequestprovider/index.md) | Produces arbitrary render requests without prescribing a scene or rendering model. |
| [RenderRequestProviderContext](renderrequestprovidercontext/index.md) | Supplies frame timing, capabilities and the request sink to one provider invocation. |
| [RenderRequestProviderExtensionAttribute](renderrequestproviderextensionattribute/index.md) | Marks a reloadable provider that produces model-neutral render requests each frame. |
| [RenderResourceLimits](renderresourcelimits/index.md) | Sets finite native resource and asynchronous readback admission limits for one rendering owner. |
| [RenderResourceMap](renderresourcemap/index.md) | Stores open semantic graph resources for one pipeline request. |
| [RenderResourceProvider](renderresourceprovider/index.md) | Provides protected construction operations for replaceable render resource-service implementations. |
| [RenderResourceProvider.MaterialBinding](materialbinding/index.md) | Represents one material binding staged by a derived resource service. |
| [RenderResourceStatistics](renderresourcestatistics/index.md) | Reports control-thread resource occupancy and admission pressure without exposing backend objects. |
| [RenderRuntime](renderruntime/index.md) | Owns the sole graphics frame boundary and executes model-neutral render requests. |
| [RenderRuntimeFactory](renderruntimefactory/index.md) | Creates one rendering lifecycle feature for every isolated runtime session. |
| [RenderTargetArtifactStatus](rendertargetartifactstatus/index.md) | Describes the current availability of one target-specific rendering artifact. |
| [RenderTargetStore](rendertargetstore/index.md) | Owns persistent offscreen targets without exposing backend-native handles. |
| [RenderTextureSubresourceData](rendertexturesubresourcedata/index.md) | Stores one complete texture mip and addressable layer, slice, or cubemap-face upload. |
| [RenderView](renderview/index.md) | Describes one backend-neutral view produced by a rendering model. |
| [SelectedViewContentCollector](selectedviewcontentcollector/index.md) | Restricts a neutral world-content collector to an output layer&#39;s source IDs. |
| [ViewContentContext](viewcontentcontext/index.md) | Supplies one content source with the host-selected scene roots and an exact view. |
| [ViewContentItem](viewcontentitem/index.md) | One world item supplied to a rendering model without choosing its sort policy. |
| [ViewContentSourceExtensionAttribute](viewcontentsourceextensionattribute/index.md) | Discovers an independently reloadable world-content source. |

