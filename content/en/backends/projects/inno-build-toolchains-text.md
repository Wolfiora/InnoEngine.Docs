---
title: Inno.Build.Toolchains.Text
description: Declare and prepare the Text native component using explicitly selected target tools.
uid: project.inno-build-toolchains-text
kind: project
owners:
  - Inno.Build.Toolchains.Text
---
# Inno.Build.Toolchains.Text

`TextToolchain` owns the Text component's source recipe and native product preparation. Platform providers select target SDKs; this producer does not choose a target from its current host or start another component's executable.

## Frozen build contract

`CreateRecipe` borrows an operation context with explicit tools and shared-library options. It declares handwritten sources, CMake inputs, pinned FreeType/HarfBuzz inputs, SDK and toolchain implementation before generated bridge output is read. It does not allocate staging or launch tools. The publisher adds the selected binding generation's actual content and location.

`BuildAsync` prepares and validates an immutable product. The caller protects frozen inputs during preparation and retains consumer reading protection until deployment or linking completes. Dispose the returned `NativeBuildProduct` through its ownership protocol. Failure or cancellation is not a successfully published candidate.

The standalone producer requires Shared linkage. Static products use the component descriptor's aggregate recipe and declared `libinno-text`, `libfreetype` and `libharfbuzz` outputs. A platform integration supplies its ABI/profile rather than this component guessing it.

## Use and reference

Normal product builds prepare Text through their selected Native dependency closure. Explicit Support Pack requests have a different product closure. Keep stable build directories and independent logs; do not copy an unrelated library into deployment to bypass identity checks.

See [build artifacts and consumer protection](../../architecture/build-artifacts.md), the [native Text contract](inno-native-text.md) and [exact toolchain members](inno-build-toolchains-text.md).
