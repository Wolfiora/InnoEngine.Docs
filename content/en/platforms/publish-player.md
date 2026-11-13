---
title: Build and run a Player
description: Prepare a matching Support Pack, publish game content and run the resulting desktop application or Browser site.
uid: platforms.publish-player
kind: how-to
---
# Build and run a Player

Publish a Player when you need a runnable game outside the Editor. Building a platform's Player source library alone does not produce a complete game: the publication step combines that source with game code, runtime metadata, content and matching native artifacts.

## Prerequisites

Use a prepared engine checkout, an existing authoring project and a valid startup scene. [Select the host, target and managed deployment](select-target.md), and ensure the actual target SDK is available. Desktop Editor preparation and Player publication have separate component requirements.

Run the following commands from the engine root. Replace the example project path and startup scene with your own inputs. The Windows example explicitly selects Windows x64 as both tool host target and game target.

## Prepare compilation inputs

```sh
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- support-pack --tools-target windows-x64 --target windows-x64 --output artifacts/support-packs
```

A Support Pack contains target compilation, linking and runtime inputs, not your game assets. It can be prepared separately or acquired through publication. Its validator must accept the complete immutable generation before a consumer uses it.

## Publish the game

```sh
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- game --tools-target windows-x64 --project /absolute/MyGame --support-packs artifacts/support-packs --target windows-x64 --deployment coreclr --startup-scene Scenes/Main.iscene --output artifacts/games
```

The game pipeline selects and validates its content and script inputs, then publishes the complete output. A failed required asset or incompatible Pack does not become a successful game because an older file happens to exist in the output directory.

| Runtime target | Managed deployments | Run the published result |
| --- | --- | --- |
| Windows x64 | CoreCLR or NativeAOT | Launch the exported game executable with its content and deployed libraries. |
| macOS ARM64 | CoreCLR or NativeAOT | Launch the exported app bundle with its `Contents/Resources/Content` payload. |
| Browser wasm32 | `mono-wasm` or `mono-wasm-aot` | Serve the exported site over HTTP and open `index.html`. |

Use the actual registered deployment identifiers and target contribution for your chosen configuration. This table describes implemented publication paths; it does not certify every combination on your machine or device. Published Players consume exported metadata and Packs, not an authoring Project directory. End users do not run MSBuild, binding generation or a C++ compiler to launch a complete game.

## Browser preparation

The Browser target is `browser-wasm`. It requires the matching .NET WebAssembly workload and Emscripten inputs. The actual SDK template supplies clang, sysroot, Node and Python; do not substitute guessed PATH versions.

CMake and Ninja are independent host tools and must be available to the process starting the build:

```sh
cmake --version
ninja --version
```

On Windows, Visual Studio's C++ tooling can supply them, but the installation directory is not a repository convention. The Browser source library uses the ordinary .NET SDK; the actual executable is produced through the WebAssembly publication template. Opening a source-library output or a local file URL is not equivalent to hosting the published site.

The page forwards repeated `arg` query parameters to the shared Player argument parser. For example, `index.html?arg=--smoke-frames&arg=3000` requests 3,000 frames followed by normal shutdown and resource release. With no finite-frame request, execution follows the normal game lifecycle. Invalid arguments are rejected before native resources are created; a nonzero exit is displayed as an error.

## Diagnose missing content or startup failure

First confirm that you are running the complete published output and selected configuration. Windows expects runtime metadata, catalog and Pack under its `Content` layout; macOS uses the app bundle layout. Browser reads owned manifest/catalog metadata over HTTP, validates the catalog-selected Pack and constructs an owned store without extracting a duplicate `/Content` tree.

Do not combine files from different generations. Preserve the first preparation or runtime failure and inspect the owning SDK, content or lifecycle boundary. See [application locations](application-data.md) and [build artifact ownership](../architecture/build-artifacts.md) for the corresponding contracts.
