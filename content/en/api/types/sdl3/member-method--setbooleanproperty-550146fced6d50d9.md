---
title: "SDLContext.RawApi — Method: SetBooleanProperty"
description: "Exact Method: SetBooleanProperty contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.550146fced6d50d9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetBooleanProperty

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetBooleanProperty`

<a id="api-5b70fe51e83f7798"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetBooleanProperty(System.UInt32,System.SByte*,System.Byte) ba5ad9c2b6642263c847098e71aa59e0804439a921b394fd5fe0418307ca7c66 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetBooleanProperty(uint props, sbyte* name, byte value)
```

Set a boolean property in a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetBooleanProperty

**Parameter `props`:** the properties to modify.

**Parameter `name`:** the name of the property to modify.

**Parameter `value`:** the new value of the property.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50101).
