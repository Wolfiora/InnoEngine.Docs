---
title: "SDLContext.RawApi — Method: GetMaxHapticEffectsPlaying"
description: "Exact Method: GetMaxHapticEffectsPlaying contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7473c746b97d6cd2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetMaxHapticEffectsPlaying

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetMaxHapticEffectsPlaying`

<a id="api-7b7c1d730ee8cf26"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetMaxHapticEffectsPlaying(Inno.Native.Sdl3.SDLHaptic*) dd2eca306163d0bc1a66e40088f973e34a56a5049a4e368a76b690222820b989 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetMaxHapticEffectsPlaying(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Get the number of effects a haptic device can play at the same time.
This is not supported on all platforms, but will always return a value.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetMaxHapticEffects

**See also:** SDL_GetHapticFeatures

**Parameter `haptic`:** the SDL_Haptic device to query maximum playing effects.

**Returns:** the number of effects the haptic device can play at the same time
or -1 on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52513).
