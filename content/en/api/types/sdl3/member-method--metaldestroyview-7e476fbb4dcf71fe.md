---
title: "SDLContext.RawApi — Method: MetalDestroyView"
description: "Exact Method: MetalDestroyView contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7e476fbb4dcf71fe
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MetalDestroyView

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MetalDestroyView`

<a id="api-c223f056cb32ecfc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MetalDestroyView(System.Void*) b1a39a76aacc15634c15854fba5a81e369ca2ed84f1a3122b1c0a28a1ad72ee2 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.MetalDestroyView(void* view)
```

Destroy an existing SDL_MetalView object.
This should be called before SDL_DestroyWindow, if SDL_Metal_CreateView was
called after SDL_CreateWindow.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Metal_CreateView

**Parameter `view`:** the SDL_MetalView object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27924).
