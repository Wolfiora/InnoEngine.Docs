---
title: "SDLContext.RawApi — Method: SetTrayEntryLabel"
description: "Exact Method: SetTrayEntryLabel contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a6b94a139e81a98b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTrayEntryLabel

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTrayEntryLabel`

<a id="api-497c8bc3ea73cb04"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTrayEntryLabel(Inno.Native.Sdl3.SDLTrayEntry*,System.SByte*) 49741ee954642e249d6238d4519ae7f22e7320aa529c58698a34bf9abe4a5245 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetTrayEntryLabel(Inno.Native.Sdl3.SDLTrayEntry* entry, sbyte* label)
```

Sets the label of an entry.
An entry cannot change between a separator and an ordinary entry; that is,
it is not possible to set a non-NULL label on an entry that has a NULL
label (separators), or to set a NULL label to an entry that has a non-NULL
label. The function will silently fail if that happens.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTrayEntries

**See also:** SDL_InsertTrayEntryAt

**See also:** SDL_GetTrayEntryLabel

**Parameter `entry`:** the entry to be updated.

**Parameter `label`:** the new label for the entry in UTF-8 encoding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46438).
