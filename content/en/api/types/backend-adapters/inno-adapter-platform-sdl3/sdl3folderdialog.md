---
title: "Sdl3FolderDialog"
description: "Reference for Sdl3FolderDialog in Inno.Adapter.Platform.Sdl3."
uid: api.inno.adapter.platform.sdl3.57d468f0cb0727f2
kind: api
owners:
  - Inno.Adapter.Platform.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform-sdl3
---
# `Sdl3FolderDialog`

This reference describes `Sdl3FolderDialog` in `Inno.Adapter.Platform.Sdl3`. Read the [shared contract](../../../projects/inno-adapter-platform-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`SelectFolder`](#api-2194ea5494ef16c5) | Method |

## Type declaration

<a id="api-57d468f0cb0727f2"></a>
<!-- api: T:Inno.Adapter.Platform.Sdl3.Sdl3FolderDialog 81aa2f4f501e8df8ce89b9fee91bdbca6e6a9102a062e5629c6aa3882e9bf41e -->

```csharp
public static class Inno.Adapter.Platform.Sdl3.Sdl3FolderDialog
```

Opens an SDL native directory dialog while the borrowed application pumps platform events.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3FolderDialog.cs#L13).

## `SelectFolder`

<a id="api-2194ea5494ef16c5"></a>
<!-- api: M:Inno.Adapter.Platform.Sdl3.Sdl3FolderDialog.SelectFolder(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication) 66d52efa751ac2abd34fe58b35de7ec77ad5805eaff31654092b2bc5589f2678 -->

```csharp
public static string? Inno.Adapter.Platform.Sdl3.Sdl3FolderDialog.SelectFolder(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication application)
```

Selects one directory before a product creates its Editor session or rendering device.

**Parameter `application`:** A live application borrowed on its owner thread for the entire modal operation.

**Returns:** The selected directory, or null when the user cancels. No project is created or modified.

**Throws `System.ArgumentNullException`:** The application is absent.

**Throws `System.InvalidOperationException`:** SDL reports a native dialog failure or the application is used outside its owner thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/runtime/Inno.Adapter.Platform.Sdl3/Api/Sdl3FolderDialog.cs#L30).
