---
title: "SDLContext.RawApi — Method: GetWindowPosition"
description: "Exact Method: GetWindowPosition contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c8fa910b090b17f1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowPosition

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowPosition`

<a id="api-53ae462eca801bca"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowPosition(Inno.Native.Sdl3.SDLWindow*,System.Int32*,System.Int32*) 618ab666a3bac6c69c8310382cae28dbe7449157d3902969628ef9da2274b668 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowPosition(Inno.Native.Sdl3.SDLWindow* window, int* x, int* y)
```

Get the position of a window.
This is the current position of the window as last reported by the
windowing system.
If you do not need the value for one of the positions a NULL may be passed
in the `x` or `y` parameter.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowPosition

**Parameter `window`:** the window to query.

**Parameter `x`:** a pointer filled in with the x position of the window, may be
NULL.

**Parameter `y`:** a pointer filled in with the y position of the window, may be
NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43168).
