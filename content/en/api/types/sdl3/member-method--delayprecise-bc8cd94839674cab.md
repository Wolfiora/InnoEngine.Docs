---
title: "SDLContext.RawApi — Method: DelayPrecise"
description: "Exact Method: DelayPrecise contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bc8cd94839674cab
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DelayPrecise

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DelayPrecise`

<a id="api-5e7438ab1126e488"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DelayPrecise(System.UInt64) 22aeeb45e8e7a611cf48a764fb227a7d807cf4d716572eb6b4e084381c45d7e2 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DelayPrecise(ulong ns)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39035).
