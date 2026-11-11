---
title: Inno.Rendering.Shaders
description: "Language-neutral shader functions, graph lowering, typed stages and structured regions."
uid: project.inno-rendering-shaders
kind: project
owners: [Inno.Rendering.Shaders]
exampleMode: host
exampleProjects: [Inno.Rendering.Shaders]
---
# Inno.Rendering.Shaders

Language-neutral shader functions, graph lowering, typed stages and structured regions.

Start with [rendering tasks](../../manual/rendering/index.md) and [frame ownership](../../architecture/render-frame.md).

## One authoring chain

Shader source functions, authored graphs and optional domain Targets feed one chain: expanded stage graph → typed Shader IR → adapter source generation → native compilation. This assembly owns neutral function interfaces, multi-implementation analysis, ports, lowering and typed regions/stages. It does not create GPU objects or depend on BGFX, rendering assets, Scene, Editor or a consumer's 2D model.

Start with [shader authoring](../../manual/rendering/shader-authoring.md), then [source functions](../../manual/rendering/shader-functions.md) or [reusable graph nodes](../../manual/rendering/reusable-shader-nodes.md). A domain-specific Target expands GraphDocument; it does not inject native shader strings or schedule the Scene render graph.

## Registration and generation

Catalogs are immutable owner-held registrations, not global singletons. The caller owns providers in direct composition. ShaderSourceFrontendRegistry uses the shared TypeRegistry for discovery, conflict rollback and provider retirement. Hold one operation scope for an entire multi-implementation analysis; do not switch generations between languages.

Missing language support produces a recoverable diagnostic. An empty candidate set or duplicate implementation key is a call error. Source diagnostics cannot swallow the shared retirement barrier. Preserve stable source-function identities so language support can recover without discarding author intent.

Target and Template providers live in generation snapshots. Persist stable IDs and neutral values, never frontend/resolver/parser/provider instances or live graph-definition objects. Menus contain immutable strings rather than provider references.

## Editor script boundary

The actual manifest exports selected node/frontend descriptions and typed IR through InnoEditor.Rendering.Shaders, in Editor scope. Runtime scripts cannot use these authoring types. Registries, background compilation owners and backend implementations remain host-only.

Exported graph document/binding/template helpers use the host's SerializationRegistry and complete reference context; scripts cannot construct a registry or capture a converter generation. Node drawing is a separate Editor.Shaders data contract, not a compiler callback.

## Typed contract

Inputs, outputs, aggregate layouts and side effects retain explicit types and order. No implicit numeric conversion or hidden GPU global supplies missing data. Resource handles do not cross stage interfaces or become ordinary branch/loop merge values. Frozen Build results do not change when the builder is edited later.

Source calls remain conservatively ordered side effects, even with unused results. Stage input/resource requirements and nested control-flow legality are validated. See [typed IR and input snapshots](../../architecture/shader-ir.md) for exact arithmetic, stage, memory-order and default-value semantics, and [shader extension boundaries](../../extending/shader-targets.md) for generation-safe expansion.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using Inno.Rendering.Shaders;

public static class FrontendExample
{
    public static ShaderSourceAnalysis Inspect(
        IShaderSourceFrontend frontend,
        string languageId,
        ShaderSourceRequest request
    ) {
        var frontends = new ShaderSourceFrontendCatalog([frontend]);
        return frontends.Analyze(languageId, request);
    }
}
```
```csharp
using System.Collections.Generic;
using Inno.Rendering.Shaders;

public static class ShaderIrExample
{
    public static ShaderIrBlock BuildBrightness()
    {
        var builder = new ShaderIrBuilder();
        ShaderIrValue brightness = builder.Input("brightness", ShaderSourceType.Atomic("float"));
        ShaderIrValue result = builder.Binary(ShaderIrOperation.Multiply, brightness, builder.Constant(2f));
        return builder.Build(new Dictionary<string, ShaderIrValue> { ["brightness"] = result });
    }
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Shaders/Inno.Rendering.Shaders.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse types and members](../types/rendering/inno-rendering-shaders/index.md).
