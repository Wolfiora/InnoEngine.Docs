---
uid: api.1243aeb8d5baba1d4040ab2ddca8da2f0ed428e89925da0d7466fa4987c3fef0
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Rendering.IRenderDevice,Inno.Core.Diagnostics.IDiagnosticReporter,System.Collections.Generic.IEnumerable{Inno.Rendering.IRenderFrameGraphContributor},Inno.Rendering.Runtime.IRenderTargetArtifactProvider,System.Func{Inno.References.ContentReadScope},System.Func{Inno.Rendering.RenderPresentationSize,Inno.Rendering.RenderViewport},Inno.Rendering.Runtime.RenderResourceLimits,System.Func{Inno.Input.InputSnapshot},System.Func{System.Nullable{Inno.Rendering.RenderPresentationSize}},Inno.Rendering.IRenderLayerCompositionProgramProvider)"
source: xml
reviewed: 59bbcb530241cff54374a296ac8abd213e24c08fbd98818e2d03f5435ec37209
title: "RenderRuntime.Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates a render runtime without installing any concrete pipeline.

**Parameter `device`:** Active backend-neutral device.

**Parameter `types`:** The type catalog that owns render extension generations.

**Parameter `diagnostics`:** Owner-bound structured diagnostic producer.

**Parameter `contributors`:** Optional frame-final contributors such as an ImGui backend.

**Parameter `targetArtifacts`:** Provider of immutable target artifacts. Editor hosts may provide an asynchronous authoring-backed implementation, while Player hosts provide a source-free deployment implementation.

**Parameter `contentScopeProvider`:** Optional host callback that supplies explicit current-frame content without coupling Rendering to Scene or documents.

**Parameter `primaryPresentationViewportProvider`:** Optional host callback that selects the content region within the primary presentation surface. The complete surface is used when omitted.

**Exception `T:System.ArgumentException`:** The contributor sequence contains a null entry or the same contributor more than once. No rendering generation is registered in this case.

**Parameter `resourceLimits`:** Finite native cache and asynchronous readback limits; omitted values use the engine defaults.

**Parameter `inputSnapshotProvider`:** Optional host callback that reads the completed session input snapshot when output is collected.

**Parameter `primaryInputSurfaceSizeProvider`:** Optional logical input extent used for pointer scaling; returns null while input has no surface.

**Parameter `compositionProgramProvider`:** Backend-specific program provider used when the host composites multiple render layers.
