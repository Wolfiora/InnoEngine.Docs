---
title: "SDL — Method: GetCurrentDisplayOrientation"
description: "Exact Method: GetCurrentDisplayOrientation contracts in SDL."
uid: api.inno.native.sdl3.a9b8a3be401190b9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetCurrentDisplayOrientation

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentDisplayOrientation`

<a id="api-1c5503a5002ea1bf"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetCurrentDisplayOrientation(System.UInt32) 7e0d186b9e357ff2008bc586b92a1da5957329062aef6dab5d03b9a2403a7e49 -->

```csharp
public static Inno.Native.Sdl3.SDLDisplayOrientation Inno.Native.Sdl3.SDL.GetCurrentDisplayOrientation(uint displayID)
```

Get the orientation of a display.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** the SDL_DisplayOrientation enum value of the display, or
`SDL_ORIENTATION_UNKNOWN` if it isn't available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2032).
