---
title: "SDL — Method: MemoryBarrierAcquireFunction"
description: "Exact Method: MemoryBarrierAcquireFunction contracts in SDL."
uid: api.inno.native.sdl3.ec39869892259da9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: MemoryBarrierAcquireFunction

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MemoryBarrierAcquireFunction`

<a id="api-5d1003fb2d95c744"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.MemoryBarrierAcquireFunction 36a9a9375405402a226c0be178d31ff4ba67041c0a4f4ef60289646e9d870dd2 -->

```csharp
public static void Inno.Native.Sdl3.SDL.MemoryBarrierAcquireFunction()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2950).
