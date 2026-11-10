---
title: "SDLContext.RawApi — Method: SetCurrentThreadPriority"
description: "Exact Method: SetCurrentThreadPriority contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.44aaefaa81300b34
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetCurrentThreadPriority

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetCurrentThreadPriority`

<a id="api-d5606449465c2c5b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetCurrentThreadPriority(Inno.Native.Sdl3.SDLThreadPriority) fdba05a06161ed9336401f053e8e560b7a2037a635a1fbf4e6d24ce701d6cd17 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetCurrentThreadPriority(Inno.Native.Sdl3.SDLThreadPriority priority)
```

Set the priority for the current thread.
Note that some platforms will not let you alter the priority (or at least,
promote the thread to a higher priority) at all, and some require you to be
an administrator account. Be prepared for this to fail.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `priority`:** the SDL_ThreadPriority to set.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18906).
