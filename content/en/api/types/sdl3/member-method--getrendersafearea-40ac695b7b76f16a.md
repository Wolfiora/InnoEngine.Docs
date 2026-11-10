---
title: "SDLContext.RawApi — Method: GetRenderSafeArea"
description: "Exact Method: GetRenderSafeArea contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.40ac695b7b76f16a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderSafeArea

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderSafeArea`

<a id="api-e284f3aee6fafe9a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderSafeArea(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLRect*) 5afeafc03a30bdcc6b2bb4efccfef2a3c4078d88a4f305d9d03a6a2c14bdcafc -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderSafeArea(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLRect* rect)
```

Get the safe area for rendering within the current viewport.
Some devices have portions of the screen which are partially obscured or
not interactive, possibly due to on-screen controls, curved edges, camera
notches, TV overscan, etc. This function provides the area of the current
viewport which is safe to have interactible content. You should continue
rendering into the rest of the render target, but it should not contain
visually important or interactible content.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `renderer`:** the rendering context.

**Parameter `rect`:** a pointer filled in with the area that is safe for interactive
content.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31489).
