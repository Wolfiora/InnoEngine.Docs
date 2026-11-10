---
title: "SDLContext — Method: OnApplicationWillTerminate"
description: "Exact Method: OnApplicationWillTerminate contracts in SDLContext."
uid: api.inno.native.sdl3.98ac36e3b39d71da
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: OnApplicationWillTerminate

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationWillTerminate`

<a id="api-4ad11b6bb406c715"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.OnApplicationWillTerminate 5efe081ce5f60968177eac849ba478fab778dc6ea84bb23f4c9775189f88ff3f -->

```csharp
public void Inno.Native.Sdl3.SDLContext.OnApplicationWillTerminate()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12008).
