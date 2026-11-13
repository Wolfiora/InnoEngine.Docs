---
title: "Rejected module candidate fixture"
description: "Preserve a deliberate stable-type collision for atomic candidate admission tests."
uid: project.inno-extensibility-modules-testmodule-invalid
kind: project
owners:
  - Inno.Extensibility.Modules.TestModule.Invalid
---
# Rejected module candidate fixture

`Inno.Extensibility.Modules.TestModule.Invalid` is a test-support project, not an independently discovered test suite or a shipped engine extension.

## Purpose and behavior

FirstConflictingExtension and SecondConflictingExtension intentionally declare the same Stable Type ID. Candidate registration must reject the conflict while preserving the current usable generation. Do not fix this fixture into a valid product or reclassify the expected rejection as an unavailable environment.

## Use through the owning test

Build, load or start this fixture through [the consuming suite](inno-extensibility-modules-tests.md). Running `dotnet test` on this fixture alone does not validate its behavior. [The pinned project](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/extensibility/fixtures/Inno.Extensibility.Modules.TestModule.Invalid/Inno.Extensibility.Modules.TestModule.Invalid.csproj) declares its actual inputs.

## Lifetime and failure

The consuming test owns its temporary files, module generations and child processes. Drain work and release those owners on failure, cancellation and completion. Expected invalid candidates remain invalid; do not bypass their rejection or place fixture objects in production static caches. Collectible-generation cases retain their full GC barrier and weak-reference checks.

Public fixture protocols remain covered as support contracts. They do not become stable game APIs or script exports.

## API reference

[Types and exact member contracts](inno-extensibility-modules-testmodule-invalid.md). These declarations describe this support library, not a product or script API surface.
