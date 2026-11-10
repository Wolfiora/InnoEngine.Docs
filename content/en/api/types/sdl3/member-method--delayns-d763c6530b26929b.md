---
title: "SDL — Method: DelayNs"
description: "Exact Method: DelayNs contracts in SDL."
uid: api.inno.native.sdl3.d763c6530b26929b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: DelayNs

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DelayNs`

<a id="api-c263914294bce49d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.DelayNs(System.UInt64) fa20003a5068e9504b2935e25e467c07fa6c3e53f4737a6992aa90b2596a7056 -->

```csharp
public static void Inno.Native.Sdl3.SDL.DelayNs(ulong ns)
```

Wait a specified number of nanoseconds before returning.
This function waits a specified number of nanoseconds before returning. It
waits at least the specified time, but possibly longer due to OS
scheduling.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Delay

**See also:** SDL_DelayPrecise

**Parameter `ns`:** the number of nanoseconds to delay.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4250).
