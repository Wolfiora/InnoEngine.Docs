---
title: "SDLContext.RawApi — Method: StopHapticRumble"
description: "Exact Method: StopHapticRumble contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.50eb04f2ca88626e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StopHapticRumble

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StopHapticRumble`

<a id="api-19b7c23e7d5af000"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StopHapticRumble(Inno.Native.Sdl3.SDLHaptic*) 0d41edf9938017b0eadc6bb2f24ce8faf94b2232dc19ee1afa7d9435ef02eb08 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.StopHapticRumble(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Stop the simple rumble on a haptic device.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_PlayHapticRumble

**Parameter `haptic`:** the haptic device to stop the rumble effect on.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39447).
