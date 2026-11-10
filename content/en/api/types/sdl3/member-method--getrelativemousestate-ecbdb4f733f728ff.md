---
title: "SDLContext.RawApi — Method: GetRelativeMouseState"
description: "Exact Method: GetRelativeMouseState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ecbdb4f733f728ff
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRelativeMouseState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRelativeMouseState`

<a id="api-ee4793b19aff2d66"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRelativeMouseState(System.Single*,System.Single*) 27cdc455071150f8bc562c743b88aaffd6fb09958dad63a86f731e19d4eeff91 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetRelativeMouseState(float* x, float* y)
```

Query SDL's cache for the synchronous mouse button state and accumulated
mouse delta since last call.
This function returns the cached synchronous state as SDL understands it
from the last pump of the event queue.
To query the platform for immediate asynchronous state, use
SDL_GetGlobalMouseState.
Passing non-NULL pointers to `x` or `y` will write the destination with
respective x or y deltas accumulated since the last call to this function
(or since event initialization).
This function is useful for reducing overhead by processing relative mouse
inputs in one go per-frame instead of individually per-event, at the
expense of losing the order between events within the frame (e.g. quickly
pressing and releasing a button within the same frame).

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetMouseState

**See also:** SDL_GetGlobalMouseState

**Parameter `x`:** a pointer to receive the x mouse delta accumulated since last
call, can be NULL if unused.

**Parameter `y`:** a pointer to receive the y mouse delta accumulated since last
call, can be NULL if unused.

**Returns:** a 32-bit bitmask of the button state that can be bitwise-compared
against the SDL_BUTTON_MASK(X) macro.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52853).
