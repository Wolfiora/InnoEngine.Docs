---
title: Inno.Build.Products.Standard
description: "Standard Native component closures and deployment manifests without SDK selection."
uid: project.inno-build-products-standard
kind: project
owners: [Inno.Build.Products.Standard]
exampleMode: host
exampleProjects: [Inno.Build.Products.Standard]
---
# Inno.Build.Products.Standard

Standard Native component closures and deployment manifests without SDK selection.

Start with [distribution composition](../../extending/build-distribution.md) and [Support Pack preparation](../../contributing/support-packs.md).

## Derive products from supplied components

StandardNativeComponents constructs Player, Editor and offline Shader-tool plans from explicit graphics profiles, component options and layout functions. CreateStaticPlayer receives explicit static configuration and layout. StandardSupportPackRequirements derives the actual link closure; StandardNativeDeployment encodes a validated Native loading manifest.

The library does not choose a platform, discover SDKs or run Native compilation. Start with [build distribution composition](../../extending/build-distribution.md), then use the selected contribution's execution protocol.

## Ownership and failure

Layout callbacks consume relative outputs while constructing deployment descriptions. They must not capture live plugin-generation or domain objects. The calling composition preflights host/toolchain/generator/source inputs. Unavailable capability, cancellation or execution failure cannot publish a partial result. These are host build contracts, not script exports.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System;
using Inno.Build.Products.Standard;
using Inno.Build.Toolchains;
using Inno.Build.Toolchains.Bgfx;

static ProductNativeBuildPlan ComposePlayer(
    BgfxNativeBuildProfile graphics,
    Func<string, NativeComponentBuildOptions> options,
    Func<string, string, string, string?> layout
) => StandardNativeComponents.CreatePlayer(graphics, options, layout);
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/Inno.Build.Products.Standard.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../types/build-composition/inno-build-products-standard/index.md).
