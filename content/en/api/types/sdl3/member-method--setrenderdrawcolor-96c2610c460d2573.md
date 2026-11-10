---
title: "SDLContext.RawApi — Method: SetRenderDrawColor"
description: "Exact Method: SetRenderDrawColor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.96c2610c460d2573
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderDrawColor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderDrawColor`

<a id="api-b0c1bf55760d9ce5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderDrawColor(Inno.Native.Sdl3.SDLRenderer*,System.Byte,System.Byte,System.Byte,System.Byte) e000a30ba3882c60f9942ec0b793830bba90dcd8f4a4cc731d8ddc87abf80c6a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderDrawColor(Inno.Native.Sdl3.SDLRenderer* renderer, byte r, byte g, byte b, byte a)
```

Set the color used for drawing operations.
Set the color for drawing or filling rectangles, lines, and points, and for
SDL_RenderClear().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderDrawColor

**See also:** SDL_SetRenderDrawColorFloat

**Parameter `renderer`:** the rendering context.

**Parameter `r`:** the red value used to draw on the rendering target.

**Parameter `g`:** the green value used to draw on the rendering target.

**Parameter `b`:** the blue value used to draw on the rendering target.

**Parameter `a`:** the alpha value used to draw on the rendering target; usually
`SDL_ALPHA_OPAQUE` (255). Use SDL_SetRenderDrawBlendMode to
specify how the alpha channel is used.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46786).
