---
title: "SDLContext.RawApi — Method: GetDaysInMonth"
description: "Exact Method: GetDaysInMonth contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ac2637738962299e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDaysInMonth

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDaysInMonth`

<a id="api-35875ed0b153c67d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDaysInMonth(System.Int32,System.Int32) d49aec35a448a325dd0efe16c0cf100184578fd50547db1e3ea885dd2d38e469 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetDaysInMonth(int year, int month)
```

Get the number of days in a month for a given year.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `year`:** the year.

**Parameter `month`:** the month [1-12].

**Returns:** the number of days in the requested month or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18408).
