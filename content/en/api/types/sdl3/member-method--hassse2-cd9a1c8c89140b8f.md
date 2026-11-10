---
title: "SDLContext.RawApi — Method: HasSse2"
description: "Exact Method: HasSse2 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cd9a1c8c89140b8f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasSse2

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse2`

<a id="api-d42a4f1f9148b65d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasSse2 07dee06ae874d4e809fefab9b91c0a55791204b7e9f073918f7092f8e4c9f6d2 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasSse2()
```

Determine whether the CPU has SSE2 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasSSE

**See also:** SDL_HasSSE3

**See also:** SDL_HasSSE41

**See also:** SDL_HasSSE42

**Returns:** true if the CPU has SSE2 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26313).
