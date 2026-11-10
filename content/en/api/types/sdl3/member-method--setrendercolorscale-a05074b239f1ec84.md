---
title: "SDLContext.RawApi — Method: SetRenderColorScale"
description: "Exact Method: SetRenderColorScale contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a05074b239f1ec84
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderColorScale

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderColorScale`

<a id="api-f851bf2097a21bd7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderColorScale(Inno.Native.Sdl3.SDLRenderer*,System.Single) 91b29a83e27935e2ef5c8c274f0521461be362670b261d64520b21e625cf5ddb -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderColorScale(Inno.Native.Sdl3.SDLRenderer* renderer, float scale)
```

Set the color scale used for render operations.
The color scale is an additional scale multiplied into the pixel color
value while rendering. This can be used to adjust the brightness of colors
during HDR rendering, or changing HDR video brightness when playing on an
SDR display.
The color scale does not affect the alpha channel, only the color
brightness.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderColorScale

**Parameter `renderer`:** the rendering context.

**Parameter `scale`:** the color scale value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25012).
