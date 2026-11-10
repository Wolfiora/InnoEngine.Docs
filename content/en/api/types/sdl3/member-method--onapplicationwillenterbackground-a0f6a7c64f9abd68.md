---
title: "SDL — Method: OnApplicationWillEnterBackground"
description: "Exact Method: OnApplicationWillEnterBackground contracts in SDL."
uid: api.inno.native.sdl3.a0f6a7c64f9abd68
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: OnApplicationWillEnterBackground

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationWillEnterBackground`

<a id="api-5f7622c79ac5ecff"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.OnApplicationWillEnterBackground 1a7bb82c72a262873fdccb116e2ee4313e7540ba26748fbc71a40ece0b9088b5 -->

```csharp
public static void Inno.Native.Sdl3.SDL.OnApplicationWillEnterBackground()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3759).
