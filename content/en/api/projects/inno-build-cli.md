---
title: Inno.Build.Cli
description: Explicit development commands composed from engine build and authoring services.
uid: project.inno-build-cli
kind: project
owners:
  - Inno.Build.Cli
---
# Inno.Build.Cli

This library implements the application behind the `InnoEngine.Build` entry. It selects an explicit operation and composes the existing validation, distribution, toolchain and authoring services. It is not another daily executable or a runtime service.

## Choose an operation

Run commands from the engine checkout with the SDK pinned by its `global.json`. The entry supplies normal host and configuration defaults; embedding `BuildApplication` directly requires the command's explicit context. Empty application arguments print help.

```sh
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- editor --configuration Release
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- clean --scope product --dry-run
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- support-pack --target windows-x64
```

| Operation | Work performed |
| --- | --- |
| `support` | Prepare the selected Editor or Player support without compiling the complete managed Editor. |
| `editor` | Incrementally build the Editor entry and its dependencies; `--clean` first cleans that product. |
| `bindings` | Prepare bindings from the distribution's actual component closure. |
| `support-pack` | Prepare and validate a target's reusable pack, independently of game content. |
| `game` | Prepare the pack and tools, capture authoring state on its owner thread, then publish the game. |
| `plugin` | Build a plugin through the existing authoring pipeline and required content tools. |
| `scripts` | Compile project scripts; `--ide` also generates the matching IDE projects and projected references. |
| `import-sample` | Import through the existing managed authoring service. |
| `shader` | Invoke the selected target's shader tool. |
| `validate` | Plan, run, fully validate or inspect evidence through the validation owner. |
| `docs` | Prepare/query snapshots, export source facts or validate explicit examples. |
| `verify` / `verify-native` | Diagnose architecture or validate generated Native bindings and real consumption. |

Unknown, duplicated, incomplete and command-inapplicable options fail explicitly. `--dotnet` selects an absolute SDK host. Installing that SDK and its workloads is environment preparation; cache maintenance does not remove them.

## Managed authoring boundary

Script compilation and IDE generation do not require a Native tool target, support pack, window or ImGui presentation. `scripts` and `import-sample` open the managed authoring workspace directly and reject the retired `--tools-target` and `--support-packs` options. They do not sweep unrelated engine-product caches after completion.

The CLI still composes the real authoring and script-export closure, including Animation assets. Its deployed `Inno.Build.Cli.deps.json` makes that closure explicit to the compiler. Project scripting manifests select exports; there is no central type whitelist. Feature and reusable presentation references carry their own contracts instead of pulling them through concrete panels. Preparing these references does not create those panels or authorize drawing outside an Editor session.

`scripts --ide` first compiles project and installed-plugin scripts, then asks the same compiler to generate .NET 10 / C# 14 projects and trimmed API references. Generated IDE projects and `Library/` are derived output. Edit the source project and regenerate them. An example that compiles only against host assemblies has not validated the script surface.

## Product preparation and ownership

Game and plugin operations retain the required frozen tools throughout content compilation. The standard distribution supplies actual executable and include paths to compiler factories. A Debug/Release change does not infer a new tool filename or create a second CLI publication.

For game publication, support-pack preparation completes before authoring snapshot capture begins on the owner thread. The build separately protects its consumed pack until managed compilation, linking and packaging finish. `ProductNativeBuildResult` owns Native output leases; shader operations retain their tool lease until the process exits.

`--engine-root` explicitly supplies Native source ownership when running from independent SDK output. It is checked before opening project state or launching tools. A regular checkout entry can locate its own root. Independent game outputs prepare the required pack explicitly and pass it through `--support-packs`.

Support packs use Release preparation independently of the Editor's configuration. Browser final linking and workload requirements belong to the selected Browser publication target. Neither changes the tools that must run on the current machine.

## Archives, cleanup and failure

`support-pack --archive` validates a pack under its reading lease and atomically replaces a caller-owned archive. The archive contains immutable deliverable content, not live leases, ownership registrations or current-selection state. A draft delivery consumes that verified archive without rebuilding it.

`clean --scope product` preflights the SDK, product, target and configuration before cleaning owned work. `clean --scope cache` retires registered, unreferenced generations. Both support a corresponding `--dry-run`. Active readers and dependencies remain protected. Unknown directories and other valid packs are outside a product cleanup's authority.

Successful product operations may evaluate automatic cache retirement with the configured budget, free-space threshold and operation budget. The current defaults are 64 GiB, 20 GiB free and a five-second maintenance budget. That budget limits maintenance work, not legitimate build duration. Deferred cleanup is reported separately from a successful build.

SDK subprocess environments are isolated from the parent IDE. Cancellation terminates and awaits owned processes before releasing staging and read protection. Incomplete publications are not installed. Immutable artifact identity uses content hashes; reusable Native working directories have their own lifecycle.

## Validation and extension

`verify-native` requires PowerShell 7 and checks the isolated-test entry before generation. It first compares a separate HostSource candidate with the complete committed managed/native generated source. Formal product preparation follows, then ordinary and process-isolated Native tests, including BGCS. Discovery, TRX and execution reports identify the actual operation directory. CLI compilation alone does not certify any product or device.

The CLI command contract tests have a dedicated `Inno.Build.Cli.Tests` owner. Product, pack, Native and task-host tests retain their own requirements. New commands compose existing services; they do not implement compiler logic or directory retirement in argument parsing.

## API reference

`BuildApplication.Run` borrows the caller's cancellation token and returns zero for success, one for command/execution failure or two for cancellation. The caller owns Ctrl+C subscription. A null argument array throws before command execution. See the generated type reference for the exact declaration.

[Browse CLI types](../types/build-cli/index.md).
