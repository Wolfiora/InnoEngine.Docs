---
title: "SDL — Method: GetTouchDeviceType"
description: "Exact Method: GetTouchDeviceType contracts in SDL."
uid: api.inno.native.sdl3.690e9f5a5b5e122b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetTouchDeviceType

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTouchDeviceType`

<a id="api-6e6dc1ea5e28c573"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetTouchDeviceType(System.UInt64) f8be29f152620229716867602a097d51bc1537a56d13d603934032dfd824dfb6 -->

```csharp
public static Inno.Native.Sdl3.SDLTouchDeviceType Inno.Native.Sdl3.SDL.GetTouchDeviceType(ulong touchID)
```

Get the type of the given touch device.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `touchID`:** the ID of a touch device.

**Returns:** touch device type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1599).
