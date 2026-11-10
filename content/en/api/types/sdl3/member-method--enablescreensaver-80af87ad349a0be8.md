---
title: "SDLContext — Method: EnableScreenSaver"
description: "Exact Method: EnableScreenSaver contracts in SDLContext."
uid: api.inno.native.sdl3.80af87ad349a0be8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: EnableScreenSaver

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EnableScreenSaver`

<a id="api-da5555f33f80af1c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.EnableScreenSaver 80e030cb335fa4c7ec6546a9d8e83ad793c729a1600bb7eadb3b3128597e1a21 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.EnableScreenSaver()
```

Allow the screen to be blanked by a screen saver.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DisableScreenSaver

**See also:** SDL_ScreenSaverEnabled

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15898).
