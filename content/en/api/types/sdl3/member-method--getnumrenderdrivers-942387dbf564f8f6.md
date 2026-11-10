---
title: "SDLContext — Method: GetNumRenderDrivers"
description: "Exact Method: GetNumRenderDrivers contracts in SDLContext."
uid: api.inno.native.sdl3.942387dbf564f8f6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetNumRenderDrivers

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumRenderDrivers`

<a id="api-ecd72d8d42da1421"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetNumRenderDrivers 2095b4f525ca6a290600e7ad7483a2d989076812abb1bdca3b18a92399ac9816 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetNumRenderDrivers()
```

Get the number of 2D rendering drivers available for the current display.
A render driver is a set of code that handles rendering and texture
management on a particular display. Normally there is only one, but some
drivers may have several available with different capabilities.
There may be none if SDL was compiled without render support.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateRenderer

**See also:** SDL_GetRenderDriver

**Returns:** the number of built in render drivers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15512).
