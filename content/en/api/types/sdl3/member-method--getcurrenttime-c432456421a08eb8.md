---
title: "SDLContext.RawApi — Method: GetCurrentTime"
description: "Exact Method: GetCurrentTime contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c432456421a08eb8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCurrentTime

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentTime`

<a id="api-02129410db350729"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentTime(System.Int64*) 9058776aee0fd150d84edd0cd268636024847cd2fa28c9c141533abc045454cd -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentTime(long* ticks)
```

Gets the current value of the system realtime clock in nanoseconds since
Jan 1, 1970 in Universal Coordinated Time (UTC).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `ticks`:** the SDL_Time to hold the returned tick count.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25595).
