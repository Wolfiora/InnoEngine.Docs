---
title: "SDLContext — Method: GetCurrentDisplayOrientation"
description: "Exact Method: GetCurrentDisplayOrientation contracts in SDLContext."
uid: api.inno.native.sdl3.2f4f25402bafe4c0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetCurrentDisplayOrientation

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentDisplayOrientation`

<a id="api-ad1c1c9537f58112"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetCurrentDisplayOrientation(System.UInt32) 2d55f87852d7c24fcf324ae08e71b5062921d198abed84ae3f949cfa3572436b -->

```csharp
public Inno.Native.Sdl3.SDLDisplayOrientation Inno.Native.Sdl3.SDLContext.GetCurrentDisplayOrientation(uint displayID)
```

Get the orientation of a display.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** the SDL_DisplayOrientation enum value of the display, or
`SDL_ORIENTATION_UNKNOWN` if it isn't available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13826).
