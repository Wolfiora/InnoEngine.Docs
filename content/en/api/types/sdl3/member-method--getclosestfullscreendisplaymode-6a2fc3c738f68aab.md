---
title: "SDLContext.RawApi — Method: GetClosestFullscreenDisplayMode"
description: "Exact Method: GetClosestFullscreenDisplayMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6a2fc3c738f68aab
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetClosestFullscreenDisplayMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetClosestFullscreenDisplayMode`

<a id="api-a2a23cfe4723b6ca"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetClosestFullscreenDisplayMode(System.UInt32,System.Int32,System.Int32,System.Single,System.Byte,Inno.Native.Sdl3.SDLDisplayMode*) 4d9297d9db467210ec4641decaa7e762576faf41e545fbf794f6ddadfbf55f6b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetClosestFullscreenDisplayMode(uint displayID, int w, int h, float refresh_rate, byte include_high_density_modes, Inno.Native.Sdl3.SDLDisplayMode* closest)
```

Get the closest match to the requested display mode.
The available display modes are scanned and `closest` is filled in with the
closest mode matching the requested mode and returned. The mode format and
refresh rate default to the desktop mode if they are set to 0. The modes
are scanned with size being first priority, format being second priority,
and finally checking the refresh rate. If all the available modes are too
small, then false is returned.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**See also:** SDL_GetFullscreenDisplayModes

**Parameter `displayID`:** the instance ID of the display to query.

**Parameter `w`:** the width in pixels of the desired display mode.

**Parameter `h`:** the height in pixels of the desired display mode.

**Parameter `refresh_rate`:** the refresh rate of the desired display mode, or 0.0f
for the desktop refresh rate.

**Parameter `include_high_density_modes`:** boolean to include high density modes in
the search.

**Parameter `closest`:** a pointer filled in with the closest display mode equal to
or larger than the desired mode.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23842).
