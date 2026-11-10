---
title: "SDLContext.RawApi — Method: DestroyTexture"
description: "Exact Method: DestroyTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8fa6b5d449b82434
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyTexture`

<a id="api-bfccc6b1419fe51c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyTexture(Inno.Native.Sdl3.SDLTexture*) a7ac19054cee82ac5b2986bfec559b0270d37c2e6518e05363117d64f3a132fd -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyTexture(Inno.Native.Sdl3.SDLTexture* texture)
```

Destroy the specified texture.
Passing NULL or an otherwise invalid texture will set the SDL error message
to "Invalid texture".

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTexture

**See also:** SDL_CreateTextureFromSurface

**Parameter `texture`:** the texture to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41065).
