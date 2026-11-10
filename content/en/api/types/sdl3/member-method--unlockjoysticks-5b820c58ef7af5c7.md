---
title: "SDL — Method: UnlockJoysticks"
description: "Exact Method: UnlockJoysticks contracts in SDL."
uid: api.inno.native.sdl3.5b820c58ef7af5c7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: UnlockJoysticks

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockJoysticks`

<a id="api-9f9566bf8566048d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.UnlockJoysticks d8b40a41412a058542fad3c90e2bf1e804a927a5f8800e4574cae4a9cfd26076 -->

```csharp
public static void Inno.Native.Sdl3.SDL.UnlockJoysticks()
```

Unlocking for atomic access to the joystick API.

**Thread safety:** This should be called from the same thread that called
SDL_LockJoysticks().

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2957).
