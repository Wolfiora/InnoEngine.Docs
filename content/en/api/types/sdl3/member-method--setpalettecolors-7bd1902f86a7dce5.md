---
title: "SDLContext.RawApi — Method: SetPaletteColors"
description: "Exact Method: SetPaletteColors contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7bd1902f86a7dce5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetPaletteColors

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetPaletteColors`

<a id="api-812208cd4afd9d43"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetPaletteColors(Inno.Native.Sdl3.SDLPalette*,Inno.Native.Sdl3.SDLColor*,System.Int32,System.Int32) b8b814051b934bc0fe452b1c386524975d8a05b55b9298b78a10a048069a0710 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetPaletteColors(Inno.Native.Sdl3.SDLPalette* palette, Inno.Native.Sdl3.SDLColor* colors, int firstcolor, int ncolors)
```

Set a range of colors in a palette.

**Thread safety:** It is safe to call this function from any thread, as long as
the palette is not modified or destroyed in another thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `palette`:** the SDL_Palette structure to modify.

**Parameter `colors`:** an array of SDL_Color structures to copy into the palette.

**Parameter `firstcolor`:** the index of the first palette entry to modify.

**Parameter `ncolors`:** the number of entries to modify.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26362).
