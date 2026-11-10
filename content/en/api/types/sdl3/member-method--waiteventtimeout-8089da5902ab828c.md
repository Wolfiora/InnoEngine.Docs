---
title: "SDLContext.RawApi — Method: WaitEventTimeout"
description: "Exact Method: WaitEventTimeout contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8089da5902ab828c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitEventTimeout

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitEventTimeout`

<a id="api-b512ee28c4add8f4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitEventTimeout(Inno.Native.Sdl3.SDLEvent*,System.Int32) 9cb61dff9601500c8e629e0c157515a955c8d65ac74f66a2061728acb7d91207 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WaitEventTimeout(Inno.Native.Sdl3.SDLEvent* @event, int timeoutMS)
```

Wait until the specified timeout (in milliseconds) for the next available
event.
If `event` is not NULL, the next event is removed from the queue and stored
in the SDL_Event structure pointed to by `event`.
As this function may implicitly call SDL_PumpEvents(), you can only call
this function in the thread that initialized the video subsystem.
The timeout is not guaranteed, the actual wait time could be longer due to
system scheduling.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PollEvent

**See also:** SDL_PushEvent

**See also:** SDL_WaitEvent

**Parameter `event`:** the SDL_Event structure to be filled in with the next event
from the queue, or NULL.

**Parameter `timeoutMS`:** the maximum number of milliseconds to wait for the next
available event.

**Returns:** true if this got an event or false if the timeout elapsed without
any events available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38942).
