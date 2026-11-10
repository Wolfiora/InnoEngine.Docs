---
title: "SDLContext.RawApi — Method: FlashWindow"
description: "Exact Method: FlashWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cdbcc17f5f0c43ec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: FlashWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `FlashWindow`

<a id="api-590147e7cd5c9c37"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.FlashWindow(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLFlashOperation) 4f50ad1aab42f2d53bfaea29b25ced87e07955bd8495167f3041e264a342f849 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.FlashWindow(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLFlashOperation operation)
```

Request a window to demand attention from the user.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to be flashed.

**Parameter `operation`:** the operation to perform.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22524).
