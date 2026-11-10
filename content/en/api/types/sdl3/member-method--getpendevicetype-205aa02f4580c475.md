---
title: "SDL — Method: GetPenDeviceType"
description: "Exact Method: GetPenDeviceType contracts in SDL."
uid: api.inno.native.sdl3.205aa02f4580c475
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetPenDeviceType

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPenDeviceType`

<a id="api-b2a4aec597d6b608"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetPenDeviceType(System.UInt32) 666c4573bc6a544f10e129f5a7ea984c506aa43d0d737aa12a9abd0b3105f9a7 -->

```csharp
public static Inno.Native.Sdl3.SDLPenDeviceType Inno.Native.Sdl3.SDL.GetPenDeviceType(uint instance_id)
```

Get the device type of the given pen.
Many platforms do not supply this information, so an app must always be
prepared to get an SDL_PEN_DEVICE_TYPE_UNKNOWN result.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `instance_id`:** the pen instance ID.

**Returns:** the device type of the given pen, or SDL_PEN_DEVICE_TYPE_INVALID
on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4088).
