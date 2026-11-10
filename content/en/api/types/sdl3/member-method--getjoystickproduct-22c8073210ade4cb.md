---
title: "SDLContext.RawApi — Method: GetJoystickProduct"
description: "Exact Method: GetJoystickProduct contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.22c8073210ade4cb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickProduct

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickProduct`

<a id="api-93f4412172a87062"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickProduct(Inno.Native.Sdl3.SDLJoystick*) 893e2e10454b678de5fac9c5ba6e0389ab62b8968ad8cd68c3a17924614e579c -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickProduct(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the USB product ID of an opened joystick, if available.
If the product ID isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickProductForID

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Returns:** the USB product ID of the selected joystick, or 0 if unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29288).
