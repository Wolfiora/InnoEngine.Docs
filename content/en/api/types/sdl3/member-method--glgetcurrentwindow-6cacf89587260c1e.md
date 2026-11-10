---
title: "SDLContext.RawApi — Method: GlGetCurrentWindow"
description: "Exact Method: GlGetCurrentWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6cacf89587260c1e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlGetCurrentWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlGetCurrentWindow`

<a id="api-838a1991e18420ed"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlGetCurrentWindow f626584e9c15f235538e75e2cd1fe99f649b56f9f7cc1ecb60aff47aed912dd2 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.GlGetCurrentWindow()
```

Get the currently active OpenGL window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the currently active OpenGL window on success or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34773).
