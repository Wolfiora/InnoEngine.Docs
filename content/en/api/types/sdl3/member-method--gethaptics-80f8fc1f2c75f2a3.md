---
title: "SDLContext.RawApi — Method: GetHaptics"
description: "Exact Method: GetHaptics contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.80f8fc1f2c75f2a3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetHaptics

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetHaptics`

<a id="api-3a04ebaf19c91a4f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetHaptics(System.Int32*) 2a57c5b5956591f0b3edbbb00bd12e040daca55439129ee9fae1ab2839121854 -->

```csharp
public uint* Inno.Native.Sdl3.SDLContext.RawApi.GetHaptics(int* count)
```

Get a list of currently connected haptic devices.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenHaptic

**Parameter `count`:** a pointer filled in with the number of haptic devices
returned, may be NULL.

**Returns:** a 0 terminated array of haptic device instance IDs or NULL on
failure; call SDL_GetError() for more information. This should be
freed with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47555).
