---
title: "SDLContext — Method: OnApplicationDidEnterForeground"
description: "Exact Method: OnApplicationDidEnterForeground contracts in SDLContext."
uid: api.inno.native.sdl3.3df396a1a163e0ed
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: OnApplicationDidEnterForeground

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationDidEnterForeground`

<a id="api-19ef03512fc70b7f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.OnApplicationDidEnterForeground 7ea4f490ba18bcf0f412717bd6a762954dc1600e8c63aba697d4937ab2f83281 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.OnApplicationDidEnterForeground()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12100).
