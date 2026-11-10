---
title: "SDLContext.RawApi — Method: GetFullscreenDisplayModes"
description: "Exact Method: GetFullscreenDisplayModes contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4b1d171edd9fa050
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetFullscreenDisplayModes

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetFullscreenDisplayModes`

<a id="api-704c2132e4ef7a3e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetFullscreenDisplayModes(System.UInt32,System.Int32*) 58bcc23b0d6a99de29cb700852a9f5bd6558d03c50521ce2b00187e8566be6e2 -->

```csharp
public Inno.Native.Sdl3.SDLDisplayMode** Inno.Native.Sdl3.SDLContext.RawApi.GetFullscreenDisplayModes(uint displayID, int* count)
```

Get a list of fullscreen display modes available on a display.
The display modes are sorted in this priority:
- w -> largest to smallest
- h -> largest to smallest
- bits per pixel -> more colors to fewer colors
- packed pixel layout -> largest to smallest
- refresh rate -> highest to lowest
- pixel density -> lowest to highest

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Parameter `count`:** a pointer filled in with the number of display modes returned,
may be NULL.

**Returns:** a NULL terminated array of display mode pointers or NULL on
failure; call SDL_GetError() for more information. This is a
single allocation that should be freed with SDL_free() when it is
no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26547).
