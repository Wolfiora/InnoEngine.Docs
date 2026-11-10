---
title: "SDLContext — Method: OnApplicationDidReceiveMemoryWarning"
description: "Exact Method: OnApplicationDidReceiveMemoryWarning contracts in SDLContext."
uid: api.inno.native.sdl3.e366491bcb75ce53
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: OnApplicationDidReceiveMemoryWarning

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OnApplicationDidReceiveMemoryWarning`

<a id="api-7466d2e794c1ee37"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.OnApplicationDidReceiveMemoryWarning 515563aa8799cf259831a147fba5601de9dc71d5d010687af8f234cb58b101a8 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.OnApplicationDidReceiveMemoryWarning()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13436).
