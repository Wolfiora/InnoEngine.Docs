---
title: "SDLContext.RawApi — Method: PlayHapticRumble"
description: "Exact Method: PlayHapticRumble contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3da4d0b4bb26633d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: PlayHapticRumble

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PlayHapticRumble`

<a id="api-1ad73e14f63c17ca"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.PlayHapticRumble(Inno.Native.Sdl3.SDLHaptic*,System.Single,System.UInt32) dc70ee29dedd2a54a3260792469c130b50b1bdab3bc0a72f3cdcee577a20ba39 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.PlayHapticRumble(Inno.Native.Sdl3.SDLHaptic* haptic, float strength, uint length)
```

Run a simple rumble effect on a haptic device.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_InitHapticRumble

**See also:** SDL_StopHapticRumble

**Parameter `haptic`:** the haptic device to play the rumble effect on.

**Parameter `strength`:** strength of the rumble to play as a 0-1 float value.

**Parameter `length`:** length of the rumble to play in milliseconds.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39062).
