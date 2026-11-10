---
title: "SDLContext.RawApi — Method: GlExtensionSupported"
description: "Exact Method: GlExtensionSupported contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d63850e98fa3a73a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlExtensionSupported

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlExtensionSupported`

<a id="api-60d949d290d45fe0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlExtensionSupported(System.SByte*) 3c58fa8e6f4ce3b4f3e53347bfe3c2f79c805f8a0abb54f01fb0f511a337602d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GlExtensionSupported(sbyte* extension)
```

Check if an OpenGL extension is supported for the current context.
This function operates on the current GL context; you must have created a
context and it must be current before calling this function. Do not assume
that all contexts you create will have the same set of extensions
available, or that recreating an existing context will offer the same
extensions again.
While it's probably not a massive overhead, this function is not an O(1)
operation. Check the extensions you care about after creating the GL
context and save that information somewhere instead of calling the function
every time you need to know.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `extension`:** the name of the extension to check.

**Returns:** true if the extension is supported, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41129).
