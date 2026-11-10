---
title: "SDLContext.RawApi — Method: StopHapticEffect"
description: "Exact Method: StopHapticEffect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.73c14909a30cb603
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StopHapticEffect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StopHapticEffect`

<a id="api-c6b84b77fd781d64"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StopHapticEffect(Inno.Native.Sdl3.SDLHaptic*,System.Int32) e7f25fde7fe9571a88f940ed30bb0af4f03ca6a2c6d50c3001b11865acc8b37f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.StopHapticEffect(Inno.Native.Sdl3.SDLHaptic* haptic, int effect)
```

Stop the haptic effect on its associated haptic device.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RunHapticEffect

**See also:** SDL_StopHapticEffects

**Parameter `haptic`:** the SDL_Haptic device to stop the effect on.

**Parameter `effect`:** the ID of the haptic effect to stop.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46356).
