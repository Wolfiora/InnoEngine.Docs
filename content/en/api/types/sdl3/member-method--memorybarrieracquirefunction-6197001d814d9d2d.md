---
title: "SDLContext.RawApi — Method: MemoryBarrierAcquireFunction"
description: "Exact Method: MemoryBarrierAcquireFunction contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6197001d814d9d2d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MemoryBarrierAcquireFunction

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MemoryBarrierAcquireFunction`

<a id="api-9a839b4b9754e7ac"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MemoryBarrierAcquireFunction 46da9017b8c3ef30db7c9d0dc761728514dba33dabfa9ca1a6c705504c9811c0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.MemoryBarrierAcquireFunction()
```

Insert a memory acquire barrier (function version).
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

**See also:** SDL_MemoryBarrierAcquire


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40175).
