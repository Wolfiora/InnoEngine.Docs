---
title: Restore and verify managed dependencies
description: Use standard NuGet inputs while keeping product, tool and dependency-submission responsibilities separate.
uid: contributing.dependencies
kind: how-to
owners: [Inno.Build.Bindings, Inno.Build.Toolchains]
---
# Restore and verify managed dependencies

InnoEngine declares managed dependencies through ordinary `PackageReference` items. The selected .NET SDK and NuGet resolve transitive packages, target assets and implicit publication tools. BGCS package-family versions are centralized in the engine's `build/msbuild/Inno.Packages.props`; consumers use the declared exact version range rather than a source checkout.

## Restore the source configuration

From the engine checkout with its declared SDK:

```powershell
dotnet restore InnoEngine.sln -p:Configuration=SourceDebug
dotnet build entry/InnoEngine.Editor/InnoEngine.Editor.csproj
```

Normal SDK and IDE builds perform required restore. Do not add a separate dependency-preparation script or commit `obj` output. The SDK's evaluated `ProjectAssetsFile` records the actual resolution; an explicit `ArtifactsPath` can isolate that output. The engine does not maintain a second per-host/RID/publication lockfile inventory.

After a package change, restore, build and validate the affected consumers. This process establishes the actual resolved inputs; it does not promise that a package source can never change in the future.

## Keep tool and product evaluation separate

NativeAOT, trimming and WebAssembly publication retain their real RID, SDK and deployment properties. Their implicit packages remain SDK decisions. Task-private restore and compilation use their own evaluated configuration and output owner, so one RID cannot overwrite another operation's assets.

Frozen managed inputs include the actual restored packages and reference packs. Do not infer them from another owner's `obj` directory. Native source under `extern/`, binding generations, reusable build workspaces and consumer leases have separate ownership from NuGet declarations.

## Understand the two CI responsibilities

GitHub Automatic Dependency Submission is the sole dependency-graph submission owner. It is not engine build/test evidence. The engine workflow still restores the actual configurations needed by its validation plan, including separate NativeAOT inputs when required. Removing duplicate submission does not remove Windows/macOS product or publication acceptance.

Package-identity checks use real SDK restore results. They compare declared versions, NuGet archive-content identities and SDK metadata; the package's NuGet SHA-512 identity must not be confused with a raw ZIP hash that includes signature packaging. Restore and tests must also leave tracked and untracked source clean.

## Diagnose a failure

| Symptom | Check |
| --- | --- |
| Package unavailable | Exact declared version, configured source and network access; do not fall back to a source project. |
| Missing targeting pack or workload | The project's selected SDK and publication context; do not borrow a different installed SDK's assemblies. |
| Desktop tooling unexpectedly requests Wasm | Product properties leaking into the neutral tool/restore context. |
| Remote dependency submission fails | GitHub permissions and service response; local restore success does not certify the remote submission. |

Continue with [development entries](development-entries.md), [validation planning](validate-change.md) and [Task-host isolation](../architecture/task-hosts.md).
