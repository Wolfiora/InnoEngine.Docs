---
title: "SDLContext.RawApi — Method: HasSse3"
description: "Exact Method: HasSse3 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5998a62957cb30bf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasSse3

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse3`

<a id="api-ff0c136fc73c99ee"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasSse3 c8ed852b36f8c0bd918b9afb3c9ec58033bd6a9745a7bb5d2022b07ab6ea62ee -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasSse3()
```

Determine whether the CPU has SSE3 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasSSE

**See also:** SDL_HasSSE2

**See also:** SDL_HasSSE41

**See also:** SDL_HasSSE42

**Returns:** true if the CPU has SSE3 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21339).
