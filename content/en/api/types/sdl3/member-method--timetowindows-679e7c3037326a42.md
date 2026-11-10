---
title: "SDLContext.RawApi — Method: TimeToWindows"
description: "Exact Method: TimeToWindows contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.679e7c3037326a42
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TimeToWindows

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TimeToWindows`

<a id="api-ae6b16e858aa4f7b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TimeToWindows(System.Int64,System.UInt32*,System.UInt32*) e12f2b77e074086a2cb363afb11f8f4f00ed1d2bead97b3c00fe1f74d549cd9b -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.TimeToWindows(long ticks, uint* dwLowDateTime, uint* dwHighDateTime)
```

Converts an SDL time into a Windows FILETIME (100-nanosecond intervals
since January 1, 1601).
This function fills in the two 32-bit values of the FILETIME structure.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `ticks`:** the time to convert.

**Parameter `dwLowDateTime`:** a pointer filled in with the low portion of the
Windows FILETIME value.

**Parameter `dwHighDateTime`:** a pointer filled in with the high portion of the
Windows FILETIME value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24506).
