---
title: "SDLContext.RawApi — Method: ClearProperty"
description: "Exact Method: ClearProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3f5b525069f2f3ce
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ClearProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClearProperty`

<a id="api-b49642c475ab7f26"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ClearProperty(System.UInt32,System.SByte*) 48e42473227a76ee5269e072623d43d5a1ff3209e1d9d2b64a59c97a23bee67e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ClearProperty(uint props, sbyte* name)
```

Clear a property from a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `props`:** the properties to modify.

**Parameter `name`:** the name of the property to clear.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45376).
