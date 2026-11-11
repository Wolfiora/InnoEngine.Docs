---
title: Add a platform or replace a backend
description: Assign system, SDK, integration and product responsibilities before registering a new supported target.
uid: extending.platforms
kind: how-to
owners: [Inno.Build.Composition, Inno.Build.Toolchains, Inno.Build.Managed]
contracts: [extending.build-distribution, architecture.ownership]
---
# Add a platform or replace a backend

A new platform supplies real system integration, SDK selection, product composition and packaging. It reuses shared engine services and compatible backends. A composable project layout is not evidence that a device, SDK or managed runtime is supported.

## Decide which boundary changes

| Change | Primary implementation owner |
| --- | --- |
| New OS or console target | A real target package under `platforms/`, with system/SDK integration and thin products. |
| Another CPU/ABI | Its own explicit target, toolchain/ABI configuration and matching integrations. |
| Another graphics backend | The backend and necessary platform connections, rendering factory, content compiler and native plan. |
| Another managed deployment | The deployment compiler and matching SDK/link integration. |
| A platform-specific authoring tool | An extension of the existing Editor; this does not imply the Editor runs on that device. |

Do not duplicate Scene, Input, Rendering or Editor business logic. Platform foundation build/runtime projects do not depend on a backend. Shared backends do not depend on named platform packages. A genuine connection belongs in a platform integration selected by the product or build distribution.

## Declare target and host facts independently

`PlatformTargetDescriptor` identifies the target system, CPU, ABI, RID and product capabilities. `BuildHostDescriptor`, its provider and services describe where tools execute. `NativeToolchainSelection` freezes actual tools, SDK files, environment and ordered arguments. Target IDs are explicit registrations, not strings inferred from project names or the current OS.

The registered targets are `windows-x64`, `macos-arm64` and `browser-wasm` (wasm32). They do not imply support for another architecture. Exporting a Browser game from a Windows Editor leaves the Editor's native presentation configured for Windows.

## Implement the target in dependency order

1. Establish the real target, ABI, supported products and runtime restrictions.
2. Implement the SDK provider and verify the hosts on which its tools can execute. Return frozen absolute tools and inputs.
3. Verify which existing backends actually satisfy the target's surface, threading, callback and lifetime requirements. Implement missing capability at its owning adapter/native boundary.
4. Select or implement the managed deployment compiler, including static registration, interop, exceptions, callbacks and final linking.
5. Add a thin product composition supplying content source, storage namespace, logging, frame driver and backend catalogs to shared hosting.
6. Implement the target's output layout, Support Pack, packaging and applicable signing/device deployment.
7. Register the complete contribution in one distribution. Bind every native product's actual component closure to its executor; do not add a second component-selection table to Tasks.
8. Validate actual content, input, audio, rendering, suspend/resume, persistence, failure, cancellation and shutdown on the device before marking support verified.

Create projects where dependency or lifetime responsibilities differ. Do not mechanically create a project for every CPU/library, leave empty integration projects, or share handwritten implementation with `Compile Link`. An integration exists only when there is real connecting code.

## Connect runtime surfaces separately from build tools

For SDL, the platform's `ISdl3HostIntegration` supplies actual SDK hints, surface and focus differences while common `Sdl3WindowOperations` owns shared operations. For BGFX, an `IBgfxSurfaceIntegration` belongs to the runtime integration and is injected into the rendering factory.

Native and shader build profiles belong to the build integration. Runtime Players do not acquire binding generators or SDK build tools merely to obtain a window surface. A different renderer implements its own rendering factory; it need not implement BGFX's SPI or change a platform packager.

Surface descriptors borrow handles from the window owner. Closing an additional window removes input/callback routes, waits for the renderer's retirement operation and only then permits that owner to destroy the window. A completed task is not a general GPU fence. ImGui refreshes actual display scale before NewFrame; it does not duplicate platform aggregate-ABI rules.

For a concrete composition without creating a device, read the [Windows product catalog example](../api/projects/inno-editor-windowsx64.md#compose-backend-catalogs).

## Supply build contributions without central switches

- A platform contribution binds the target, SDK provider, packager and Support Pack source.
- A game contribution binds the platform packager to an actual backend content compiler.
- A native product plan declares Static/Shared execution, ordered component options, required inputs and its real executor.
- A BGFX integration provides the native profile, tool invocation and shader target profiles. Shared recipes do not enumerate named engine platforms.
- Support Pack planning performs read-only preflight and freezes SDK/CLI selection before the publisher acquires output ownership or creates staging.

The product's `InnoProductBuildProperties` points to its own build properties. Player shader target/API selection and Editor ImGui API selection remain there. Authoring-tool execution and game targets stay separate. See [build distribution](build-distribution.md), [shader targets](shader-targets.md) and [Support Packs](../contributing/support-packs.md).

## Add an architecture without borrowing another product

A future Windows ARM64 or x86 target cannot use the X64 composition as its implementation or reuse its fixed ABI validator. Reuse shared Editor hosting, Player runtime and backends. If actual system code is identical, extract it into an independent shared owner used by both targets; do not make one target depend on the other.

Native, managed, binding and product outputs remain target-qualified. A future iOS device/simulator pair likewise needs distinct truthful SDK/target descriptions, lifecycle entry, signing and layout. These are extension directions, not currently implemented platforms.

Replacing the Browser managed runtime changes the matching deployment compiler/linker and requires fresh startup/interop/exception/callback evidence. It does not add runtime switches to gameplay, Scene, Input or Rendering.

## Preserve engine lifecycle contracts

Freeze catalogs/configuration before execution. Keep Core Events, persistent/runtime Identity, Missing recovery, last-good state and atomic candidate publication. Reuse the owning History/Workspace transaction rather than introducing a platform-specific one.

Collectible retirement still requires admission closure, removal of strong roots, full GC/finalizers/full GC and weak-reference confirmation. Pending or faulted retirement is not success. Update the actual solution/project graph, source XML, documentation and consumers together; device acceptance and architecture checks establish different facts.
