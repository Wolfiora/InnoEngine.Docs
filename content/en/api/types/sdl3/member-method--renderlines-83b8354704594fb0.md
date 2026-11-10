---
title: "SDLContext.RawApi — Method: RenderLines"
description: "Exact Method: RenderLines contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.83b8354704594fb0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderLines

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderLines`

<a id="api-5e80453954832cb6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderLines(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLFPoint*,System.Int32) 73498787e46a96cd122f3e4503f9d17636032386fdfe7ed0d7ba9e1dcaef001f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderLines(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLFPoint* points, int count)
```

Draw a series of connected lines on the current rendering target at
subpixel precision.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderLine

**Parameter `renderer`:** the renderer which should draw multiple lines.

**Parameter `points`:** the points along the lines.

**Parameter `count`:** the number of points, drawing count-1 lines.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24193).
