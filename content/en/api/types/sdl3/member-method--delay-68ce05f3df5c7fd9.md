---
title: "SDLContext.RawApi — Method: Delay"
description: "Exact Method: Delay contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.68ce05f3df5c7fd9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Delay

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Delay`

<a id="api-7fbcaccfefad6a55"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Delay(System.UInt32) ac79c1246e374dd664dfa94c173c88a6689fb7001ce57c01a8d29b364aa4caa6 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.Delay(uint ms)
```

Wait a specified number of milliseconds before returning.
This function waits a specified number of milliseconds before returning. It
waits at least the specified time, but possibly longer due to OS
scheduling.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DelayNS

**See also:** SDL_DelayPrecise

**Parameter `ms`:** the number of milliseconds to delay.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49752).
