---
title: "SDLContext.RawApi — Method: CreateAsyncIoQueue"
description: "Exact Method: CreateAsyncIoQueue contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e40caee3529b2780
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateAsyncIoQueue

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateAsyncIoQueue`

<a id="api-849a25f2952972fb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateAsyncIoQueue a261ce4cc1f64ff6fd3dc6386f21d53d73fe5adc930f24c7f7e620a2a5803874 -->

```csharp
public Inno.Native.Sdl3.SDLAsyncIOQueue* Inno.Native.Sdl3.SDLContext.RawApi.CreateAsyncIoQueue()
```

Create a task queue for tracking multiple I/O operations.
Async I/O operations are assigned to a queue when started. The queue can be
checked for completed tasks thereafter.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyAsyncIOQueue

**See also:** SDL_GetAsyncIOResult

**See also:** SDL_WaitAsyncIOResult

**Returns:** a new task queue object or NULL if there was an error; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21090).
