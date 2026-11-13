---
title: SDL loading and ABI tests
description: Native library owner, resolver publication, generated ABI imports and SDL initialization contracts.
uid: project.inno-native-sdl3-tests
kind: project
owners:
  - Inno.Native.Sdl3.Tests
---
# SDL loading and ABI tests

`Inno.Native.Sdl3.Tests` checks the generated SDL binding and explicit library-loading owner. It declares the `player` product, whose verified deployment supplies the actual native inputs.

## Behavior covered

`NativeDllLoaderTests` verifies that an explicit owner can load the same library more than once and that invalid input fails before resolver publication. `Sdl3InitTests` checks that generated imports own their ABI without runtime marshalling and that SDL initialization and shutdown succeed.

These checks do not replace [window and surface lifetime tests](inno-adapter-platform-sdl3-tests.md), which require their own real platform host and execution thread.

## Prepare and run

Follow [native validation](../../contributing/validate-change.md#native-and-process-requirements). Consume the matching target/configuration deployment index; unrelated cached libraries or another Editor output are not evidence for this suite.

Preserve the loader owner's release responsibilities and any declared process isolation. Missing deployment or unavailable environment is not a pass. The xUnit entry points do not become a product API.

[Read the complete assertions and references](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/backends/Sdl3/tests/Inno.Native.Sdl3.Tests).
