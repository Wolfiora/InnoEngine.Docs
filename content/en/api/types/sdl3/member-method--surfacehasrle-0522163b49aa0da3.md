---
title: "SDLContext.RawApi — Method: SurfaceHasRle"
description: "Exact Method: SurfaceHasRle contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0522163b49aa0da3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SurfaceHasRle

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SurfaceHasRle`

<a id="api-db9915add5375bbc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SurfaceHasRle(Inno.Native.Sdl3.SDLSurface*) c517c6f7916ff16d807cc160b7b14ba7fb95feaa5a60a6ba2e5510886a5232ba -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SurfaceHasRle(Inno.Native.Sdl3.SDLSurface* surface)
```

Returns whether the surface is RLE enabled.
It is safe to pass a NULL `surface` here; it will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetSurfaceRLE

**Parameter `surface`:** the SDL_Surface structure to query.

**Returns:** true if the surface is RLE enabled, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28806).
