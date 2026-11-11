---
title: Inno.Build.Toolchains.Bgfx.Shaders
description: "Offline shader-graph compilation through the engine's shared assets, typed IR and atomic artifact pipeline."
uid: project.inno-build-toolchains-bgfx-shaders
kind: project
owners: [Inno.Build.Toolchains.Bgfx.Shaders]
exampleMode: host
exampleProjects: [Inno.Build.Toolchains.Bgfx.Shaders]
---
# Inno.Build.Toolchains.Bgfx.Shaders

Offline shader-graph compilation through the engine's shared assets, typed IR and atomic artifact pipeline.

Read the linked task or ownership explanation before using the exact API below.

## Compile an authored graph

Follow [BGFX shader preparation](../../backends/bgfx-shaders.md) to capture permanent inputs, acquire a registered workspace, import the isolated copy and publish a complete candidate. ShaderBuildInputs is shared by the Task fingerprint and compiler; changed inputs reject publication, including same-length edits with preserved timestamps.

ShaderArtifactBuilder compiles a graph or graphics program for an explicit BGFX target profile and neutral GraphicsApi. Failed import or compilation preserves the previous output. Temporary owners are released at operation exit. The library has no executable entry and never belongs in a Player closure.

## Integration boundary

The built-in ImGui, Composition and OutputTransfer consumers use the same CompileShaderTask; the unified CLI shader route reaches the same pipeline. There is no alternate source-compiler path or runtime fallback. Keep the captured inputs and workspace alive for the complete operation.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Threading;
using Inno.Build.Toolchains.Bgfx.Shaders;
using Inno.Build.Toolchains.Bgfx.Tools;
using Inno.Rendering;
using Inno.Core.IO;

static void CompileGraph(
    string assetRoot,
    ProcessOwnedDirectory workspace,
    string sourceLocalShaderPath,
    BgfxShaderTargetProfile target,
    GraphicsApi graphicsApi,
    string outputFile,
    ToolRunner tools,
    CancellationToken cancellationToken
) {
    ShaderBuildInputs inputs = ShaderBuildInputs.Capture(assetRoot, cancellationToken);
    ShaderArtifactBuilder.Compile(inputs, workspace, sourceLocalShaderPath,
        target, graphicsApi, outputFile, tools, cancellationToken);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Shaders/Inno.Build.Toolchains.Bgfx.Shaders.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](../types/bgfx-engine/inno-build-toolchains-bgfx-shaders/index.md) retain declarations and source XML from the recorded engine capture.
