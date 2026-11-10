---
title: "SDLContext.RawApi — Method: SetSurfaceAlphaMod"
description: "Exact Method: SetSurfaceAlphaMod contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.981862a033103a65
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetSurfaceAlphaMod

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetSurfaceAlphaMod`

<a id="api-9e9e51b0a1896e34"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceAlphaMod(Inno.Native.Sdl3.SDLSurface*,System.Byte) e3afb6cfe049d192bc424808d5a1052d0c437e0fdb87b0753762aecb4cb0c2a6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetSurfaceAlphaMod(Inno.Native.Sdl3.SDLSurface* surface, byte alpha)
```

Set an additional alpha value used in blit operations.
When this surface is blitted, during the blit operation the source alpha
value is modulated by this alpha value according to the following formula:
`srcA = srcA * (alpha / 255)`

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetSurfaceAlphaMod

**See also:** SDL_SetSurfaceColorMod

**Parameter `surface`:** the SDL_Surface structure to update.

**Parameter `alpha`:** the alpha value multiplied into blit operations.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41702).
