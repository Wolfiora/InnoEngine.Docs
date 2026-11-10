---
title: "SDLContext.RawApi — Method: SetSurfaceColorMod"
description: "Exact Method: SetSurfaceColorMod contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f0ea3e7cf9b27425
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetSurfaceColorMod

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetSurfaceColorMod`

<a id="api-6a79cc3de7988878"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceColorMod(Inno.Native.Sdl3.SDLSurface*,System.Byte,System.Byte,System.Byte) e791ab4e897893e982427c5dde04b58ba05d2c64a6f64546d43f4203948a7f5e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceColorMod(Inno.Native.Sdl3.SDLSurface* surface, byte r, byte g, byte b)
```

Set an additional color value multiplied into blit operations.
When this surface is blitted, during the blit operation each source color
channel is modulated by the appropriate color value according to the
following formula:
`srcC = srcC * (color / 255)`

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetSurfaceColorMod

**See also:** SDL_SetSurfaceAlphaMod

**Parameter `surface`:** the SDL_Surface structure to update.

**Parameter `r`:** the red color value multiplied into blit operations.

**Parameter `g`:** the green color value multiplied into blit operations.

**Parameter `b`:** the blue color value multiplied into blit operations.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51660).
