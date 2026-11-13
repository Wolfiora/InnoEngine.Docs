---
uid: api.directory.engine.rendering
title: "Rendering"
kind: landing
owners: []
---

# Rendering

Find types in this project category. Each type links to its exact declarations and member contracts.

## Categories

| Category | Purpose |
| --- | --- |
| [Assets](assets/index.md) | Browse Assets contracts from Inno.Rendering.Assets, Inno.Rendering.Assets.Authoring. |
| [Runtime](runtime/index.md) | Output requests, render-model generations and owned GPU resource caches. |
| [Shaders](shaders/index.md) | Language-neutral shader functions, graph lowering, typed stages and structured regions. |

## Types

| Type | Purpose |
| --- | --- |
| [CompiledRenderAttachment](compiledrenderattachment/index.md) | Describes one compiled raster attachment. |
| [CompiledRenderBuffer](compiledrenderbuffer/index.md) | Describes one buffer allocation selected by render-graph compilation. |
| [CompiledRenderGraph](compiledrendergraph/index.md) | Contains validated, culled and topologically scheduled frame work. |
| [CompiledRenderPass](compiledrenderpass/index.md) | Provides immutable backend-facing metadata for one scheduled pass. |
| [CompiledRenderTexture](compiledrendertexture/index.md) | Describes one texture allocation selected by render-graph compilation. |
| [ComputePassBuilder](computepassbuilder/index.md) | Declares compute resource reads and unordered writes. |
| [ComputePipelineDescriptor](computepipelinedescriptor/index.md) | Describes a compute program candidate and reflected interface contract. |
| [ComputePipelineHandle](computepipelinehandle/index.md) | Identifies a backend-neutral compute pipeline object. |
| [CopyPassBuilder](copypassbuilder/index.md) | Declares explicit resource copy access. |
| [GraphicsApi](graphicsapi/index.md) | Identifies the graphics API family selected by the host without exposing a backend-native enum. Pipelines use this value only for capability-aware choices and target artifact selection; it does not require separate pipeline or shader source… |
| [GraphicsCapabilities](graphicscapabilities/index.md) | Provides an immutable capability snapshot for one device generation. |
| [GraphicsCapability](graphicscapability/index.md) | Declares backend-neutral optional graphics functionality. |
| [GraphicsLimits](graphicslimits/index.md) | Captures device limits used to validate and compile render graphs. |
| [GraphicsPipelineDescriptor](graphicspipelinedescriptor/index.md) | Describes a graphics program candidate and reflected interface contract. |
| [GraphicsPipelineHandle](graphicspipelinehandle/index.md) | Identifies a backend-neutral graphics pipeline object. |
| [GraphicsProgramArtifactCodec](graphicsprogramartifactcodec/index.md) | Transports compiled graphics programs and device binding facts independently of authored assets. |
| [IRenderDevice](irenderdevice/index.md) | Owns one graphics backend generation and its frame submission boundary. |
| [IRenderFrameGraphContributor](irenderframegraphcontributor/index.md) | Adds transient frame-final work, such as UI composition, without owning or advancing the graphics frame. |
| [IRenderFrameUploadService](irenderframeuploadservice/index.md) | Streams immutable CPU data into reusable GPU pages for the current frame. |
| [IRenderGraphBackend](irendergraphbackend/index.md) | Bridges compiled graph execution to a concrete graphics backend. |
| [IRenderLayerCompositionProgramProvider](irenderlayercompositionprogramprovider/index.md) | Supplies a backend-specific graphics program for compositing ordered render layers. |
| [PersistentBufferDescriptor](persistentbufferdescriptor/index.md) | Describes a persistent buffer and any vertex/index interpretation required at creation. |
| [PersistentBufferHandle](persistentbufferhandle/index.md) | Identifies a persistent device buffer without exposing a backend-native handle. |
| [PersistentTextureHandle](persistenttexturehandle/index.md) | Identifies a persistent device texture without exposing a backend-native handle. |
| [RasterPassBuilder](rasterpassbuilder/index.md) | Declares raster attachments and resource access. |
| [RenderBindingId](renderbindingid/index.md) | Identifies a shader binding by stable manifest name. |
| [RenderBlendEquation](renderblendequation/index.md) | Selects the arithmetic operation combining source and destination blend terms. |
| [RenderBlendFactor](renderblendfactor/index.md) | Selects one source or destination blend multiplier. |
| [RenderBlendState](renderblendstate/index.md) | Describes independent color and alpha blending without backend-native flags. |
| [RenderBufferDescriptor](renderbufferdescriptor/index.md) | Describes a render-graph buffer independently from a graphics backend. |
| [RenderBufferHandle](renderbufferhandle/index.md) | Identifies a frame-scoped render-graph buffer. |
| [RenderBufferSlice](renderbufferslice/index.md) | Identifies one range in a frame upload page without exposing its persistent backing buffer. |
| [RenderBufferUploadDescriptor](renderbufferuploaddescriptor/index.md) | Describes one CPU-to-GPU buffer upload that remains valid for the current frame only. |
| [RenderBufferUsage](renderbufferusage/index.md) | Declares intended buffer operations for capability and hazard validation. |
| [RenderClearColor](renderclearcolor/index.md) | Stores a linear clear color without depending on an engine math assembly. |
| [RenderCommandEncoder](rendercommandencoder/index.md) | Provides backend-neutral draw, dispatch and copy commands for one compiled pass. |
| [RenderCullMode](rendercullmode/index.md) | Selects triangle culling for a backend-neutral raster pipeline. |
| [RenderDataChannelId](renderdatachannelid/index.md) | Identifies one pipeline-owned frame-data channel without constraining its payload model. |
| [RenderDepthCompare](renderdepthcompare/index.md) | Selects depth comparison for a backend-neutral raster pipeline. |
| [RenderDevice](renderdevice/index.md) | Provides the protected opaque-handle boundary required by replaceable render-device backends. |
| [RenderDevice.DeviceHandleIdentity](devicehandleidentity/index.md) | Stores one decoded persistent device identity for use inside a concrete backend. |
| [RenderDevice.GraphHandleIdentity](graphhandleidentity/index.md) | Stores one decoded frame-scoped graph identity for use inside a concrete backend. |
| [RenderDeviceAllocationCounters](renderdeviceallocationcounters/index.md) | Reports cumulative successful native allocations made by a device&#39;s transient graph resource pools. Pool reuse does not increment these counters; retirement does not decrement them. They are not live resource counts, managed allocation coun… |
| [RenderDeviceFrameCounters](renderdeviceframecounters/index.md) | Contains backend-recorded GPU command submissions for the current frame. |
| [RenderFrameUploadProvider](renderframeuploadprovider/index.md) | Provides protected slice construction for replaceable frame-upload service implementations. |
| [RenderFrontFace](renderfrontface/index.md) | Selects the winding order interpreted as the front face. |
| [RenderGraphBuilder](rendergraphbuilder/index.md) | Builds one generation-scoped render graph from explicit passes and resources. |
| [RenderGraphCompileResult](rendergraphcompileresult/index.md) | Contains render-graph compilation diagnostics and an optional executable graph. |
| [RenderGraphDiagnostic](rendergraphdiagnostic/index.md) | Reports one structured render-graph compilation problem. |
| [RenderGraphMutationScope](rendergraphmutationscope/index.md) | Owns isolated graph additions; earlier pass declarations are frozen and failure removes every addition. |
| [RenderGraphNameScope](rendergraphnamescope/index.md) | Owns one nested diagnostic-name prefix in a render graph builder. |
| [RenderGraphValidationResult](rendergraphvalidationresult/index.md) | Describes graph validity and scheduling counts without creating resources or executable callbacks. |
| [RenderIndexFormat](renderindexformat/index.md) | Selects the integer representation of an index buffer. |
| [RenderLoadAction](renderloadaction/index.md) | Controls how existing attachment contents enter a raster pass. |
| [RenderPassBuilder](renderpassbuilder/index.md) | Provides ordering and common resource declarations for one pass. |
| [RenderPassContext](renderpasscontext/index.md) | Supplies the command encoder and immutable frame identity to a pass callback. |
| [RenderPassExecute&lt;TPassData&gt;](renderpassexecute/index.md) | Executes one frame-scoped pass payload. |
| [RenderPassKind](renderpasskind/index.md) | Distinguishes pass command domains for validation and backend execution. |
| [RenderPassRecordingMode](renderpassrecordingmode/index.md) | Controls where a frame-local pass callback records backend-neutral commands. |
| [RenderPhaseId](renderphaseid/index.md) | Identifies an open render phase protocol value. |
| [RenderPresentationSize](renderpresentationsize/index.md) | Stores one backend-neutral presentation extent in physical pixels. |
| [RenderPrimitiveTopology](renderprimitivetopology/index.md) | Selects the primitive assembly used by raster draw commands. |
| [RenderRasterState](renderrasterstate/index.md) | Stores backend-neutral fixed-function raster state. |
| [RenderResourceId](renderresourceid/index.md) | Identifies a pipeline-defined semantic resource without imposing a central resource catalog. |
| [RenderSamplerAddressMode](rendersampleraddressmode/index.md) | Selects texture addressing independently for each coordinate axis. |
| [RenderSamplerFilter](rendersamplerfilter/index.md) | Selects texture filtering independently from a graphics backend. |
| [RenderSamplerState](rendersamplerstate/index.md) | Describes one native-serializable backend-neutral sampler binding. |
| [RenderShaderBindingDescriptor](rendershaderbindingdescriptor/index.md) | Declares one manifest-derived shader binding used for reflection validation. |
| [RenderShaderBindingKind](rendershaderbindingkind/index.md) | Identifies a shader interface binding domain. |
| [RenderStencilCompare](renderstencilcompare/index.md) | Selects the comparison applied to stencil reference and stored values. |
| [RenderStencilFaceState](renderstencilfacestate/index.md) | Describes stencil behavior for one triangle face orientation. |
| [RenderStencilOperation](renderstenciloperation/index.md) | Selects the update applied to a stencil value. |
| [RenderStencilState](renderstencilstate/index.md) | Describes complete two-sided stencil state for one draw. |
| [RenderStorageAccess](renderstorageaccess/index.md) | Selects unordered storage-resource access for one shader binding. |
| [RenderStoreAction](renderstoreaction/index.md) | Controls whether attachment contents remain valid after a raster pass. |
| [RenderSurfaceHandle](rendersurfacehandle/index.md) | Identifies a persistent presentation surface without exposing a backend framebuffer or swapchain handle. |
| [RenderTarget](rendertarget/index.md) | Selects one render destination without exposing a swapchain or framebuffer handle. |
| [RenderTargetKind](rendertargetkind/index.md) | Identifies whether a request renders to the main swapchain or an offscreen target. |
| [RenderTexture](rendertexture/index.md) | Describes a persistent offscreen target without owning a backend-native handle. |
| [RenderTextureContainer](rendertexturecontainer/index.md) | Identifies a portable encoded texture container accepted by a render device. |
| [RenderTextureDescriptor](rendertexturedescriptor/index.md) | Describes a render-graph texture independently from a graphics backend. |
| [RenderTextureDimension](rendertexturedimension/index.md) | Identifies the dimensional shape of a backend-neutral texture resource. |
| [RenderTextureFormat](rendertextureformat/index.md) | Declares backend-neutral texture storage formats. |
| [RenderTextureHandle](rendertexturehandle/index.md) | Identifies a frame-scoped render-graph texture. |
| [RenderTextureReadbackHandle](rendertexturereadbackhandle/index.md) | Identifies one backend-neutral asynchronous texture readback operation. |
| [RenderTextureReadbackResult](rendertexturereadbackresult/index.md) | Contains immutable bytes copied from one complete texture mip. |
| [RenderTextureRegion](rendertextureregion/index.md) | Describes one texture subresource box for copy and blit commands. |
| [RenderTextureUsage](rendertextureusage/index.md) | Declares intended texture operations for capability and hazard validation. |
| [RenderUniformType](renderuniformtype/index.md) | Identifies the native-independent shape of one uniform binding. |
| [RenderVertexAttribute](rendervertexattribute/index.md) | Describes one vertex attribute in stream order. |
| [RenderVertexFormat](rendervertexformat/index.md) | Identifies one packed vertex attribute representation. |
| [RenderVertexLayout](rendervertexlayout/index.md) | Defines one interleaved vertex stream independently from a graphics backend. |
| [RenderVertexSemantic](rendervertexsemantic/index.md) | Identifies one backend-neutral vertex attribute semantic. |
| [RenderViewport](renderviewport/index.md) | Defines a destination pixel rectangle without assuming producer or rendering semantics. |
| [RenderViewTransform](renderviewtransform/index.md) | Stores backend-ready column-major transform matrices for one programmable view. |
| [ShaderInterface](shaderinterface/index.md) | Stores the manifest-derived binding contract verified after backend program creation. |
| [ShaderInterfaceBinding](shaderinterfacebinding/index.md) | Describes one reflected material binding expected by compiled programs. |
| [ShaderProgramKind](shaderprogramkind/index.md) | Selects the programmable stage combination of a pass. |
| [ShaderPropertyBindingKind](shaderpropertybindingkind/index.md) | Defines how one shader property enters the backend-neutral resource interface. |
| [ShaderPropertyId](shaderpropertyid/index.md) | Identifies a material property using a stable serialized string. |
| [ShaderPropertyType](shaderpropertytype/index.md) | Identifies an artist-facing shader property type. |
| [ShaderStage](shaderstage/index.md) | Identifies a programmable shader stage. |

