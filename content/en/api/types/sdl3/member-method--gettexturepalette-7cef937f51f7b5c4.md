---
title: "SDLContext.RawApi — Method: GetTexturePalette"
description: "Exact Method: GetTexturePalette contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7cef937f51f7b5c4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTexturePalette

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTexturePalette`

<a id="api-d3716ea88e489cb1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTexturePalette(Inno.Native.Sdl3.SDLTexture*) e9848da20cb0de3a3dad50b004bc19a349d7684eec5b3cc42d82917779615ec7 -->

```csharp
public Inno.Native.Sdl3.SDLPalette* Inno.Native.Sdl3.SDLContext.RawApi.GetTexturePalette(Inno.Native.Sdl3.SDLTexture* texture)
```

Get the palette used by a texture.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_SetTexturePalette

**Parameter `texture`:** the texture to query.

**Returns:** a pointer to the palette used by the texture, or NULL if there is
no palette used.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29221).
