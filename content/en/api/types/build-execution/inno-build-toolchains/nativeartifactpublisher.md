---
title: "NativeArtifactPublisher"
description: "Reference for NativeArtifactPublisher in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.9f90fa621af21d65
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeArtifactPublisher`

This reference describes `NativeArtifactPublisher` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`PublishAsync`](#api-05e99664efd1ca34) | Method |

## Type declaration

<a id="api-9f90fa621af21d65"></a>
<!-- api: T:Inno.Build.Toolchains.NativeArtifactPublisher 3da5b520833eb8d0fe185effd3a7620801130de518c0c873a926bcb9fb72c43a -->

```csharp
public static class Inno.Build.Toolchains.NativeArtifactPublisher
```

Publishes complete native products by source and toolchain identity under process-shared ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifactPublisher.cs#L15).

## `PublishAsync`

<a id="api-05e99664efd1ca34"></a>
<!-- api: M:Inno.Build.Toolchains.NativeArtifactPublisher.PublishAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBuildRecipe,System.Func{Inno.Build.Toolchains.NativeBuildContext,System.String,System.Threading.CancellationToken,System.Threading.Tasks.Task},System.Threading.CancellationToken,System.Func{Inno.Build.Toolchains.NativeBuildContext,System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeArtifact}}) f3303d7f6d61a1e3de536dff9ed77358531bf030a45aa930bdc95e90a69981a6 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct> Inno.Build.Toolchains.NativeArtifactPublisher.PublishAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.NativeBuildRecipe recipe, System.Func<Inno.Build.Toolchains.NativeBuildContext, string, System.Threading.CancellationToken, System.Threading.Tasks.Task> build, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken), System.Func<Inno.Build.Toolchains.NativeBuildContext, string, System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeArtifact>>? describeOutputs = null)
```

Reuses a validated product or builds an isolated candidate and publishes it after input stability checks.

**Parameter `context`:** Checkout and configuration selected by build composition.

**Parameter `recipe`:** The frozen component, target, input inventory and ordered compiler recipe.

**Parameter `build`:** Producer receiving an identity-scoped context, private output directory and cancellation token.
It must await all work and validate required outputs before returning.

**Parameter `cancellationToken`:** Cancels ownership acquisition or candidate preparation before publication.

**Parameter `describeOutputs`:** The producer's exact role inventory, or null for generic support payloads.

**Returns:** A complete native product with an exact, read-only output closure.

**Throws `System.ArgumentException`:** A component or target identifier is not a single path segment.

**Throws `System.IO.IOException`:** An input, candidate or artifact cannot be read or published.

**Throws `System.InvalidOperationException`:** Inputs change during preparation or the producer returns no complete output.

**Throws `System.OperationCanceledException`:** Ownership acquisition or preparation is canceled; previous products remain installed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeArtifactPublisher.cs#L51).
