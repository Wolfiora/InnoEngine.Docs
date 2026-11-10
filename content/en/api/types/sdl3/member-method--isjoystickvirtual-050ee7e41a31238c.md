---
title: "SDLContext.RawApi — Method: IsJoystickVirtual"
description: "Exact Method: IsJoystickVirtual contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.050ee7e41a31238c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IsJoystickVirtual

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsJoystickVirtual`

<a id="api-bcbc31aab625fc1d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IsJoystickVirtual(System.UInt32) 216640c7d279427d9fe9fccb586da3dc3e456d107538b622ac4bffa36c7739aa -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.IsJoystickVirtual(uint instance_id)
```

Query whether or not a joystick is virtual.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** true if the joystick is virtual, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49996).
