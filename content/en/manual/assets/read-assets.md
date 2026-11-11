---
title: Load and retain an asset
description: Choose a logical asset identity and preserve the correct owner while using its resources.
uid: manual.assets.read
kind: how-to
owners: [Inno.Assets, Inno.Assets.Pipeline]
contracts: [project.inno-assets#asset-ownership-contract, project.inno-assets-pipeline#authoring-ownership-contract]
exampleMode: host
exampleProjects: [Inno.Assets, Inno.Assets.Pipeline]
---
# Load and retain an asset

Use a mount-qualified logical path when locating a source and a persistent ID when preserving a reference. A remembered physical filename is not durable asset identity.

## Prerequisites

The host has initialized its asset lookup and owns its lifecycle. The following authoring example runs on the initialized pipeline's owner thread and assumes `Config/value.txt` exists with a registered text importer:

```csharp
using Inno.Assets;
using Inno.Assets.Pipeline;

static TextAsset ReadConfiguration(AssetPipeline assets)
{
    assets.Update();
    return assets.Load<TextAsset>(AssetPath.Project("Config/value.txt"));
}
```

The returned value is canonical state owned by the lookup. This helper neither creates another pipeline nor transfers ownership of its dependencies.

## Choose the matching lookup

Runtime hosts use explicit `IAssetLookup`; authoring hosts use the pipeline's source-aware operations. Scripts use the session-bound `Assets` facade, which has no independent asset state. `Assets.LocalPath` derives the owning source mount from the compiler-provided caller location; do not pass an ordinary host source filename to imitate that context.

Use `TryLoad` when absence or an incompatible asset is an expected branch. It still requires a valid active session. A missing session, unavailable asset and corrupted deployed payload are not interchangeable successful null results.

## Keep resources resident

For work that explicitly retains a loaded asset, acquire the appropriate `AssetLease<TAsset>` through residency and release it when the operation ends. The residency owner coordinates dependent resources, preparation and retirement. Do not substitute a strong object reference or hold an obsolete generation's asset indefinitely.

Cancellation must drain admitted work before its owners retire. Pending release keeps the value and cleanup state alive. Persist IDs and neutral state across reload, then resolve the new canonical object. See [Missing recovery](../references/resolve-missing.md) when an identity cannot currently resolve.

## Saving an existing source

Saving a detached edit to an existing source uses that source's sidecar/catalog identity and updates the canonical object in place. The draft object's temporary identity does not turn the same path into a new asset. Only a genuinely new destination adopts or allocates a new identity.
