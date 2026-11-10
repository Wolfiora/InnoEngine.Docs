---
title: "SDLContext.RawApi — Method: RenderPoint"
description: "Exact Method: RenderPoint contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.84e2e6f4e029686f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderPoint

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderPoint`

<a id="api-e0cbb14e4d82aa58"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderPoint(Inno.Native.Sdl3.SDLRenderer*,System.Single,System.Single) f73d17319e7f690ebc4ec14a4194c7f606e3d51c8b479295f6c9a894e4471255 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderPoint(Inno.Native.Sdl3.SDLRenderer* renderer, float x, float y)
```

Draw a point on the current rendering target at subpixel precision.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderPoints

**Parameter `renderer`:** the renderer which should draw a point.

**Parameter `x`:** the x coordinate of the point.

**Parameter `y`:** the y coordinate of the point.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45209).
