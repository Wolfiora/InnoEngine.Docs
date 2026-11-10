---
title: "SDLContext.RawApi — Method: IsMainThread"
description: "Exact Method: IsMainThread contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3dd5a3d8dde92691
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IsMainThread

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsMainThread`

<a id="api-792e0e99594e5c1c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IsMainThread 9088ee0b510b4338d884288b0d075e342a09e2ac9bcc04bddc0ca9724d1d427b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.IsMainThread()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19106).
