---
title: "SDL — Method: HasGamepad"
description: "Exact Method: HasGamepad contracts in SDL."
uid: api.inno.native.sdl3.797ed690e32e2d62
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasGamepad

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasGamepad`

<a id="api-0a48685d50b090d3"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasGamepad 3c5a1ead7f337101a8a0e9afd08382eb3c1d66268624c721b0649ac6919c2d9c -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasGamepad()
```

Return whether a gamepad is currently connected.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepads

**Returns:** true if a gamepad is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1685).
