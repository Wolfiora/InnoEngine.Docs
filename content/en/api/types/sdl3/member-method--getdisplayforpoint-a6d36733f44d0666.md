---
title: "SDLContext.RawApi — Method: GetDisplayForPoint"
description: "Exact Method: GetDisplayForPoint contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a6d36733f44d0666
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDisplayForPoint

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDisplayForPoint`

<a id="api-3a98b3a03ea3aadd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayForPoint(Inno.Native.Sdl3.SDLPoint*) 2d5adc977411b006032bd21b03bf5ccee21f0a8358fda57fcd235f83a2275d3d -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayForPoint(Inno.Native.Sdl3.SDLPoint* point)
```

Get the display containing a point.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplayBounds

**See also:** SDL_GetDisplays

**Parameter `point`:** the point to query.

**Returns:** the instance ID of the display containing the point or 0 on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44550).
