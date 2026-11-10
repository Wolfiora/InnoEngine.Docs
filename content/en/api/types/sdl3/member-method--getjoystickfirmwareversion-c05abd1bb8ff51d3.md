---
title: "SDLContext.RawApi — Method: GetJoystickFirmwareVersion"
description: "Exact Method: GetJoystickFirmwareVersion contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c05abd1bb8ff51d3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickFirmwareVersion

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickFirmwareVersion`

<a id="api-5dd2efea709f0390"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickFirmwareVersion(Inno.Native.Sdl3.SDLJoystick*) fa683c0bc3b02015f7e17626716fab335dca5fdcc0fc82d20edbb44379a67a86 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickFirmwareVersion(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the firmware version of an opened joystick, if available.
If the firmware version isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Returns:** the firmware version of the selected joystick, or 0 if
unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36018).
