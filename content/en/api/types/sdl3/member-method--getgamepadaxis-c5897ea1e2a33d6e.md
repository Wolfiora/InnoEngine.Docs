---
title: "SDLContext.RawApi — Method: GetGamepadAxis"
description: "Exact Method: GetGamepadAxis contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c5897ea1e2a33d6e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadAxis

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadAxis`

<a id="api-24e0336fea1589b3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadAxis(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLGamepadAxis) 07aac59478364e7b3661a02febfe627fa9f3d5922e54b8049a05eae2c2f57200 -->

```csharp
public short Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadAxis(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLGamepadAxis axis)
```

Get the current state of an axis control on a gamepad.
The axis indices start at index 0.
For thumbsticks, the state is a value ranging from -32768 (up/left) to
32767 (down/right).
Triggers range from 0 when released to 32767 when fully pressed, and never
return a negative value. Note that this differs from the value reported by
the lower-level SDL_GetJoystickAxis(), which normally uses the full range.
Note that for invalid gamepads or axes, this will return 0. Zero is also a
valid value in normal operation; usually it means a centered axis.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GamepadHasAxis

**See also:** SDL_GetGamepadButton

**Parameter `gamepad`:** a gamepad.

**Parameter `axis`:** an axis index (one of the SDL_GamepadAxis values).

**Returns:** axis state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23351).
