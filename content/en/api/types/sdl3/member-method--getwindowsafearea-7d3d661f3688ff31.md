---
title: "SDLContext.RawApi — Method: GetWindowSafeArea"
description: "Exact Method: GetWindowSafeArea contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7d3d661f3688ff31
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowSafeArea

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowSafeArea`

<a id="api-fe395191a4ae7bae"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowSafeArea(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLRect*) 0864b967d5de1c96119084b8ef97fc37b18b39a028cf90ba97cdd26bb0a5126d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowSafeArea(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLRect* rect)
```

Get the safe area for this window.
Some devices have portions of the screen which are partially obscured or
not interactive, possibly due to on-screen controls, curved edges, camera
notches, TV overscan, etc. This function provides the area of the window
which is safe to have interactable content. You should continue rendering
into the rest of the window, but it should not contain visually important
or interactable content.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to query.

**Parameter `rect`:** a pointer filled in with the client area that is safe for
interactive content.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33725).
