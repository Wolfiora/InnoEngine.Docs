---
title: "SDL — Method: UpdateJoysticks"
description: "Exact Method: UpdateJoysticks contracts in SDL."
uid: api.inno.native.sdl3.d1195558c663cad9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: UpdateJoysticks

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateJoysticks`

<a id="api-9fcb176726ab02a6"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.UpdateJoysticks 07d13bdddd8ff3c0e350a60e1c3b8a0a160e8cdebeb3911b3a79fe7bfa0553c8 -->

```csharp
public static void Inno.Native.Sdl3.SDL.UpdateJoysticks()
```

Update the current state of the open joysticks.
This is called automatically by the event loop if any joystick events are
enabled and SDL_HINT_AUTO_UPDATE_JOYSTICKS hasn't been set to "0".

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4096).
