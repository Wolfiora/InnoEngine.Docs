---
title: "SDLContext.RawApi — Method: SetRelativeMouseTransform"
description: "Exact Method: SetRelativeMouseTransform contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3745038c0a02233d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRelativeMouseTransform

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRelativeMouseTransform`

<a id="api-eeb9138a730a005f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRelativeMouseTransform(,System.Void*) 3eb3e08da8725ee22de3c520d68aba7bd0c04838e08e0b0b08c2926fd851fd76 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRelativeMouseTransform(delegate* unmanaged[Cdecl]<void*, ulong, Inno.Native.Sdl3.SDLWindow*, uint, float*, float*, void> callback, void* userdata)
```

Set a user-defined function by which to transform relative mouse inputs.
This overrides the relative system scale and relative speed scale hints.
Should be called prior to enabling relative mouse mode, fails otherwise.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `callback`:** a callback used to transform relative mouse motion, or NULL
for default behavior.

**Parameter `userdata`:** a pointer that will be passed to `callback`.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20542).
