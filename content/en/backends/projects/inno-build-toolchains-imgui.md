---
title: Inno.Build.Toolchains.ImGui
description: "The engine-owned ImGui component recipe, frozen source preparation and native product publication."
uid: project.inno-build-toolchains-imgui
kind: project
owners: [Inno.Build.Toolchains.ImGui]
exampleMode: host
exampleProjects: [Inno.Build.Toolchains.ImGui]
---
# Inno.Build.Toolchains.ImGui

The engine-owned ImGui component recipe, frozen source preparation and native product publication.

Read the linked task or ownership explanation before using the exact API below.

## Prepare the declared component

ImGuiToolchain.CreateRecipe declares pinned upstream cimgui, build definitions and the Native owner's handwritten inputs, including ImGuiPlatformCallbacks.cpp. BuildAsync consumes the explicit frozen target, SDK, component options and binding generation and returns a protected NativeBuildProduct. It is a library, not another component executable.

Use [Native preparation](../../architecture/native-preparation.md) through the selected product plan. Keep inputs protected throughout compilation and retain the returned product until linking/deployment finishes. Cancellation stops active process trees and is checked before tool launch and copying. Failed output cannot be substituted with a previously installed directory; the final platform deployment validator still checks the closure.

## Keep source transformation owned

Window-background transformation reads only the frozen source prepared by NativeCMakeExecutor. Its generated imgui.cpp belongs to the component workspace and is supplied by an explicit CMake argument. The project definition remains the declared frozen recipe; no second generated project, forged SDK path or upstream checkout mutation is introduced. Identical transformed output preserves timestamps, while transformation implementation and declaration affect component identity.

Source and output locations derive from context.engineRoot, not the tool assembly location. The scalar callback bridge does not choose a platform, resolve an SDK or modify generated bindings. Platform builders remain internal implementation.

## Host usage

Supply existing live dependencies. This example checks the host contract; it does not initialize a complete product or certify a physical device.

```csharp
using System.Threading;
using System.Threading.Tasks;
using Inno.Build.Toolchains;
using Inno.Build.Toolchains.ImGui;

static Task<NativeBuildProduct> PrepareComponentAsync(
    NativeBuildContext preparedContext,
    CancellationToken cancellationToken
) {
    return ImGuiToolchain.BuildAsync(preparedContext, cancellationToken);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGui/Inno.Build.Toolchains.ImGui.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](inno-build-toolchains-imgui.md) retain declarations and source XML from the recorded engine capture.
