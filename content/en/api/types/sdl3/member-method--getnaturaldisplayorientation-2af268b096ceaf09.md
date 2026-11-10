---
title: "SDLContext — Method: GetNaturalDisplayOrientation"
description: "Exact Method: GetNaturalDisplayOrientation contracts in SDLContext."
uid: api.inno.native.sdl3.2af268b096ceaf09
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetNaturalDisplayOrientation

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNaturalDisplayOrientation`

<a id="api-8a5c52624e1a0ca9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetNaturalDisplayOrientation(System.UInt32) e6cf351732adc8ff9211250663d408af817814d8f634cb833fb4770fdef6c3bc -->

```csharp
public Inno.Native.Sdl3.SDLDisplayOrientation Inno.Native.Sdl3.SDLContext.GetNaturalDisplayOrientation(uint displayID)
```

Get the orientation of a display when it is unrotated.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** the SDL_DisplayOrientation enum value of the display, or
`SDL_ORIENTATION_UNKNOWN` if it isn't available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14331).
