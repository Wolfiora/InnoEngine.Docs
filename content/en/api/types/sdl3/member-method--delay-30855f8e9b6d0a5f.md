---
title: "SDL — Method: Delay"
description: "Exact Method: Delay contracts in SDL."
uid: api.inno.native.sdl3.30855f8e9b6d0a5f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Delay

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Delay`

<a id="api-1ad8a622b5c59388"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Delay(System.UInt32) 1c9f40c78c75caed02b4b7622c13d525f09e83eb2a8d9819f0d4a88c12b7a13d -->

```csharp
public static void Inno.Native.Sdl3.SDL.Delay(uint ms)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3901).
