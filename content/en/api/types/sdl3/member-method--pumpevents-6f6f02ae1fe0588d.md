---
title: "SDLContext — Method: PumpEvents"
description: "Exact Method: PumpEvents contracts in SDLContext."
uid: api.inno.native.sdl3.6f6f02ae1fe0588d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: PumpEvents

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PumpEvents`

<a id="api-6825f8ae80e26857"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.PumpEvents 5a3d6328446c96449f319af93696f1a19d200825f68ebe5904b052bc74fd49eb -->

```csharp
public void Inno.Native.Sdl3.SDLContext.PumpEvents()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14612).
