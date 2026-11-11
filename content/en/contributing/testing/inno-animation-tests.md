---
title: Animation playback and binding tests
description: Managed animation admission, sampling, blending, markers and recoverable bindings.
uid: project.inno-animation-tests
kind: project
owners:
  - Inno.Animation.Tests
---
# Animation playback and binding tests

`Inno.Animation.Tests` exercises the public animation contracts and their managed runtime composition. It covers [playback](../../manual/animation/play-clips.md) and [binding extensions](../../extending/animation-bindings.md) without requiring a native animation backend.

## Behavior covered

`AnimationRuntimeTests` verifies that retired slots can be reused without reusing handles, linear sampling rejects retired handles, the highest layer wins, and equal-layer values blend by weight. It also checks marker queuing and handle invalidation on natural completion.

`AnimationBindingTests.ProviderIsDiscoveredAndMissingIssuesRecoverOnTheNextBatch` exercises actual provider discovery and subsequent recovery from a missing binding. A runtime sample alone would not establish that discovery contract.

## Run and maintain

Follow [the shared validation workflow](../validate-change.md). A focused managed diagnostic is:

```powershell
dotnet test tests/animation/Inno.Animation.Tests/Inno.Animation.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Keep generation, event and provider lifetime assertions with their actual owners. Fixtures release the sessions and providers they create. These discovery methods are not exported product APIs.

[Browse the complete scenarios and project references](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/tests/animation/Inno.Animation.Tests).
