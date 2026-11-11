---
title: Input and shell lifecycle tests
description: Managed input routing, frame scheduling, suspension and native-handle identifier contracts.
uid: project.inno-input-tests
kind: project
owners:
  - Inno.Input.Tests
---
# Input and shell lifecycle tests

`Inno.Input.Tests` verifies input and shell behavior through managed boundaries. It is a domain suite with no window, GPU or native product preparation. Start with [reading input](../../manual/input/read-input.md) for the user-facing model.

## Behavior covered

| Source | Representative assertions |
| --- | --- |
| `InputRuntimeTests` | Globally consumed events stay out of session input; window sources remain isolated for text, wheel and release; suspension clears transient input and rejects background presses. |
| `ShellFrameDriverTests` | Polling preserves the calling thread; scheduled frames wait before advancing; cancellation prevents the next frame; scheduling and callback failures reach the owner. |
| `ShellLifecycleTests` | Suspension reasons compose without background clock catch-up; secondary windows do not suspend the host; execution and stopping failures are both retained; callbacks detach. |
| `NativeWindowSurfaceTests` | Open native-surface identifiers reject whitespace. This is a value contract and creates no native window. |

The real assertion that a destroyed SDL window rejects subsequent surface borrowing belongs to [the SDL adapter suite](inno-adapter-platform-sdl3-tests.md). That assertion was separated with its actual window dependency, not replaced by a simulated domain assertion.

## Run and maintain

Follow [the shared validation workflow](../validate-change.md). For a focused managed diagnostic from the engine root:

```powershell
dotnet test tests/input/Inno.Input.Tests/Inno.Input.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

A method filter diagnoses one scenario; it does not certify the rest of the plan. Tests own their created sessions and resources. Their public methods are xUnit discovery entries, not a product or script API.

[Browse the assertions and project references](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/tests/input/Inno.Input.Tests).
