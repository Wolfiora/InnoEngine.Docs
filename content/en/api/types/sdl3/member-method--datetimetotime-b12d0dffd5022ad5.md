---
title: "SDLContext.RawApi — Method: DateTimeToTime"
description: "Exact Method: DateTimeToTime contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b12d0dffd5022ad5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DateTimeToTime

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DateTimeToTime`

<a id="api-4f6f0c17ab4de656"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DateTimeToTime(Inno.Native.Sdl3.SDLDateTime*,System.Int64*) e88c10fd6f7d96f65bd4a15d9a3621d7ff6b9575272e297447ce4b11aa16c1b6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.DateTimeToTime(Inno.Native.Sdl3.SDLDateTime* dt, long* ticks)
```

Converts a calendar time to an SDL_Time in nanoseconds since the epoch.
This function ignores the day_of_week member of the SDL_DateTime struct, so
it may remain unset.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dt`:** the source SDL_DateTime.

**Parameter `ticks`:** the resulting SDL_Time.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28093).
