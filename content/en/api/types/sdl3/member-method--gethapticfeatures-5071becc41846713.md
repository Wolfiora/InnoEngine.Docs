---
title: "SDLContext.RawApi — Method: GetHapticFeatures"
description: "Exact Method: GetHapticFeatures contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5071becc41846713
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetHapticFeatures

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetHapticFeatures`

<a id="api-edb8eb9da133eca3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetHapticFeatures(Inno.Native.Sdl3.SDLHaptic*) 341e3bfd3b9b821f316cc0b3ca79edaabd0d9b8f42a87a7e8f5afff91a92195a -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetHapticFeatures(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Get the haptic device's supported features in bitwise manner.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HapticEffectSupported

**See also:** SDL_GetMaxHapticEffects

**Parameter `haptic`:** the SDL_Haptic device to query.

**Returns:** a list of supported haptic features in bitwise manner (OR'd), or 0
on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49863).
