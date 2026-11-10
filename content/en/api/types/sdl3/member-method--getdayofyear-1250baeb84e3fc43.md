---
title: "SDLContext.RawApi — Method: GetDayOfYear"
description: "Exact Method: GetDayOfYear contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1250baeb84e3fc43
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDayOfYear

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDayOfYear`

<a id="api-a8a6970e814b135f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDayOfYear(System.Int32,System.Int32,System.Int32) 8267b4c63b21f658d9f6949fd7704e9da87a4abce6c38ba8fa7902480adbdc3e -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetDayOfYear(int year, int month, int day)
```

Get the day of year for a calendar date.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `year`:** the year component of the date.

**Parameter `month`:** the month component of the date.

**Parameter `day`:** the day component of the date.

**Returns:** the day of year [0-365] if the date is valid or -1 on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41155).
