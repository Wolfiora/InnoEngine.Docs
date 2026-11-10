---
title: "SDLContext.RawApi — Method: DestroyPalette"
description: "Exact Method: DestroyPalette contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.165eefdc4f7e49df
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyPalette

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyPalette`

<a id="api-4f93c2c3bf5eec74"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyPalette(Inno.Native.Sdl3.SDLPalette*) 3503737978d7d9f82974af34e8f0e0e1a26188a1b6ecbd0011e377b9509ed47f -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyPalette(Inno.Native.Sdl3.SDLPalette* palette)
```

Free a palette created with SDL_CreatePalette().

**Thread safety:** It is safe to call this function from any thread, as long as
the palette is not modified or destroyed in another thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreatePalette

**Parameter `palette`:** the SDL_Palette structure to be freed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26380).
