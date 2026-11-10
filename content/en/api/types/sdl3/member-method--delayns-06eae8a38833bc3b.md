---
title: "SDLContext.RawApi — Method: DelayNs"
description: "Exact Method: DelayNs contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.06eae8a38833bc3b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DelayNs

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DelayNs`

<a id="api-3ed18cf15b990d3e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DelayNs(System.UInt64) 344fdf7fc56cc8c92a81a816bb18d8cc1792d9b246f3d77b01058f152184f003 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DelayNs(ulong ns)
```

Wait a specified number of nanoseconds before returning.
This function waits a specified number of nanoseconds before returning. It
waits at least the specified time, but possibly longer due to OS
scheduling.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Delay

**See also:** SDL_DelayPrecise

**Parameter `ns`:** the number of nanoseconds to delay.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52363).
