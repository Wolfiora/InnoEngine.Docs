---
title: Inno.Rendering
description: "Neutral devices, resources, commands and transactional render graphs."
uid: project.inno-rendering
kind: project
owners: [Inno.Rendering]
exampleMode: host
exampleProjects: [Inno.Rendering]
---
# Inno.Rendering

Neutral devices, resources, commands and transactional render graphs.

Start with [rendering tasks](../../manual/rendering/index.md) and [frame ownership](../../architecture/render-frame.md).

## Mechanism boundary

This assembly provides devices, capabilities, resource descriptions, commands, binding reflection and RenderGraph mechanisms. It depends only on required Foundation contracts, not Assets, References, Scene, Editor, adapters or Native. It does not define Camera, Light, PBR, a 2D/3D world model or a shader-source parser.

An adapter creates the device; the host retains its unique owner. Graph resources, passes and handles belong to that graph and generation. Accepted pass declarations are frozen. Persistent assets do not store GPU handles; the resource owner controls retirement.

## Output and device facts

`IRenderDevice.primaryPresentationSize` reports real physical pixels or null when no primary output is available. Publish a change with SetPrimaryPresentationSize at the frame safe point; zero is not a valid presentation size. A native SDK's minimum allocation size does not imply a visible output. Offscreen targets retain their own valid dimensions.

`primaryPresentationEncodesSrgb` reports actual output encoding; the host injects output-transfer and layer-composition programs. Allocation counters are cumulative for a device generation; an unmeasured implementation returns null rather than fabricated zero evidence.

## Validation and graph mutation

Validate checks relationships, capabilities, initialization, dependencies, cycles and view limits without allocating the final graph. Compile reuses analysis for the current revision, allocates resources and produces the executable graph. Mutation invalidates stale analysis; normal runtime frames compile the final graph once.

BeginMutationScope creates a LIFO transaction. Commit validates and freezes new declarations. Failure rolls back resources, passes, outputs, name scopes and the previous accepted analysis. Issued resource identities are not reused after rollback, so an old handle cannot point to a different resource.

Frame-local analysis retains accepted resource initialization and dependency/phase relationships. A new contribution analyzes new declarations, but complete candidate checks still include output validity, live passes, topology, cycles and view limits. A future phase may add a dependency to an earlier pass. Editing an unfrozen analyzed pass or rolling back resets analysis as needed. Scratch never becomes a static extension cache.

## Parallel recording contract

AllowParallelRecording only parallelizes callbacks that explicitly permit it. Commands replay in compiled pass order on the device's proper owner. Uniform and transform borrowed data is copied immediately during recording; handles/samplers are values, while raster/stencil states retain their current object semantics.

Execute owns the temporary recording buffers and retained references. Completion, recording failure, replay failure and backend exit errors all release them. With no parallel pass, use direct serial callbacks without an empty recording directory. This feature does not change device-thread ownership, generations or GPU retirement.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using Inno.Rendering;

static RenderGraphValidationResult ValidateGraph(RenderGraphBuilder graph)
{
    return graph.Validate();
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Inno.Rendering.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse types and members](../types/rendering/inno-rendering/index.md).
