---
title: Inno.Build.SupportPacks.Core
description: "Verified Support Pack preparation, publication and protected consumption."
uid: project.inno-build-supportpacks-core
kind: project
owners: [Inno.Build.SupportPacks.Core]
exampleMode: host
exampleProjects: [Inno.Build.SupportPacks.Core]
---
# Inno.Build.SupportPacks.Core

Verified Support Pack preparation, publication and protected consumption.

Start with [distribution composition](../../extending/build-distribution.md) and [Support Pack preparation](../../contributing/support-packs.md).

## Prepare reusable engine inputs

[Prepare and consume a Support Pack](../../contributing/support-packs.md) explains planning, cold work, valid reuse and the distinction from a final game. This neutral library owns the publisher/provisioning transaction without registering built-in platforms or referencing concrete backend tools/Editor.

The publisher freezes unique target sources. CreatePlanAsync validates source/template/SDK/host inputs without an output directory. After target/cancellation checks and a write lease, VerifyInputsAsync revalidates the complete request before preparation-index lookup. A validated complete match returns a protected publication; otherwise source-owned preparation fills staging, platform validation establishes a complete closure, and atomic current selection follows immutable publication.

## Identities and lifetime

Preparation identity combines recipe, selected binding configuration/inheritance, generator/extensions, actual managed graph, templates and platform validator. Artifact identity hashes the complete Pack file set. A published self-contained Pack does not depend on the continued presence of rebuildable workspaces. Lock-wait and pre-selection freshness remain mandatory.

PlayerSupportPackPublication uniquely owns reading protection and reports post-commit index/staging cleanup diagnostics separately. Hold it until all compilation/linking/copying finishes. The catalog's PlayerSupportPackLease independently pins directory consumption. Failures before selection retain the old complete output.

## Source and execution contracts

SourcePlayerSupportPackProvisioner locates current source for authoring hosts; a distribution host may instead consume installed immutable Packs. A custom source supplies an immutable plan, a real input verifier and fully drained PrepareAsync. The plan does not retain ongoing cross-phase work.

PlayerSupportPackBuildContext.sdk and recorded CLI entry stay frozen; staging does not resolve another SDK through PATH/global.json. Managed compilation and PlayerLink extraction share one fixed source workspace. Frozen InnoShaderToolSourceRoot keeps offline Shader tools with their original protected owner instead of creating another cache in the copy. Native preparation results stay alive throughout the dependent managed build and staging.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Collections.Generic;
using Inno.Build.SupportPacks;

static PlayerSupportPackPublisher CreatePublisher(IEnumerable<IPlayerSupportPackSource> sources)
{
    return new PlayerSupportPackPublisher(sources);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/Inno.Build.SupportPacks.Core.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../../api/engine/build/supportpacks/core/index.md).
