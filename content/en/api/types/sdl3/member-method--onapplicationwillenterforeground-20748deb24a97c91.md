---
title: "SDL — Method: OnApplicationWillEnterForeground"
description: "Exact Method: OnApplicationWillEnterForeground contracts in SDL."
uid: api.inno.native.sdl3.20748deb24a97c91
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: OnApplicationWillEnterForeground

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationWillEnterForeground`

<a id="api-df44830830ee2058"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.OnApplicationWillEnterForeground ea4849167a2480c815877e1aadac0aabe6a02e26ad5b3d7b2bee28031214a1c2 -->

```csharp
public static void Inno.Native.Sdl3.SDL.OnApplicationWillEnterForeground()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2344).
