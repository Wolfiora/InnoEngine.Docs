---
title: "SDLContext.RawApi — Method: GetWindowPixelFormat"
description: "Exact Method: GetWindowPixelFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4806b00bfa2b842f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowPixelFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowPixelFormat`

<a id="api-18a42753e630b259"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowPixelFormat(Inno.Native.Sdl3.SDLWindow*) 3f0823fe99fc22288c021f27c228db55703bfc5c02ce3dc21e795e5f932d9cc8 -->

```csharp
public Inno.Native.Sdl3.SDLPixelFormat Inno.Native.Sdl3.SDLContext.RawApi.GetWindowPixelFormat(Inno.Native.Sdl3.SDLWindow* window)
```

Get the pixel format associated with the window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to query.

**Returns:** the pixel format of the window on success or
SDL_PIXELFORMAT_UNKNOWN on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48473).
