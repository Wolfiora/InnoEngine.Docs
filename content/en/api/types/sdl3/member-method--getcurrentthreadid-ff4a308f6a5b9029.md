---
title: "SDL — Method: GetCurrentThreadId"
description: "Exact Method: GetCurrentThreadId contracts in SDL."
uid: api.inno.native.sdl3.ff4a308f6a5b9029
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetCurrentThreadId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCurrentThreadId`

<a id="api-8fa8cfadccc79fdb"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetCurrentThreadId e594c525f776f72771b5c42b93d31e25dcc44d382407fc2b135dad60d9a4cdba -->

```csharp
public static ulong Inno.Native.Sdl3.SDL.GetCurrentThreadId()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2972).
