---
title: "SDLContext.RawApi — Method: OpenHapticFromJoystick"
description: "Exact Method: OpenHapticFromJoystick contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f022dd8d435a9eb8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenHapticFromJoystick

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenHapticFromJoystick`

<a id="api-8e4e1fe2d1bc0748"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenHapticFromJoystick(Inno.Native.Sdl3.SDLJoystick*) 85598592ad1443f0ba3044bb0260fc12dc5074e12d5ea99319ef2962e557c4a9 -->

```csharp
public Inno.Native.Sdl3.SDLHaptic* Inno.Native.Sdl3.SDLContext.RawApi.OpenHapticFromJoystick(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Open a haptic device for use from a joystick device.
You must still close the haptic device separately. It will not be closed
with the joystick.
When opened from a joystick you should first close the haptic device before
closing the joystick device. If not, on some implementations the haptic
device will also get unallocated and you'll be unable to use force feedback
on that device.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CloseHaptic

**See also:** SDL_IsJoystickHaptic

**Parameter `joystick`:** the SDL_Joystick to create a haptic device from.

**Returns:** a valid haptic device identifier on success or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36360).
