---
title: "SDLContext.RawApi — Method: GetPerformanceCounter"
description: "Exact Method: GetPerformanceCounter contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.648a545a442d6aa8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPerformanceCounter

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPerformanceCounter`

<a id="api-e862d9339d166366"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPerformanceCounter c28f46039f47107f1ae213416f48262a50fe2ff43c9b64f32b92f54cdbd4c757 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.GetPerformanceCounter()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27358).
