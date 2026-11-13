---
title: "Collectible rendering contributor fixture"
description: "Expose frame callback retention and failed-graph rollback across reload."
uid: project.inno-rendering-runtime-reload-testmodule
kind: project
owners:
  - Inno.Rendering.Runtime.Reload.TestModule
---
# Collectible rendering contributor fixture

`Inno.Rendering.Runtime.Reload.TestModule` is a test-support project, not an independently discovered test suite or a shipped engine extension.

## Purpose and behavior

ReloadableFramePayload is a state-free collectible object used to detect retention in frame queues. ReloadableContributor borrows the host's unregister callback and can unregister itself during PrepareFrame. AddRenderPasses contributes a real side-effecting pass whose callback captures the contributor instance.

When rejectGraph is true, contribution throws InvalidOperationException after adding the pass. The consumer must roll back the entire failed graph and release its captured instance. The callback must retire with that failed graph or completed frame, never enter a static cross-generation reference. Internal pipeline/feature implementations support this fixture but do not become public product promises.

## Use through the owning test

Build, load or start this fixture through [the consuming suite](inno-rendering-runtime-tests.md). Running `dotnet test` on this fixture alone does not validate its behavior. [The pinned project](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/rendering/fixtures/Inno.Rendering.Runtime.Reload.TestModule/Inno.Rendering.Runtime.Reload.TestModule.csproj) declares its actual inputs.

## Lifetime and failure

The consuming test owns its temporary files, module generations and child processes. Drain work and release those owners on failure, cancellation and completion. Expected invalid candidates remain invalid; do not bypass their rejection or place fixture objects in production static caches. Collectible-generation cases retain their full GC barrier and weak-reference checks.

Public fixture protocols remain covered as support contracts. They do not become stable game APIs or script exports.

## API reference

[Types and exact member contracts](inno-rendering-runtime-reload-testmodule.md). These declarations describe this support library, not a product or script API surface.
