---
title: "SDLContext.RawApi — Method: GetClipboardMimeTypes"
description: "Exact Method: GetClipboardMimeTypes contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.edaaffd52af8b58e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetClipboardMimeTypes

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetClipboardMimeTypes`

<a id="api-c761ba3e1489f640"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetClipboardMimeTypes(System.UInt64*) f5c7256ca55a71afbf24b5d8dc2253d17a8ba212b78b66daab898f4154e6957f -->

```csharp
public sbyte** Inno.Native.Sdl3.SDLContext.RawApi.GetClipboardMimeTypes(ulong* num_mime_types)
```

Retrieve the list of mime types available in the clipboard.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetClipboardData

**Parameter `num_mime_types`:** a pointer filled with the number of mime types, may
be NULL.

**Returns:** a null-terminated array of strings with mime types, or NULL on
failure; call SDL_GetError() for more information. This should be
freed with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46461).
