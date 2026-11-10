---
title: "SDL — Method: GetNumVideoDrivers"
description: "Exact Method: GetNumVideoDrivers contracts in SDL."
uid: api.inno.native.sdl3.e986132a50d3c78a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetNumVideoDrivers

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumVideoDrivers`

<a id="api-da8a8ba918f8a6ba"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetNumVideoDrivers 7bf699a0f931b1118672d4da2114a8de5f24df25bc98b7e2c96a2d58ab2c80ee -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetNumVideoDrivers()
```

Get the number of video drivers compiled into SDL.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetVideoDriver

**Returns:** the number of built in video drivers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3837).
