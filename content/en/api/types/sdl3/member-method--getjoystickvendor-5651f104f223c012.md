---
title: "SDLContext.RawApi — Method: GetJoystickVendor"
description: "Exact Method: GetJoystickVendor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5651f104f223c012
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickVendor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickVendor`

<a id="api-6aaba293e56b1b1f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickVendor(Inno.Native.Sdl3.SDLJoystick*) 45972fd9a92c524752b3399f1c6c782421c294e34d4897b594dcba04f28c15a9 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickVendor(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the USB vendor ID of an opened joystick, if available.
If the vendor ID isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickVendorForID

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Returns:** the USB vendor ID of the selected joystick, or 0 if unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44369).
