---
title: "SDLContext.RawApi — Method: GetNumGamepadTouchpadFingers"
description: "Exact Method: GetNumGamepadTouchpadFingers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a080d2ba1b27c294
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumGamepadTouchpadFingers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumGamepadTouchpadFingers`

<a id="api-1e94a60899ddfb8b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumGamepadTouchpadFingers(Inno.Native.Sdl3.SDLGamepad*,System.Int32) ec430b6328a2abfd9e544b709a75917f8f03dd9b947bb629e5471f5e3a4832a7 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumGamepadTouchpadFingers(Inno.Native.Sdl3.SDLGamepad* gamepad, int touchpad)
```

Get the number of supported simultaneous fingers on a touchpad on a game
gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadTouchpadFinger

**See also:** SDL_GetNumGamepadTouchpads

**Parameter `gamepad`:** a gamepad.

**Parameter `touchpad`:** a touchpad.

**Returns:** number of supported simultaneous fingers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40621).
