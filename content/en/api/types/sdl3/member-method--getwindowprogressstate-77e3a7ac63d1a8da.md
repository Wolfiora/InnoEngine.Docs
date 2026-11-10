---
title: "SDLContext.RawApi — Method: GetWindowProgressState"
description: "Exact Method: GetWindowProgressState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.77e3a7ac63d1a8da
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowProgressState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowProgressState`

<a id="api-8b9464187847abea"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowProgressState(Inno.Native.Sdl3.SDLWindow*) 4ac543cd448f0b7a21e764fc44c5f888a50f3c5abbdc4f6b133fe0d144023d64 -->

```csharp
public Inno.Native.Sdl3.SDLProgressState Inno.Native.Sdl3.SDLContext.RawApi.GetWindowProgressState(Inno.Native.Sdl3.SDLWindow* window)
```

Get the state of the progress bar for the given window’s taskbar icon.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `window`:** the window to get the current progress state from.

**Returns:** the progress state, or `SDL_PROGRESS_STATE_INVALID` on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20912).
