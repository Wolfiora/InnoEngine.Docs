---
title: "SDLContext.RawApi — Method: GetJoystickBall"
description: "Exact Method: GetJoystickBall contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.20efddb84c6a024e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickBall

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickBall`

<a id="api-63738c77380ba87e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickBall(Inno.Native.Sdl3.SDLJoystick*,System.Int32,System.Int32*,System.Int32*) 9a618759bb23c7a74a01f1e87a540e873f91136610b7fc45e332d3b65acdd2ec -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickBall(Inno.Native.Sdl3.SDLJoystick* joystick, int ball, int* dx, int* dy)
```

Get the ball axis change since the last poll.
Trackballs can only return relative motion since the last call to
SDL_GetJoystickBall(), these motion deltas are placed into `dx` and `dy`.
Most joysticks do not have trackballs.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumJoystickBalls

**Parameter `joystick`:** the SDL_Joystick to query.

**Parameter `ball`:** the ball index to query; ball indices start at index 0.

**Parameter `dx`:** stores the difference in the x axis position since the last poll.

**Parameter `dy`:** stores the difference in the y axis position since the last poll.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18736).
