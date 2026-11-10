---
title: "SDLContext.RawApi — Method: GetThreadState"
description: "Exact Method: GetThreadState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.901a6875a4477fb5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetThreadState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetThreadState`

<a id="api-326ad6d250bc609d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetThreadState(Inno.Native.Sdl3.SDLThread*) ea4337baea932fb8a3aa6aade572bb9263b1cd41c9b870bc4c75d2bd8b072260 -->

```csharp
public Inno.Native.Sdl3.SDLThreadState Inno.Native.Sdl3.SDLContext.RawApi.GetThreadState(Inno.Native.Sdl3.SDLThread* thread)
```

Get the current state of a thread.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ThreadState

**Parameter `thread`:** the thread to query.

**Returns:** the current state of a thread, or SDL_THREAD_UNKNOWN if the thread
isn't valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45329).
