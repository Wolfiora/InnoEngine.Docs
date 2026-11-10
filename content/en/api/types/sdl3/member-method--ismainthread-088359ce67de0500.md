---
title: "SDLContext — Method: IsMainThread"
description: "Exact Method: IsMainThread contracts in SDLContext."
uid: api.inno.native.sdl3.088359ce67de0500
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: IsMainThread

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsMainThread`

<a id="api-b920338027c616c5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.IsMainThread 5e1be25bd09b50c93ed753d2a5997e13af99ace7821e029dc79aad241e83ec08 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.IsMainThread()
```

Return whether this is the main thread.
On Apple platforms, the main thread is the thread that runs your program's
main() entry point. On other platforms, the main thread is the one that
calls SDL_Init(SDL_INIT_VIDEO), which should usually be the one that runs
your program's main() entry point. If you are using the main callbacks,
SDL_AppInit(), SDL_AppIterate(), and SDL_AppQuit() are all called on the
main thread.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RunOnMainThread

**Returns:** true if this thread is the main thread, or false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11859).
