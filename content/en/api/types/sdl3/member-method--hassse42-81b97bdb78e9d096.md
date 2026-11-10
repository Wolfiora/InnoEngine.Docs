---
title: "SDLContext.RawApi — Method: HasSse42"
description: "Exact Method: HasSse42 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.81b97bdb78e9d096
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasSse42

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse42`

<a id="api-f61a1c11aec64d84"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasSse42 b3b78b2d444bf2f22f02a01200f96e388b72b773c0f4b5cf040534378497542e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasSse42()
```

Determine whether the CPU has SSE4.2 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasSSE

**See also:** SDL_HasSSE2

**See also:** SDL_HasSSE3

**See also:** SDL_HasSSE41

**Returns:** true if the CPU has SSE4.2 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38963).
