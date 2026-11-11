---
title: Build and run development entries
description: Use the ordinary SDK Build and Editor entries while preserving output ownership.
uid: contributing.development-entries
kind: how-to
owners: [InnoEngine.Build, InnoEngine.Editor]
contracts: [project.innoengine-build, project.innoengine-editor]
---
# Build and run development entries

The repository provides ordinary .NET executable entries for Build and Editor. The SDK compiles their real project references; starting them does not reflectively load a second unpublished copy of the CLI or Editor.

## Prepare support or build the Editor

Run from the engine checkout with its selected SDK:

```sh
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- support --product player --target windows-x64
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- editor --configuration Release
```

No arguments prepares support for the development host's Editor. Support prepares applicable Native dependencies, bindings and backend tools; it does not compile the whole managed Editor product. The editor command builds the actual Editor entry and its dependencies.

Support/editor/product-clean defaults follow the entry's build configuration; Support Pack defaults to Release. Explicit configuration and target selection remain caller-owned. A portable target description compiling on a host does not prove that host can execute the target's Native toolchain.

For script, plugin or Player export, use the corresponding workflow rather than treating support preparation as a completed product build. See [build a Player](../platforms/publish-player.md) and [compile project scripts](compile-project-scripts.md).

## Start the actual Editor product

```sh
dotnet run --project entry/InnoEngine.Editor/InnoEngine.Editor.csproj
dotnet run --configuration Release --project entry/InnoEngine.Editor/InnoEngine.Editor.csproj -- /absolute/MyGame
```

The SDK host selects the WindowsX64 or MacOSArm64 product reference. Its composition runs directly on the original main thread. Without a project path, the product opens its native directory chooser; canceling exits normally. Required platform tooling must be available for the first preparation.

Normal builds own their selected reference closure even when an IDE solution excludes a product as a separate root. Design-time evaluation does not trigger Native preparation or introduce another IDE-only output tree. Subsequent source changes use the SDK's actual dependency graph.

## Clean only the selected owner

```sh
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- clean --scope product --dry-run
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- editor --clean
```

Inspect dry-run before intentional cleanup. Product clean acquires exclusive access to the selected entry/platform product configuration. A running Editor holds a reader lease, preventing deletion of its deployment. Other configurations, Native/Binding caches, Support Packs, game outputs and user data are outside that product scope.

Cache cleanup uses registered owners and their dependency/reader protections. It does not guess ownership of an old unregistered directory. `--clean` is an editor option, not a general command flag. Do not remove locks to bypass an active consumer.

## Publish a macOS development application

On a supported macOS host:

```sh
dotnet publish entry/InnoEngine.Editor/InnoEngine.Editor.csproj -c Release -r osx-arm64
```

The platform-owned target creates `InnoEngine.Editor.app` beside the publish output. Contents/MacOS contains the published application, Contents/Resources contains the licensed logo.icns, and Info.plist identifies io.innoengine.editor and its executable/icon. Normal dotnet run still runs the bare executable.

The default publication is framework-dependent. Add `--self-contained true` when distributing to machines without the required .NET runtime. This operation does not sign or notarize the application and is not a formal engine release. Windows uses the existing logo.ico through ApplicationIcon; both remain subject to the separate branding license.

## Keep preparation outside fast reads

Build tooling once, then invoke its DLL or use `--no-build` for prepared documentation queries. [Query an explicit snapshot](documentation-queries.md); queries do not rebuild an index, discover a sibling checkout, compile the engine or prepare Native dependencies silently.

Entry-owned cancellation removes the Ctrl+C subscription on exit. Exit codes distinguish success, cancellation and unhandled failure; product hosts retain responsibility for sessions, devices, workers and callback retirement. See the entry references for exact ownership boundaries and [validation](validate-change.md) before claiming a product verified.
