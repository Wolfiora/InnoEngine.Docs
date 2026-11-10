---
title: "SDLContext.RawApi — Method: GetKeyName"
description: "Exact Method: GetKeyName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7f0ff31664542e65
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetKeyName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetKeyName`

<a id="api-7e448e8210276531"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetKeyName(System.UInt32) 14bda69d47a46c62b9c2d23606fde6069297d13706b3a64069d7beb27f0e837e -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetKeyName(uint key)
```

Get a human-readable name for a key.
If the key doesn't have a name, this function returns an empty string ("").
Letters will be presented in their uppercase form, if applicable.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetKeyFromName

**See also:** SDL_GetKeyFromScancode

**See also:** SDL_GetScancodeFromKey

**Parameter `key`:** the desired SDL_Keycode to query.

**Returns:** a UTF-8 encoded string of the key name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39946).
