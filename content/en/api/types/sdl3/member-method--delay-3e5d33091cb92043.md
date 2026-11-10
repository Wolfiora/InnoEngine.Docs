---
title: "SDLContext — Method: Delay"
description: "Exact Method: Delay contracts in SDLContext."
uid: api.inno.native.sdl3.3e5d33091cb92043
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Delay

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Delay`

<a id="api-d215a95e31a37c1b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Delay(System.UInt32) 3a8f6ea20a298fafe6e346bdd5f6e4b9720b6b6aad7019d720d3b1665c81271a -->

```csharp
public void Inno.Native.Sdl3.SDLContext.Delay(uint ms)
```

Wait a specified number of milliseconds before returning.
This function waits a specified number of milliseconds before returning. It
waits at least the specified time, but possibly longer due to OS
scheduling.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DelayNS

**See also:** SDL_DelayPrecise

**Parameter `ms`:** the number of milliseconds to delay.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16089).
