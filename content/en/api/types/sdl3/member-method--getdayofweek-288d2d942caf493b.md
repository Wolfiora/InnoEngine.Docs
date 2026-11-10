---
title: "SDL — Method: GetDayOfWeek"
description: "Exact Method: GetDayOfWeek contracts in SDL."
uid: api.inno.native.sdl3.288d2d942caf493b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetDayOfWeek

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDayOfWeek`

<a id="api-218dd9d09d704359"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetDayOfWeek(System.Int32,System.Int32,System.Int32) 7a555d5a544c0db8fa74711facd3bf1fa2059c63835c4daf29e939350bbe7d77 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetDayOfWeek(int year, int month, int day)
```

Get the day of week for a calendar date.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `year`:** the year component of the date.

**Parameter `month`:** the month component of the date.

**Parameter `day`:** the day component of the date.

**Returns:** a value between 0 and 6 (0 being Sunday) if the date is valid or
-1 on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1063).
