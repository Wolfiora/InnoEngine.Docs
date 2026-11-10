---
title: "SDLContext.RawApi — Method: SetHapticGain"
description: "Exact Method: SetHapticGain contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2adfb10d96dec55d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetHapticGain

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetHapticGain`

<a id="api-7366039861720e78"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetHapticGain(Inno.Native.Sdl3.SDLHaptic*,System.Int32) dd12b39321015cd35e65ce4be36b4f5cbfc3f87044e50dc9895ec1b35caf7a31 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetHapticGain(Inno.Native.Sdl3.SDLHaptic* haptic, int gain)
```

Set the global gain of the specified haptic device.
Device must support the SDL_HAPTIC_GAIN feature.
The user may specify the maximum gain by setting the environment variable
`SDL_HAPTIC_GAIN_MAX` which should be between 0 and 100. All calls to
SDL_SetHapticGain() will scale linearly using `SDL_HAPTIC_GAIN_MAX` as the
maximum.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetHapticFeatures

**Parameter `haptic`:** the SDL_Haptic device to set the gain on.

**Parameter `gain`:** value to set the gain to, should be between 0 and 100 (0 -
100).

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17990).
