---
title: "SDLContext.RawApi — Method: SetTexturePalette"
description: "Exact Method: SetTexturePalette contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.060e54f75241a6fc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTexturePalette

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTexturePalette`

<a id="api-750ace1298f07752"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTexturePalette(Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLPalette*) 0d51446cb4e6ba9a9a0e7d24bde6b98478b8bd21a1713d7220414ed96dac11dc -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetTexturePalette(Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLPalette* palette)
```

Set the palette used by a texture.
Setting the palette keeps an internal reference to the palette, which can
be safely destroyed afterwards.
A single palette can be shared with many textures.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_CreatePalette

**See also:** SDL_GetTexturePalette

**Parameter `texture`:** the texture to update.

**Parameter `palette`:** the SDL_Palette structure to use.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25040).
