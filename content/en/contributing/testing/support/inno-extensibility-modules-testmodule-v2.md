---
title: "Replacement collectible module generation"
description: "Change an implementation while retaining the first generation's stable identity."
uid: project.inno-extensibility-modules-testmodule-v2
kind: project
owners:
  - Inno.Extensibility.Modules.TestModule.V2
---
# Replacement collectible module generation

`Inno.Extensibility.Modules.TestModule.V2` is a test-support project, not an independently discovered test suite or a shipped engine extension.

## Purpose and behavior

ReloadableExtension.version returns the private dependency's baseVersion plus one. Its Stable Type ID remains the same as V1. Tests verify candidate switching, the changed value and old-generation release; the two generations must not be registered concurrently as unrelated stable types.

## Use through the owning test

Build, load or start this fixture through [the consuming suite](../inno-extensibility-modules-tests.md). Running `dotnet test` on this fixture alone does not validate its behavior. [The pinned project](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/extensibility/fixtures/Inno.Extensibility.Modules.TestModule.V2/Inno.Extensibility.Modules.TestModule.V2.csproj) declares its actual inputs.

## Lifetime and failure

The consuming test owns its temporary files, module generations and child processes. Drain work and release those owners on failure, cancellation and completion. Expected invalid candidates remain invalid; do not bypass their rejection or place fixture objects in production static caches. Collectible-generation cases retain their full GC barrier and weak-reference checks.

Public fixture protocols remain covered as support contracts. They do not become stable game APIs or script exports.

## API reference

[Types and exact member contracts](../../../api/types/test-support/inno-extensibility-modules-testmodule-v2/index.md). These declarations describe this support library, not a product or script API surface.
