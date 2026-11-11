---
title: Inno.Rendering.Assets.Authoring
description: "Frozen rendering imports, graph editing, target compilation and last-good publication."
uid: project.inno-rendering-assets-authoring
kind: project
owners: [Inno.Rendering.Assets.Authoring]
exampleMode: host
exampleProjects: [Inno.Rendering.Assets.Authoring]
---
# Inno.Rendering.Assets.Authoring

Frozen rendering imports, graph editing, target compilation and last-good publication.

Start with [rendering tasks](../../manual/rendering/index.md) and [frame ownership](../../architecture/render-frame.md).

## Import a complete candidate

This authoring assembly handles Texture, Shader, Material, Geometry and Pipeline source import, graph editing, target compilation and last-good storage. It depends on runtime asset contracts, Shader mechanisms and AssetPipeline, and does not enter the Player. Actual language parsing and native compilation remain with the selected providers/toolchains.

An importer receives the complete serialization/reference context from AssetPipeline and freezes source, dependencies and graph definition. A target compiler accepts immutable input and returns structured diagnostics with a complete candidate. Validate it before publication; failure retains the last-good artifact for the same logical asset.

ShaderSourceBundle and ShaderGraphArtifact freeze dependency bytes. Runtime consumers never reread the authoring directory. A toolchain that needs files materializes short-lived inputs under its own owner; those temporary paths do not become runtime asset protocol fields.

## Separate source, cache and GPU owners

ShaderGraphSourceStore owns authored source saving. ShaderLastGoodStore owns rebuildable authoring cache. Neither creates GPU ownership. Texture and shader target compilers remain replaceable boundaries.

Authoring composition registers the appropriate importer/provider. This project's script manifest exports Editor authoring APIs only. Generation, Missing recovery and publication follow the existing Asset/TypeRegistry coordinator rather than a target compiler's independent transaction.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using System.Collections.Generic;
using Inno.Core.Graphs;
using Inno.Core.Serialization;
using Inno.Rendering.Assets.Authoring;

static byte[] FreezeGraph(
    GraphDocument graph,
    IReadOnlyDictionary<GraphNodeId, byte[]> functions,
    SerializationRegistry serialization
) {
    return ShaderGraphArtifact.Encode(graph, functions, serialization);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Inno.Rendering.Assets.Authoring.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse types and members](../types/rendering/inno-rendering-assets-authoring/index.md).
