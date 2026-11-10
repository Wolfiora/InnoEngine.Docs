---
title: "SDLContext — Method: DelayNs"
description: "Exact Method: DelayNs contracts in SDLContext."
uid: api.inno.native.sdl3.565f4121eef196d4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: DelayNs

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DelayNs`

<a id="api-78a68fd1dcc98db8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.DelayNs(System.UInt64) bef3b48bc8ad046fdebc04404663632d811eaa6fe4726f0543e71d56e26adca0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.DelayNs(ulong ns)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16525).
