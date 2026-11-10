---
title: "SDLContext.RawApi — Method: GetJoysticks"
description: "Exact Method: GetJoysticks contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ea092374676ca737
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoysticks

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoysticks`

<a id="api-b6a4b8c4616b8c47"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoysticks(System.Int32*) f8d37741f100b2fa4dba8d0cd6d2440e01804c10ebd7152dc2e9aec279f7e89c -->

```csharp
public uint* Inno.Native.Sdl3.SDLContext.RawApi.GetJoysticks(int* count)
```

Get a list of currently connected joysticks.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasJoystick

**See also:** SDL_OpenJoystick

**Parameter `count`:** a pointer filled in with the number of joysticks returned, may
be NULL.

**Returns:** a 0 terminated array of joystick instance IDs or NULL on failure;
call SDL_GetError() for more information. This should be freed
with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19828).
