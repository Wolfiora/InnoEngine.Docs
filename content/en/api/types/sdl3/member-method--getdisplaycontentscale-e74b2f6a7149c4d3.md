---
title: "SDL — Method: GetDisplayContentScale"
description: "Exact Method: GetDisplayContentScale contracts in SDL."
uid: api.inno.native.sdl3.e74b2f6a7149c4d3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetDisplayContentScale

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDisplayContentScale`

<a id="api-f02d7b5e23c3a8ba"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetDisplayContentScale(System.UInt32) c1cdf1aa9e88f934ead102bb9ec014f6a8f94bec1511539a6d3bdba4228af673 -->

```csharp
public static float Inno.Native.Sdl3.SDL.GetDisplayContentScale(uint displayID)
```

Get the content scale of a display.
The content scale is the expected scale for content based on the DPI
settings of the display. For example, a 4K display might have a 2.0 (200%)
display scale, which means that the user expects UI elements to be twice as
big on this display, to aid in readability.
After window creation, SDL_GetWindowDisplayScale() should be used to query
the content scale factor for individual windows instead of querying the
display for a window and calling this function, as the per-window content
scale factor may differ from the base value of the display it is on,
particularly on high-DPI and/or multi-monitor desktop configurations.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowDisplayScale

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** the content scale of the display, or 0.0f on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1502).
