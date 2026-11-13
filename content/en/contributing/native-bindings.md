---
title: Prepare and check engine native bindings
description: Use the engine's official generation boundary without modifying
  generated code or duplicating upstream API documentation.
uid: contributing.native-bindings
kind: how-to
owners:
  - Inno.Build.Bindings
  - Inno.Build.Tasks
contracts:
  - project.inno-build-bindings
  - architecture.native-preparation
---
# Prepare and check engine native bindings

Each native component declares its identity and shared generation configuration in its own `Bindings/bindings.props` and `Bindings/bindgen.json`. The platform integration supplies ABI/runtime policy, while the selected SDK provider supplies actual compiler inputs. This guide covers the engine's generation workflow; upstream native and generated binding members are outside the documentation reference scope.

## Generate or compare one selected target

Use a supported host/toolchain and the repository's declared SDK. For an SDL component targeting Windows:

```powershell
dotnet build backends/Sdl3/native/Inno.Native.Sdl3/Inno.Native.Sdl3.csproj -t:GenerateBindings -c Release -p:InnoBindingTargetId=windows-x64
dotnet build backends/Sdl3/native/Inno.Native.Sdl3/Inno.Native.Sdl3.csproj -t:CheckBindings -c Release -p:InnoBindingTargetId=windows-x64
```

`GenerateBindings` invokes the official generation flow. `CheckBindings` generates an isolated candidate and compares the complete managed/native output without publishing it. A normal host build prepares missing selected bindings; a target product consumes the identity chosen by that product's native preparation.

Do not hand-edit generated managed code, generated bridges or third-party source to repair a generation failure. Correct the owning facade/configuration or official integration and regenerate. Text and UI semantic facades remain with their respective native components; they do not move into neutral services.

## Hold the selected generation while consuming it

HostSource writes the component's `Generated/Bindings.cs` and `Native/Generated`. TargetArtifacts publishes immutable `artifacts/bindings/<component>/<target>/<fingerprint>/` generations. The manifest determines exact files and layout; a tool-session diagnostic report is not a native translation unit.

`NativeBindingGenerationResult` protects the selected output until compilation, linking or copying finishes. A path string does not extend that lifetime. Target consumers hold artifact read leases; mutable HostSource retains its generation owner. Repair and retirement wait for readers to finish.

MSBuild materializes the selected managed file in its own SDK intermediate directory while protection is held. Identical bytes preserve timestamps, while binding identity and integrity checks remain active. Failure/cancellation does not return a partial managed/native closure.

## Preserve compiler semantics at the integration boundary

The Bindings tool translates the verified SDK native manifest into neutral compilation requirements: logical roots, exact files/hashes, translation-unit roles, ordered includes/macros, language and export requirements. Shared Toolchains do not import BGCS implementation types. Entry headers are dependencies, not translation units; declared generated sources and shims are compiled according to their actual roles.

Cold producers copy frozen component/generated input into their owned source tree, preserving relative and overlapping roots. External SDKs retain their selected location. The executor derives producer-specific CMake inputs instead of guessing generated filenames. Manifest macros apply to their declared translation units, not indiscriminately to upstream sources. Compiler builtin/SDK ordering remains a toolchain responsibility.

Freshness is checked initially, after relevant locks, after generation, after native execution and before publication. Mutable source links, rewritten generated text or existence-only marker files cannot substitute for these checks.

## Keep generation tools outside the Player

Compiler, sysroot, Emscripten and supporting tools come from the operation's frozen SDK selection. Do not change the parent process environment or invent another variable-expansion language. Official host NuGet assets supply generator workers; Player deployment consumes the runtime boundary rather than the generator implementation.

Compilation, linking, export validation, packaging and deployment remain engine responsibilities. Runtime marshalling policy and native widths/callbacks still require actual ABI and device acceptance. One successful target does not certify another. See [frozen native preparation](../architecture/native-preparation.md) and [binding contracts](../architecture/projects/inno-build-bindings.md).
