---
title: "SDLContext.RawApi — Method: GetTouchDeviceType"
description: "Exact Method: GetTouchDeviceType contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f936368b471945dc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTouchDeviceType

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTouchDeviceType`

<a id="api-7c23203508dc17fa"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTouchDeviceType(System.UInt64) fdf704a8a629398b4842ecd1d19eeccb1727e926e189bd7ea24eedcdd65fd998 -->

```csharp
public Inno.Native.Sdl3.SDLTouchDeviceType Inno.Native.Sdl3.SDLContext.RawApi.GetTouchDeviceType(ulong touchID)
```

Get the type of the given touch device.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `touchID`:** the ID of a touch device.

**Returns:** touch device type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29306).
