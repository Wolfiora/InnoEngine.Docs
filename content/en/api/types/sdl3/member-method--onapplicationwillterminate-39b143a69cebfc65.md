---
title: "SDLContext.RawApi — Method: OnApplicationWillTerminate"
description: "Exact Method: OnApplicationWillTerminate contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.39b143a69cebfc65
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OnApplicationWillTerminate

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationWillTerminate`

<a id="api-df0a67fe645896e1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OnApplicationWillTerminate c444617a03d72d4f6c4fb3914c58da5cbdbe60965c0dfe7231b83f6b1220d550 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.OnApplicationWillTerminate()
```

Let iOS apps with external event handling report
onApplicationWillTerminate.
This functions allows iOS apps that have their own event handling to hook
into SDL to generate SDL events. This maps directly to an iOS-specific
event, but since it doesn't do anything iOS-specific internally, it is
available on all platforms, in case it might be useful for some specific
paradigm. Most apps do not need to use this directly; SDL's internal event
code will handle all this for windows created by SDL_CreateWindow!

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19864).
