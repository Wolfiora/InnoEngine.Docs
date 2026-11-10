---
title: "SDLContext — Method: GetDaysInMonth"
description: "Exact Method: GetDaysInMonth contracts in SDLContext."
uid: api.inno.native.sdl3.d50721d34fe6c1b0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetDaysInMonth

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDaysInMonth`

<a id="api-ac36b2182750741c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetDaysInMonth(System.Int32,System.Int32) 23253a7325b47d16e25622c5d6e70b21be8c19b2c35f9d988c37684c358fae2e -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetDaysInMonth(int year, int month)
```

Get the number of days in a month for a given year.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `year`:** the year.

**Parameter `month`:** the month [1-12].

**Returns:** the number of days in the requested month or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11663).
