---
title: "SDLContext — Method: SetCurrentThreadPriority"
description: "Exact Method: SetCurrentThreadPriority contracts in SDLContext."
uid: api.inno.native.sdl3.fd1f980e0e727fff
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetCurrentThreadPriority

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetCurrentThreadPriority`

<a id="api-8bbe62c37552aa89"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetCurrentThreadPriority(Inno.Native.Sdl3.SDLThreadPriority) 5f15ca15cdfa54fe6206a2274996c7b74d4b21d00d527086e78659c241d30ac7 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.SetCurrentThreadPriority(Inno.Native.Sdl3.SDLThreadPriority priority)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11793).
