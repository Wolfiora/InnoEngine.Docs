---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-shell-tests
symbol: project:Inno.Shell.Tests
title: Inno.Shell.Tests
kind: project
owners:
- Inno.Shell.Tests
sourceFingerprint: 4b106a0a5ccfd40c5a7855868339d11e84dc76109a30b87a1b3812c1d981a3a9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Shell frame driving, suspension lifecycle and native-surface value contracts.
outdated: false
---
# Inno.Shell.Tests

`Inno.Shell.Tests` verifies shell behavior through managed boundaries. It creates no window or GPU device. Input session behavior belongs to [Input tests](inno-input-tests.md).

## Behavior covered

| Source | Representative assertions |
| --- | --- |
| `ShellFrameDriverTests` | Polling preserves the calling thread; scheduled frames wait before advancing; cancellation prevents the next frame; scheduling and callback failures reach the owner. |
| `ShellLifecycleTests` | Suspension reasons compose without background clock catch-up; secondary windows do not suspend the host; execution and stopping failures are both retained; callbacks detach. |
| `NativeWindowSurfaceTests` | Open native-surface identifiers reject whitespace. This is a value contract and creates no native window. |

The real assertion that a destroyed SDL window rejects subsequent surface borrowing belongs to [the SDL adapter suite](inno-adapter-platform-sdl3-native-tests.md).

## Run and maintain

Follow [the shared validation workflow](../../validate-change.md). For a focused managed diagnostic from the engine root:

```powershell
dotnet test tests/composition/shell/Inno.Shell.Tests/Inno.Shell.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

A method filter diagnoses one scenario; it does not certify the rest of the plan. Tests own their created sessions and resources. Their public methods are xUnit discovery entries, not a product or script API.

[Browse the assertions and project references](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/shell/Inno.Shell.Tests).
