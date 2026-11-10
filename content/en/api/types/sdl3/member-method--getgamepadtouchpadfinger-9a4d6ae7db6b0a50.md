---
title: "SDLContext.RawApi — Method: GetGamepadTouchpadFinger"
description: "Exact Method: GetGamepadTouchpadFinger contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9a4d6ae7db6b0a50
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadTouchpadFinger

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadTouchpadFinger`

<a id="api-66d424d59dad25b9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadTouchpadFinger(Inno.Native.Sdl3.SDLGamepad*,System.Int32,System.Int32,System.Byte*,System.Single*,System.Single*,System.Single*) 85d5937ae0d55c908aa4cbabb575a3a9ab8bcb5b9b2f5f63dbdd6e572d59be2e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadTouchpadFinger(Inno.Native.Sdl3.SDLGamepad* gamepad, int touchpad, int finger, byte* down, float* x, float* y, float* pressure)
```

Get the current state of a finger on a touchpad on a gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumGamepadTouchpadFingers

**Parameter `gamepad`:** a gamepad.

**Parameter `touchpad`:** a touchpad.

**Parameter `finger`:** a finger.

**Parameter `down`:** a pointer filled with true if the finger is down, false
otherwise, may be NULL.

**Parameter `x`:** a pointer filled with the x position, normalized 0 to 1, with the
origin in the upper left, may be NULL.

**Parameter `y`:** a pointer filled with the y position, normalized 0 to 1, with the
origin in the upper left, may be NULL.

**Parameter `pressure`:** a pointer filled with pressure value, may be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43356).
