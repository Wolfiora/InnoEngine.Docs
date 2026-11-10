---
title: "SDLContext.RawApi — Method: EglSetAttributeCallbacks"
description: "Exact Method: EglSetAttributeCallbacks contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a7542944d6e5001b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EglSetAttributeCallbacks

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EglSetAttributeCallbacks`

<a id="api-6ce583809448abb5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EglSetAttributeCallbacks(,,,System.Void*) 4b54b6fd17716e1d8757308fe8d74fd9ab684298c63f030290760c08fab08093 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.EglSetAttributeCallbacks(delegate* unmanaged[Cdecl]<void*, long*> platformAttribCallback, delegate* unmanaged[Cdecl]<void*, void*, void*, int*> surfaceAttribCallback, delegate* unmanaged[Cdecl]<void*, void*, void*, int*> contextAttribCallback, void* userdata)
```

Sets the callbacks for defining custom EGLAttrib arrays for EGL
initialization.
Callbacks that aren't needed can be set to NULL.
NOTE: These callback pointers will be reset after SDL_GL_ResetAttributes.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `platformAttribCallback`:** callback for attributes to pass to
eglGetPlatformDisplay. May be NULL.

**Parameter `surfaceAttribCallback`:** callback for attributes to pass to
eglCreateSurface. May be NULL.

**Parameter `contextAttribCallback`:** callback for attributes to pass to
eglCreateContext. May be NULL.

**Parameter `userdata`:** a pointer that is passed to the callbacks.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51311).
