---
title: "SDLContext — Method: GetNumVideoDrivers"
description: "Exact Method: GetNumVideoDrivers contracts in SDLContext."
uid: api.inno.native.sdl3.968dca14bdafc25e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetNumVideoDrivers

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumVideoDrivers`

<a id="api-6c882f8f611f8de0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetNumVideoDrivers 1f1f737e95d591cc528fc96e625258e9ab3e3dfbffe4dbe1160742b3b8e8cb06 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetNumVideoDrivers()
```

Get the number of video drivers compiled into SDL.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetVideoDriver

**Returns:** the number of built in video drivers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16009).
