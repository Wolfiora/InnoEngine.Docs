---
title: "SDLContext.RawApi — Method: MetalCreateView"
description: "Exact Method: MetalCreateView contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0b77f7715655341a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MetalCreateView

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MetalCreateView`

<a id="api-eb42ca5c641f8016"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MetalCreateView(Inno.Native.Sdl3.SDLWindow*) 985ff676546ce99c1c71cdaa83027a9e2fdb628c5767e913400fc17b72fe7325 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.MetalCreateView(Inno.Native.Sdl3.SDLWindow* window)
```

Create a CAMetalLayer-backed NSView/UIView and attach it to the specified
window.
On macOS, this does *not* associate a MTLDevice with the CAMetalLayer on
its own. It is up to user code to do that.
The returned handle can be casted directly to a NSView or UIView. To access
the backing CAMetalLayer, call SDL_Metal_GetLayer().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Metal_DestroyView

**See also:** SDL_Metal_GetLayer

**Parameter `window`:** the window.

**Returns:** handle NSView or UIView.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17165).
