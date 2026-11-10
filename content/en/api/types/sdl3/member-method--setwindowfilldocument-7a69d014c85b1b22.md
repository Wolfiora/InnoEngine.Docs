---
title: "SDLContext.RawApi — Method: SetWindowFillDocument"
description: "Exact Method: SetWindowFillDocument contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7a69d014c85b1b22
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowFillDocument

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowFillDocument`

<a id="api-bd550ceab3438a60"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowFillDocument(Inno.Native.Sdl3.SDLWindow*,System.Byte) 967335189a84cf546cbaf4ecb84e2ea0634138a15a258727e7e48797440927ce -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowFillDocument(Inno.Native.Sdl3.SDLWindow* window, byte fill)
```

Set the window to fill the current document space (Emscripten only).
This will add or remove the window's `SDL_WINDOW_FILL_DOCUMENT` flag.
Currently this flag only applies to the Emscripten target.
When enabled, the canvas element fills the entire document. Resize events
will be generated as the browser window is resized, as that will adjust the
canvas size as well. The canvas will cover anything else on the page,
including any controls provided by Emscripten in its generated HTML file
(in fact, any elements on the page that aren't the canvas will be moved
into a hidden `div` element).
Often times this is desirable for a browser-based game, but it means
several things that we expect of an SDL window on other platforms might not
work as expected, such as minimum window sizes and aspect ratios.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_GetWindowFlags

**Parameter `window`:** the window of which to change the fill-document state.

**Parameter `fill`:** true to set the window to fill the document, false to disable.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22065).
