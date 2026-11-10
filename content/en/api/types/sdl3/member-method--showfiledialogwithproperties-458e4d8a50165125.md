---
title: "SDLContext.RawApi — Method: ShowFileDialogWithProperties"
description: "Exact Method: ShowFileDialogWithProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.458e4d8a50165125
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ShowFileDialogWithProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShowFileDialogWithProperties`

<a id="api-ef53924fd3eb0e08"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ShowFileDialogWithProperties(Inno.Native.Sdl3.SDLFileDialogType,,System.Void*,System.UInt32) d4e44797f11600b1093ee8dcec8047bfcaea700e55389c36a359056a53626694 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ShowFileDialogWithProperties(Inno.Native.Sdl3.SDLFileDialogType type, delegate* unmanaged[Cdecl]<void*, sbyte**, int, void> callback, void* userdata, uint props)
```

Create and launch a file dialog with the specified properties.
These are the supported properties:
- `SDL_PROP_FILE_DIALOG_FILTERS_POINTER`: a pointer to a list of
SDL_DialogFileFilter structs, which will be used as filters for
file-based selections. Ignored if the dialog is an "Open Folder" dialog.
If non-NULL, the array of filters must remain valid at least until the
callback is invoked.
- `SDL_PROP_FILE_DIALOG_NFILTERS_NUMBER`: the number of filters in the
array of filters, if it exists.
- `SDL_PROP_FILE_DIALOG_WINDOW_POINTER`: the window that the dialog should
be modal for.
- `SDL_PROP_FILE_DIALOG_LOCATION_STRING`: the default folder or file to
start the dialog at.
- `SDL_PROP_FILE_DIALOG_MANY_BOOLEAN`: true to allow the user to select
more than one entry.
- `SDL_PROP_FILE_DIALOG_TITLE_STRING`: the title for the dialog.
- `SDL_PROP_FILE_DIALOG_ACCEPT_STRING`: the label that the accept button
should have.
- `SDL_PROP_FILE_DIALOG_CANCEL_STRING`: the label that the cancel button
should have.
Note that each platform may or may not support any of the properties.

**Thread safety:** This function should be called only from the main thread. The
callback may be invoked from the same thread or from a
different one, depending on the OS's constraints.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_FileDialogType

**See also:** SDL_DialogFileCallback

**See also:** SDL_DialogFileFilter

**See also:** SDL_ShowOpenFileDialog

**See also:** SDL_ShowSaveFileDialog

**See also:** SDL_ShowOpenFolderDialog

**Parameter `type`:** the type of file dialog.

**Parameter `callback`:** a function pointer to be invoked when the user selects a
file and accepts, or cancels the dialog, or an error
occurs.

**Parameter `userdata`:** an optional pointer to pass extra data to the callback when
it will be invoked.

**Parameter `props`:** the properties to use.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43057).
