---
title: "SDLContext.RawApi — Method: GetCurrentThreadId"
description: "Exact Method: GetCurrentThreadId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.19dc61333d278f49
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCurrentThreadId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentThreadId`

<a id="api-be3eb342fffd7729"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentThreadId 613942f9a5422cd435679cb77a0b3da82621887a955f4eee07c3f06c2dd2dd77 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.GetCurrentThreadId()
```

Get the thread identifier for the current thread.
This thread identifier is as reported by the underlying operating system.
If SDL is running on a platform that does not support threads the return
value will always be zero.
This function also returns a valid thread ID when called from the main
thread.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetThreadID

**Returns:** the ID of the current thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40241).
