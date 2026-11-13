---
title: Inno.Build.Distribution.Standard
description: The standard engine distribution's platform, tool and product composition.
uid: project.inno-build-distribution-standard
kind: project
owners:
  - Inno.Build.Distribution.Standard
---
# Inno.Build.Distribution.Standard

The standard distribution binds implemented platform contributions, managed deployment and product Native closures in one place. It is a concrete composition boundary. Neutral build services do not depend on it, and a custom distribution can use the public composition contracts directly.

## Understand the three target choices

| Choice | Meaning |
| --- | --- |
| Execution host | The machine on which build tools must run. |
| Tools target | The Native tools executable on the authoring machine, such as an offline shader compiler. |
| Publication target | The game's content format, managed deployment, Native closure and package layout. |

For example, an Editor running on Windows can select Browser publication while retaining Windows-executable content tools. Selecting an export target does not change the running Editor presentation. Registration alone does not prove that an SDK, workload or device is available.

## Compose the distribution

`StandardBuildDistribution.Create` registers WindowsX64, MacOSArm64 and BrowserWasm32 game targets and the shared CoreCLR, NativeAOT and Mono Wasm deployment implementations. Editor products, CLI and MSBuild tasks use this same composition. The returned `build` is the neutral distribution contract.

`ResolveShaderTarget` uses the same registered platform bindings to resolve shader configuration. Platform and shader identities must agree; an unavailable target fails before Native preparation. Shared composition does not acquire a dependency on BGFX merely to perform this lookup.

An explicitly supplied tool runner is borrowed by content compiler factories. If absent, composition uses the application's explicit deployment index. Each operation owns its acquired artifact leases; a static distribution object must not retain them.

## Capture the execution environment

`StandardBuildEnvironment.Capture` resolves the selected managed SDK executable and captures the execution host with an explicit tools target. The publication target remains independent. SDK discovery and missing-tool diagnostics occur during the selected operation's preflight; creating the registration does not execute a build.

`ResolveManagedHost` selects the managed SDK without requiring a Native tools target. Managed authoring commands use this smaller boundary. An explicit host takes precedence; otherwise selection follows `DOTNET_HOST_PATH`, the loaded shared runtime's muxer and, when there is no shared-runtime installation, normal executable discovery. Missing hosts fail visibly.

`StandardBuildHosts.Capture` uses registered host providers and rejects unsupported systems/processors. It does not guess that an output target can run on the current machine.

## Native product closures

The distribution's internal `StandardNativeComponents` composition distinguishes Player, Editor and shader-tools requests. Player excludes ImGui, ImGuizmo and offline tools. Editor adds presentation and authoring tools. Shader-tools preparation selects only the offline compiler closure. These are immutable plans whose target bindings and SDK are frozen before execution.

The Browser static-player aggregate has real static build steps and no independent dynamic-build step. It belongs to the Browser aggregate executor; running it through the standalone executor is rejected.

Dynamic product metadata declares logical library names and their actual deployment files in `Deployment.index`. Standard composition owns naming and layout policy. The interop loader consumes the declaration instead of deriving filenames from platform names. Binding generation is similarly supplied once through the neutral composition context; tasks and platform modules do not maintain duplicate component lists.

## Cache and workspace ownership

`StandardBuildCaches.CreateOwners` registers the actual Native, binding and support-pack publishers. Current generations, referenced binding generations and active readers remain protected. Unrecorded directories are outside cleanup authority.

`CreateShaderWorkspaceAsync` creates a Core process-owned directory under the registered shader request cache. CLI and tasks retain it through import, compilation and validation. Disposing the handle releases the payload; the existing maintenance protocol retires claim metadata and leaf locks under exclusive ownership. Compilers borrow the workspace rather than selecting a global temporary directory or implementing another cleanup service.

These ownership contracts apply even when tools fail or compilation is canceled. Read [build artifacts and consumer protection](../build-artifacts.md) before integrating a publisher or reader.

## API reference

The source reference contains the public environment, host, distribution and cache boundaries. Internal Native-component composition above explains the mechanism; it is not a separately promised public API.

[Browse standard distribution types](../../api/engine/build/distribution/standard/index.md).
