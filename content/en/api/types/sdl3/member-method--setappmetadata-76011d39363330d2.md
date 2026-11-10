---
title: "SDLContext.RawApi — Method: SetAppMetadata"
description: "Exact Method: SetAppMetadata contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.76011d39363330d2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetAppMetadata

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetAppMetadata`

<a id="api-5e7a40ff16214a30"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetAppMetadata(System.SByte*,System.SByte*,System.SByte*) 85115ca45a0cbe57bfd88e827f50799be3f682a59a224a4bfa162dcad25df67d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetAppMetadata(sbyte* appname, sbyte* appversion, sbyte* appidentifier)
```

Specify basic metadata about your app.
You can optionally provide metadata about your app to SDL. This is not
required, but strongly encouraged.
There are several locations where SDL can make use of metadata (an "About"
box in the macOS menu bar, the name of the app can be shown on some audio
mixers, etc). Any piece of metadata can be left as NULL, if a specific
detail doesn't make sense for the app.
This function should be called as early as possible, before SDL_Init.
Multiple calls to this function are allowed, but various state might not
change once it has been set up with a previous call to this function.
Passing a NULL removes any previous metadata.
This is a simplified interface for the most important information. You can
supply significantly more detailed metadata with
SDL_SetAppMetadataProperty().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetAppMetadataProperty

**Parameter `appname`:** The name of the application ("My Game 2: Bad Guy's
Revenge!").

**Parameter `appversion`:** The version of the application ("1.0.0beta5" or a git
hash, or whatever makes sense).

**Parameter `appidentifier`:** A unique string in reverse-domain format that
identifies this app ("com.example.mygame2").

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34194).
