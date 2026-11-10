---
title: "SDL — Method: ScreenSaverEnabled"
description: "Exact Method: ScreenSaverEnabled contracts in SDL."
uid: api.inno.native.sdl3.751b45351ecd972b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: ScreenSaverEnabled

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ScreenSaverEnabled`

<a id="api-1c081d999633a52e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.ScreenSaverEnabled cba84c27e44d7d509ee9ef2dd3133587aabd4cf4cf350061d70111c1b2ffdd3b -->

```csharp
public static bool Inno.Native.Sdl3.SDL.ScreenSaverEnabled()
```

Check whether the screensaver is currently enabled.
The screensaver is disabled by default.
The default can also be changed using `SDL_HINT_VIDEO_ALLOW_SCREENSAVER`.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DisableScreenSaver

**See also:** SDL_EnableScreenSaver

**Returns:** true if the screensaver is enabled, false if it is disabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3145).
