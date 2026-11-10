---
title: "SDLContext.RawApi — Method: GetDisplayBounds"
description: "Exact Method: GetDisplayBounds contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.185848a34daaa4d5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDisplayBounds

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDisplayBounds`

<a id="api-88408973383a8ab7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayBounds(System.UInt32,Inno.Native.Sdl3.SDLRect*) e20b0a221bc440971871fbc1027fd29022cbcb1762c5ac853d96863565010395 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayBounds(uint displayID, Inno.Native.Sdl3.SDLRect* rect)
```

Get the desktop area represented by a display.
The primary display is often located at (0,0), but may be placed at a
different location depending on monitor layout.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplayUsableBounds

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Parameter `rect`:** the SDL_Rect structure filled in with the display bounds.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38360).
