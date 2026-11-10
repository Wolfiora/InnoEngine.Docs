---
title: "SDLContext.RawApi — Method: GetRenderDrawColor"
description: "Exact Method: GetRenderDrawColor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.15e5a5c36be0bb41
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderDrawColor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderDrawColor`

<a id="api-4d572d7105d9159d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderDrawColor(Inno.Native.Sdl3.SDLRenderer*,System.Byte*,System.Byte*,System.Byte*,System.Byte*) 0be728fe6eee7556ea309b28638e4b5d3e53e615387c6f999ec5c1c14dac3aa4 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderDrawColor(Inno.Native.Sdl3.SDLRenderer* renderer, byte* r, byte* g, byte* b, byte* a)
```

Get the color used for drawing operations (Rect, Line and Clear).

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderDrawColorFloat

**See also:** SDL_SetRenderDrawColor

**Parameter `renderer`:** the rendering context.

**Parameter `r`:** a pointer filled in with the red value used to draw on the
rendering target.

**Parameter `g`:** a pointer filled in with the green value used to draw on the
rendering target.

**Parameter `b`:** a pointer filled in with the blue value used to draw on the
rendering target.

**Parameter `a`:** a pointer filled in with the alpha value used to draw on the
rendering target; usually `SDL_ALPHA_OPAQUE` (255).

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46723).
