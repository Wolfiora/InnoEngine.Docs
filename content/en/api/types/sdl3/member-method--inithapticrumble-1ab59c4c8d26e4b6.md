---
title: "SDLContext.RawApi — Method: InitHapticRumble"
description: "Exact Method: InitHapticRumble contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1ab59c4c8d26e4b6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: InitHapticRumble

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InitHapticRumble`

<a id="api-a49eb0d3d9047d43"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.InitHapticRumble(Inno.Native.Sdl3.SDLHaptic*) d4827575e79bbd923caf63d012c4e6f6ce4d0c78274e502ecb9555041753ecbf -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.InitHapticRumble(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Initialize a haptic device for simple rumble playback.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PlayHapticRumble

**See also:** SDL_StopHapticRumble

**See also:** SDL_HapticRumbleSupported

**Parameter `haptic`:** the haptic device to initialize for simple rumble playback.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50853).
