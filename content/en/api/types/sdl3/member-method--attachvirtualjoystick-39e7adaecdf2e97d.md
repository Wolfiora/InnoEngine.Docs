---
title: "SDLContext.RawApi — Method: AttachVirtualJoystick"
description: "Exact Method: AttachVirtualJoystick contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.39e7adaecdf2e97d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AttachVirtualJoystick

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AttachVirtualJoystick`

<a id="api-cbe047e82f58cddf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AttachVirtualJoystick(Inno.Native.Sdl3.SDLVirtualJoystickDesc*) 357aef1aa016f17a3c3f1a7792b1ac5257fc59e9b408b60af865640595e336cc -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.AttachVirtualJoystick(Inno.Native.Sdl3.SDLVirtualJoystickDesc* desc)
```

Attach a new virtual joystick.
Apps can create virtual joysticks, that exist without hardware directly
backing them, and have program-supplied inputs. Once attached, a virtual
joystick looks like any other joystick that SDL can access. These can be
used to make other things look like joysticks, or provide pre-recorded
input, etc.
Once attached, the app can send joystick inputs to the new virtual joystick
using SDL_SetJoystickVirtualAxis(), etc.
When no longer needed, the virtual joystick can be removed by calling
SDL_DetachVirtualJoystick().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DetachVirtualJoystick

**See also:** SDL_SetJoystickVirtualAxis

**See also:** SDL_SetJoystickVirtualButton

**See also:** SDL_SetJoystickVirtualBall

**See also:** SDL_SetJoystickVirtualHat

**See also:** SDL_SetJoystickVirtualTouchpad

**See also:** SDL_SetJoystickVirtualSensorData

**Parameter `desc`:** joystick description, initialized using SDL_INIT_INTERFACE().

**Returns:** the joystick instance ID, or 0 on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32309).
