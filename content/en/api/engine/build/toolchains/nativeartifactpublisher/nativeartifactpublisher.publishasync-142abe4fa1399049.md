---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.142abe4fa1399049d6d018c87e28b3419f424cf5d3ee3a184ffbb46a1eb87d6c
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeArtifactPublisher.PublishAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBuildRecipe,System.Func{Inno.Build.Toolchains.NativeBuildContext,System.String,System.Threading.CancellationToken,System.Threading.Tasks.Task},System.Func{Inno.Build.Toolchains.NativeBuildContext,System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeArtifact}},System.Threading.CancellationToken)
title: NativeArtifactPublisher.PublishAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 2724bf5186831d699f35975e773335cfda360b43a988fa7aec9edf8ad3e8890b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** Checkout and configuration selected by build composition.

**Parameter `recipe`:** The frozen component, target, input inventory and ordered compiler recipe.

**Parameter `build`:** Producer receiving an identity-scoped context, private output directory and cancellation token. It must await all work and validate required outputs before returning.

**Parameter `describeOutputs`:** The producer's exact role inventory, or null for generic support payloads.

**Parameter `cancellationToken`:** Cancels ownership acquisition or candidate preparation before publication.

## Returns

A complete native product with an exact, read-only output closure.

## Exceptions

**Exception `T:System.ArgumentException`:** A component or target identifier is not a single path segment.

**Exception `T:System.IO.IOException`:** An input, candidate or artifact cannot be read or published.

**Exception `T:System.InvalidOperationException`:** Inputs change during preparation or the producer returns no complete output.

**Exception `T:System.OperationCanceledException`:** Ownership acquisition or preparation is canceled; previous products remain installed.
