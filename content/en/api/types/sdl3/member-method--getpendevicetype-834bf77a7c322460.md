---
title: "SDLContext — Method: GetPenDeviceType"
description: "Exact Method: GetPenDeviceType contracts in SDLContext."
uid: api.inno.native.sdl3.834bf77a7c322460
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetPenDeviceType

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPenDeviceType`

<a id="api-be5317fa1efdf596"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetPenDeviceType(System.UInt32) c0fc07d2fab800261185675bfa3933718283f0ed7f53b636be7deb901fee2139 -->

```csharp
public Inno.Native.Sdl3.SDLPenDeviceType Inno.Native.Sdl3.SDLContext.GetPenDeviceType(uint instance_id)
```

Get the device type of the given pen.
Many platforms do not supply this information, so an app must always be
prepared to get an SDL_PEN_DEVICE_TYPE_UNKNOWN result.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `instance_id`:** the pen instance ID.

**Returns:** the device type of the given pen, or SDL_PEN_DEVICE_TYPE_INVALID
on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16325).
