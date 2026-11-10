---
title: "SDL — Method: IsMouseHaptic"
description: "Exact Method: IsMouseHaptic contracts in SDL."
uid: api.inno.native.sdl3.af247c0c67832c9b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: IsMouseHaptic

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsMouseHaptic`

<a id="api-1b91b0ab266f5304"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.IsMouseHaptic bf2e5bd1938c0ae52936c96758ef5d8a335a0a5664656230f46b66da666d5ec6 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.IsMouseHaptic()
```

Query whether or not the current mouse has haptic capabilities.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenHapticFromMouse

**Returns:** true if the mouse is haptic or false if it isn't.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L848).
