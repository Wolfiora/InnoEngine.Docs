---
title: "SDLContext.RawApi — Method: GetDisplayUsableBounds"
description: "Exact Method: GetDisplayUsableBounds contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0193214f22b0951c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDisplayUsableBounds

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDisplayUsableBounds`

<a id="api-da01c08e9b542c0e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayUsableBounds(System.UInt32,Inno.Native.Sdl3.SDLRect*) dc8539535902e96139968c1b56031aa69cb2cd7a49d4341c73c557513e0c7961 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayUsableBounds(uint displayID, Inno.Native.Sdl3.SDLRect* rect)
```

Get the usable desktop area represented by a display, in screen
coordinates.
This is the same area as SDL_GetDisplayBounds() reports, but with portions
reserved by the system removed. For example, on Apple's macOS, this
subtracts the area occupied by the menu bar and dock.
Setting a window to be fullscreen generally bypasses these unusable areas,
so these are good guidelines for the maximum space available to a
non-fullscreen window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplayBounds

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Parameter `rect`:** the SDL_Rect structure filled in with the display bounds.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33837).
