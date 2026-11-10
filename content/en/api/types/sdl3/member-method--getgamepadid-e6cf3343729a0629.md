---
title: "SDLContext.RawApi — Method: GetGamepadId"
description: "Exact Method: GetGamepadId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e6cf3343729a0629
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadId`

<a id="api-dd873181e31cc403"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadId(Inno.Native.Sdl3.SDLGamepad*) 27f845b0d19d388acb74f931f517a35f090fb7541ec4b63e5521f705105d879f -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadId(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the instance ID of an opened gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** a gamepad identifier previously returned by
SDL_OpenGamepad().

**Returns:** the instance ID of the specified gamepad on success or 0 on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24214).
