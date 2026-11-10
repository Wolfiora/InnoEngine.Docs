---
title: "SDLContext.RawApi — Method: GetWindowAspectRatio"
description: "Exact Method: GetWindowAspectRatio contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c9df0a0d4e569b85
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowAspectRatio

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowAspectRatio`

<a id="api-a6abf433decc6ba0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowAspectRatio(Inno.Native.Sdl3.SDLWindow*,System.Single*,System.Single*) b50216cd8b01bedb9d6ed9d6cf59a6e840f8a283fd738bf7fb63f7db443d4415 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowAspectRatio(Inno.Native.Sdl3.SDLWindow* window, float* min_aspect, float* max_aspect)
```

Get the aspect ratio of a window's client area.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowAspectRatio

**Parameter `window`:** the window to query the width and height from.

**Parameter `min_aspect`:** a pointer filled in with the minimum aspect ratio of the
window, may be NULL.

**Parameter `max_aspect`:** a pointer filled in with the maximum aspect ratio of the
window, may be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37603).
