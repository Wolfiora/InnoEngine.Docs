---
title: "SDLContext.RawApi — Method: GetJoystickSerial"
description: "Exact Method: GetJoystickSerial contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b0b4d14b1c182992
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickSerial

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickSerial`

<a id="api-5ee51aa24c9a3467"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickSerial(Inno.Native.Sdl3.SDLJoystick*) 3c6e97e40d41e6c14ac2940886cd56be985d13283c57957eccb8c87db4117988 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickSerial(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the serial number of an opened joystick, if available.
Returns the serial number of the joystick, or NULL if it is not available.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Returns:** the serial number of the selected joystick, or NULL if
unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18157).
