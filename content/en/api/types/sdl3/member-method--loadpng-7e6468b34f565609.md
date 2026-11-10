---
title: "SDLContext.RawApi — Method: LoadPng"
description: "Exact Method: LoadPng contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7e6468b34f565609
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadPng

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadPng`

<a id="api-ecea8077c264cd41"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadPng(System.SByte*) e2ea36aa0d1f89ab3be563024a5355000dd6247a03664c213266a3011706c093 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.LoadPng(sbyte* file)
```

Load a PNG image from a file.
This is intended as a convenience function for loading images from trusted
sources. If you want to load arbitrary images you should use libpng or
another image loading library designed with security in mind.
The new surface should be freed with SDL_DestroySurface(). Not doing so
will result in a memory leak.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_DestroySurface

**See also:** SDL_LoadPNG_IO

**See also:** SDL_SavePNG

**Parameter `file`:** the PNG file to load.

**Returns:** a pointer to a new SDL_Surface structure or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28501).
