---
title: "SDLContext.RawApi — Method: RunHapticEffect"
description: "Exact Method: RunHapticEffect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.360b14d76d52b987
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RunHapticEffect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RunHapticEffect`

<a id="api-3cefe5351fa47f75"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RunHapticEffect(Inno.Native.Sdl3.SDLHaptic*,System.Int32,System.UInt32) 5068ed23a10a0758f343a24467e843255eb8f0ddfdc3e0b71992d931e0a1e694 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RunHapticEffect(Inno.Native.Sdl3.SDLHaptic* haptic, int effect, uint iterations)
```

Run the haptic effect on its associated haptic device.
To repeat the effect over and over indefinitely, set `iterations` to
`SDL_HAPTIC_INFINITY`. (Repeats the envelope - attack and fade.) To make
one instance of the effect last indefinitely (so the effect does not fade),
set the effect's `length` in its structure/union to `SDL_HAPTIC_INFINITY`
instead.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetHapticEffectStatus

**See also:** SDL_StopHapticEffect

**See also:** SDL_StopHapticEffects

**Parameter `haptic`:** the SDL_Haptic device to run the effect on.

**Parameter `effect`:** the ID of the haptic effect to run.

**Parameter `iterations`:** the number of iterations to run the effect; use
`SDL_HAPTIC_INFINITY` to repeat forever.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28882).
