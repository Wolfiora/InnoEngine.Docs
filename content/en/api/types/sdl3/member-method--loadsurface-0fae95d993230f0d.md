---
title: "SDLContext.RawApi — Method: LoadSurface"
description: "Exact Method: LoadSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0fae95d993230f0d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadSurface`

<a id="api-c5e0d9c98c919cce"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadSurface(System.SByte*) ae3811040fbb6c019ad5d7ccae7f965dc9a80b27fa2e627f6fde390ba6708356 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.LoadSurface(sbyte* file)
```

Load a BMP or PNG image from a file.
The new surface should be freed with SDL_DestroySurface(). Not doing so
will result in a memory leak.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_DestroySurface

**See also:** SDL_LoadSurface_IO

**Parameter `file`:** the file to load.

**Returns:** a pointer to a new SDL_Surface structure or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52729).
