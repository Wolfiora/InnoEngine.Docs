---
title: "SDLContext.RawApi — Method: WaitEvent"
description: "Exact Method: WaitEvent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8eb40393e2804f9a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitEvent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitEvent`

<a id="api-4d64dd64656f184c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitEvent(Inno.Native.Sdl3.SDLEvent*) 157c867b95bfd30a664f3a20d9c8a8c6fe9225fa429f3bd87ad4dbeee5164b37 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WaitEvent(Inno.Native.Sdl3.SDLEvent* @event)
```

Wait indefinitely for the next available event.
If `event` is not NULL, the next event is removed from the queue and stored
in the SDL_Event structure pointed to by `event`.
As this function may implicitly call SDL_PumpEvents(), you can only call
this function in the thread that initialized the video subsystem.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PollEvent

**See also:** SDL_PushEvent

**See also:** SDL_WaitEventTimeout

**Parameter `event`:** the SDL_Event structure to be filled in with the next event
from the queue, or NULL.

**Returns:** true on success or false if there was an error while waiting for
events; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23072).
