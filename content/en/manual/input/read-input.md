---
title: Read keyboard, pointer and text input
description: Read an immutable runtime frame without consuming another system's input.
uid: manual.input.read-input
kind: how-to
owners:
  - Inno.Input
  - Inno.Input.Runtime
  - Inno.Adapter.Input
contracts:
  - project.inno-input#execution-and-ownership-contract
  - project.inno-input-runtime#frame-and-lifetime-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Input
---
# Read keyboard, pointer and text input

Read physical input through the current runtime frame. The host captures keyboard, pointer and committed text once; gameplay and UI consumers then observe the same immutable snapshot.

## Prerequisites

The runtime session must contain an input subsystem and an actual backend selected by its composition root. Call input code during that session's active frame. An ordinary static method call outside the frame does not create input state.

The following helper uses the Runtime script API, `InnoEngine.Input`. Compile it in the project's script environment. Invoke it from the active gameplay frame; loading the class alone does not poll a device.

```csharp
using InnoEngine.Input;

public static class PlayerInput
{
    public static bool ShouldJump()
    {
        return Input.WasKeyPressed(KeyCode.Space);
    }
}
```

## Choose the correct state

| Goal | Query |
| --- | --- |
| Continuous movement while held | `Input.IsKeyDown` |
| One action on the press transition | `Input.WasKeyPressed` |
| One action on release | `Input.WasKeyReleased` |
| Pointer position in window coordinates | `Input.mousePosition` |
| Movement accumulated for this frame | `Input.mouseDelta` |
| Wheel movement accumulated for this frame | `Input.scrollDelta` |
| Button transitions | The corresponding mouse-button queries |
| Committed Unicode text | Ordered `Input.snapshot.textInput` entries |

Two consumers can query a press without taking it away from each other. The backend consumes transient state when it captures the next snapshot, not when a script reads it. A retained snapshot is still the old frame; read the current service for new state.

Use committed text for text entry instead of translating physical key codes into characters. Physical key state does not encode keyboard layouts or input-method composition. The current stable contract does not include IME pre-edit/candidate presentation, gamepads or touch.

## Interpret keys and modifiers

Use [Core input values](../../api/projects/inno-core-input.md) as semantic identifiers rather than raw platform key numbers. A physical `LeftCtrl` key and the combined `KeyModifier.Control` flag answer different questions. Super represents the host's platform mapping; it does not automatically make every shortcut use Command on macOS. Mouse cursor shapes are host concerns and are not included with the Runtime key/button exports.

## Respect session and presentation boundaries

Each Edit, Play or Player session owns its backend. Input scope follows the shared execution-context protocol and must unwind in strict reverse order. Host code should let the runtime own it. An `await` or retained context does not grant permission to access window objects on a different thread.

The common event backend ignores globally consumed events. The Editor filters GameView events at its presentation boundary, so a popup, modal or foreground window can prevent an underlying game action. Focus loss or suspension releases held state instead of leaving movement stuck.

## Troubleshoot missing input

- **No active scope:** run the query within the correct runtime frame and verify subsystem composition. The facade fails explicitly rather than silently returning empty input.
- **A key remains absent:** verify window identity, focus, global event consumption and GameView routing before changing gameplay logic.
- **Two sessions interfere:** ensure the factory creates a separate backend for each session. Do not share one consuming backend across them.
- **Text differs from physical keys:** consume committed Unicode text. Pre-edit/candidate UI is outside the current contract.

Domain tests can use a synthetic backend. Real event-pump, window and device behavior still requires the owning platform's integration tests.

## Related reference

- [Physical input contracts](../../api/projects/inno-input.md).
- [Session lifecycle](../../api/projects/inno-input-runtime.md).
- [Event-provider composition](../../api/projects/inno-adapter-input.md).
