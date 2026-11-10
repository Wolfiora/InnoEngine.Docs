---
title: "SDLContext.RawApi — Method: GetHapticId"
description: "Exact Method: GetHapticId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f427a2de36705847
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetHapticId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetHapticId`

<a id="api-dacc17cdd5dd4fee"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetHapticId(Inno.Native.Sdl3.SDLHaptic*) 63d416d98e62d76b0a6928b09de8ba560d285fbd409c99cee9ba432245a934a3 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetHapticId(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Get the instance ID of an opened haptic device.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `haptic`:** the SDL_Haptic device to query.

**Returns:** the instance ID of the specified haptic device on success or 0 on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37220).
