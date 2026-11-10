---
title: "SDLContext.RawApi — Method: DestroyWindow"
description: "Exact Method: DestroyWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9fe198323032142b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyWindow`

<a id="api-afb987d7f5e93946"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyWindow(Inno.Native.Sdl3.SDLWindow*) ef376e9fc66c0ff88b215ee085b4c7d45a255d83de4693cf21e57f898a964eb5 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyWindow(Inno.Native.Sdl3.SDLWindow* window)
```

Destroy a window.
Any child windows owned by the window will be recursively destroyed as
well.
Note that on some platforms, the visible window may not actually be removed
from the screen until the SDL event loop is pumped again, even though the
SDL_Window is no longer valid after this call.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreatePopupWindow

**See also:** SDL_CreateWindow

**See also:** SDL_CreateWindowWithProperties

**Parameter `window`:** the window to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46523).
