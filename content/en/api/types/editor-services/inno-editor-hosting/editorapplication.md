---
title: "EditorApplication"
description: "Reference for EditorApplication in Inno.Editor.Hosting."
uid: api.inno.editor.hosting.ae0867da67a39e55
kind: api
owners:
  - Inno.Editor.Hosting
apiSurface: source-clr
contracts:
  - project.inno-editor-hosting
---
# `EditorApplication`

This reference describes `EditorApplication` in `Inno.Editor.Hosting`. Read the [shared contract](../../../projects/inno-editor-hosting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`RunAsync`](#api-7caea7eb5327ca45) | Method |

## Type declaration

<a id="api-ae0867da67a39e55"></a>
<!-- api: T:Inno.Editor.Hosting.EditorApplication 779a9eb9c073b04b1a1da11647c0c4cb38687e967e4c6403f210f3a28890f997 -->

```csharp
public static class Inno.Editor.Hosting.EditorApplication
```

Runs the shared Editor product with explicitly supplied platform and publication composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorApplication.cs#L11).

## `RunAsync`

<a id="api-7caea7eb5327ca45"></a>
<!-- api: M:Inno.Editor.Hosting.EditorApplication.RunAsync(Inno.Editor.Hosting.EditorLaunchOptions,System.Threading.CancellationToken) f8ae63b8c40aa255a1de93943731019e708907c40efaf197c74214b122d2a8ff -->

```csharp
public static System.Threading.Tasks.Task<int> Inno.Editor.Hosting.EditorApplication.RunAsync(Inno.Editor.Hosting.EditorLaunchOptions options, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Validates composition, owns the created Editor host and retires resources on exit, cancellation or failure.

**Parameter `options`:** Borrowed catalogs, factories and product configuration; created resources transfer to the host.

**Parameter `cancellationToken`:** Cancels before creation or requests orderly owner-thread shutdown.

**Returns:** Zero after orderly completion; startup, execution and retirement failures propagate.

**Throws `System.ArgumentNullException`:** Options or a required dependency is null.

**Throws `System.ArgumentException`:** A required location or product selection is invalid.

**Throws `System.NotSupportedException`:** A selected backend lacks its matching runtime or authoring provider.

**Throws `System.OperationCanceledException`:** Startup or execution was canceled after resource retirement.

**Throws `System.InvalidOperationException`:** Product startup or resource retirement fails.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorApplication.cs#L40).
