---
title: "SDLContext.RawApi — Method: OnApplicationDidReceiveMemoryWarning"
description: "Exact Method: OnApplicationDidReceiveMemoryWarning contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0fdaa66c9b3aa51b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OnApplicationDidReceiveMemoryWarning

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationDidReceiveMemoryWarning`

<a id="api-29ae7c2224ed512b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OnApplicationDidReceiveMemoryWarning b4b94378c34b378351386801d9c8e9b1bc74d6afb360c35c7c39a929b604076d -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.OnApplicationDidReceiveMemoryWarning()
```

Let iOS apps with external event handling report
onApplicationDidReceiveMemoryWarning.
This functions allows iOS apps that have their own event handling to hook
into SDL to generate SDL events. This maps directly to an iOS-specific
event, but since it doesn't do anything iOS-specific internally, it is
available on all platforms, in case it might be useful for some specific
paradigm. Most apps do not need to use this directly; SDL's internal event
code will handle all this for windows created by SDL_CreateWindow!

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31159).
