---
title: "RenderRuntime"
description: "Reference for RenderRuntime in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.c1bd87a2dbbbc970
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderRuntime`

This reference describes `RenderRuntime` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Runtime.Contracts.RuntimeSubsystem`.

**Direct interfaces:** `Inno.Rendering.Runtime.IRenderRequestSink`, `Inno.Rendering.Runtime.IViewContentCollector`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c641e35d939ca9dd) | Method |
| [`BeginExtensionReload`](#api-b3b09c19db8bc875) | Method |
| [`Collect`](#api-8d666c8af917f3db) | Method |
| [`EnterExecutionScope`](#api-f0fc85d1e5af23d0) | Method |
| [`OnBeginFrame`](#api-34835b59876b433d) | Method |
| [`OnCompleteOutput`](#api-342e45b214e6cee5) | Method |
| [`OnPrepareOutput`](#api-9ed44c3a15e153a6) | Method |
| [`OnProduceOutput`](#api-042403c2a388c868) | Method |
| [`OnStart`](#api-15720398b37ec1d1) | Method |
| [`OnStop`](#api-ec0616ec057f2ba6) | Method |
| [`RegisterContributor`](#api-88500b9d855ab96e) | Method |
| [`SetPrimaryModelOutputEnabled`](#api-5a1e27ec92db6c14) | Method |
| [`SetPrimaryRoute`](#api-7115fed28ffea743) | Method |
| [`Submit`](#api-84f7487ac40aa600) | Method |
| [`SubmitComposition`](#api-c8dcef181b81403f) | Method |
| [`TryActivateDefaultPipeline`](#api-c55d584f98011b12) | Method |
| [`UnregisterContributor`](#api-2d186cc09ea6bf8d) | Method |
| [`currentFrameIndex`](#api-a5a239b47e88054e) | Property |
| [`deviceGeneration`](#api-6eb215d234abc5b1) | Property |
| [`resources`](#api-14db66e3868f3151) | Property |
| [`resourceStatistics`](#api-6d590908fd483622) | Property |
| [`targets`](#api-da2f332616d2ec98) | Property |
| [`viewContent`](#api-2026acdf364a951a) | Property |

## Type declaration

<a id="api-c1bd87a2dbbbc970"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderRuntime 1ab46c99fa0a7b67010cf973813772e53315073d685e3c940081060f49ceb524 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderRuntime : Inno.Runtime.Contracts.RuntimeSubsystem, Inno.Rendering.Runtime.IRenderRequestSink, Inno.Rendering.Runtime.IViewContentCollector
```

Owns the sole graphics frame boundary and executes model-neutral render requests.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderFrameScratch.cs#L7).

## `#ctor`

<a id="api-c641e35d939ca9dd"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Rendering.IRenderDevice,Inno.Core.Diagnostics.IDiagnosticReporter,System.Collections.Generic.IEnumerable{Inno.Rendering.IRenderFrameGraphContributor},Inno.Rendering.Runtime.IRenderTargetArtifactProvider,System.Func{Inno.References.ContentReadScope},System.Func{Inno.Rendering.RenderPresentationSize,Inno.Rendering.RenderViewport},Inno.Rendering.Runtime.RenderResourceLimits,System.Func{Inno.Input.InputSnapshot},System.Func{System.Nullable{Inno.Rendering.RenderPresentationSize}},Inno.Rendering.IRenderLayerCompositionProgramProvider) 1fee43c930154ff531e5c98dd68a89fcaee6c6af102bb53254923d3bb67d6087 -->

```csharp
public Inno.Rendering.Runtime.RenderRuntime.RenderRuntime(Inno.Extensibility.Types.TypeCatalog types, Inno.Rendering.IRenderDevice device, Inno.Core.Diagnostics.IDiagnosticReporter diagnostics, System.Collections.Generic.IEnumerable<Inno.Rendering.IRenderFrameGraphContributor>? contributors = null, Inno.Rendering.Runtime.IRenderTargetArtifactProvider? targetArtifacts = null, System.Func<Inno.References.ContentReadScope>? contentScopeProvider = null, System.Func<Inno.Rendering.RenderPresentationSize, Inno.Rendering.RenderViewport>? primaryPresentationViewportProvider = null, Inno.Rendering.Runtime.RenderResourceLimits? resourceLimits = null, System.Func<Inno.Input.InputSnapshot>? inputSnapshotProvider = null, System.Func<Inno.Rendering.RenderPresentationSize?>? primaryInputSurfaceSizeProvider = null, Inno.Rendering.IRenderLayerCompositionProgramProvider? compositionProgramProvider = null)
```

Creates a render runtime without installing any concrete pipeline.

**Parameter `device`:** Active backend-neutral device.

**Parameter `types`:** The type catalog that owns render extension generations.

**Parameter `diagnostics`:** Owner-bound structured diagnostic producer.

**Parameter `contributors`:** Optional frame-final contributors such as an ImGui backend.

**Parameter `targetArtifacts`:** Provider of immutable target artifacts. Editor hosts may provide an asynchronous authoring-backed
implementation, while Player hosts provide a source-free deployment implementation.

**Parameter `contentScopeProvider`:** Optional host callback that supplies explicit current-frame content without coupling Rendering to Scene or documents.

**Parameter `primaryPresentationViewportProvider`:** Optional host callback that selects the content region within the primary presentation surface.
The complete surface is used when omitted.

**Throws `System.ArgumentException`:** The contributor sequence contains a null entry or the same contributor more than once.
No rendering generation is registered in this case.

**Parameter `resourceLimits`:** Finite native cache and asynchronous readback limits; omitted values use the engine defaults.

**Parameter `inputSnapshotProvider`:** Optional host callback that reads the completed session input snapshot when output is collected.

**Parameter `primaryInputSurfaceSizeProvider`:** Optional logical input extent used for pointer scaling; returns null while input has no surface.

**Parameter `compositionProgramProvider`:** Backend-specific program provider used when the host composites multiple render layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L109).

## `BeginExtensionReload`

<a id="api-b3b09c19db8bc875"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.BeginExtensionReload c09ef99babe1d579c765dc4f466dd8f61d603336c9ff653a927d82b1130bb238 -->

```csharp
public Inno.Rendering.Runtime.IRenderRuntimeReloadTransaction Inno.Rendering.Runtime.RenderRuntime.BeginExtensionReload()
```

Begins an isolated rendering-extension reload transaction at a frame boundary.

**Returns:** A transaction that preserves the active generation until its candidate is explicitly completed.

**Throws `System.InvalidOperationException`:** Thrown during an open frame, during retirement, after a terminal generation failure, or while another
rendering reload transaction is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Pipelines.cs#L55).

## `Collect`

<a id="api-8d666c8af917f3db"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.Collect(Inno.Rendering.Runtime.ViewContentContext) db25d9826d7ac9763ec8636461c91e35dea7e712c61881596d38d21d644da1d6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.ViewContentItem> Inno.Rendering.Runtime.RenderRuntime.Collect(Inno.Rendering.Runtime.ViewContentContext context)
```

Collects frame requests from rendering models and registered providers.

**Parameter `context`:** The context that supplies state and services for this operation.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L182).

## `EnterExecutionScope`

<a id="api-f0fc85d1e5af23d0"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.EnterExecutionScope 6262c9883e5d38e8bc75a4ad9fd927dbf843d5e5a0f56ee37dc51ef17e43a473 -->

```csharp
public System.IDisposable Inno.Rendering.Runtime.RenderRuntime.EnterExecutionScope()
```

Binds this rendering runtime to script-facing graphics APIs for the current asynchronous execution flow.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Throws `System.ObjectDisposedException`:** Thrown when this rendering runtime has been disposed.

**Throws `System.InvalidOperationException`:** Retirement has started or generation cleanup has faulted the owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L239).

## `OnBeginFrame`

<a id="api-34835b59876b433d"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame) 5fbc82ca690fa08ce51c2452175983eab34987e308b90c7cfaada5057fd4935d -->

```csharp
protected override void Inno.Rendering.Runtime.RenderRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Captures snapshots and binds service façades.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Frames.cs#L25).

## `OnCompleteOutput`

<a id="api-342e45b214e6cee5"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.OnCompleteOutput(Inno.Runtime.Contracts.RuntimeFrame) 2faca6b29953ce0c9b49ff4ff161b77a7c7942d464242d51b827ee61913cdb65 -->

```csharp
protected override void Inno.Rendering.Runtime.RenderRuntime.OnCompleteOutput(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Submits output and closes output-specific temporary resources.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Frames.cs#L51).

## `OnPrepareOutput`

<a id="api-9ed44c3a15e153a6"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.OnPrepareOutput(Inno.Runtime.Contracts.RuntimeFrame) 4c50ce63c681c92402db26aec9ff4480ea49bfe4c5382edabfc33508c1ecbeb0 -->

```csharp
protected override void Inno.Rendering.Runtime.RenderRuntime.OnPrepareOutput(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Opens resources required for this frame's output.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Frames.cs#L37).

## `OnProduceOutput`

<a id="api-042403c2a388c868"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.OnProduceOutput(Inno.Runtime.Contracts.RuntimeFrame) fc1a5e6c94e0a456f46fe55d6d4442007ee176bda7322c04ee76e4d260105664 -->

```csharp
protected override void Inno.Rendering.Runtime.RenderRuntime.OnProduceOutput(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Collects output commands without executing managed code on a native realtime callback.

**Parameter `frame`:** The variable frame timing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Frames.cs#L44).

## `OnStart`

<a id="api-15720398b37ec1d1"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.OnStart 4052ba58e12cc011d7388ad9e1b9119d5692934b4633c250fc0ad3e88e1c5bcf -->

```csharp
protected override void Inno.Rendering.Runtime.RenderRuntime.OnStart()
```

Attaches this feature to its owning runtime generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L248).

## `OnStop`

<a id="api-ec0616ec057f2ba6"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.OnStop 106ea51ae55c69ef6ff9d7643b645b42321d065160282348c54208446731757a -->

```csharp
protected override void Inno.Rendering.Runtime.RenderRuntime.OnStop()
```

Releases every runtime rendering generation, persistent target, upload, and GPU resource
owned by this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L265).

## `RegisterContributor`

<a id="api-88500b9d855ab96e"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.RegisterContributor(Inno.Rendering.IRenderFrameGraphContributor) 1d54b8d640ad32f3dd32fdf0f57a2a1657e58b6e2e72463e367ff5f9a876cfad -->

```csharp
public void Inno.Rendering.Runtime.RenderRuntime.RegisterContributor(Inno.Rendering.IRenderFrameGraphContributor contributor)
```

Registers frame-final work without transferring frame ownership.

**Parameter `contributor`:** Contributor invoked after all user pipeline requests.

**Throws `System.ArgumentException`:** Thrown when the instance is already registered.

**Throws `System.InvalidOperationException`:** Retirement has started or generation cleanup has faulted the owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Contributors.cs#L31).

## `SetPrimaryModelOutputEnabled`

<a id="api-5a1e27ec92db6c14"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.SetPrimaryModelOutputEnabled(System.Boolean) 7016812913ac2ee3301fb383520dafca55973782821b790d3e30dda20dd2bbda -->

```csharp
public void Inno.Rendering.Runtime.RenderRuntime.SetPrimaryModelOutputEnabled(bool enabled)
```

Enables or disables model rendering to the host's primary backbuffer.
Editor hosts disable this because their Game and Scene sessions own offscreen outputs.

**Parameter `enabled`:** Whether the primary backbuffer is a model output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Models.cs#L40).

## `SetPrimaryRoute`

<a id="api-7115fed28ffea743"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.SetPrimaryRoute(Inno.Rendering.Runtime.RenderOutputRoute) 2c5d0db54ee476eb0be3271e228c82fd1467bae919309d835bc00e0e48e35dc1 -->

```csharp
public void Inno.Rendering.Runtime.RenderRuntime.SetPrimaryRoute(Inno.Rendering.Runtime.RenderOutputRoute? route)
```

Sets the explicit model composition route for the primary output at a frame boundary.

**Parameter `route`:** Ordered model identities, or null for automatic single-model selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Models.cs#L25).

## `Submit`

<a id="api-84f7487ac40aa600"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.Submit(Inno.Rendering.Runtime.RenderRequest) 4c190bb538ae80c3ffcca111284ddf46d7b5760deded6ba3d49efe7dc3bdaf9a -->

```csharp
public void Inno.Rendering.Runtime.RenderRuntime.Submit(Inno.Rendering.Runtime.RenderRequest request)
```

Submits validated work to the active backend for ordered processing.

**Parameter `request`:** The validated immutable request that defines this operation.

**Throws `System.InvalidOperationException`:** The bounded frame queue has reached capacity, retirement has started, or generation cleanup has faulted
the owner. The request was not accepted.

**Throws `System.ObjectDisposedException`:** The rendering owner has retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Requests.cs#L32).

## `SubmitComposition`

<a id="api-c8dcef181b81403f"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.SubmitComposition(System.String,Inno.Rendering.RenderTarget,Inno.Rendering.RenderViewport,Inno.Rendering.RenderTextureFormat,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderRequest},System.Int32) 0962d19146359f83195e6720c681c0616ff53f111a9446efcdd93fe96667ea1f -->

```csharp
public void Inno.Rendering.Runtime.RenderRuntime.SubmitComposition(string name, Inno.Rendering.RenderTarget target, Inno.Rendering.RenderViewport viewport, Inno.Rendering.RenderTextureFormat format, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.RenderRequest> layers, int priority = 0)
```

Submits one or more independently rendered model layers for premultiplied-alpha output composition.

**Parameter `name`:** Stable frame-local composition identity.

**Parameter `target`:** Final host-owned output target.

**Parameter `viewport`:** Output viewport in physical pixels.

**Parameter `format`:** Shared sampled color format required by every layer.

**Parameter `layers`:** Ordered requests, one per rendering model.

**Parameter `priority`:** Ascending scheduling priority relative to ordinary requests.

**Throws `System.ArgumentException`:** The layer set or format is invalid.

**Throws `System.InvalidOperationException`:** The bounded frame queue is full or retirement has started.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Requests.cs#L72).

## `TryActivateDefaultPipeline`

<a id="api-c55d584f98011b12"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.TryActivateDefaultPipeline(Inno.Rendering.Assets.RenderPipelineAsset) 33b39dad5ca14348f056edbf71854b83bb4517e4dcf49a9ac599932286179d02 -->

```csharp
public bool Inno.Rendering.Runtime.RenderRuntime.TryActivateDefaultPipeline(Inno.Rendering.Assets.RenderPipelineAsset pipelineAsset)
```

Validates and selects a project default while preserving its last-good generation.

**Parameter `pipelineAsset`:** Candidate project default pipeline asset.

**Returns:** `true` when a usable generation exists for the candidate.

**Throws `System.InvalidOperationException`:** Thrown during an open graphics frame, during retirement, or after generation cleanup faults the owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Pipelines.cs#L31).

## `UnregisterContributor`

<a id="api-2d186cc09ea6bf8d"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderRuntime.UnregisterContributor(Inno.Rendering.IRenderFrameGraphContributor) 4023e46288cd77750e6c88c2b20983448f2625eca06d0a03dc5c6343c2b20abe -->

```csharp
public bool Inno.Rendering.Runtime.RenderRuntime.UnregisterContributor(Inno.Rendering.IRenderFrameGraphContributor contributor)
```

Stops invoking a previously registered frame-final contributor.

**Parameter `contributor`:** Contributor to remove.

**Returns:** `true` when registration existed and was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.Contributors.cs#L53).

## `currentFrameIndex`

<a id="api-a5a239b47e88054e"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRuntime.currentFrameIndex 9f83cb0f7f540b71d3d7be46cf8ffd44b5743462453c10f902277d38e74c61ef -->

```csharp
public ulong Inno.Rendering.Runtime.RenderRuntime.currentFrameIndex { get; }
```

Gets the monotonic index of the current or most recently completed output frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L171).

## `deviceGeneration`

<a id="api-6eb215d234abc5b1"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRuntime.deviceGeneration 7735adb44af1e0150d81eecc94118fab4624268970fcaffef6022dfa29e54491 -->

```csharp
public uint Inno.Rendering.Runtime.RenderRuntime.deviceGeneration { get; }
```

Gets the non-zero rendering-device generation that owns persistent handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L215).

## `resources`

<a id="api-14db66e3868f3151"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRuntime.resources 5a41936be0f8ad51195c575d7dd2b4a713ffaf9bc249d5a8eb63a110d84825c0 -->

```csharp
public Inno.Rendering.Runtime.IRenderResourceService Inno.Rendering.Runtime.RenderRuntime.resources { get; }
```

Gets backend-neutral persistent resource resolution for host-owned previews and rendering integrations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L161).

## `resourceStatistics`

<a id="api-6d590908fd483622"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRuntime.resourceStatistics 35e0c078997369df0d47a654e6847daae3d13a48d672451ba9a186b1ebe2f275 -->

```csharp
public Inno.Rendering.Runtime.RenderResourceStatistics Inno.Rendering.Runtime.RenderRuntime.resourceStatistics { get; }
```

Gets a detached control-thread snapshot of resource occupancy, high-water marks and rejected admissions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L220).

## `targets`

<a id="api-da2f332616d2ec98"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRuntime.targets d16ed624d8b58c5a0aa6aa3285de1ca581497241ea9e59458452c8e9d065c837 -->

```csharp
public Inno.Rendering.Runtime.RenderTargetStore Inno.Rendering.Runtime.RenderRuntime.targets { get; }
```

Gets persistent offscreen target services for viewport presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L156).

## `viewContent`

<a id="api-2026acdf364a951a"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderRuntime.viewContent fc1a9d08e776efb52d46c3afc0f93fc060217fa54befe1bd40dbdc3492a7cc7a -->

```csharp
public Inno.Rendering.Runtime.IViewContentCollector Inno.Rendering.Runtime.RenderRuntime.viewContent { get; }
```

Gets the generation-scoped collector used by rendering models for world content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderRuntime.cs#L166).
