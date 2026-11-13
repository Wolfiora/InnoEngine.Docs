---
title: Inno.Integration.MacOSArm64.Build
description: "macOS ARM64 complete build contribution without executing preparation."
uid: project.inno-integration-macosarm64-build
kind: project
owners: [Inno.Integration.MacOSArm64.Build]
exampleMode: host
exampleProjects: [Inno.Integration.MacOSArm64.Build]
---
# Inno.Integration.MacOSArm64.Build

macOS ARM64 complete build contribution without executing preparation.

Start with [the platform task guide](../../platforms/select-target.md).

## Registration contract

`MacOSArm64BuildIntegration.Create(BuildCompositionContext)` constructs one immutable `BuildPlatformContribution` containing the SDK resolver, binding profile, component options, product executors and deployment layout. Creating the contribution neither discovers tools nor creates a cache.

Dependencies point to this platform's foundation, shared standard products, binding integration and selected backend integrations. The platform foundation does not reference this assembly. Build host, output target and managed deployment remain separate selections.

## Execution and failure

Actual SDK discovery and tool execution require an explicitly selected host, binding generator and complete source inputs. Unavailable capabilities, failures and cancellation do not publish partial output. This tooling protocol is not a game-script export and must not retain collectible-generation state.

## Construct a contribution

The host owns the context and its selected tools. This operation only assembles the contribution; it is not a successful product build.

```csharp
using Inno.Build.Composition;
using Inno.Integration.MacOSArm64.Build;

static BuildPlatformContribution Compose(BuildCompositionContext context)
    => MacOSArm64BuildIntegration.Create(context);
```

## Source and validation boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Build/Inno.Integration.MacOSArm64.Build.csproj) defines this engine-owned surface. Host CLR declarations do not establish game-script exports, native execution or cross-platform certification. Platform, ABI and real-device checks remain separate from compiling the examples.

## API reference

[Browse exact types and members](../../api/engine/integration/macosarm64/build/index.md).
