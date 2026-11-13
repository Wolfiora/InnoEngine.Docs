---
title: Choose a platform and product
description: Separate the execution host, target ABI, product and managed deployment before preparing output.
uid: platforms.select-target
kind: how-to
---
# Choose a platform and product

A build can execute tools for one host while producing a different runtime target. Select each responsibility explicitly before preparing a product; the host OS alone is not a complete build request.

## Make the selections

1. Select the **execution host** and its actual SDK/tools. On Windows, [host discovery](../architecture/projects/inno-build-windows-host.md) also supplies protected compiler-workspace aliases.
2. Select the **target**: its architecture, ABI, runtime identifier and platform capabilities.
3. Select the **product** and its actual component closure. A desktop Editor includes capabilities that a Player does not need.
4. Select the **managed deployment** supported by that contribution. A native target and its managed runtime are related inputs, not interchangeable identities.
5. Prepare and validate the frozen request, then acquire protected access to the published artifacts before deploying them.

| Source target | Platform foundation | Complete composition |
| --- | --- | --- |
| `windows-x64` | [Windows x64 SDK and layout](../architecture/projects/inno-build-windowsx64.md) | [Windows build integration](../architecture/projects/inno-integration-windowsx64-build.md) |
| `macos-arm64` | [macOS ARM64 SDK and layout](../architecture/projects/inno-build-macosarm64.md) | [macOS build integration](../architecture/projects/inno-integration-macosarm64-build.md) |
| `browser-wasm` | [Browser SDK and static site](../architecture/projects/inno-build-browserwasm32.md) | [Browser build integration](../architecture/projects/inno-integration-browserwasm32-build.md) |

These are implemented source contributions, not a claim that every device, graphics API or host/target combination has passed acceptance. Browser supplies a Player, not an Editor. An Editor launch does not require preparing an unrelated Browser workload or publishing a Player Support Pack.

## Understand what composition does

Creating a build contribution assembles immutable registrations; it does not discover every SDK or start a build. Actual preparation resolves and freezes tool identities, source inputs, environment, native component options and the selected binding mode. Missing prerequisites fail at that boundary.

Platform foundations own SDK selection, product layouts and packaging. Shared backends own their recipes. Platform/backend integrations join the two without introducing an OS-selection table in shared rendering or input code.

Content compilers are separate from runtime surface integration:

- [Windows BGFX compiler/profile](../architecture/projects/inno-integration-windowsx64-bgfx.md)
- [macOS BGFX compiler/profile](../architecture/projects/inno-integration-macosarm64-bgfx.md)
- [Browser BGFX compiler/profile](../architecture/projects/inno-integration-browserwasm32-bgfx.md)

These compilers borrow authoring-generation services. A Player consumes their published content through neutral runtime contracts; it does not retain the compiler or the Editor's type catalog.

## Diagnose an incompatible request

Check the selected host, target and managed deployment separately. Then inspect SDK discovery, the exact component/binding closure and the selected artifact generation. A successful build for another configuration is not a substitute for those inputs.

Do not repair a failed publication by copying individual DLLs into an old Pack, editing generated bindings or reusing an active build directory as a deployment source. Failure and cancellation must preserve the previous complete generation. Follow [immutable build-artifact ownership](../architecture/build-artifacts.md) for producer and consumer protection.
