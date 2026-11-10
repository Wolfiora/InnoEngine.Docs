---
title: "SDLContext — Method: OnApplicationWillEnterBackground"
description: "Exact Method: OnApplicationWillEnterBackground contracts in SDLContext."
uid: api.inno.native.sdl3.9c8c59e307c6d999
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: OnApplicationWillEnterBackground

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationWillEnterBackground`

<a id="api-d043a070f79bd3fb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.OnApplicationWillEnterBackground c62ee9e909f8cc6be07b6d4bb343a69fb23259dc968d61625365fa10ef25d644 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.OnApplicationWillEnterBackground()
```

Let iOS apps with external event handling report
onApplicationWillResignActive.
This functions allows iOS apps that have their own event handling to hook
into SDL to generate SDL events. This maps directly to an iOS-specific
event, but since it doesn't do anything iOS-specific internally, it is
available on all platforms, in case it might be useful for some specific
paradigm. Most apps do not need to use this directly; SDL's internal event
code will handle all this for windows created by SDL_CreateWindow!

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15915).
