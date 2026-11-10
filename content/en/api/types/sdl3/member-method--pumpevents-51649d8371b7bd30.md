---
title: "SDL — Method: PumpEvents"
description: "Exact Method: PumpEvents contracts in SDL."
uid: api.inno.native.sdl3.51649d8371b7bd30
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: PumpEvents

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PumpEvents`

<a id="api-d640f7a3df37b430"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.PumpEvents 11e09407c615a53391f5766df08c247b09ca126a134097e441fb5eae379922fe -->

```csharp
public static void Inno.Native.Sdl3.SDL.PumpEvents()
```

Pump the event loop, gathering events from the input devices.
This function updates the event queue and internal input device state.
SDL_PumpEvents() gathers all the pending input information from devices and
places it in the event queue. Without calls to SDL_PumpEvents() no events
would ever be placed on the queue. Often the need for calls to
SDL_PumpEvents() is hidden from the user since SDL_PollEvent() and
SDL_WaitEvent() implicitly call SDL_PumpEvents(). However, if you are not
polling or waiting for events (e.g. you are filtering them), then you must
call SDL_PumpEvents() to force an event queue update.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PollEvent

**See also:** SDL_WaitEvent


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2688).
