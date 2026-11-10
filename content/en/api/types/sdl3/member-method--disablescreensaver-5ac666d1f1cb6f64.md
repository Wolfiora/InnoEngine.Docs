---
title: "SDL — Method: DisableScreenSaver"
description: "Exact Method: DisableScreenSaver contracts in SDL."
uid: api.inno.native.sdl3.5ac666d1f1cb6f64
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: DisableScreenSaver

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DisableScreenSaver`

<a id="api-1d94910957590b42"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.DisableScreenSaver 171e764f69a2ad364838fcf19f21608a925924af54ff9435962dd518b45ea813 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.DisableScreenSaver()
```

Prevent the screen from being blanked by a screen saver.
If you disable the screensaver, it is automatically re-enabled when SDL
quits.
The screensaver is disabled by default, but this may by changed by
SDL_HINT_VIDEO_ALLOW_SCREENSAVER.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_EnableScreenSaver

**See also:** SDL_ScreenSaverEnabled

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L593).
