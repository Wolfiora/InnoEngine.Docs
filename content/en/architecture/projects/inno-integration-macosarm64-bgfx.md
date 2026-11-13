---
title: Inno.Integration.MacOSArm64.Bgfx
description: "macOS ARM64 build profiles and content compilation for BGFX."
uid: project.inno-integration-macosarm64-bgfx
kind: project
owners: [Inno.Integration.MacOSArm64.Bgfx]
exampleMode: host
exampleProjects: [Inno.Integration.MacOSArm64.Bgfx]
---
# Inno.Integration.MacOSArm64.Bgfx

macOS ARM64 build profiles and content compilation for BGFX.

Start with [the platform task guide](../../platforms/select-target.md).

## Composition and generation contract

This build integration combines the platform-neutral build module with BGFX build contracts. It selects native/shader parameters and a content compiler without referencing the native BGFX facade, another platform or Standard Distribution. Neither the platform packager nor shared BGFX code depends on this assembly.

Standard Distribution consumes the immutable profile and compiler factory. `StandardNativeComponents` owns the product component list; this integration does not register a second distribution. A compiler borrows the current authoring generation's Assets, Serialization and Types services. It cannot own them or survive their generation. Player runtime code reads compiled content through the neutral store rather than referencing this build-time assembly.

Offline GENie/Make tool selection contains the actual clang, clang++, Make, GENie and SDK inputs. An unused .NET host or CMake executable does not invalidate that offline tool identity. Binding generation still validates its separately frozen complete tool selection.

Unknown SDK, target and graphics capabilities fail explicitly. The current host OS is not an implicit target selector. Native invocation behavior remains owned by the profile.

## Borrow the authoring services

The caller supplies live services from one admitted authoring generation and retains them for the compiler operation.

```csharp
using Inno.Assets.Pipeline;
using Inno.Build;
using Inno.Build.Toolchains.Bgfx.Tools;
using Inno.Core.Serialization;
using Inno.Extensibility.Types;
using Inno.Integration.MacOSArm64.Bgfx;

static IGameContentCompiler CreateCompiler(
    AssetPipeline assets,
    SerializationRegistry serialization,
    TypeCatalog types
) {
    return MacOSArm64BgfxIntegration.CreateContentCompilerFactory(new ToolRunner())(assets, serialization, types);
}
```

## Source and validation boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Bgfx/Inno.Integration.MacOSArm64.Bgfx.csproj) defines this engine-owned surface. Host CLR declarations do not establish game-script exports, native execution or cross-platform certification. Platform, ABI and real-device checks remain separate from compiling the examples.

## API reference

[Browse exact types and members](../../api/engine/integration/macosarm64/bgfx/index.md).
