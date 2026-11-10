---
title: "SDLContext.RawApi — Method: HasClipboardData"
description: "Exact Method: HasClipboardData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1b8b0a0e6de54d6e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasClipboardData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasClipboardData`

<a id="api-5188fd8bc520501a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasClipboardData(System.SByte*) e5d681cab3aec6b38afaf6a127e4d683038fb22d07b484740a8adf5a73aebc8c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasClipboardData(sbyte* mime_type)
```

Query whether there is data in the clipboard for the provided mime type.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetClipboardData

**See also:** SDL_GetClipboardData

**Parameter `mime_type`:** the mime type to check for data.

**Returns:** true if data exists in the clipboard for the provided mime type,
false if it does not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29587).
