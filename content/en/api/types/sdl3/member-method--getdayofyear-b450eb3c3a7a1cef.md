---
title: "SDLContext — Method: GetDayOfYear"
description: "Exact Method: GetDayOfYear contracts in SDLContext."
uid: api.inno.native.sdl3.b450eb3c3a7a1cef
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetDayOfYear

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDayOfYear`

<a id="api-afba4b3337a63065"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetDayOfYear(System.Int32,System.Int32,System.Int32) 3dc3efc356f4efc013f580529c6e4bec2ba97c4d27431281e50b8ee0a0af080b -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetDayOfYear(int year, int month, int day)
```

Get the day of year for a calendar date.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `year`:** the year component of the date.

**Parameter `month`:** the month component of the date.

**Parameter `day`:** the day component of the date.

**Returns:** the day of year [0-365] if the date is valid or -1 on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15077).
