---
title: "SDLContext.RawApi — Method: RenderPoints"
description: "Exact Method: RenderPoints contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b6b56b038eb257e2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderPoints

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderPoints`

<a id="api-20357b2fb7558c07"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderPoints(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLFPoint*,System.Int32) 27031b8d2c926976abaca68dbc4ba7f8c181f56802df4ddd639a845067efe9a7 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderPoints(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLFPoint* points, int count)
```

Draw multiple points on the current rendering target at subpixel precision.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderPoint

**Parameter `renderer`:** the renderer which should draw multiple points.

**Parameter `points`:** the points to draw.

**Parameter `count`:** the number of points to draw.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49161).
