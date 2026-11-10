---
title: "SDLContext.RawApi — Method: GetWindowProgressValue"
description: "Exact Method: GetWindowProgressValue contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.137b16cad2cf2415
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowProgressValue

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowProgressValue`

<a id="api-75c9f4c8589a58ec"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowProgressValue(Inno.Native.Sdl3.SDLWindow*) 4fefe4c5c06778dd8533a1fa164b5de1bbe4c46e63f112cb3dd6ae9f018dd97e -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.GetWindowProgressValue(Inno.Native.Sdl3.SDLWindow* window)
```

Get the value of the progress bar for the given window’s taskbar icon.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `window`:** the window to get the current progress value from.

**Returns:** the progress value in the range of [0.0f - 1.0f], or -1.0f on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36543).
