---
title: "SDL — Method: GetPerformanceFrequency"
description: "Exact Method: GetPerformanceFrequency contracts in SDL."
uid: api.inno.native.sdl3.5c7472aed88f3efd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetPerformanceFrequency

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPerformanceFrequency`

<a id="api-2e375e480d0ab7f2"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetPerformanceFrequency 48857f83edefd109f7788939b96a9ecc323cf90618fbf42b8802ca67addc1699 -->

```csharp
public static ulong Inno.Native.Sdl3.SDL.GetPerformanceFrequency()
```

Get the count per second of the high resolution counter.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPerformanceCounter

**Returns:** a platform-specific count per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2744).
