---
title: "SDLContext.RawApi — Method: GetDesktopDisplayMode"
description: "Exact Method: GetDesktopDisplayMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.01953621c4e1ba07
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDesktopDisplayMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDesktopDisplayMode`

<a id="api-5c7c0aa4291027a4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDesktopDisplayMode(System.UInt32) 28bb74e3a851ac19c12c7c285f836fbc9820933439996fde9ad53ee45792784b -->

```csharp
public Inno.Native.Sdl3.SDLDisplayMode* Inno.Native.Sdl3.SDLContext.RawApi.GetDesktopDisplayMode(uint displayID)
```

Get information about the desktop's display mode.
There's a difference between this function and SDL_GetCurrentDisplayMode()
when SDL runs fullscreen and has changed the resolution. In that case this
function will return the previous native display mode, and not the current
display mode.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetCurrentDisplayMode

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** a pointer to the desktop display mode or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42351).
