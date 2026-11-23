---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-rendering-shaders-native-tests
symbol: project:Inno.Rendering.Shaders.Native.Tests
title: Inno.Rendering.Shaders.Native.Tests
kind: project
owners:
- Inno.Rendering.Shaders.Native.Tests
sourceFingerprint: af2bb0e8d42320956e4fa98ca86a3d1d8c4e965d4341c55f9809c65249f3a2f8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Verify source contracts, typed IR, graph lowering and real offline Metal compilation.
outdated: false
---
# Inno.Rendering.Shaders.Native.Tests

`Inno.Rendering.Shaders.Native.Tests` combines public shader contracts, the BGFX authoring toolchain and ModuleHost. It tests frontend discovery and real offline native compilation without creating a GPU device. This is an engine shader-language guide to verification, not documentation for native binding APIs.

## Source interfaces and discovery

Frontend cases cover declarations, parameters, structs, arrays, macros/includes, source locations and cross-language interface agreement. Node definitions preserve stable input/output names, aggregate members and unambiguous type identities.

Registry and module cases exercise automatic discovery, candidate conflicts, provider retirement, last-good snapshots, complete dependency fingerprints and recovery from a missing frontend. A `main` prototype cannot substitute for a valid module entry. Actual retirement barriers remain part of the provider lifecycle.

## Typed intermediate representation

IR tests preserve constant bit patterns, typed operations, aggregates/matrices, lexical scope and source functions with multiple outputs. Calls retain side effects and published snapshots are frozen.

Stage validation checks unique bindings, complete outputs and isolated snapshots. Resource cases cover buffer/image format, shape, permissions and instruction order. Control-flow cases reject writes to parent, sibling or closed scopes, roll back invalid construction atomically, and support named simultaneous state replacement without accidental sequential dependency.

Semantic fingerprints ignore canvas position while tracking source, nested instructions, storage permissions, slots and workgroup dimensions. Changing presentation layout is not a shader recompile requirement.

## Graph lowering and backend registration

Graph tests mix independent node extensions with source functions, preserving connections across Missing recovery. They reject invalid types, cycles and aggregate conflicts, retain side effects, and release rejected type-provider candidates.

Program round trips retain missing stages/outputs, report duplicate contracts and unsupported capabilities, synchronize renamed inputs and exposed parameters, and persist unfinished native inputs. Backend registration accepts open identities and checks runtime/authoring pairs; a synthetic registration is not a second real GPU adapter.

## Real offline compilation

BGFX `shaderc` cases compile actual Metal for operators, isolated private symbols, structs, fixed arrays, multiple outputs, uniforms, textures, instancing, MRT and Compute. They reject missing capabilities, freeze includes and preserve diagnostics pointing at original files.

Resource compilation covers reads/writes, atomic add, 2D/array/3D images, four sampling forms and discard. Control flow covers branches, loops, storage and aggregates with zero loop iterations, including nested fragment-only restrictions. Matrix compilation covers all nine shapes from 2×2 through 4×4; multiple compiles within a case are not counted as separate discovered tests.

## Environment and limits

The suite explicitly requests the `shader-tools` native product. [The validation plan](../../validate-change.md#native-and-process-requirements) prepares its target/configuration deployment index; tools are not borrowed from another Editor output or cache.

Real Metal cases declare macOS support and use `MetalShaderFactAttribute` to report non-macOS execution as skipped/not applicable rather than silently returning. On macOS, a missing tool or failed compile still fails.

Fixtures release registry, type catalog and module host in dependency order and own their temporary files. Native compilation success does not certify GPU numerical/pixel results or performance, complete resource layout/barriers, GPU reflection, Shader Editor workflows or end-to-end collectible plugin unloading.

[Browse the pinned shader assertions](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/services/rendering/Inno.Rendering.Shaders.Native.Tests). Use [Editor workflow tests](inno-editor-scripting-tests.md) for authoring interaction and the [BGFX adapter suite](inno-adapter-rendering-bgfx-native-tests.md) for actual device/surface behavior.
