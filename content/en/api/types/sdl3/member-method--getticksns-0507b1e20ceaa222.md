---
title: "SDLContext — Method: GetTicksNs"
description: "Exact Method: GetTicksNs contracts in SDLContext."
uid: api.inno.native.sdl3.0507b1e20ceaa222
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetTicksNs

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTicksNs`

<a id="api-b6e78822e074ebdf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetTicksNs 0aaa73109adbb50145f9b2aeebddcfc0ddeaef97ea318307f32eef7466fd8502 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.GetTicksNs()
```

Get the number of nanoseconds since SDL library initialization.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** an unsigned 64-bit value representing the number of nanoseconds
since the SDL library initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14829).
