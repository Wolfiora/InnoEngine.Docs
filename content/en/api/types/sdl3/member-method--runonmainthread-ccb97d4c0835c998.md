---
title: "SDLContext.RawApi — Method: RunOnMainThread"
description: "Exact Method: RunOnMainThread contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ccb97d4c0835c998
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RunOnMainThread

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RunOnMainThread`

<a id="api-a202f720680938c3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RunOnMainThread(,System.Void*,System.Byte) 5d5fbec75257f17c8e30f94facc6150c1939baed3ad42000a412dbdf3b65b419 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RunOnMainThread(delegate* unmanaged[Cdecl]<void*, void> callback, void* userdata, byte wait_complete)
```

Call a function on the main thread during event processing.
If this is called on the main thread, the callback is executed immediately.
If this is called on another thread, this callback is queued for execution
on the main thread during event processing.
Be careful of deadlocks when using this functionality. You should not have
the main thread wait for the current thread while this function is being
called with `wait_complete` true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_IsMainThread

**Parameter `callback`:** the callback to call on the main thread.

**Parameter `userdata`:** a pointer that is passed to `callback`.

**Parameter `wait_complete`:** true to wait for the callback to complete, false to
return immediately.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17519).
