---
title: "SDLContext — Method: GetCurrentThreadId"
description: "Exact Method: GetCurrentThreadId contracts in SDLContext."
uid: api.inno.native.sdl3.ac56ec675c3a3c61
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetCurrentThreadId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentThreadId`

<a id="api-bfdf3feb63494c5e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetCurrentThreadId a692a1e6e6d1366808d96c14dcb34e5de50e2aa8b929dbfa38b425c8b6d0cec2 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.GetCurrentThreadId()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14956).
