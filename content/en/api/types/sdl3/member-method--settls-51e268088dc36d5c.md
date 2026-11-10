---
title: "SDLContext.RawApi — Method: SetTls"
description: "Exact Method: SetTls contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.51e268088dc36d5c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTls

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTls`

<a id="api-4f2969e279ed80e6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTls(Inno.Native.Sdl3.SDLAtomicInt*,System.Void*,) b682c6e99cf03c28c5406b40513110f8e54d76d956a760f31891d9716dbaf191 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetTls(Inno.Native.Sdl3.SDLAtomicInt* id, void* value, delegate* unmanaged[Cdecl]<void*, void> destructor)
```

Set the current thread's value associated with a thread local storage ID.
If the thread local storage ID is not initialized (the value is 0), a new
ID will be created in a thread-safe way, so all calls using a pointer to
the same ID will refer to the same local storage.
Note that replacing a value from a previous call to this function on the
same thread does _not_ call the previous value's destructor!
`destructor` can be NULL; it is assumed that `value` does not need to be
cleaned up if so.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTLS

**Parameter `id`:** a pointer to the thread local storage ID, may not be NULL.

**Parameter `value`:** the value to associate with the ID for the current thread.

**Parameter `destructor`:** a function called when the thread exits, to free the
value, may be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35617).
