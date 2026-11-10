---
title: "SDLContext.RawApi — Method: OnApplicationWillEnterForeground"
description: "Exact Method: OnApplicationWillEnterForeground contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1753c573828f486d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OnApplicationWillEnterForeground

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationWillEnterForeground`

<a id="api-1b5c951a07ef790e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OnApplicationWillEnterForeground 4300ea61d3fe2ae56857c75356af361ecd8ee4b12f7662a7bcd361580114c2f5 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.OnApplicationWillEnterForeground()
```

Let iOS apps with external event handling report
onApplicationWillEnterForeground.
This functions allows iOS apps that have their own event handling to hook
into SDL to generate SDL events. This maps directly to an iOS-specific
event, but since it doesn't do anything iOS-specific internally, it is
available on all platforms, in case it might be useful for some specific
paradigm. Most apps do not need to use this directly; SDL's internal event
code will handle all this for windows created by SDL_CreateWindow!

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35875).
