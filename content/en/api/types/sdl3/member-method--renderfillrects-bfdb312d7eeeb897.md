---
title: "SDLContext.RawApi — Method: RenderFillRects"
description: "Exact Method: RenderFillRects contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bfdb312d7eeeb897
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderFillRects

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderFillRects`

<a id="api-6b3a2943da5786dc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderFillRects(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLFRect*,System.Int32) ca41fb8a135066bb39f13cf4fb5794e276e8d06e1dafeb7185bec7ea876ea420 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderFillRects(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLFRect* rects, int count)
```

Fill some number of rectangles on the current rendering target with the
drawing color at subpixel precision.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderFillRect

**Parameter `renderer`:** the renderer which should fill multiple rectangles.

**Parameter `rects`:** a pointer to an array of destination rectangles.

**Parameter `count`:** the number of rectangles.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17778).
