---
title: "SDLContext.RawApi — Method: LoadBmp"
description: "Exact Method: LoadBmp contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9831b76f74415b11
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadBmp

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadBmp`

<a id="api-92ac82ec81624237"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadBmp(System.SByte*) 654cb73183f61d96ecc5c85c431eccb8778031e2f5c6e43ee99b4ef9c4f6a513 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.LoadBmp(sbyte* file)
```

Load a BMP image from a file.
The new surface should be freed with SDL_DestroySurface(). Not doing so
will result in a memory leak.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroySurface

**See also:** SDL_LoadBMP_IO

**See also:** SDL_SaveBMP

**Parameter `file`:** the BMP file to load.

**Returns:** a pointer to a new SDL_Surface structure or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39239).
