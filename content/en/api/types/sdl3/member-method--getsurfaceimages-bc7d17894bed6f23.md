---
title: "SDLContext.RawApi — Method: GetSurfaceImages"
description: "Exact Method: GetSurfaceImages contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bc7d17894bed6f23
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSurfaceImages

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSurfaceImages`

<a id="api-dbc84b0cb4d179cf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceImages(Inno.Native.Sdl3.SDLSurface*,System.Int32*) 507303bf2520026fb214cc94292f12c86d949430fc75aec9b66aabb085503f29 -->

```csharp
public Inno.Native.Sdl3.SDLSurface** Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceImages(Inno.Native.Sdl3.SDLSurface* surface, int* count)
```

Get an array including all versions of a surface.
This returns all versions of a surface, with the surface being queried as
the first element in the returned array.
Freeing the array of surfaces does not affect the surfaces in the array.
They are still referenced by the surface being queried and will be cleaned
up normally.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddSurfaceAlternateImage

**See also:** SDL_RemoveSurfaceAlternateImages

**See also:** SDL_SurfaceHasAlternateImages

**Parameter `surface`:** the SDL_Surface structure to query.

**Parameter `count`:** a pointer filled in with the number of surface pointers
returned, may be NULL.

**Returns:** a NULL terminated array of SDL_Surface pointers or NULL on
failure; call SDL_GetError() for more information. This should be
freed with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50414).
