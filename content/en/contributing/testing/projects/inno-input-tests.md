---
title: Input runtime tests
description: Managed input routing, window isolation and suspension contracts.
uid: project.inno-input-tests
kind: project
owners:
  - Inno.Input.Tests
---
# Input runtime tests

`Inno.Input.Tests` verifies input behavior through managed boundaries. It is a domain suite with no window, GPU or native product preparation. Start with [reading input](../../../manual/input/read-input.md) for the user-facing model.

## Behavior covered

| Source | Representative assertions |
| --- | --- |
| `InputRuntimeTests` | Globally consumed events stay out of session input; window sources remain isolated for text, wheel and release; suspension clears transient input and rejects background presses. |

Shell frame driving, lifecycle and native-surface value contracts belong to [Shell tests](inno-shell-tests.md). The real assertion that a destroyed SDL window rejects subsequent surface borrowing belongs to [the SDL adapter suite](inno-adapter-platform-sdl3-native-tests.md). That assertion was separated with its actual window dependency, not replaced by a simulated domain assertion.

## Run and maintain

Follow [the shared validation workflow](../../validate-change.md). For a focused managed diagnostic from the engine root:

```powershell
dotnet test tests/services/input/Inno.Input.Tests/Inno.Input.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

A method filter diagnoses one scenario; it does not certify the rest of the plan. Tests own their created sessions and resources. Their public methods are xUnit discovery entries, not a product or script API.

[Browse the assertions and project references](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/tests/input/Inno.Input.Tests).
