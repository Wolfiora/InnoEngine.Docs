---
title: "SDLContext.RawApi — Method: GetDayOfWeek"
description: "Exact Method: GetDayOfWeek contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.90940cb9ce548d86
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDayOfWeek

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDayOfWeek`

<a id="api-23b2f83852f31cb0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDayOfWeek(System.Int32,System.Int32,System.Int32) bda4fd20f85b2c596ab6b4a33ab76a7468a2fbf29b5342202cfca93f9a8455fd -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetDayOfWeek(int year, int month, int day)
```

Get the day of week for a calendar date.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `year`:** the year component of the date.

**Parameter `month`:** the month component of the date.

**Parameter `day`:** the day component of the date.

**Returns:** a value between 0 and 6 (0 being Sunday) if the date is valid or
-1 on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24685).
