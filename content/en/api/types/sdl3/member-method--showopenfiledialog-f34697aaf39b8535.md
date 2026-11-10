---
title: "SDLContext.RawApi — Method: ShowOpenFileDialog"
description: "Exact Method: ShowOpenFileDialog contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f34697aaf39b8535
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ShowOpenFileDialog

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShowOpenFileDialog`

<a id="api-26543f4b67a06274"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ShowOpenFileDialog(,System.Void*,Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLDialogFileFilter*,System.Int32,System.SByte*,System.Byte) bd08bce9a0ade15e6544ba74bd507765fc7a9696cf4976655aae87ffafb2fdda -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ShowOpenFileDialog(delegate* unmanaged[Cdecl]<void*, sbyte**, int, void> callback, void* userdata, Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLDialogFileFilter* filters, int nfilters, sbyte* default_location, byte allow_many)
```

Displays a dialog that lets the user select a file on their filesystem.
This is an asynchronous function; it will return immediately, and the
result will be passed to the callback.
The callback will be invoked with a null-terminated list of files the user
chose. The list will be empty if the user canceled the dialog, and it will
be NULL if an error occurred.
Note that the callback may be called from a different thread than the one
the function was invoked on.
Depending on the platform, the user may be allowed to input paths that
don't yet exist.
On Linux, dialogs may require XDG Portals, which requires DBus, which
requires an event-handling loop. Apps that do not use SDL to handle events
should add a call to SDL_PumpEvents in their main loop.

**Thread safety:** This function should be called only from the main thread. The
callback may be invoked from the same thread or from a
different one, depending on the OS's constraints.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DialogFileCallback

**See also:** SDL_DialogFileFilter

**See also:** SDL_ShowSaveFileDialog

**See also:** SDL_ShowOpenFolderDialog

**See also:** SDL_ShowFileDialogWithProperties

**Parameter `callback`:** a function pointer to be invoked when the user selects a
file and accepts, or cancels the dialog, or an error
occurs.

**Parameter `userdata`:** an optional pointer to pass extra data to the callback when
it will be invoked.

**Parameter `window`:** the window that the dialog should be modal for, may be NULL.
Not all platforms support this option.

**Parameter `filters`:** a list of filters, may be NULL. Not all platforms support
this option, and platforms that do support it may allow the
user to ignore the filters. If non-NULL, it must remain
valid at least until the callback is invoked.

**Parameter `nfilters`:** the number of filters. Ignored if filters is NULL.

**Parameter `default_location`:** the default folder or file to start the dialog at,
may be NULL. Not all platforms support this option.

**Parameter `allow_many`:** if non-zero, the user will be allowed to select multiple
entries. Not all platforms support this option.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30141).
