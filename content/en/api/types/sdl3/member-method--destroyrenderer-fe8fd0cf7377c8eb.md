---
title: "SDLContext.RawApi — Method: DestroyRenderer"
description: "Exact Method: DestroyRenderer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fe8fd0cf7377c8eb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyRenderer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyRenderer`

<a id="api-8952cfdf19a15e12"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyRenderer(Inno.Native.Sdl3.SDLRenderer*) c500f918c1baa6d8ada742fd0863fbb06265bb1c7697a7ebab007f3db07db188 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyRenderer(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Destroy the rendering context for a window and free all associated
textures.
This should be called before destroying the associated window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateRenderer

**Parameter `renderer`:** the rendering context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28567).
