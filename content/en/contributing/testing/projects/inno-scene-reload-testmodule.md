---
title: "Collectible scene restoration fixture"
description: "Exercise Missing preservation, returning types and failed restoration."
uid: project.inno-scene-reload-testmodule
kind: project
owners:
  - Inno.Scene.Reload.TestModule
---
# Collectible scene restoration fixture

`Inno.Scene.Reload.TestModule` is a test-support project, not an independently discovered test suite or a shipped engine extension.

## Purpose and behavior

ReloadableSceneComponent preserves value, an optional TextAsset reference and rejectRestore through serialization. Its restore callback throws InvalidOperationException when rejectRestore is true, verifying that failed restoration cannot partially replace the current state. The flag defaults to false. ReloadableSceneSystem preserves its own value under a separate Stable Type ID.

The asset property borrows an asset reference; it does not transfer release responsibility. The consumer manages component/system lifetime through the real scene session. Do not retain the previous generation's CLR objects after recovery or substitute newly invented identities for the persisted ones.

## Use through the owning test

Build, load or start this fixture through [the consuming suite](inno-scene-tests.md). Running `dotnet test` on this fixture alone does not validate its behavior. [The pinned project](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/scene/fixtures/Inno.Scene.Reload.TestModule/Inno.Scene.Reload.TestModule.csproj) declares its actual inputs.

## Lifetime and failure

The consuming test owns its temporary files, module generations and child processes. Drain work and release those owners on failure, cancellation and completion. Expected invalid candidates remain invalid; do not bypass their rejection or place fixture objects in production static caches. Collectible-generation cases retain their full GC barrier and weak-reference checks.

Public fixture protocols remain covered as support contracts. They do not become stable game APIs or script exports.

## API reference

[Types and exact member contracts](inno-scene-reload-testmodule.md). These declarations describe this support library, not a product or script API surface.
