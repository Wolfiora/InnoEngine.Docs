---
title: "SDLContext.RawApi — Method: GetJoystickPlayerIndexForId"
description: "Exact Method: GetJoystickPlayerIndexForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ae087c8e9efd05b1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickPlayerIndexForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickPlayerIndexForId`

<a id="api-5c8ebfe21160a950"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickPlayerIndexForId(System.UInt32) 3b41e3c8e7172ede144393127223553367ab5defb09a73b2ca72e04a5fff9efd -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickPlayerIndexForId(uint instance_id)
```

Get the player index of a joystick.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickPlayerIndex

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the player index of a joystick, or -1 if it's not available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24982).
