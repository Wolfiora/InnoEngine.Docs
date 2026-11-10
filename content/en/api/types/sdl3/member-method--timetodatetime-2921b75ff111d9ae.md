---
title: "SDLContext.RawApi — Method: TimeToDateTime"
description: "Exact Method: TimeToDateTime contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2921b75ff111d9ae
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: TimeToDateTime

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TimeToDateTime`

<a id="api-599c2d6115337ee8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.TimeToDateTime(System.Int64,Inno.Native.Sdl3.SDLDateTime*,System.Byte) 806bc789bbce39cb18cb7c92aebf3a821c5fa80de5e7bb6901af07a36a3c07e7 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.TimeToDateTime(long ticks, Inno.Native.Sdl3.SDLDateTime* dt, byte localTime)
```

Converts an SDL_Time in nanoseconds since the epoch to a calendar time in
the SDL_DateTime format.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `ticks`:** the SDL_Time to be converted.

**Parameter `dt`:** the resulting SDL_DateTime.

**Parameter `localTime`:** the resulting SDL_DateTime will be expressed in local time
if true, otherwise it will be in Universal Coordinated
Time (UTC).

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35487).
