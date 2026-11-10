---
title: "SDLContext — Method: GetTouchDeviceType"
description: "Exact Method: GetTouchDeviceType contracts in SDLContext."
uid: api.inno.native.sdl3.4b5f44bcce5bd532
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetTouchDeviceType

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTouchDeviceType`

<a id="api-f40d8ea9616dcac1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetTouchDeviceType(System.UInt64) 2ac70ca10289ce1b8068940cc6a9411c7eba62d015391551b33f78118bfcfcd6 -->

```csharp
public Inno.Native.Sdl3.SDLTouchDeviceType Inno.Native.Sdl3.SDLContext.GetTouchDeviceType(ulong touchID)
```

Get the type of the given touch device.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `touchID`:** the ID of a touch device.

**Returns:** touch device type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13284).
