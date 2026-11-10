---
title: "SDLContext.RawApi — Method: LoadBmpIo"
description: "Exact Method: LoadBmpIo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e03ab48154990a4b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadBmpIo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadBmpIo`

<a id="api-b89bf08e563f575b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadBmpIo(Inno.Native.Sdl3.SDLIOStream*,System.Byte) e66c56e7ea084a4299ebd3c7c451ae47ecdb24c2e7bb056f7adf3175f58d4894 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.LoadBmpIo(Inno.Native.Sdl3.SDLIOStream* src, byte closeio)
```

Load a BMP image from a seekable SDL data stream.
The new surface should be freed with SDL_DestroySurface(). Not doing so
will result in a memory leak.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroySurface

**See also:** SDL_LoadBMP

**See also:** SDL_SaveBMP_IO

**Parameter `src`:** the data stream for the surface.

**Parameter `closeio`:** if true, calls SDL_CloseIO() on `src` before returning, even
in the case of an error.

**Returns:** a pointer to a new SDL_Surface structure or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48857).
