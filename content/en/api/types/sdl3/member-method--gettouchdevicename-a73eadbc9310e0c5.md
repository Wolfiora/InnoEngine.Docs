---
title: "SDLContext.RawApi — Method: GetTouchDeviceName"
description: "Exact Method: GetTouchDeviceName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a73eadbc9310e0c5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTouchDeviceName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTouchDeviceName`

<a id="api-79174d27d02980d5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTouchDeviceName(System.UInt64) 9a06282a216f7960bf48b322706ab5a2619e7cae46e304b520dd68ad0161ba65 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetTouchDeviceName(ulong touchID)
```

Get the touch device name as reported from the driver.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `touchID`:** the touch device instance ID.

**Returns:** touch device name, or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26490).
