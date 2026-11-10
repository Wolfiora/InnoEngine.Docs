---
title: "SDLContext.RawApi — Method: RenderRects"
description: "Exact Method: RenderRects contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.82d95bc27231e89a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderRects

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderRects`

<a id="api-6e4ba1ed17726151"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderRects(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLFRect*,System.Int32) f1af7f50c3e5471ae544e58c74f2fa62c4c29d2836d9b95ad5e5b39c7602f045 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderRects(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLFRect* rects, int count)
```

Draw some number of rectangles on the current rendering target at subpixel
precision.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderRect

**Parameter `renderer`:** the renderer which should draw multiple rectangles.

**Parameter `rects`:** a pointer to an array of destination rectangles.

**Parameter `count`:** the number of rectangles.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30169).
