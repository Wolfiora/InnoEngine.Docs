---
title: "SDL — Method: MemoryBarrierReleaseFunction"
description: "Exact Method: MemoryBarrierReleaseFunction contracts in SDL."
uid: api.inno.native.sdl3.18c6b7ef0fff5c63
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: MemoryBarrierReleaseFunction

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MemoryBarrierReleaseFunction`

<a id="api-d9871774c1dbeb56"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.MemoryBarrierReleaseFunction ae6951d16865236ae82508e04dd5b3134c8f1b88a23bf12734ea248cd7798263 -->

```csharp
public static void Inno.Native.Sdl3.SDL.MemoryBarrierReleaseFunction()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1954).
