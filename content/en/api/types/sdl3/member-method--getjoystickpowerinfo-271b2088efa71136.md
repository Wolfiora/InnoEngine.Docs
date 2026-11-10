---
title: "SDLContext.RawApi — Method: GetJoystickPowerInfo"
description: "Exact Method: GetJoystickPowerInfo contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.271b2088efa71136
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickPowerInfo

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickPowerInfo`

<a id="api-708e774d6c7b0e41"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickPowerInfo(Inno.Native.Sdl3.SDLJoystick*,System.Int32*) e205c25569b84ba479498f4bcb678066de6df992183f3d236ad8076f781ae8b8 -->

```csharp
public Inno.Native.Sdl3.SDLPowerState Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickPowerInfo(Inno.Native.Sdl3.SDLJoystick* joystick, int* percent)
```

Get the battery state of a joystick.
You should never take a battery status as absolute truth. Batteries
(especially failing batteries) are delicate hardware, and the values
reported here are best estimates based on what that hardware reports. It's
not uncommon for older batteries to lose stored power much faster than it
reports, or completely drain when reporting it has 20 percent left, etc.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** the joystick to query.

**Parameter `percent`:** a pointer filled in with the percentage of battery life
left, between 0 and 100, or NULL to ignore. This will be
filled in with -1 we can't determine a value or there is no
battery.

**Returns:** the current battery state or `SDL_POWERSTATE_ERROR` on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27337).
