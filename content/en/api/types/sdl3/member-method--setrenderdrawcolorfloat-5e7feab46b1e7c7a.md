---
title: "SDLContext.RawApi — Method: SetRenderDrawColorFloat"
description: "Exact Method: SetRenderDrawColorFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5e7feab46b1e7c7a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderDrawColorFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderDrawColorFloat`

<a id="api-9a9ce4078547e0be"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderDrawColorFloat(Inno.Native.Sdl3.SDLRenderer*,System.Single,System.Single,System.Single,System.Single) 939c386efa7cb7237ed6cb8cfc9106aa07915f7700913cfd7c98cbf50edad92d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderDrawColorFloat(Inno.Native.Sdl3.SDLRenderer* renderer, float r, float g, float b, float a)
```

Set the color used for drawing operations (Rect, Line and Clear).
Set the color for drawing or filling rectangles, lines, and points, and for
SDL_RenderClear().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderDrawColorFloat

**See also:** SDL_SetRenderDrawColor

**Parameter `renderer`:** the rendering context.

**Parameter `r`:** the red value used to draw on the rendering target.

**Parameter `g`:** the green value used to draw on the rendering target.

**Parameter `b`:** the blue value used to draw on the rendering target.

**Parameter `a`:** the alpha value used to draw on the rendering target. Use
SDL_SetRenderDrawBlendMode to specify how the alpha channel is
used.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25876).
