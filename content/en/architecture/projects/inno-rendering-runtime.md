---
title: Inno.Rendering.Runtime
description: "Output requests, render-model generations and owned GPU resource caches."
uid: project.inno-rendering-runtime
kind: project
owners: [Inno.Rendering.Runtime]
exampleMode: host
exampleProjects: [Inno.Rendering.Runtime]
---
# Inno.Rendering.Runtime

Output requests, render-model generations and owned GPU resource caches.

Start with [rendering tasks](../../manual/rendering/index.md) and [frame ownership](../render-frame.md).

## Compose a frame owner

RenderRuntime combines output requests, runtime assets and a neutral device into executable frames. It owns render-model and Pipeline/Feature generations, asset-to-GPU caches and retirement queues. It does not depend on asset authoring, AssetPipeline or shader compilation tools and has no built-in 2D/3D world model.

The host supplies TypeCatalog, a borrowed device, diagnostics and required artifact providers. Runtime owns its created models, resource services, targets and generations. Construction composes services; the containing host/subsystem supplies the frame lifecycle. Device destruction remains the host's responsibility.

ContentRenderTargetArtifactProvider reads already compiled artifacts through logical content locations. Runtime does not compile authoring sources or search physical asset directories. Keep the content owner and converter generation alive for their borrowed operations.

## Extension boundaries

Implement IRenderModel to interpret a content model through its stable extension identity. Pipeline/Feature extensions describe drawing and required device capabilities. IRenderFrameGraphContributor adds neutral operations to the final graph; IRenderTargetArtifactProvider supplies deployed shader/texture data. These are distinct responsibilities.

Contributor collection changes create a new immutable snapshot. A frame captures one snapshot; registration changes affect the next frame. Registration does not transfer lifecycle ownership, and unregistering does not permit immediate disposal while the current frame can still call the instance.

Each contributor builds inside its own graph mutation scope. An ordinary extension failure reports diagnostics and rolls back that contribution while preserving accepted graph state. Retirement Pending still propagates to the owner. Final Compile constructs the complete graph once; graphCompileCount exposes the observed count.

## Failure and retirement

Without a usable primary output, skip its graph construction and input-coordinate conversion while independent offscreen outputs continue. Missing artifacts, insufficient capabilities and corrupt content have distinct diagnostics. Candidate failure retains last-good state.

Exit first cancels candidates and retires generations, then drops request/contributor references, releases targets, compositors, uploads and resource services, and finally closes the device frame. Pending or failed retirement is not success. Private scratch may retain capacity but clears extension references after a frame, failure and shutdown; it is not a caller-owned persistent snapshot.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using Inno.Core.Diagnostics;
using Inno.Extensibility.Types;
using Inno.Rendering;
using Inno.Rendering.Runtime;

static RenderRuntime CreateRuntime(
    TypeCatalog types,
    IRenderDevice device,
    IDiagnosticReporter diagnostics
) {
    return new RenderRuntime(types, device, diagnostics);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Inno.Rendering.Runtime.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse types and members](../../api/engine/rendering/runtime/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
