---
title: "SDLContext — Method: GetDayOfWeek"
description: "Exact Method: GetDayOfWeek contracts in SDLContext."
uid: api.inno.native.sdl3.322e9fddfb43cb9a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetDayOfWeek

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDayOfWeek`

<a id="api-4c106da05e4a902a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetDayOfWeek(System.Int32,System.Int32,System.Int32) 78fcc3671ec5ba3ea1d0f253b99b741294e6186944ace89a21a3cbfdeed5f599 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetDayOfWeek(int year, int month, int day)
```

Get the day of week for a calendar date.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `year`:** the year component of the date.

**Parameter `month`:** the month component of the date.

**Parameter `day`:** the day component of the date.

**Returns:** a value between 0 and 6 (0 being Sunday) if the date is valid or
-1 on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12640).
