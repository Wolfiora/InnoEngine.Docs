---
title: "SDL — Method: GetDaysInMonth"
description: "Exact Method: GetDaysInMonth contracts in SDL."
uid: api.inno.native.sdl3.8f53ffd6ab3ae866
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetDaysInMonth

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDaysInMonth`

<a id="api-1092c4c33439191f"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetDaysInMonth(System.Int32,System.Int32) f2fcff2256cf199960f5440ee82feff0971cab9fe375dbbc0ba7892c4e8e15c9 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetDaysInMonth(int year, int month)
```

Get the number of days in a month for a given year.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `year`:** the year.

**Parameter `month`:** the month [1-12].

**Returns:** the number of days in the requested month or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L271).
