---
title: "SDLContext.RawApi — Method: SetClipboardData"
description: "Exact Method: SetClipboardData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.99955395166aa1d1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetClipboardData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetClipboardData`

<a id="api-56f9ef0b1a74d119"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetClipboardData(,,System.Void*,System.SByte**,System.UInt64) e15daad92a99c6fc3122c09f85acd945582f645e42ae640e301edee48ec2642b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetClipboardData(delegate* unmanaged[Cdecl]<void*, sbyte*, ulong*, void*> callback, delegate* unmanaged[Cdecl]<void*, void> cleanup, void* userdata, sbyte** mime_types, ulong num_mime_types)
```

Offer clipboard data to the OS.
Tell the operating system that the application is offering clipboard data
for each of the provided mime-types. Once another application requests the
data the callback function will be called, allowing it to generate and
respond with the data for the requested mime-type.
The size of text data does not include any terminator, and the text does
not need to be null-terminated (e.g., you can directly copy a portion of a
document).

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ClearClipboardData

**See also:** SDL_GetClipboardData

**See also:** SDL_HasClipboardData

**Parameter `callback`:** a function pointer to the function that provides the
clipboard data.

**Parameter `cleanup`:** a function pointer to the function that cleans up the
clipboard data.

**Parameter `userdata`:** an opaque pointer that will be forwarded to the callbacks.

**Parameter `mime_types`:** a list of mime-types that are being offered. SDL copies
the given list.

**Parameter `num_mime_types`:** the number of mime-types in the mime_types list.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24295).
