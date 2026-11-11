---
title: Inno.Build.Toolchains
description: "Neutral SDK facts, frozen execution inputs, immutable publications and registered cache ownership."
uid: project.inno-build-toolchains
kind: project
owners: [Inno.Build.Toolchains]
exampleMode: host
exampleProjects: [Inno.Build.Toolchains]
---
# Inno.Build.Toolchains

Neutral SDK facts, frozen execution inputs, immutable publications and registered cache ownership.

Read the linked task or ownership explanation before using the exact API below.

## Choose the owning mechanism

Read [artifact and cache ownership](../../architecture/build-artifacts.md) for readers, content identities and retirement, [Native preparation](../../architecture/native-preparation.md) for recipes and deployment, and [Task-host isolation](../../architecture/task-hosts.md) for MSBuild loading. This library does not select a product by probing the current OS or maintain another backend list.

## SDK graphs and frozen inputs

ManagedProjectGraphCapture batches absolute project paths in the explicitly selected SDK, using the same ProjectGraph entry instances for roots and references. Conditional global-property variants remain distinct. Explicit reference resolution consumes properly restored outputs without Build or Native targets, even when a project treats reference-build properties as local. Missing evaluator tooling can be prepared under its own immutable owner; the captured graph is not compilation evidence.

ManagedBuildInputSnapshot records actual Compile/resources/analyzers/additional input/import/package/reference-pack/SDK options and final implicit symbols. Verification reevaluates and reads complete current contents, including additions and preserved-timestamp changes. Platform-qualified TFMs retain identity while reference packs follow the SDK's framework model. Frozen execution copies only declared source, preserves identical timestamps and retires obsolete owned inputs; external SDK/package locations remain explicit.

Source aliases deduplicate physical reads within a phase while retaining logical checkout identities. macOS aliases and Windows junctions do not turn source into arbitrary external SDK input. Canonical ordering makes equivalent project variants stable; semantic argument/include/source order remains significant.

## Process and product lifetime

ToolchainEnvironment returns full captured output or retains SDK diagnostics/exit failure. Cancellation terminates and drains the owned process tree. DotNetSdkEnvironment changes only the child environment, preserving selected Native configuration and removing inherited resolver redirection.

Product results own their complete Native/binding leases. Neutral preparation descriptions enable valid same-root reuse, but every consumer independently acquires protection and verifies fresh inputs/output. Static aggregate or unowned-generation cases cannot pretend to have registered-reader protection.

## Register and retire safely

Publishers declare explicit physical owners, coordination leases, roles, current roots and dependencies. Temporary claims precede payload writes. Immutable artifacts, reusable workspaces and process workspaces have different lifetime rules; registered dependencies never authorize a new arbitrary path. Active or unknown owners remain protected.

BuildCacheCleanupPlan uses one proposal for preview/execution, then rechecks ownership, roots, dependencies, members and readers under locks before retirement. Resumable size shards are not persisted retirement authorization, and dry-run cannot update them. Logical retired bytes are separate from measured physical free space. Invalid or incomplete protection metadata keeps cleanup visibly unsuccessful while retaining any actual completed retirement diagnostics.

NativeArtifactTransfer carries only immutable payloads/manifests. Import verifies complete paths, membership and hashes in an owned temporary scope before adoption; it transports no PID, lease, writable obj or absolute owner state. Artifact export is not test evidence.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Inno.Build.Toolchains;

public static class HostExample1
{
    static ValueTask<BuildCacheCleanupResult> RetireUnused(
        string checkout,
        IReadOnlyList<BuildCacheOwnerDescriptor> owners,
        CancellationToken cancellation
    ) {
        BuildCacheCleanupPlan plan = BuildCacheCleanupPlan.Create(
            checkout, owners, new BuildCachePolicy(), cancellationToken: cancellation);
        return plan.ExecuteAsync(cancellationToken: cancellation);
    }
}
```
```csharp
using System.Threading;
using System.Threading.Tasks;
using System.Collections.Generic;
using Inno.Build.Toolchains;

public static class HostExample2
{
    static Task<ProductNativeBuildResult> Prepare(
        ProductNativeBuildPlan plan,
        NativeBuildContext selected,
        CancellationToken cancellation
    ) {
        return new ComponentNativeProductExecutor().BuildAsync(selected, plan, cancellation);
    }
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Inno.Build.Toolchains.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../types/build-execution/inno-build-toolchains/index.md).
