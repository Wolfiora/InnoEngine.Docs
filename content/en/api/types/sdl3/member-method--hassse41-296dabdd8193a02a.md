---
title: "SDLContext.RawApi — Method: HasSse41"
description: "Exact Method: HasSse41 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.296dabdd8193a02a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasSse41

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse41`

<a id="api-545fee1bab9618a5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasSse41 f2d2581e3857e93544528ec000988239cb3d21bbfb9a25ae34959c8f63cee285 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasSse41()
```

Determine whether the CPU has SSE4.1 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasSSE

**See also:** SDL_HasSSE2

**See also:** SDL_HasSSE3

**See also:** SDL_HasSSE42

**Returns:** true if the CPU has SSE4.1 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46544).
