---
title: "SDLContext.RawApi — Method: RenderFillRect"
description: "Exact Method: RenderFillRect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e2860ef447de70c7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderFillRect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderFillRect`

<a id="api-1fcafc7cf08aa7ff"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderFillRect(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLFRect*) fa76a5f4fdae42ba82e92f871d187a412522654bd7ad5bd33587d6ba2e2a68c1 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderFillRect(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLFRect* rect)
```

Fill a rectangle on the current rendering target with the drawing color at
subpixel precision.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderFillRects

**Parameter `renderer`:** the renderer which should fill a rectangle.

**Parameter `rect`:** a pointer to the destination rectangle, or NULL for the entire
rendering target.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44212).
