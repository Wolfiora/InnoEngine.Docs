---
title: "SDLContext.RawApi — Method: GetRenderDrawColorFloat"
description: "Exact Method: GetRenderDrawColorFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3c8362e564be73ab
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderDrawColorFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderDrawColorFloat`

<a id="api-748ed57177445c61"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderDrawColorFloat(Inno.Native.Sdl3.SDLRenderer*,System.Single*,System.Single*,System.Single*,System.Single*) 2c1164cdc8a975216c0498a301c926caaae715feee352d8d38cd24822b26f81e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderDrawColorFloat(Inno.Native.Sdl3.SDLRenderer* renderer, float* r, float* g, float* b, float* a)
```

Get the color used for drawing operations (Rect, Line and Clear).

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderDrawColorFloat

**See also:** SDL_GetRenderDrawColor

**Parameter `renderer`:** the rendering context.

**Parameter `r`:** a pointer filled in with the red value used to draw on the
rendering target.

**Parameter `g`:** a pointer filled in with the green value used to draw on the
rendering target.

**Parameter `b`:** a pointer filled in with the blue value used to draw on the
rendering target.

**Parameter `a`:** a pointer filled in with the alpha value used to draw on the
rendering target.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34044).
