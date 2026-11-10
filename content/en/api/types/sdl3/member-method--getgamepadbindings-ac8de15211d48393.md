---
title: "SDLContext.RawApi — Method: GetGamepadBindings"
description: "Exact Method: GetGamepadBindings contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ac8de15211d48393
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadBindings

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadBindings`

<a id="api-4943572742b7f333"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadBindings(Inno.Native.Sdl3.SDLGamepad*,System.Int32*) ca5e9219a6fd90b71f40fc8fc58a16050b837c2f2646aac5f3e7f7fd3e4522f5 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadBinding** Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadBindings(Inno.Native.Sdl3.SDLGamepad* gamepad, int* count)
```

Get the SDL joystick layer bindings for a gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** a gamepad.

**Parameter `count`:** a pointer filled in with the number of bindings returned.

**Returns:** a NULL terminated array of pointers to bindings or NULL on
failure; call SDL_GetError() for more information. This is a
single allocation that should be freed with SDL_free() when it is
no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32184).
