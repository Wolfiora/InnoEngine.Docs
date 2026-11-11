---
title: "WindowsX64EditorComposition"
description: "Reference for WindowsX64EditorComposition in Inno.Editor.WindowsX64."
uid: api.inno.editor.windowsx64.f54223242db76a35
kind: api
owners:
  - Inno.Editor.WindowsX64
apiSurface: source-clr
contracts:
  - project.inno-editor-windowsx64
---
# `WindowsX64EditorComposition`

This reference describes `WindowsX64EditorComposition` in `Inno.Editor.WindowsX64`. Read the [shared contract](../../projects/inno-editor-windowsx64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Run`](#api-68ec0586238a32a7) | Method |

## Type declaration

<a id="api-f54223242db76a35"></a>
<!-- api: T:Inno.Editor.WindowsX64.WindowsX64EditorComposition a06779fcf6546eb6f91584e929c2b4ae48af1a58dab9df02fafd45d05c635f35 -->

```csharp
public static class Inno.Editor.WindowsX64.WindowsX64EditorComposition
```

Composes the Windows Editor from explicit platform integrations and shared product hosting.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c63dae76b618578863de6022b38211a835a8d876/platforms/WindowsX64/editor/Inno.Editor.WindowsX64/WindowsX64EditorComposition.cs#L39).

## `Run`

<a id="api-68ec0586238a32a7"></a>
<!-- api: M:Inno.Editor.WindowsX64.WindowsX64EditorComposition.Run(System.String[],System.Threading.CancellationToken) 16844ebf84914aa7fadb4f3dda674b3005ed81938c05640c4a92edd1ab723ee9 -->

```csharp
public static int Inno.Editor.WindowsX64.WindowsX64EditorComposition.Run(string[] arguments, System.Threading.CancellationToken cancellationToken)
```

Runs the platform Editor on the caller's main thread; no directory opens the native folder dialog.

**Parameter `arguments`:** An optional project directory and the shared Editor command-line options.

**Returns:** Zero on normal exit or dialog cancellation, two on cancellation or invalid arguments, or one on startup failure.

**Parameter `cancellationToken`:** Cancels preparation or requests orderly shutdown of the shared Editor host.
An open native folder dialog retains its callback owner until the user completes or closes it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c63dae76b618578863de6022b38211a835a8d876/platforms/WindowsX64/editor/Inno.Editor.WindowsX64/WindowsX64EditorComposition.cs#L54).
