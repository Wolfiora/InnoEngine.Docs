---
title: "SDLContext — Method: GetPerformanceCounter"
description: "Exact Method: GetPerformanceCounter contracts in SDLContext."
uid: api.inno.native.sdl3.a1a057b4ae930ad8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetPerformanceCounter

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPerformanceCounter`

<a id="api-8525b0c98928a5be"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetPerformanceCounter d1bae25fbc4cbcbe273f98fdbe580c59c4212150be0da2f40a4cb4dc6a2e9a8d -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.GetPerformanceCounter()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12992).
