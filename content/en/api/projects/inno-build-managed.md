---
title: Inno.Build.Managed
description: "Neutral managed deployment identities, capabilities, requests and results."
uid: project.inno-build-managed
kind: project
owners: [Inno.Build.Managed]
exampleMode: host
exampleProjects: [Inno.Build.Managed]
---
# Inno.Build.Managed

Neutral managed deployment identities, capabilities, requests and results.

Start with [distribution composition](../../extending/build-distribution.md) and [Support Pack preparation](../../contributing/support-packs.md).

## Select a real deployment capability

[Compose a build distribution](../../extending/build-distribution.md) explains how a host registers a managed publisher. This contract library references no platform packager, Editor, Runtime or concrete SDK publisher. Domain runtime does not need to know which deployment implementation produced it.

ManagedDeploymentId is open and stable. Capability construction defensively copies supported RIDs and records dynamic-code, ahead-of-time and Native static-link support. The catalog rejects null/duplicate providers, reports supported choices in stable order and resolves the selected target before staging. Missing support fails rather than selecting an approximate runtime.

## Requests and results

A request normalizes absolute project, code-input, output and log paths without creating output or running tools. A result copies relative files and rejects an empty, duplicated or escaping file set. CompileAsync is the replaceable publisher boundary; cancellation and failure do not return a success descriptor.

The compiler does not install the game. Pipeline verifies identity, staging ownership and complete output, then calls platform packaging. Source, generator and PlayerLink material remain authoring/staging/Support Pack inputs, not arbitrary user-game content. There is no protected extension hierarchy; implement IManagedDeploymentCompiler and register only supported combinations.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Build.Managed;

static ValueTask<ManagedDeploymentResult> CompileAsync(
    ManagedDeploymentCatalog publishers,
    ManagedDeploymentId deployment,
    ManagedDeploymentRequest request,
    CancellationToken cancellationToken
) {
    IManagedDeploymentCompiler compiler = publishers.Resolve(
        deployment, request.runtimeIdentifier);
    return compiler.CompileAsync(request, cancellationToken);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/Inno.Build.Managed.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../types/build-composition/inno-build-managed/index.md).
