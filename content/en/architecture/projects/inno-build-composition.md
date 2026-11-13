---
title: Inno.Build.Composition
description: "Explicit platform, content and deployment contributions for an owned build pipeline."
uid: project.inno-build-composition
kind: project
owners: [Inno.Build.Composition]
exampleMode: host
exampleProjects: [Inno.Build.Composition]
---
# Inno.Build.Composition

Explicit platform, content and deployment contributions for an owned build pipeline.

Start with [distribution composition](../../extending/build-distribution.md) and [Support Pack preparation](../../contributing/support-packs.md).

## Compose a distribution

[Compose a build distribution](../../extending/build-distribution.md) explains the actual registration sequence, host/tool/game targets and authoring lifetimes. This library defines neutral contracts; the standard distribution owns built-in registration. Shared Editor Hosting receives a distribution rather than referencing that concrete standard set.

BuildDistribution freezes platform/game/deployment contributions, rejects duplicate or mismatched identities and does not discover SDKs while registering. TryResolveNativeToolchain queries only a matching registered target; an absent registration does not hide a failure from a present provider. ResolveNativeProduct selects the declared product closure before SDK resolution or staging.

## Borrowing and lifecycle

BuildPipelineFactory receives current authoring services and the frozen distribution. It does not own those services; each Pipeline transaction owns its own work and sources own preparation tasks. Context supplies the neutral INativeBindingGenerator. CreateBindings outputs borrow current Assets/Serialization/TypeCatalog and cannot be retained across Session retirement.

Factories and layout delegates contain immutable configuration rather than live collectible-generation objects. Unsupported host/target combinations fail explicitly, and pre-commit cancellation preserves old output.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Collections.Generic;
using Inno.Build.Composition;
using Inno.Build.Managed;

static BuildDistribution Compose(
    IReadOnlyList<GameBuildContribution> contributions,
    IReadOnlyList<IManagedDeploymentCompiler> deployments
) {
    return new BuildDistribution(contributions, deployments);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/Inno.Build.Composition.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../../api/engine/build/composition/index.md).
