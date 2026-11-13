---
title: Publish a managed deployment
description: Select an explicit .NET deployment compiler, retain the native
  closure and diagnose SDK or process failures.
uid: backends.dotnet-publishing
kind: how-to
owners:
  - Inno.Build.Managed.DotNet
contracts:
  - project.inno-build-managed-dotnet
---
# Publish a managed deployment

The .NET build adapter implements managed deployment compilation. It does not own scenes, content packs, final platform layout, signing or Editor UI. Use the selected product's build composition to provide a prepared project, SDK host, workspace owner and deployment capabilities.

## Choose a declared deployment strategy

| Compiler | Strategy | Boundary |
| --- | --- | --- |
| CoreCLR | Self-contained single-file managed publication with static registration | Dynamic code remains available; declared native libraries stay external. |
| Mono WebAssembly | The selected Mono strategy, optionally AOT | Native static linking and required workloads belong to the actual SDK/target. |
| NativeAOT | Ahead-of-time native publication | No runtime JIT or collectible assembly loader. |

Runtime identifiers come from platform contributions. The shared compiler does not maintain a second target table. A supported identifier does not prove that the executing host has its workload, platform SDK or native linker installed; missing prerequisites fail explicitly.

## Resolve the SDK from the project

The prepared entry project's `global.json` controls selection. `DotNetSdkResolver` invokes the specified host from that project instead of guessing the highest installed SDK. Prepared project inputs declare the native closure; the SDK/workload performs the final link.

Desktop templates retain an explicit external `native/` directory for CoreCLR single-file and NativeAOT publication. Before publication an empty required closure is rejected; afterward every declared file must exist. Runtime loading uses those deployed paths. A successful compiler process is not proof that the product can start or render.

## Keep execution and publication ownership separate

`ToolchainWorkingDirectory` supplies the prepared execution directory. On Windows it can use an ownership-protected short junction; SDK selection still uses the original project, and input, staging and log owners do not change. After exit and output drain, the alias is removed while physical output is retained. This mechanism serves desktop and Web publication without placing host-specific behavior in Runtime.

The executor does not take ownership of the final product directory. The caller validates and composes its result through the existing managed/product contracts.

## Diagnose the exact failing phase

The logs retain full stdout/stderr in `managed-output.log` and `managed-error.log`. Exceptions contain bounded tails. `managed-sdk.txt`, `managed-cli.txt` and `managed-working-directory.txt` record SDK identity, frozen CLI entry and physical/execution paths.

Cancellation or output-reader failure terminates the entire child process tree, waits for exit and drains readers before propagating the original failure. Do not treat a partially written directory as a published result. Finish with the selected runtime/product journey and applicable visual/device validation; compiler success alone does not certify those behaviors.
