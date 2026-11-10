---
title: "SDL — Method: GetPerformanceCounter"
description: "Exact Method: GetPerformanceCounter contracts in SDL."
uid: api.inno.native.sdl3.4b5f2fdeb721c269
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetPerformanceCounter

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPerformanceCounter`

<a id="api-c27d241830e5f7c2"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetPerformanceCounter 8b96a826cc37bb0f55f21f26659cdebb0e9afe0dbc89770230070d3b99045449 -->

```csharp
public static ulong Inno.Native.Sdl3.SDL.GetPerformanceCounter()
```

Get the current value of the high resolution counter.
This function is typically used for profiling.
The counter values are only meaningful relative to each other. Differences
between values can be converted to times by using
SDL_GetPerformanceFrequency().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPerformanceFrequency

**Returns:** the current counter value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1347).
