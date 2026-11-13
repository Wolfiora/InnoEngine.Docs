---
title: Inno.Build.Toolchains.Bgfx
description: "Frozen native-library and offline-tool recipes with explicit platform integration and protected products."
uid: project.inno-build-toolchains-bgfx
kind: project
owners: [Inno.Build.Toolchains.Bgfx]
exampleMode: host
exampleProjects: [Inno.Build.Toolchains.Bgfx]
---
# Inno.Build.Toolchains.Bgfx

Frozen native-library and offline-tool recipes with explicit platform integration and protected products.

Read the linked task or ownership explanation before using the exact API below.

## Select the actual product

BgfxNativeBuild and BgfxToolsBuild are separate library entry points returning owned NativeBuildProduct instances. The runtime library uses the selected product configuration; standard offline tools use Release independently of the Editor. Normal builds reach them through ProductNativeBuildPlan, not a standalone component CLI.

Keep frozen source/tool/binding inputs protected for the whole build and dispose each returned product after linking or deployment finishes. The profile target must equal the context target; the host OS is not a fallback target selector.

## Prepare immutable source and recipe inputs

Both recipes use a private frozen bgfx/bx/bimg snapshot. GENie outputs and .build stay in that snapshot rather than the upstream checkout. Tool identity, ordered arguments, options and layout are captured before staging. Cancellation reaches CMake, GENie, make and MSBuild and waits for process-tree exit. CreateRecipe declares source inputs before generated output exists; the actual publication adds selected binding content/generation and verifies freshness after locking and compilation.

The runtime binding translation unit is compiled into a private static archive through the shared CMake hook. An engine-owned thin composition script invokes upstream GENie. Platform CreateBindingLinkSettings supplies dependency references and ordered link arguments; shared recipes do not interpret platform syntax. Bridge and production macros remain separate, and neither upstream scripts nor generated source are modified. The archive is an intermediate producer result, not another deployable product.

## Platform profiles and reusable tools

BgfxNativeBuildProfile supplies the target, GENie arguments, output tokens, SDK arguments and frozen build invocation. Runtime tool selection includes bridge CMake/SDK requirements; offline tools do not consume binding generations or bridge CMake. Windows CRT details belong to the Windows integration. Profiles hold configuration, not devices, callbacks, processes or temporary owners. Browser static builds use their platform aggregate and CMake recipe instead of this GENie profile.

Offline artifacts use configuration-independent filenames such as shaderc.exe. Their configuration remains in the fingerprint/workspace and explicit deployment index. Consumers do not reselect a file using DEBUG or scan alternative directories. Runtime binding changes do not rebuild an unchanged tool; source, SDK, generator and argument changes still invalidate it. See [Native preparation](../../architecture/native-preparation.md) for the shared locking, publication and consumer protocol.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Build.Toolchains;
using Inno.Build.Toolchains.Bgfx;

static Task<NativeBuildProduct> PrepareGraphicsAsync(
    NativeBuildContext preparedContext,
    BgfxNativeBuildProfile integrationProfile,
    CancellationToken cancellationToken
) {
    return BgfxNativeBuild.BuildAsync(preparedContext, integrationProfile, cancellationToken);
}

static Task<NativeBuildProduct> PrepareToolsAsync(
    NativeBuildContext preparedContext,
    BgfxNativeBuildProfile integrationProfile,
    CancellationToken cancellationToken
) {
    return BgfxToolsBuild.BuildAsync(preparedContext, integrationProfile, cancellationToken);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx/Inno.Build.Toolchains.Bgfx.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](inno-build-toolchains-bgfx.md) retain declarations and source XML from the recorded engine capture.
