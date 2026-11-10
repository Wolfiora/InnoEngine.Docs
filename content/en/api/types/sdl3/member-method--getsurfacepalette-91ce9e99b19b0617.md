---
title: "SDLContext.RawApi — Method: GetSurfacePalette"
description: "Exact Method: GetSurfacePalette contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.91ce9e99b19b0617
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSurfacePalette

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSurfacePalette`

<a id="api-520b5020ae573650"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSurfacePalette(Inno.Native.Sdl3.SDLSurface*) d270ac5188b752fbada3102edc9ca34f437b78ccbfd1c33208eac1c94fe0f627 -->

```csharp
public Inno.Native.Sdl3.SDLPalette* Inno.Native.Sdl3.SDLContext.RawApi.GetSurfacePalette(Inno.Native.Sdl3.SDLSurface* surface)
```

Get the palette used by a surface.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetSurfacePalette

**Parameter `surface`:** the SDL_Surface structure to query.

**Returns:** a pointer to the palette used by the surface, or NULL if there is
no palette used.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36381).
