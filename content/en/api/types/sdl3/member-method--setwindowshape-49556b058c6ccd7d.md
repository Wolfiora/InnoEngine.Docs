---
title: "SDLContext.RawApi — Method: SetWindowShape"
description: "Exact Method: SetWindowShape contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.49556b058c6ccd7d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowShape

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowShape`

<a id="api-1654f3df7bf64a65"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowShape(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLSurface*) 4b73a3d6186ae85c8846d58231f56e4b9277fa67e49b254ea61b4eadf20cf1b3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowShape(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLSurface* shape)
```

Set the shape of a transparent window.
This sets the alpha channel of a transparent window and any fully
transparent areas are also transparent to mouse clicks. If you are using
something besides the SDL render API, then you are responsible for drawing
the alpha channel of the window to match the shape alpha channel to get
consistent cross-platform results.
The shape is copied inside this function, so you can free it afterwards. If
your shape surface changes, you should call SDL_SetWindowShape() again to
update the window. This is an expensive operation, so should be done
sparingly.
The window must have been created with the SDL_WINDOW_TRANSPARENT flag.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window.

**Parameter `shape`:** the surface representing the shape of the window, or NULL to
remove any current shape.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36114).
