---
title: "SDL — Method: DelayPrecise"
description: "Exact Method: DelayPrecise contracts in SDL."
uid: api.inno.native.sdl3.b220288fd62baf06
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: DelayPrecise

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DelayPrecise`

<a id="api-5fd367d650c54388"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.DelayPrecise(System.UInt64) f1519980feb8978e189da78ae53076391dabb055bb27ba68b360720b8f3cfe1f -->

```csharp
public static void Inno.Native.Sdl3.SDL.DelayPrecise(ulong ns)
```

Wait a specified number of nanoseconds before returning.
This function waits a specified number of nanoseconds before returning. It
will attempt to wait as close to the requested time as possible, busy
waiting if necessary, but could return later due to OS scheduling.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Delay

**See also:** SDL_DelayNS

**Parameter `ns`:** the number of nanoseconds to delay.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2805).
