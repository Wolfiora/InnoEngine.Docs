---
title: "SDLContext — Method: MemoryBarrierReleaseFunction"
description: "Exact Method: MemoryBarrierReleaseFunction contracts in SDLContext."
uid: api.inno.native.sdl3.2727c7fcee193a97
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: MemoryBarrierReleaseFunction

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MemoryBarrierReleaseFunction`

<a id="api-df247ebaf4168e25"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.MemoryBarrierReleaseFunction 14b9c546d5c5d49b737e3e08073f51e0041a587d2febf5deb25c5c32bf16ccd7 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.MemoryBarrierReleaseFunction()
```

Insert a memory release barrier (function version).
Please refer to SDL_MemoryBarrierRelease for details. This is a function
version, which might be useful if you need to use this functionality from a
scripting language, etc. Also, some of the macro versions call this
function behind the scenes, where more heavy lifting can happen inside of
SDL. Generally, though, an app written in C/C++/etc should use the macro
version, as it will be more efficient.

**Thread safety:** Obviously this function is safe to use from any thread at any
time, but if you find yourself needing this, you are probably
dealing with some very sensitive code; be careful!

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_MemoryBarrierRelease


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13732).
