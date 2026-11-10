---
title: "SDLContext.RawApi — Method: GetMaxHapticEffects"
description: "Exact Method: GetMaxHapticEffects contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2c9c4479177d5736
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetMaxHapticEffects

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetMaxHapticEffects`

<a id="api-2f2b9d541b42b5da"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetMaxHapticEffects(Inno.Native.Sdl3.SDLHaptic*) 9974feecd4ffcae317619c852561f0765a06970951edbb0ef641c981991dc1dc -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetMaxHapticEffects(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Get the number of effects a haptic device can store.
On some platforms this isn't fully supported, and therefore is an
approximation. Always check to see if your created effect was actually
created and do not rely solely on SDL_GetMaxHapticEffects().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetMaxHapticEffectsPlaying

**See also:** SDL_GetHapticFeatures

**Parameter `haptic`:** the SDL_Haptic device to query.

**Returns:** the number of effects the haptic device can store or a negative
error code on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40596).
