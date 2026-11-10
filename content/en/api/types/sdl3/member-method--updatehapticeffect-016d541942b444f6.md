---
title: "SDLContext.RawApi — Method: UpdateHapticEffect"
description: "Exact Method: UpdateHapticEffect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.016d541942b444f6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UpdateHapticEffect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateHapticEffect`

<a id="api-68f13c90b5a18595"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UpdateHapticEffect(Inno.Native.Sdl3.SDLHaptic*,System.Int32,Inno.Native.Sdl3.SDLHapticEffect*) 2373106bf30e06129e7bc9af7274626dd6d73321c74822fd5d598a5c0a9746ab -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.UpdateHapticEffect(Inno.Native.Sdl3.SDLHaptic* haptic, int effect, Inno.Native.Sdl3.SDLHapticEffect* data)
```

Update the properties of an effect.
Can be used dynamically, although behavior when dynamically changing
direction may be strange. Specifically the effect may re-upload itself and
start playing from the start. You also cannot change the type either when
running SDL_UpdateHapticEffect().

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateHapticEffect

**See also:** SDL_RunHapticEffect

**Parameter `haptic`:** the SDL_Haptic device that has the effect.

**Parameter `effect`:** the identifier of the effect to update.

**Parameter `data`:** an SDL_HapticEffect structure containing the new effect
properties to use.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47437).
