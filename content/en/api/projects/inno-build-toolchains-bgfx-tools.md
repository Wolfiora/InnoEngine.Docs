---
title: Inno.Build.Toolchains.Bgfx.Tools
description: "Engine shader/texture compilation adapters, typed source analysis and explicit offline tool execution for BGFX."
uid: project.inno-build-toolchains-bgfx-tools
kind: project
owners: [Inno.Build.Toolchains.Bgfx.Tools]
exampleMode: host
exampleProjects: [Inno.Build.Toolchains.Bgfx.Tools]
---
# Inno.Build.Toolchains.Bgfx.Tools

Engine shader/texture compilation adapters, typed source analysis and explicit offline tool execution for BGFX.

Read the linked task or ownership explanation before using the exact API below.

## Authoring responsibilities

[BGFX shader preparation](../../backends/bgfx-shaders.md) explains frontend constraints, frozen include resolution, typed-stage lowering, reflection and current target limitations. The engine catalog owns cross-variant consistency; BgfxShaderSourceFrontend analyzes one requested configuration. The backend supplies structured diagnostics and actual bytes rather than letting Core infer success from native console output.

BgfxAuthoringProvider registers the corresponding authoring capabilities. Shader and texture target compilers produce target artifacts; they do not create a runtime GPU device. Exact profile and target capabilities remain explicit inputs.

## Tool ownership

ToolRunner starts explicitly deployed shaderc/texturec tools with argument arrays. Cancellation terminates the process tree and observes exit plus stdout/stderr readers. A missing executable throws FileNotFoundException. A nonzero result is preserved for the caller to turn into diagnostics. Neither this provider nor the runtime loader searches the repository to invent a deployment.

The examples require an existing source resolver or a deployed tool, respectively. Compilation of these examples is not execution of shaderc or certification of a real GPU target.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using Inno.Rendering.Shaders;
using Inno.Build.Toolchains.Bgfx.Tools;

public static class HostExample1
{
    static ShaderSourceAnalysis Inspect(IShaderSourceResolver candidateSources)
    {
        var frontends = new ShaderSourceFrontendCatalog([new BgfxShaderSourceFrontend()]);
        var source = new ShaderSourceFile("project::Functions/Tint.ishadersource",
            "vec4 Tint(vec4 color, float strength) { return color * strength; }");
        return frontends.Analyze("inno.shader-language.bgfx-sc",
            new ShaderSourceRequest(source, "Tint", candidateSources));
    }
}
```
```csharp
using Inno.Build.Toolchains.Bgfx.Tools;

public static class HostExample2
{
    public static void Run()
    {
        var runner = new ToolRunner();
        ToolRunResult result = runner.Run(BgfxTool.Shaderc, ["--help"]);
    }
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Tools/Inno.Build.Toolchains.Bgfx.Tools.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](../types/bgfx-engine/inno-build-toolchains-bgfx-tools/index.md) retain declarations and source XML from the recorded engine capture.
