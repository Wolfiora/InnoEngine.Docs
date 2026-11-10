---
title: "SDLContext.RawApi — Method: GetNumRenderDrivers"
description: "Exact Method: GetNumRenderDrivers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b507465057cf3403
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumRenderDrivers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumRenderDrivers`

<a id="api-4c77fdba694f4026"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumRenderDrivers 51a9c6a2781d4910a8068e343bdd2eb8468daa4356257b6dad5fe084e57d3a3a -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumRenderDrivers()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44769).
