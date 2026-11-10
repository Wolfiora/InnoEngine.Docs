---
title: "SDLContext — Method: GetPerformanceFrequency"
description: "Exact Method: GetPerformanceFrequency contracts in SDLContext."
uid: api.inno.native.sdl3.995f2f4db3d5c13a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetPerformanceFrequency

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPerformanceFrequency`

<a id="api-6dfc34eca21c672f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetPerformanceFrequency a0a1c1e76f8b29175d35c9e905e945e70c32bfbc8a7324fb5fa7ddfd25d0bde4 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.GetPerformanceFrequency()
```

Get the count per second of the high resolution counter.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPerformanceCounter

**Returns:** a platform-specific count per second.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14680).
