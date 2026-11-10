---
title: "SDLContext.RawApi — Method: GetCameras"
description: "Exact Method: GetCameras contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.09de1d9c5d60374e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCameras

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCameras`

<a id="api-6acf1746770c44a2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCameras(System.Int32*) e7dc2adfeadcc51da5ba4fab17b604ca50b8fdd053d1a261373fc47af5819bc9 -->

```csharp
public uint* Inno.Native.Sdl3.SDLContext.RawApi.GetCameras(int* count)
```

Get a list of currently connected camera devices.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenCamera

**Parameter `count`:** a pointer filled in with the number of cameras returned, may
be NULL.

**Returns:** a 0 terminated array of camera instance IDs or NULL on failure;
call SDL_GetError() for more information. This should be freed
with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29376).
