---
title: "SDL — Method: GetDayOfYear"
description: "Exact Method: GetDayOfYear contracts in SDL."
uid: api.inno.native.sdl3.29645dbea456b938
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetDayOfYear

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDayOfYear`

<a id="api-8e1218528765be00"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetDayOfYear(System.Int32,System.Int32,System.Int32) 3951eb995e7443014a91e88d10470f4872cca612584fd8fa34df70319da735c5 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetDayOfYear(int year, int month, int day)
```

Get the day of year for a calendar date.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `year`:** the year component of the date.

**Parameter `month`:** the month component of the date.

**Parameter `day`:** the day component of the date.

**Returns:** the day of year [0-365] if the date is valid or -1 on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3073).
