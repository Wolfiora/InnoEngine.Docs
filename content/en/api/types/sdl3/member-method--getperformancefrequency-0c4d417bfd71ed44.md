---
title: "SDLContext.RawApi — Method: GetPerformanceFrequency"
description: "Exact Method: GetPerformanceFrequency contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0c4d417bfd71ed44
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPerformanceFrequency

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPerformanceFrequency`

<a id="api-6f15b11828dd925b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPerformanceFrequency 5e649f6c95a23cb6e25abb9cf4fb3f9ad8a357c559d7dc0cb53db1348873d346 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.GetPerformanceFrequency()
```

Get the count per second of the high resolution counter.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPerformanceCounter

**Returns:** a platform-specific count per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38704).
