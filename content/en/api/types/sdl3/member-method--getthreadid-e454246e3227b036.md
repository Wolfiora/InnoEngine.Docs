---
title: "SDLContext.RawApi — Method: GetThreadId"
description: "Exact Method: GetThreadId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e454246e3227b036
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetThreadId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetThreadId`

<a id="api-7999a15aae92844b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetThreadId(Inno.Native.Sdl3.SDLThread*) 746c0db69e671e19a363dfb62c8e043e312093ac1a279867d207e2d701b0d9ad -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.GetThreadId(Inno.Native.Sdl3.SDLThread* thread)
```

Get the thread identifier for the specified thread.
This thread identifier is as reported by the underlying operating system.
If SDL is running on a platform that does not support threads the return
value will always be zero.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetCurrentThreadID

**Parameter `thread`:** the thread to query.

**Returns:** the ID of the specified thread, or the ID of the current thread if
`thread` is NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47123).
