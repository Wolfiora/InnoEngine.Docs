---
title: "SDLContext.RawApi — Method: GetCurrentDisplayMode"
description: "Exact Method: GetCurrentDisplayMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2d7ddb173c2b3cec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCurrentDisplayMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentDisplayMode`

<a id="api-dca0ff9f6fe4a71e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentDisplayMode(System.UInt32) 9907b973413c1f7afe80a379aa4536fdbc8bfd2813a13ecc3357d6377addeb83 -->

```csharp
public Inno.Native.Sdl3.SDLDisplayMode* Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentDisplayMode(uint displayID)
```

Get information about the current display mode.
There's a difference between this function and SDL_GetDesktopDisplayMode()
when SDL runs fullscreen and has changed the resolution. In that case this
function will return the current display mode, and not the previous native
display mode.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDesktopDisplayMode

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** a pointer to the desktop display mode or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31973).
