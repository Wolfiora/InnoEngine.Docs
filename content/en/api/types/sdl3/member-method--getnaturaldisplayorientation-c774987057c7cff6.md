---
title: "SDL — Method: GetNaturalDisplayOrientation"
description: "Exact Method: GetNaturalDisplayOrientation contracts in SDL."
uid: api.inno.native.sdl3.c774987057c7cff6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetNaturalDisplayOrientation

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNaturalDisplayOrientation`

<a id="api-3b9914316393d7f4"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetNaturalDisplayOrientation(System.UInt32) 23628c9245e44859338827f2c65fc86bf5cd38cc2ac02f0220ffb6377b7d6e0b -->

```csharp
public static Inno.Native.Sdl3.SDLDisplayOrientation Inno.Native.Sdl3.SDL.GetNaturalDisplayOrientation(uint displayID)
```

Get the orientation of a display when it is unrotated.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** the SDL_DisplayOrientation enum value of the display, or
`SDL_ORIENTATION_UNKNOWN` if it isn't available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2461).
