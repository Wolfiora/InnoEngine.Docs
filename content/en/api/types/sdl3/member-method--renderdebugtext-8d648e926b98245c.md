---
title: "SDLContext.RawApi — Method: RenderDebugText"
description: "Exact Method: RenderDebugText contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8d648e926b98245c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderDebugText

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderDebugText`

<a id="api-f5f237711d2b3618"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderDebugText(Inno.Native.Sdl3.SDLRenderer*,System.Single,System.Single,System.SByte*) 23a54c3a07e55b6406ea4d647f1b685275a4b08cd5f5489cb609a795fda1359a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderDebugText(Inno.Native.Sdl3.SDLRenderer* renderer, float x, float y, sbyte* str)
```

Draw debug text to an SDL_Renderer.
This function will render a string of text to an SDL_Renderer. Note that
this is a convenience function for debugging, with severe limitations, and
not intended to be used for production apps and games.
Among these limitations:
- It accepts UTF-8 strings, but will only renders ASCII characters.
- It has a single, tiny size (8x8 pixels). You can use logical presentation
or SDL_SetRenderScale() to adjust it.
- It uses a simple, hardcoded bitmap font. It does not allow different font
selections and it does not support truetype, for proper scaling.
- It does no word-wrapping and does not treat newline characters as a line
break. If the text goes out of the window, it's gone.
For serious text rendering, there are several good options, such as
SDL_ttf, stb_truetype, or other external libraries.
On first use, this will create an internal texture for rendering glyphs.
This texture will live until the renderer is destroyed.
The text is drawn in the color specified by SDL_SetRenderDrawColor().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderDebugTextFormat

**See also:** SDL_DEBUG_TEXT_FONT_CHARACTER_SIZE

**Parameter `renderer`:** the renderer which should draw a line of text.

**Parameter `x`:** the x coordinate where the top-left corner of the text will draw.

**Parameter `y`:** the y coordinate where the top-left corner of the text will draw.

**Parameter `str`:** the string to render.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48701).
