---
title: "SDLContext.RawApi — Method: GetCurrentDisplayOrientation"
description: "Exact Method: GetCurrentDisplayOrientation contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.07ece16ebf062e8d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCurrentDisplayOrientation

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentDisplayOrientation`

<a id="api-960a11af49559596"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentDisplayOrientation(System.UInt32) 8e7209d6e8d1fbe7e333608fe4575b6a89f2cdd0b4aa5fef72e313de09b8bf41 -->

```csharp
public Inno.Native.Sdl3.SDLDisplayOrientation Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentDisplayOrientation(uint displayID)
```

Get the orientation of a display.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** the SDL_DisplayOrientation enum value of the display, or
`SDL_ORIENTATION_UNKNOWN` if it isn't available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33805).
