---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-adapter-platform-sdl3-native-tests
symbol: project:Inno.Adapter.Platform.Sdl3.Native.Tests
title: Inno.Adapter.Platform.Sdl3.Native.Tests
kind: project
owners:
- Inno.Adapter.Platform.Sdl3.Native.Tests
sourceFingerprint: 4e1cfcd5be3f42a984634ae697f6722e258f5d90814deea52e3bbeaf80ac36a1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Real platform hosts, owned and borrowed windows, native-surface lifetime and Cocoa main-thread execution.
outdated: false
---
# Inno.Adapter.Platform.Sdl3.Native.Tests

`Inno.Adapter.Platform.Sdl3.Native.Tests` verifies window composition and lifetime using the actual Win32 or Cocoa integration. It declares the `player` native product and a test-assembly main-thread host. Its evaluated validation context must match the host; do not infer cross-platform readiness from a default project property.

## Behavior covered

| Source | Representative assertions |
| --- | --- |
| `HostIntegrationTests` | Missing hosts fail before SDK initialization; wrapping failure destroys only the newly owned window; a single-window capability rejects another creation before calling the host. |
| `Sdl3WindowOperationsTests` | Creation preserves options and leaves registration to the owner; invalid input fails before window creation. |
| `WindowOwnershipTests` | Directories contain only created/adopted windows; adopted wrappers invalidate before the original owner destroys them; cross-application release and cross-thread creation are rejected. |
| `WindowSurfaceTests` | Owned and borrowed wrappers resolve their surface through the same host boundary. |
| `NativeSurfaceLifetimeTests` | A real window exposes the correct nonzero Win32/Cocoa handle, then rejects surface borrowing after disposal. |

The final assertion was moved out of [the managed Input suite](inno-input-tests.md) together with its native dependency. It still executes against a real window.

## Main-thread and process contract

Cocoa operations run on the process main thread. `NativeWindowTestHost` directly invokes the declared original test methods and assertions in an isolated process; it does not use reflection, a dummy video driver or a production test entry. Individual failure, exception and timeout propagate as test failures. Windows can exercise this dispatch route with `INNO_TEST_MAIN_THREAD_HOST=1`.

The shared isolated executor supplies the selected target and product properties, retaining `ProcessIsolation=Required` where declared. Windows and macOS use their own native integration; neither borrows the other platform's surface.

## Prepare and run

Follow [native validation](../../validate-change.md#native-and-process-requirements). Missing SDK, window, library or valid deployment prevents certification. Preserve owner-thread execution and release order during diagnosis; deleting shared locks does not fix a lifetime error.

Read [the SDL backend guide](../../../backends/sdl3.md) for product-facing constraints. Public test methods are discovery infrastructure rather than script exports.

[Browse the tests, host and actual project configuration](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3.Native.Tests).
