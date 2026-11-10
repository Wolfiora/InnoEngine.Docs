---
title: "SDLContext.RawApi — Method: LockJoysticks"
description: "Exact Method: LockJoysticks contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.30b9667e053f7b55
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LockJoysticks

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockJoysticks`

<a id="api-fc24b3c0da7bf027"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LockJoysticks a4951373502ce58f8714e47110ea08d245a700138de2f0817328c4cf8c5c8f41 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.LockJoysticks()
```

Locking for atomic access to the joystick API.
The SDL joystick functions are thread-safe, however you can lock the
joysticks while processing to guarantee that the joystick list won't change
and joystick and gamepad events will not be delivered.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19844).
