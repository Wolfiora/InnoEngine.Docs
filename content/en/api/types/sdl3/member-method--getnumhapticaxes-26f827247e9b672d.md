---
title: "SDLContext.RawApi — Method: GetNumHapticAxes"
description: "Exact Method: GetNumHapticAxes contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.26f827247e9b672d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumHapticAxes

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumHapticAxes`

<a id="api-4e94dbb68dd2afb8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumHapticAxes(Inno.Native.Sdl3.SDLHaptic*) e8a6fc40192f15e8e1d93363b3f8ae63b0af20359c8e4fae8eb7e46876b58691 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumHapticAxes(Inno.Native.Sdl3.SDLHaptic* haptic)
```

Get the number of haptic axes the device has.
The number of haptic axes might be useful if working with the
SDL_HapticDirection effect.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `haptic`:** the SDL_Haptic device to query.

**Returns:** the number of axes on success or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48722).
