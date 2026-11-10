---
title: "SDLContext.RawApi — Method: CloseJoystick"
description: "Exact Method: CloseJoystick contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c28c663ecbd1e45d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CloseJoystick

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CloseJoystick`

<a id="api-424b7a16a0d318df"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CloseJoystick(Inno.Native.Sdl3.SDLJoystick*) ba81803e252bb6f79528bbde5e973ef744146f7872542b2bf046770ad9bdb886 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.CloseJoystick(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Close a joystick previously opened with SDL_OpenJoystick().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenJoystick

**Parameter `joystick`:** the joystick device to close.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32377).
