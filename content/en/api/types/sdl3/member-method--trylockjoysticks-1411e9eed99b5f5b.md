---
title: "SDLContext.RawApi — Method: TryLockJoysticks"
description: "Exact Method: TryLockJoysticks contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1411e9eed99b5f5b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TryLockJoysticks

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TryLockJoysticks`

<a id="api-5214741654990edc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TryLockJoysticks 58b9f6675109ee64bc95a8d5f5477c10434754c411fd9997f505715d01be06cc -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.TryLockJoysticks()
```

Locking for atomic access to the joystick API.
The SDL joystick functions are thread-safe, however you can lock the
joysticks while processing to guarantee that the joystick list won't change
and joystick and gamepad events will not be delivered.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.6.0.

**Returns:** true if the joysticks were successfully locked, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34313).
