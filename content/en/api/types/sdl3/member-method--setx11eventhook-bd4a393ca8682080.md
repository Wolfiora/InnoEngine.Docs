---
title: "SDLContext.RawApi — Method: SetX11EventHook"
description: "Exact Method: SetX11EventHook contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bd4a393ca8682080
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetX11EventHook

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetX11EventHook`

<a id="api-4a6530b2636cd515"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetX11EventHook(,System.Void*) 4437effb28369540bf1097030683384854109e47fed8e9f187b60fe69e1950b2 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetX11EventHook(delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.XEvent*, byte> callback, void* userdata)
```

Set a callback for every X11 event.
The callback may modify the event, and should return true if the event
should continue to be processed, or false to prevent further processing.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `callback`:** the SDL_X11EventHook function to call.

**Parameter `userdata`:** a pointer to pass to every iteration of `callback`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37833).
