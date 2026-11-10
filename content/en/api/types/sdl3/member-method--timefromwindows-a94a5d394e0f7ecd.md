---
title: "SDLContext.RawApi — Method: TimeFromWindows"
description: "Exact Method: TimeFromWindows contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a94a5d394e0f7ecd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TimeFromWindows

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TimeFromWindows`

<a id="api-c91c6221ac9a4049"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TimeFromWindows(System.UInt32,System.UInt32) ff46303b97b31c3ee6af3ef307853aadc5352a1591ec92f805e7dae5ce653d67 -->

```csharp
public long Inno.Native.Sdl3.SDLContext.RawApi.TimeFromWindows(uint dwLowDateTime, uint dwHighDateTime)
```

Converts a Windows FILETIME (100-nanosecond intervals since January 1,
1601) to an SDL time.
This function takes the two 32-bit values of the FILETIME structure as
parameters.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dwLowDateTime`:** the low portion of the Windows FILETIME value.

**Parameter `dwHighDateTime`:** the high portion of the Windows FILETIME value.

**Returns:** the converted SDL time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22125).
