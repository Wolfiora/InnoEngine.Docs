---
title: "SDLContext — Method: GetNumGpuDrivers"
description: "Exact Method: GetNumGpuDrivers contracts in SDLContext."
uid: api.inno.native.sdl3.0dab4b1974a4eb07
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetNumGpuDrivers

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumGpuDrivers`

<a id="api-b419704ae2e71801"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetNumGpuDrivers 95215ee23b8e108511173a43741bda377bc40863860f78d120271f0ceb8cf579 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetNumGpuDrivers()
```

Get the number of GPU drivers compiled into SDL.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGPUDriver

**Returns:** the number of built in GPU drivers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13005).
