---
title: "SDLContext.RawApi — Method: IsGamepad"
description: "Exact Method: IsGamepad contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b5602893240ab37e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IsGamepad

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsGamepad`

<a id="api-d4da19e97049b442"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IsGamepad(System.UInt32) f6905a28eb319a52feff0caae89106df0e1b1766f95f0afbcac7bb1329f0d33c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.IsGamepad(uint instance_id)
```

Check if the given joystick is supported by the gamepad interface.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoysticks

**See also:** SDL_OpenGamepad

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** true if the given joystick is supported by the gamepad interface,
false if it isn't or it's an invalid index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38178).
