---
title: "SDLContext.RawApi — Method: GetWindowKeyboardGrab"
description: "Exact Method: GetWindowKeyboardGrab contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f250df8254e2c95c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowKeyboardGrab

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowKeyboardGrab`

<a id="api-73a4ffc5ee46c07d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowKeyboardGrab(Inno.Native.Sdl3.SDLWindow*) 8404d3f6e7dc219dbb32eb1bf796625b86dac508e66ccd08da02e263f77db8fa -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowKeyboardGrab(Inno.Native.Sdl3.SDLWindow* window)
```

Get a window's keyboard grab mode.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowKeyboardGrab

**Parameter `window`:** the window to query.

**Returns:** true if keyboard is grabbed, and false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22661).
