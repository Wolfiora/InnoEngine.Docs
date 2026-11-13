---
title: Audio contracts and script API tests
description: Audio value validation, mixer topology, content admission and real runtime script compilation.
uid: project.inno-audio-tests
kind: project
owners:
  - Inno.Audio.Tests
---
# Audio contracts and script API tests

`Inno.Audio.Tests` checks managed audio contracts and the real script API surface. It does not initialize an output device. Read [audio playback](../../../manual/audio/play-audio.md) before interpreting host and script contracts as equivalent.

## Behavior covered

| Source | Representative assertions |
| --- | --- |
| `AudioContractTests` | The facade forwards through its execution context; scopes enforce last-in-first-out disposal; mixer construction produces a parent-before-child graph with a master bus and rejects cycles or missing parents; metadata round-trips. |
| `AudioValueValidationTests` | Playback, live and spatial parameters reject nonfinite scalar/vector components and undefined modes while accepting finite boundaries. |
| `AudioContentContractTests` | Combined capacity rejects an entire contribution, including earlier snapshots; zero capacity permits only empty content; default snapshots invalidate the contribution; emitter/listener identities share one admission namespace. |
| `AudioScriptingApiTests` | The facade, mixer provider and Scene components compile through the actual logical script namespace. |

The last group requires real compiler and projection inputs. Replacing them with CLR references would stop testing the promised script surface. Native playback belongs to [the MiniAudio adapter suite](../../../backends/projects/inno-adapter-audio-miniaudio-tests.md).

## Run and maintain

Use [the shared validation workflow](../../validate-change.md). For a focused diagnostic:

```powershell
dotnet test tests/audio/Inno.Audio.Tests/Inno.Audio.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Preserve scope disposal, full-contribution rejection and real script compilation when extending the tests. Test methods are xUnit infrastructure rather than product APIs.

[Browse the assertions and project references](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/tests/audio/Inno.Audio.Tests).
