---
title: "SDLContext.RawApi — Method: GetHapticEffectStatus"
description: "Exact Method: GetHapticEffectStatus contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c9c70fd21147e8b9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetHapticEffectStatus

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetHapticEffectStatus`

<a id="api-683b83cca5312fe2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetHapticEffectStatus(Inno.Native.Sdl3.SDLHaptic*,System.Int32) 2e5e839ecae90cd106e25eee4606703b56f0852500af7f65e184414599402d65 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetHapticEffectStatus(Inno.Native.Sdl3.SDLHaptic* haptic, int effect)
```

Get the status of the current effect on the specified haptic device.
Device must support the SDL_HAPTIC_STATUS feature.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetHapticFeatures

**Parameter `haptic`:** the SDL_Haptic device to query for the effect status on.

**Parameter `effect`:** the ID of the haptic effect to query its status.

**Returns:** true if it is playing, false if it isn't playing or haptic status
isn't supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52214).
