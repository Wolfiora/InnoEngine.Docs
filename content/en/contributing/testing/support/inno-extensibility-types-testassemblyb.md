---
title: "Type-discovery source B fixture"
description: "Distinguish a second assembly in filtered and combined discovery."
uid: project.inno-extensibility-types-testassemblyb
kind: project
owners:
  - Inno.Extensibility.Types.TestAssemblyB
---
# Type-discovery source B fixture

`Inno.Extensibility.Types.TestAssemblyB` is a test-support project, not an independently discovered test suite or a shipped engine extension.

## Purpose and behavior

AssemblyBMarkedType carries its distinct AssemblyBMarkerAttribute. Separate A/B assemblies support single-source filtering, combined discovery and source-removal assertions. Merely loading another test assembly into the process must not make it an implicit source for the consumer.

## Use through the owning test

Build, load or start this fixture through [the consuming suite](../inno-extensibility-types-tests.md). Running `dotnet test` on this fixture alone does not validate its behavior. [The pinned project](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/extensibility/fixtures/Inno.Extensibility.Types.TestAssemblyB/Inno.Extensibility.Types.TestAssemblyB.csproj) declares its actual inputs.

## Lifetime and failure

The consuming test owns its temporary files, module generations and child processes. Drain work and release those owners on failure, cancellation and completion. Expected invalid candidates remain invalid; do not bypass their rejection or place fixture objects in production static caches. Collectible-generation cases retain their full GC barrier and weak-reference checks.

Public fixture protocols remain covered as support contracts. They do not become stable game APIs or script exports.

## API reference

[Types and exact member contracts](../../../api/types/test-support/inno-extensibility-types-testassemblyb/index.md). These declarations describe this support library, not a product or script API surface.
