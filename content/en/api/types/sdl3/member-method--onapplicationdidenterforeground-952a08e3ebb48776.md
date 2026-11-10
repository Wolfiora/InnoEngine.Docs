---
title: "SDLContext.RawApi — Method: OnApplicationDidEnterForeground"
description: "Exact Method: OnApplicationDidEnterForeground contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.952a08e3ebb48776
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OnApplicationDidEnterForeground

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationDidEnterForeground`

<a id="api-c75c16409ce7d3cc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OnApplicationDidEnterForeground 74676648dd6b391e9bcc76b6c095b09ccdbf46bfc6d6627e4ca725ffeee2fa99 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.OnApplicationDidEnterForeground()
```

Let iOS apps with external event handling report
onApplicationDidBecomeActive.
This functions allows iOS apps that have their own event handling to hook
into SDL to generate SDL events. This maps directly to an iOS-specific
event, but since it doesn't do anything iOS-specific internally, it is
available on all platforms, in case it might be useful for some specific
paradigm. Most apps do not need to use this directly; SDL's internal event
code will handle all this for windows created by SDL_CreateWindow!

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20650).
