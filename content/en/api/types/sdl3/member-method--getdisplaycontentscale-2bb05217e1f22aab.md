---
title: "SDLContext — Method: GetDisplayContentScale"
description: "Exact Method: GetDisplayContentScale contracts in SDLContext."
uid: api.inno.native.sdl3.2bb05217e1f22aab
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetDisplayContentScale

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDisplayContentScale`

<a id="api-380f6d9a1d330339"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetDisplayContentScale(System.UInt32) 3d3c6ea32767ae99cca7aaa3d6dd8479f848ae623beedd03146c47d5486c5067 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.GetDisplayContentScale(uint displayID)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13179).
