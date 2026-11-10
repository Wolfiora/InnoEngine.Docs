---
title: "SDLContext.RawApi — Method: HapticEffectSupported"
description: "Exact Method: HapticEffectSupported contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ba313a6d0fdfab69
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HapticEffectSupported

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HapticEffectSupported`

<a id="api-6d2a75c933b69908"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HapticEffectSupported(Inno.Native.Sdl3.SDLHaptic*,Inno.Native.Sdl3.SDLHapticEffect*) e2714972c2e17738c2e808f9545b79ec2a5340ae04d151b2a99bbe5ce51d1017 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HapticEffectSupported(Inno.Native.Sdl3.SDLHaptic* haptic, Inno.Native.Sdl3.SDLHapticEffect* effect)
```

Check to see if an effect is supported by a haptic device.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateHapticEffect

**See also:** SDL_GetHapticFeatures

**Parameter `haptic`:** the SDL_Haptic device to query.

**Parameter `effect`:** the desired effect to query.

**Returns:** true if the effect is supported or false if it isn't.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44892).
