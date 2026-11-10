---
title: "SDLContext.RawApi — Method: SurfaceHasColorKey"
description: "Exact Method: SurfaceHasColorKey contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.39b8730934d098de
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SurfaceHasColorKey

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SurfaceHasColorKey`

<a id="api-4aa57ff8b63386c7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SurfaceHasColorKey(Inno.Native.Sdl3.SDLSurface*) f0d4f9b426f043d5f5043c4dc94bf82853a6da1625f2bf28c25c135081e9119e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SurfaceHasColorKey(Inno.Native.Sdl3.SDLSurface* surface)
```

Returns whether the surface has a color key.
It is safe to pass a NULL `surface` here; it will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetSurfaceColorKey

**See also:** SDL_GetSurfaceColorKey

**Parameter `surface`:** the SDL_Surface structure to query.

**Returns:** true if the surface has a color key, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24480).
