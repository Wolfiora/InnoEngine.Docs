---
title: "Private reload dependency fixture"
description: "Expose the selected module generation's private dependency resolution."
uid: project.inno-extensibility-modules-testdependency
kind: project
owners:
  - Inno.Extensibility.Modules.TestDependency
---
# Private reload dependency fixture

`Inno.Extensibility.Modules.TestDependency` is a test-support project, not an independently discovered test suite or a shipped engine extension.

## Purpose and behavior

VersionSource.baseVersion returns the fixed value 1. Both reloadable module generations calculate their observable version from this private assembly. The consuming tests distinguish replacement of the main module from incorrect dependency sharing or resolution. The fixture is not a shared production singleton.

## Use through the owning test

Build, load or start this fixture through [the consuming suite](inno-extensibility-modules-tests.md). Running `dotnet test` on this fixture alone does not validate its behavior. [The pinned project](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/extensibility/fixtures/Inno.Extensibility.Modules.TestDependency/Inno.Extensibility.Modules.TestDependency.csproj) declares its actual inputs.

## Lifetime and failure

The consuming test owns its temporary files, module generations and child processes. Drain work and release those owners on failure, cancellation and completion. Expected invalid candidates remain invalid; do not bypass their rejection or place fixture objects in production static caches. Collectible-generation cases retain their full GC barrier and weak-reference checks.

Public fixture protocols remain covered as support contracts. They do not become stable game APIs or script exports.

## API reference

[Types and exact member contracts](inno-extensibility-modules-testdependency.md). These declarations describe this support library, not a product or script API surface.
