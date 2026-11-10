---
title: "SDL — Method: SetCurrentThreadPriority"
description: "Exact Method: SetCurrentThreadPriority contracts in SDL."
uid: api.inno.native.sdl3.dd4732a87e53335a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetCurrentThreadPriority

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetCurrentThreadPriority`

<a id="api-cdf939bb546e6a2e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetCurrentThreadPriority(Inno.Native.Sdl3.SDLThreadPriority) a714cd2a4af9ae6b06225e87ba7966b4e20973a695920a2acb6ae3a430e50377 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.SetCurrentThreadPriority(Inno.Native.Sdl3.SDLThreadPriority priority)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L381).
