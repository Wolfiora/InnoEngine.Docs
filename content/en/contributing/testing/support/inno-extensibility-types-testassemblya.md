---
title: "Type-discovery source A fixture"
description: "Identify declarations from one explicit assembly source."
uid: project.inno-extensibility-types-testassemblya
kind: project
owners:
  - Inno.Extensibility.Types.TestAssemblyA
---
# Type-discovery source A fixture

`Inno.Extensibility.Types.TestAssemblyA` is a test-support project, not an independently discovered test suite or a shipped engine extension.

## Purpose and behavior

AssemblyAMarkedType carries AssemblyAMarkerAttribute. Building it independently of source B lets the consumer explicitly select the active source and check that discovery includes only declarations from that scope. Removing a source must remove its declarations from the next effective type snapshot.

## Use through the owning test

Build, load or start this fixture through [the consuming suite](../inno-extensibility-types-tests.md). Running `dotnet test` on this fixture alone does not validate its behavior. [The pinned project](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/extensibility/fixtures/Inno.Extensibility.Types.TestAssemblyA/Inno.Extensibility.Types.TestAssemblyA.csproj) declares its actual inputs.

## Lifetime and failure

The consuming test owns its temporary files, module generations and child processes. Drain work and release those owners on failure, cancellation and completion. Expected invalid candidates remain invalid; do not bypass their rejection or place fixture objects in production static caches. Collectible-generation cases retain their full GC barrier and weak-reference checks.

Public fixture protocols remain covered as support contracts. They do not become stable game APIs or script exports.

## API reference

[Types and exact member contracts](../../../api/types/test-support/inno-extensibility-types-testassemblya/index.md). These declarations describe this support library, not a product or script API surface.
