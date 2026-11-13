---
title: Inno.Integration.BrowserWasm32.Build
description: "Browser complete build contribution without executing preparation."
uid: project.inno-integration-browserwasm32-build
kind: project
owners: [Inno.Integration.BrowserWasm32.Build]
exampleMode: host
exampleProjects: [Inno.Integration.BrowserWasm32.Build]
---
# Inno.Integration.BrowserWasm32.Build

Browser complete build contribution without executing preparation.

Start with [the platform task guide](../../platforms/select-target.md).

## Registration contract

`BrowserWasm32BuildIntegration.Create(BuildCompositionContext)` constructs one immutable `BuildPlatformContribution` containing the SDK resolver, binding profile, component options, product executors and deployment layout. Creating the contribution neither discovers tools nor creates a cache.

Dependencies point to this platform's foundation, shared standard products, binding integration and selected backend integrations. The platform foundation does not reference this assembly. Build host, output target and managed deployment remain separate selections.

## Execution and failure

Actual SDK discovery and tool execution require an explicitly selected host, binding generator and complete source inputs. Unavailable capabilities, failures and cancellation do not publish partial output. This tooling protocol is not a game-script export and must not retain collectible-generation state.

The Browser binding profile uses the official BGCS `LibraryImport` mode so both interpreted Mono and AOT see real P/Invoke declarations. The Browser extension owns target ABI, aggregate-pointer adapters, callbacks and generation sessions. Import mode and static/shared linkage are frozen separately; managed selection carries the actual generated initialization mode. Publication checks the selected identity and complete reference closure. Do not patch the SDK, generated source or third-party implementation to simulate imports.

## Construct a contribution

The host owns the context and its selected tools. This operation only assembles the contribution; it is not a successful product build.

```csharp
using Inno.Build.Composition;
using Inno.Integration.BrowserWasm32.Build;

static BuildPlatformContribution Compose(BuildCompositionContext context)
    => BrowserWasm32BuildIntegration.Create(context);
```

## Source and validation boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Build/Inno.Integration.BrowserWasm32.Build.csproj) defines this engine-owned surface. Host CLR declarations do not establish game-script exports, native execution or cross-platform certification. Platform, ABI and real-device checks remain separate from compiling the examples.

## API reference

[Browse exact types and members](../../api/engine/integration/browserwasm32/build/index.md).
