---
title: "SDLContext.RawApi — Method: LockSurface"
description: "Exact Method: LockSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8bcc8931af07b015
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LockSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockSurface`

<a id="api-3ca86993ca5bbd4f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LockSurface(Inno.Native.Sdl3.SDLSurface*) 46010d0ec7d6ada99d596f5ccbe522631d8bcb5c6afcb7e3b7e2d4a17d5a4a2f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.LockSurface(Inno.Native.Sdl3.SDLSurface* surface)
```

Set up a surface for directly accessing the pixels.
Between calls to SDL_LockSurface() / SDL_UnlockSurface(), you can write to
and read from `surface->pixels`, using the pixel format stored in
`surface->format`. Once you are done accessing the surface, you should use
SDL_UnlockSurface() to release it.
Not all surfaces require locking. If `SDL_MUSTLOCK(surface)` evaluates to
0, then you can read and write to the surface at any time, and the pixel
format of the surface will not change.

**Thread safety:** This function can be called on different threads with
different surfaces. The locking referred to by this function
is making the pixels available for direct access, not
thread-safe locking.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_MUSTLOCK

**See also:** SDL_UnlockSurface

**Parameter `surface`:** the SDL_Surface structure to be locked.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34638).
