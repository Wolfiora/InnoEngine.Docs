---
title: "SDLContext.RawApi — Method: GetHapticNameForId"
description: "Exact Method: GetHapticNameForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0b7aacc801579ccb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetHapticNameForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetHapticNameForId`

<a id="api-721a72a431b6fae2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetHapticNameForId(System.UInt32) 52df55067b13fe4f2cd818a9cb52657ff11c86375326a03de1ecd3e351dbb476 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetHapticNameForId(uint instance_id)
```

Get the implementation dependent name of a haptic device.
This can be called before any haptic devices are opened.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetHapticName

**See also:** SDL_OpenHaptic

**Parameter `instance_id`:** the haptic device instance ID.

**Returns:** the name of the selected haptic device. If no name can be found,
this function returns NULL; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23695).
