---
title: "SDLContext.RawApi — Method: GetWindowPixelDensity"
description: "Exact Method: GetWindowPixelDensity contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a3fa8409077b9f36
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowPixelDensity

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowPixelDensity`

<a id="api-c00099b23bc6c0b9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowPixelDensity(Inno.Native.Sdl3.SDLWindow*) 4be148b2777025f58fff3afd45abc338967949ed6e531a400f6fa545a740f02c -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.GetWindowPixelDensity(Inno.Native.Sdl3.SDLWindow* window)
```

Get the pixel density of a window.
This is a ratio of pixel size to window size. For example, if the window is
1920x1080 and it has a high density back buffer of 3840x2160 pixels, it
would have a pixel density of 2.0.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowDisplayScale

**Parameter `window`:** the window to query.

**Returns:** the pixel density or 0.0f on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21381).
