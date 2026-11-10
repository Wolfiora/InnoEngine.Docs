---
title: "SDLContext.RawApi — Method: GetWindowId"
description: "Exact Method: GetWindowId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.813b0261dd93e869
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowId`

<a id="api-32b0c6852843bb81"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowId(Inno.Native.Sdl3.SDLWindow*) 5b80d8595d1d753b1233b174788e400eb10aee170f12e1bd29d8d4c75d9ad197 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetWindowId(Inno.Native.Sdl3.SDLWindow* window)
```

Get the numeric ID of a window.
The numeric ID is what SDL_WindowEvent references, and is necessary to map
these events to specific SDL_Window objects.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowFromID

**Parameter `window`:** the window to query.

**Returns:** the ID of the window on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31550).
