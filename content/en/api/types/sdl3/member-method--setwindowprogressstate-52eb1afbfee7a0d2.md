---
title: "SDLContext.RawApi — Method: SetWindowProgressState"
description: "Exact Method: SetWindowProgressState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.52eb1afbfee7a0d2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowProgressState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowProgressState`

<a id="api-e0eece02d192abbb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowProgressState(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLProgressState) 570768afdab34b354297f1f47b377478150ea04408798fcf3341c666543dbafa -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowProgressState(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLProgressState state)
```

Sets the state of the progress bar for the given window’s taskbar icon.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `window`:** the window whose progress state is to be modified.

**Parameter `state`:** the progress state. `SDL_PROGRESS_STATE_NONE` stops displaying
the progress bar.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46215).
