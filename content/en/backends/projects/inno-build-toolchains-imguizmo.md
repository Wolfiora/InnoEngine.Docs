---
title: Inno.Build.Toolchains.ImGuizmo
description: "An isolated ImGuizmo recipe consuming an explicitly published and protected ImGui dependency."
uid: project.inno-build-toolchains-imguizmo
kind: project
owners: [Inno.Build.Toolchains.ImGuizmo]
exampleMode: host
exampleProjects: [Inno.Build.Toolchains.ImGuizmo]
---
# Inno.Build.Toolchains.ImGuizmo

An isolated ImGuizmo recipe consuming an explicitly published and protected ImGui dependency.

Read the linked task or ownership explanation before using the exact API below.

## Supply the dependency product

ImGuizmoToolchain.BuildAsync receives the frozen NativeBuildContext and an explicit ImGui NativeBuildProduct. It verifies the component, target and unique link library. It does not reach into another toolchain's intermediate directory. Each component has its own workspace; the published dependency remains protected until this consumer finishes.

CreateRecipe declares the actual inputs before preparation. Normal product composition owns the preparation order and binding-generation selection; there is no standalone component CLI or public platform-builder hierarchy.

## Preserve failure and output ownership

[Native preparation](../../architecture/native-preparation.md) supplies frozen sources/tools, cancellation, hashes and atomic publication. Keep input readers alive during compilation, then dispose the returned product only after linking/deployment. Context configuration and root are explicit. Cancellation stops the active process tree, and failure never permits deployment of a missing library or an unrelated installed directory. Changing bindings/upstream inputs requires the relevant generation and target to be rebuilt and validated.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Build.Toolchains;
using Inno.Build.Toolchains.ImGuizmo;

static Task<NativeBuildProduct> PrepareGizmoAsync(
    NativeBuildContext preparedContext,
    NativeBuildProduct imGui,
    CancellationToken cancellationToken
) {
    return ImGuizmoToolchain.BuildAsync(preparedContext, imGui, cancellationToken);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGuizmo/Inno.Build.Toolchains.ImGuizmo.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](inno-build-toolchains-imguizmo.md) retain declarations and source XML from the recorded engine capture.
