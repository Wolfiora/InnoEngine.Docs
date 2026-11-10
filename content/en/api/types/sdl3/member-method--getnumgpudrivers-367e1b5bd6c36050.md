---
title: "SDLContext.RawApi — Method: GetNumGpuDrivers"
description: "Exact Method: GetNumGpuDrivers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.367e1b5bd6c36050
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumGpuDrivers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumGpuDrivers`

<a id="api-4e1afb5a11755d81"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumGpuDrivers 088bfd308445a3a1f2f58208ebfb0b2a65a97994a28dfeffdf568933bbddab70 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumGpuDrivers()
```

Get the number of GPU drivers compiled into SDL.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGPUDriver

**Returns:** the number of built in GPU drivers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27531).
