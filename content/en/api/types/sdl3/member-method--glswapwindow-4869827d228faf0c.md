---
title: "SDLContext.RawApi — Method: GlSwapWindow"
description: "Exact Method: GlSwapWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4869827d228faf0c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlSwapWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlSwapWindow`

<a id="api-56630f0b489dee5d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlSwapWindow(Inno.Native.Sdl3.SDLWindow*) dcbba80f70046e45a30382fb061faf24b49e4bc9f73dc9ef07052263037f2fa5 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GlSwapWindow(Inno.Native.Sdl3.SDLWindow* window)
```

Update a window with OpenGL rendering.
This is used with double-buffered OpenGL contexts, which are the default.
On macOS, make sure you bind 0 to the draw framebuffer before swapping the
window, otherwise nothing will happen. If you aren't using
glBindFramebuffer(), this is the default and you won't have to do anything
extra.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to change.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21318).
