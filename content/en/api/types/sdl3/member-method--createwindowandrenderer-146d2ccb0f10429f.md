---
title: "SDLContext.RawApi — Method: CreateWindowAndRenderer"
description: "Exact Method: CreateWindowAndRenderer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.146d2ccb0f10429f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateWindowAndRenderer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateWindowAndRenderer`

<a id="api-e35c927155b25d41"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateWindowAndRenderer(System.SByte*,System.Int32,System.Int32,System.UInt64,Inno.Native.Sdl3.SDLWindow**,Inno.Native.Sdl3.SDLRenderer**) 5a3113a2443c2242fe4aba741047f7d6c9e1e462b106931885f2fe7e1f7179c4 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CreateWindowAndRenderer(sbyte* title, int width, int height, ulong window_flags, Inno.Native.Sdl3.SDLWindow** window, Inno.Native.Sdl3.SDLRenderer** renderer)
```

Create a window and default renderer.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateRenderer

**See also:** SDL_CreateWindow

**Parameter `title`:** the title of the window, in UTF-8 encoding.

**Parameter `width`:** the width of the window.

**Parameter `height`:** the height of the window.

**Parameter `window_flags`:** the flags used to create the window (see
SDL_CreateWindow()).

**Parameter `window`:** a pointer filled with the window, or NULL on error.

**Parameter `renderer`:** a pointer filled with the renderer, or NULL on error.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44843).
