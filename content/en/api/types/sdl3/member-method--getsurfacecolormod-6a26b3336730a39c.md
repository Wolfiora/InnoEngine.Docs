---
title: "SDLContext.RawApi — Method: GetSurfaceColorMod"
description: "Exact Method: GetSurfaceColorMod contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6a26b3336730a39c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSurfaceColorMod

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSurfaceColorMod`

<a id="api-4f4b6785f7055899"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceColorMod(Inno.Native.Sdl3.SDLSurface*,System.Byte*,System.Byte*,System.Byte*) b7d43ba692a31df8f8091e1f623f06b5e8cc877fce775b5d478be18b8d7a69a2 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceColorMod(Inno.Native.Sdl3.SDLSurface* surface, byte* r, byte* g, byte* b)
```

Get the additional color value multiplied into blit operations.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetSurfaceAlphaMod

**See also:** SDL_SetSurfaceColorMod

**Parameter `surface`:** the SDL_Surface structure to query.

**Parameter `r`:** a pointer filled in with the current red color value.

**Parameter `g`:** a pointer filled in with the current green color value.

**Parameter `b`:** a pointer filled in with the current blue color value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30011).
