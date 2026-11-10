---
title: "SDLContext.RawApi — Method: GetWindowDisplayScale"
description: "Exact Method: GetWindowDisplayScale contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ae63cdc5c528bb09
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowDisplayScale

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowDisplayScale`

<a id="api-a7be328891759f9e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowDisplayScale(Inno.Native.Sdl3.SDLWindow*) 9ac8c679f084491e1a8d01bae7d7e1b15b402ff753169d85196e524e20076498 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.GetWindowDisplayScale(Inno.Native.Sdl3.SDLWindow* window)
```

Get the content display scale relative to a window's pixel size.
This is a combination of the window pixel density and the display content
scale, and is the expected scale for displaying content in this window. For
example, if a 3840x2160 window had a display scale of 2.0, the user expects
the content to take twice as many pixels and be the same physical size as
if it were being displayed in a 1920x1080 window with a display scale of
1.0.
Conceptually this value corresponds to the scale display setting, and is
updated when that setting is changed, or the window moves to a display with
a different scale setting.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to query.

**Returns:** the display scale, or 0.0f on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52313).
