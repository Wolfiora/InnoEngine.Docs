---
title: Prepare your environment
description: Prepare the SDK and native toolchain needed to build the desktop Editor.
uid: getting-started.prerequisites
kind: tutorial
---
# Prepare your environment

The desktop Editor is built from the selected engine checkout. Its first build prepares the native dependencies required by that product; subsequent builds reuse matching, verified artifacts.

## Choose a development host

The current desktop entry supports Windows x64 and macOS ARM64. Windows requires the selected MSVC toolchain, Windows SDK, and CMake. macOS requires a native ARM64 .NET SDK, Xcode tools, and CMake.

The engine's `global.json` selects the .NET SDK. At the documentation migration baseline it selects **10.0.402** with `latestPatch` roll-forward. Follow the file in the engine revision you are building rather than assuming an arbitrary installed SDK is compatible.

## Prepare the checkout

Clone the engine and initialize its pinned submodules:

```sh
git clone --recurse-submodules https://github.com/Wolfiora/InnoEngine.git
cd InnoEngine
dotnet --info
```

For an existing checkout:

```sh
git submodule update --init --recursive
```

The first normal NuGet restore needs network access. Native sources come from the pinned submodules. Do not manually edit generated bindings or replace native binaries to work around preparation failures.

## What is not required for a desktop session

Browser publishing is a separate target. Installing its workload is not a prerequisite for starting the desktop Editor. The target and product determine which SDK inputs are needed.

## Next step

[Start your first Editor session](first-editor-session.md). If preparation fails, keep the first diagnostic and fix the reported SDK or dependency problem before retrying.
