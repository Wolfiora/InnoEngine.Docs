---
title: Inno.Build.Toolchains.Sdl3
description: "SDL component source declaration and protected native publication for an explicitly frozen target."
uid: project.inno-build-toolchains-sdl3
kind: project
owners: [Inno.Build.Toolchains.Sdl3]
exampleMode: host
exampleProjects: [Inno.Build.Toolchains.Sdl3]
---
# Inno.Build.Toolchains.Sdl3

SDL component source declaration and protected native publication for an explicitly frozen target.

Read the linked task or ownership explanation before using the exact API below.

## Declare before generating

Sdl3Toolchain.CreateRecipe borrows the context and returns actual source, build implementation, SDK and ordered option inputs without staging, starting tools or reading generated outputs. Fingerprinting still reads real declared content. BuildAsync consumes that declaration and adds the selected binding generation's actual content before publication.

The SDK provider chooses the target and Shared component options. Shared recipe code does not reselect the host OS or provide a second executable. Use the selected Editor/product or Support Pack plan; those plans have different explicit closures.

## Retain the preparation result

Keep frozen tools/options/generation protected through the build and dispose NativeBuildProduct after deployment/linking finishes. Source/CMake/output locations follow context.engineRoot, not the assembly location. Cancellation stops process work and is checked before launch/copy. Existing files do not certify current publication, and failed/missing output still fails platform closure validation. See [SDL integration](../sdl3.md) and [Native preparation](../../architecture/native-preparation.md).

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Build.Toolchains;
using Inno.Build.Toolchains.Sdl3;

static Task<NativeBuildProduct> PrepareComponentAsync(
    NativeBuildContext preparedContext,
    CancellationToken cancellationToken
) {
    return Sdl3Toolchain.BuildAsync(preparedContext, cancellationToken);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/build/Inno.Build.Toolchains.Sdl3/Inno.Build.Toolchains.Sdl3.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](inno-build-toolchains-sdl3.md) retain declarations and source XML from the recorded engine capture.
