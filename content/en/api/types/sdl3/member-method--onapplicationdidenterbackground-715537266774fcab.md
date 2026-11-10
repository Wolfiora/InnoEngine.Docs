---
title: "SDL — Method: OnApplicationDidEnterBackground"
description: "Exact Method: OnApplicationDidEnterBackground contracts in SDL."
uid: api.inno.native.sdl3.715537266774fcab
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: OnApplicationDidEnterBackground

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationDidEnterBackground`

<a id="api-cdfda2e299995a7e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.OnApplicationDidEnterBackground ca2e00f3714f62972537aea1e6d1bd9b6c640c2b3110c755a66635b216448896 -->

```csharp
public static void Inno.Native.Sdl3.SDL.OnApplicationDidEnterBackground()
```

Let iOS apps with external event handling report
onApplicationDidEnterBackground.
This functions allows iOS apps that have their own event handling to hook
into SDL to generate SDL events. This maps directly to an iOS-specific
event, but since it doesn't do anything iOS-specific internally, it is
available on all platforms, in case it might be useful for some specific
paradigm. Most apps do not need to use this directly; SDL's internal event
code will handle all this for windows created by SDL_CreateWindow!

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2396).
