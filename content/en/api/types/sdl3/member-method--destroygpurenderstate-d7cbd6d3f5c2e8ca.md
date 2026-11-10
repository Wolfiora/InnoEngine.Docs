---
title: "SDLContext.RawApi — Method: DestroyGpuRenderState"
description: "Exact Method: DestroyGpuRenderState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d7cbd6d3f5c2e8ca
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyGpuRenderState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyGpuRenderState`

<a id="api-96d975c348c69b82"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyGpuRenderState(Inno.Native.Sdl3.SDLGPURenderState*) 70acd6a4aeb68c345a68852e4a838b885badf03d5a16ce0445198c0649d44b10 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyGpuRenderState(Inno.Native.Sdl3.SDLGPURenderState* state)
```

Destroy custom GPU render state.

**Thread safety:** This function should be called on the thread that created the
renderer.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_CreateGPURenderState

**Parameter `state`:** the state to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46655).
