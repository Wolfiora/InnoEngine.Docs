---
title: "SDL — Method: GetNumRenderDrivers"
description: "Exact Method: GetNumRenderDrivers contracts in SDL."
uid: api.inno.native.sdl3.fc7f968a16e94536
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetNumRenderDrivers

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumRenderDrivers`

<a id="api-137e8f0cfed3f8c1"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetNumRenderDrivers b87de411ae3bce9f28def574d40d985cff47392da678f6c52802892e40911b85 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetNumRenderDrivers()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3428).
