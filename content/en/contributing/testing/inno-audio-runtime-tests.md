---
title: Audio runtime lifecycle tests
description: Suspension, rollback, retained mixer roots and artifact admission through managed audio boundaries.
uid: project.inno-audio-runtime-tests
kind: project
owners:
  - Inno.Audio.Runtime.Tests
---
# Audio runtime lifecycle tests

`Inno.Audio.Runtime.Tests` verifies runtime ownership and failure behavior through controllable managed audio boundaries. It complements [the runtime contract](../../api/projects/inno-audio-runtime.md) and does not replace native playback or device acceptance.

## Behavior covered

`AudioRuntimeTests` checks that an already-consumed application lifecycle event still suspends audio and that stopping unsubscribes callbacks. Failed suspension rolls back retained mixer roots and remains retryable. Suspension also preserves user pause and replacement-mixer state.

Invalid playback options must fail before stealing a voice or acquiring an artifact. The source-backed fixtures make retained content and release obligations observable; a successful call without ownership assertions would be insufficient.

## Run and maintain

Follow [the shared validation workflow](../validate-change.md). For a focused diagnostic:

```powershell
dotnet test tests/audio/Inno.Audio.Runtime.Tests/Inno.Audio.Runtime.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Fixtures own their runtime, backend and content sources. Preserve explicit failure/cleanup checks rather than using private access or production test entry points. Public test methods are discovery infrastructure.

[Browse all runtime scenarios and fixtures](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/tests/audio/Inno.Audio.Runtime.Tests).
