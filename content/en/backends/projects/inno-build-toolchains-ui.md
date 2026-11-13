---
title: Inno.Build.Toolchains.UI
description: RmlUi native component inputs, toolchain recipes and immutable product artifacts.
uid: project.inno-build-toolchains-ui
kind: project
owners:
  - Inno.Build.Toolchains.UI
---
# Inno.Build.Toolchains.UI

The UI toolchain declares and builds the native `ui` component for a selected product context. It binds the native facade, its generated ABI, RmlUi and font-library inputs to the existing Native preparation and publication system.

## Recipe and artifact contract

Recipes depend on the selected target SDK, toolchain, configuration, source/recipe inputs and binding selection. Static-library metadata participates in aggregate product preparation. The standalone producer recipe is for the supported shared-library path and rejects an incompatible static request instead of silently changing product form.

Build execution prepares the selected CMake target, identifies the actual output and publishes the normalized files into an owned immutable artifact. Import/shared roles remain explicit. Consumers acquire their own reading protection and deploy the validated closure; copying an arbitrary DLL into place is not preparation evidence.

`CreateRecipe` borrows its selected context and declares inputs without starting compilation or reading generated output. The publisher adds the actual selected binding generation. Keep input reading protection for the build, then retain and dispose the returned `NativeBuildProduct` around consumption. Cancellation drains active tools before publication; an incomplete or canceled candidate is not a usable replacement.

This project owns component recipes, not a manually duplicated platform-support table. The actual product/target composition and verified artifacts determine availability. A successful API extraction or documentation build does not certify Native execution.

## Diagnose preparation

Use the unified validation plan and phase logs to separate toolchain selection, dependency preparation, compilation, artifact publication and deployment. Preserve first-failure evidence. Follow [build artifact ownership](../../architecture/build-artifacts.md) before inspecting or retiring a cache entry.

## Reference

[Browse types and exact member contracts](inno-build-toolchains-ui.md).
