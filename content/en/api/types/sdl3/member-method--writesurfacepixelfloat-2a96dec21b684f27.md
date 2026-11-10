---
title: "SDLContext.RawApi — Method: WriteSurfacePixelFloat"
description: "Exact Method: WriteSurfacePixelFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2a96dec21b684f27
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteSurfacePixelFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteSurfacePixelFloat`

<a id="api-a8dfe629ee790a56"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteSurfacePixelFloat(Inno.Native.Sdl3.SDLSurface*,System.Int32,System.Int32,System.Single,System.Single,System.Single,System.Single) ba8e19ac7ce6928833aa4964a2ea6cb94c4dbba7211498279456809d08210358 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteSurfacePixelFloat(Inno.Native.Sdl3.SDLSurface* surface, int x, int y, float r, float g, float b, float a)
```

Writes a single pixel to a surface.
This function prioritizes correctness over speed: it is suitable for unit
tests, but is not intended for use in a game engine.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `surface`:** the surface to write.

**Parameter `x`:** the horizontal coordinate, 0
<
= x
<
width.

**Parameter `y`:** the vertical coordinate, 0
<
= y
<
height.

**Parameter `r`:** the red channel value, normally in the range 0-1.

**Parameter `g`:** the green channel value, normally in the range 0-1.

**Parameter `b`:** the blue channel value, normally in the range 0-1.

**Parameter `a`:** the alpha channel value, normally in the range 0-1.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30599).
