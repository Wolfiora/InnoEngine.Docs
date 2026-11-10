---
title: "SDLContext.RawApi — Method: CreateHapticEffect"
description: "Exact Method: CreateHapticEffect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.607ca423ef68c81e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateHapticEffect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateHapticEffect`

<a id="api-7524addca270eff2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateHapticEffect(Inno.Native.Sdl3.SDLHaptic*,Inno.Native.Sdl3.SDLHapticEffect*) efa3ab03e0a8db919b6ad719710da63e42fa0399e6b4e8718accd1baab8e38db -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.CreateHapticEffect(Inno.Native.Sdl3.SDLHaptic* haptic, Inno.Native.Sdl3.SDLHapticEffect* effect)
```

Create a new haptic effect on a specified device.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyHapticEffect

**See also:** SDL_RunHapticEffect

**See also:** SDL_UpdateHapticEffect

**Parameter `haptic`:** an SDL_Haptic device to create the effect on.

**Parameter `effect`:** an SDL_HapticEffect structure containing the properties of
the effect to create.

**Returns:** the ID of the effect on success or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19547).
