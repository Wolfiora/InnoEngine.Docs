---
title: Script compiler and cache publication tests
description: Verify real language support, IDE parity and protected script generations.
uid: project.inno-scripting-compiler-tests
kind: project
owners:
  - Inno.Scripting.Compiler.Tests
---
# Script compiler and cache publication tests

`Inno.Scripting.Compiler.Tests` validates .NET 10 and C# 14 through the public compiler, assets and plugin boundaries. It does not reference Editor presentation or native bindings, so these compiler contracts do not require a GPU or binding generation.

## Language and IDE parity

`AuthoringAndIdeAcceptTheSameCSharp14Source` compiles field-backed properties, null-conditional assignment, Span, generic `nameof`, lambda parameter modifiers and extension properties through both authoring and generated IDE projects. Public probes check default values, state after exceptions and evaluation counts, then verify collectible probe unloading.

Installed `.iplugin` extension members must remain available across assemblies in both engine and IDE consumption. Framework reference-pack content changes select new API and script artifacts; that test changes process environment and therefore runs in its own testhost.

## Explicit project inputs

Generated Runtime/Editor projects retain complete owned inputs even when a parent's `Directory.Build.props` or `.targets` deliberately rejects a build. Nested solution restore selects only its own projects; root engine solution rules do not take over every descendant solution.

## Publication and cancellation

Cache cases observe owned artifacts through public compile results and progress. Publication waits for temporary readers. Continued blocking or cancellation preserves the previous generation. A failed replacement of invalid content leaves the entire earlier tree intact; after releasing the blocker, an explicit compile repairs it.

Windows directory-sharing cases retain their cancellation, repair and protection assertions with class-level `SupportedOSPlatform("windows")`. Other hosts record them as not applicable; Windows cannot certify them without actual execution.

## Run and maintain

Use [the unified plan](../validate-change.md): build the selected union once, then let the shared executor consume the same SDK graph for ordinary and isolated xUnit/VSTest cases. A filter or a manually copied reference assembly cannot replace those obligations.

Fixtures own temporary projects, public asset mounts and serialization services. They release hosts and files after work drains. No IVT, private reflection or test-only production entry is required.

[Browse the pinned compiler fixtures](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/scripting/Inno.Scripting.Compiler.Tests), or [compile project scripts](../compile-project-scripts.md) for the authoring workflow.
