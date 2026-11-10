---
title: "SDLContext.RawApi — Method: HasAvx2"
description: "Exact Method: HasAvx2 contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.098af00f873a6066
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasAvx2

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAvx2`

<a id="api-aa04e51d2be326af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasAvx2 a0ec7aac6354b3c52ec0d5d1cebe71d094af5949d06d26c499ea36db3ff63a45 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasAvx2()
```

Determine whether the CPU has AVX2 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasAVX

**See also:** SDL_HasAVX512F

**Returns:** true if the CPU has AVX2 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47780).
