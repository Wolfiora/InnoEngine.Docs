---
title: "SDLContext.RawApi — Method: GetHapticFromId"
description: "Exact Method: GetHapticFromId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d781a45843b6be72
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetHapticFromId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetHapticFromId`

<a id="api-b8f3fe3fed949e02"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetHapticFromId(System.UInt32) 2628d868996b5f4377cc008d73919f16876ead2e618017a4255093af30c2b907 -->

```csharp
public Inno.Native.Sdl3.SDLHaptic* Inno.Native.Sdl3.SDLContext.RawApi.GetHapticFromId(uint instance_id)
```

Get the SDL_Haptic associated with an instance ID, if it has been opened.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the instance ID to get the SDL_Haptic for.

**Returns:** an SDL_Haptic on success or NULL on failure or if it hasn't been
opened yet; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49771).
