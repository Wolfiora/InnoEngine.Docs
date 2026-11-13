---
title: MiniAudio loading and initialization tests
description: Complete native function-table loading and headless engine initialization for the declared player product.
uid: project.inno-native-miniaudio-tests
kind: project
owners:
  - Inno.Native.MiniAudio.Tests
---
# MiniAudio loading and initialization tests

`Inno.Native.MiniAudio.Tests` verifies the actual generated/native loading boundary. The suite declares the `player` native product and consumes the deployment prepared for its target and configuration.

## Behavior covered

`MiniAudioInitTests.VersionLoadsTheCompleteNativeFunctionTable` calls both numeric and string version functions and asserts the pinned MiniAudio version, `0.11.25`. This exercises the complete loader instead of accepting the mere presence of a library file.

`EngineInitializesWithoutAnAudioDevice` initializes an engine with `NoDevice = 1`, two channels and a 48,000 Hz sample rate, requires `MA_SUCCESS`, then uninitializes it. It does not open or certify a hardware output device.

## Prepare and run

Use [native validation](../../contributing/validate-change.md#native-and-process-requirements), preserving the product properties and deployment index. Do not borrow a library from an adjacent output or treat a missing deployment as successful initialization.

[The native contract](inno-native-miniaudio.md) describes generated loading, ABI and ownership. Test methods remain xUnit infrastructure.

[Read the assertions and project references](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/backends/MiniAudio/tests/Inno.Native.MiniAudio.Tests).
