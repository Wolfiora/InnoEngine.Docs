---
title: "SDLContext — Method: LockJoysticks"
description: "Exact Method: LockJoysticks contracts in SDLContext."
uid: api.inno.native.sdl3.02bc0ffedf804f54
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: LockJoysticks

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockJoysticks`

<a id="api-38058a0ea7ce54ef"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.LockJoysticks 8a55f2add95817ec812748962f38df52259a4213966f128868ebd6f43d32e631 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.LockJoysticks()
```

Locking for atomic access to the joystick API.
The SDL joystick functions are thread-safe, however you can lock the
joysticks while processing to guarantee that the joystick list won't change
and joystick and gamepad events will not be delivered.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11991).
