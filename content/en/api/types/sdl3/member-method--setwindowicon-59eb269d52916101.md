---
title: "SDLContext.RawApi — Method: SetWindowIcon"
description: "Exact Method: SetWindowIcon contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.59eb269d52916101
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowIcon

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowIcon`

<a id="api-97ceef1562a11137"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowIcon(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLSurface*) c2982af67c73ed87db66e8226f8d126a1b5a532d9651a27ef84b75ec6830119c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowIcon(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLSurface* icon)
```

Set the icon for a window.
If this function is passed a surface with alternate representations added
using SDL_AddSurfaceAlternateImage(), the surface will be interpreted as
the content to be used for 100% display scale, and the alternate
representations will be used for high DPI situations. For example, if the
original surface is 32x32, then on a 2x macOS display or 200% display scale
on Windows, a 64x64 version of the image will be used, if available. If a
matching version of the image isn't available, the closest larger size
image will be downscaled to the appropriate size and be used instead, if
available. Otherwise, the closest smaller image will be upscaled and be
used instead.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddSurfaceAlternateImage

**Parameter `window`:** the window to change.

**Parameter `icon`:** an SDL_Surface structure containing the icon for the window.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28785).
