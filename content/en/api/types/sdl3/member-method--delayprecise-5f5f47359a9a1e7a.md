---
title: "SDLContext — Method: DelayPrecise"
description: "Exact Method: DelayPrecise contracts in SDLContext."
uid: api.inno.native.sdl3.5f5f47359a9a1e7a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: DelayPrecise

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DelayPrecise`

<a id="api-64fcf4aef8d364f7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.DelayPrecise(System.UInt64) 3740356ca3d920374344be2e486b720e3afe8dd7ab15aef9e0e7c73a677b5346 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.DelayPrecise(ulong ns)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14753).
