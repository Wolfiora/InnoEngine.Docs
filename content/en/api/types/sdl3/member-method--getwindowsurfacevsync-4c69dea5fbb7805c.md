---
title: "SDLContext.RawApi — Method: GetWindowSurfaceVSync"
description: "Exact Method: GetWindowSurfaceVSync contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4c69dea5fbb7805c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowSurfaceVSync

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowSurfaceVSync`

<a id="api-c5d99946b463b321"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowSurfaceVSync(Inno.Native.Sdl3.SDLWindow*,System.Int32*) 91dc10b1f7ec49a0fba6d86e87e5ff94052f109bbe79a8f0215a6afc52d73588 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowSurfaceVSync(Inno.Native.Sdl3.SDLWindow* window, int* vsync)
```

Get VSync for the window surface.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowSurfaceVSync

**Parameter `window`:** the window to query.

**Parameter `vsync`:** an int filled with the current vertical refresh sync interval.
See SDL_SetWindowSurfaceVSync() for the meaning of the value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18248).
