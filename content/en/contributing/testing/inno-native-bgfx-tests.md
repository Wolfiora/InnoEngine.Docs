---
title: BGFX deployment smoke tests
description: Verify the deployed renderer can initialize, expose capabilities and shut down.
uid: project.inno-native-bgfx-tests
kind: project
owners:
  - Inno.Native.Bgfx.Tests
---
# BGFX deployment smoke tests

`Inno.Native.Bgfx.Tests` verifies the engine's deployed BGFX integration. It is a native test owner, not a reference for BGFX's generated binding API.

`BgfxInitTests.InitAndShutdown_ShouldSucceed` initializes a one-pixel Noop renderer, checks that capabilities are available and the selected renderer is Noop, then shuts it down in cleanup. Noop initialization does not certify a physical GPU or a window surface.

## Required product and execution

The project explicitly requests the `player` native product for its selected target and configuration. [The validation plan](../validate-change.md#native-and-process-requirements) prepares and deploys that closure. Tests consume its deployment index; they do not search a neighboring Editor output or repository cache for a DLL. Missing deployment fails acceptance.

Preserve process-level initialization and shutdown ownership. Use the plan's selected native context rather than a bare `dotnet test` invocation that loses the product properties.

[Browse the pinned smoke test](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/backends/Bgfx/tests/Inno.Native.Bgfx.Tests/BgfxInitTests.cs) and [engine integration boundary](../../api/projects/inno-native-bgfx.md). Test availability is not a current execution result.
