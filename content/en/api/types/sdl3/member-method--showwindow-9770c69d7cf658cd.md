---
title: "SDLContext.RawApi — Method: ShowWindow"
description: "Exact Method: ShowWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9770c69d7cf658cd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ShowWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShowWindow`

<a id="api-c6d43b4185a67f4a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ShowWindow(Inno.Native.Sdl3.SDLWindow*) 10a2edd4b1f8249a42d36389cf6f795a1af47df175b6b664109aa305810074fb -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ShowWindow(Inno.Native.Sdl3.SDLWindow* window)
```

Show a window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HideWindow

**See also:** SDL_RaiseWindow

**Parameter `window`:** the window to show.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26679).
