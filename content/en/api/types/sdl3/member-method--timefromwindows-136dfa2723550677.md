---
title: "SDLContext — Method: TimeFromWindows"
description: "Exact Method: TimeFromWindows contracts in SDLContext."
uid: api.inno.native.sdl3.136dfa2723550677
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: TimeFromWindows

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TimeFromWindows`

<a id="api-8cc315b829963e26"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.TimeFromWindows(System.UInt32,System.UInt32) 46f5748fb810f0267a4287e54a8555b412cadacde6d8b0082f890d0f962c443f -->

```csharp
public long Inno.Native.Sdl3.SDLContext.TimeFromWindows(uint dwLowDateTime, uint dwHighDateTime)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12333).
