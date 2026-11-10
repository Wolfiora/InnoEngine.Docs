---
title: "SDLContext.RawApi — Method: SyncWindow"
description: "Exact Method: SyncWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.78ccabd2649e33c9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SyncWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SyncWindow`

<a id="api-d8ab6410e2e834b5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SyncWindow(Inno.Native.Sdl3.SDLWindow*) 943a35b788b6abfdde924b73d79724ababbce9c14fe845814847ed94206ee0ae -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SyncWindow(Inno.Native.Sdl3.SDLWindow* window)
```

Block until any pending window state is finalized.
On asynchronous windowing systems, this acts as a synchronization barrier
for pending window state. It will attempt to wait until any pending window
state has been applied and is guaranteed to return within finite time. Note
that for how long it can potentially block depends on the underlying window
system, as window state changes may involve somewhat lengthy animations
that must complete before the window is in its final requested state.
On windowing systems where changes are immediate, this does nothing.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowSize

**See also:** SDL_SetWindowPosition

**See also:** SDL_SetWindowFullscreen

**See also:** SDL_MinimizeWindow

**See also:** SDL_MaximizeWindow

**See also:** SDL_RestoreWindow

**See also:** SDL_HINT_VIDEO_SYNC_WINDOW_OPERATIONS

**Parameter `window`:** the window for which to wait for the pending state to be
applied.

**Returns:** true on success or false if the operation timed out before the
window was in the requested state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36523).
