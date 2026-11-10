---
title: "SDLContext.RawApi — Method: GetNumVideoDrivers"
description: "Exact Method: GetNumVideoDrivers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5733e8f72b451867
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumVideoDrivers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumVideoDrivers`

<a id="api-4b87600b07487647"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumVideoDrivers 99d675e8b5568de362dd0aa7d78289f8c83939558f6ea7a2f8e0260966662a8d -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumVideoDrivers()
```

Get the number of video drivers compiled into SDL.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetVideoDriver

**Returns:** the number of built in video drivers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48739).
