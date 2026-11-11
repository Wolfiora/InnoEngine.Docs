---
title: "EditorCommandLineOptions"
description: "Reference for EditorCommandLineOptions in Inno.Editor.Hosting."
uid: api.inno.editor.hosting.ad59f502c90c8a47
kind: api
owners:
  - Inno.Editor.Hosting
apiSurface: source-clr
contracts:
  - project.inno-editor-hosting
---
# `EditorCommandLineOptions`

This reference describes `EditorCommandLineOptions` in `Inno.Editor.Hosting`. Read the [shared contract](../../../projects/inno-editor-hosting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Parse`](#api-0d2fbb58476a4b3e) | Method |
| [`graphicsApi`](#api-1071da5e2056ccf2) | Property |
| [`projectDirectory`](#api-29f225c5e1e36c31) | Property |
| [`smokeFrameLimit`](#api-3c3a465645ba3c3b) | Property |
| [`windowVisible`](#api-17cdafb64bf2912c) | Property |

## Type declaration

<a id="api-ad59f502c90c8a47"></a>
<!-- api: T:Inno.Editor.Hosting.EditorCommandLineOptions fd15e5fd61d89471431593d80cd25cc48cce63b8249ae3eb5cf4191719d6ec0a -->

```csharp
public sealed class Inno.Editor.Hosting.EditorCommandLineOptions
```

Parses the shared Editor project and verification workflow before platform composition starts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorCommandLineOptions.cs#L10).

## `Parse`

<a id="api-0d2fbb58476a4b3e"></a>
<!-- api: M:Inno.Editor.Hosting.EditorCommandLineOptions.Parse(System.String[]) ce01e405a4995daffee7f58e043c222cd567a999e1c5b3a7bf86e90825f6e0c3 -->

```csharp
public static Inno.Editor.Hosting.EditorCommandLineOptions Inno.Editor.Hosting.EditorCommandLineOptions.Parse(string[] arguments)
```

Parses the common Editor command line without selecting a platform.

**Parameter `arguments`:** The project path followed by optional name/value pairs.

**Returns:** The immutable project startup configuration.

**Throws `System.ArgumentException`:** The project or an option is missing, repeated or invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorCommandLineOptions.cs#L46).

## `graphicsApi`

<a id="api-1071da5e2056ccf2"></a>
<!-- api: P:Inno.Editor.Hosting.EditorCommandLineOptions.graphicsApi f3001171409a91f3c773db0a73c8c15407dd187110594292f00c1ae40f083e77 -->

```csharp
public Inno.Rendering.GraphicsApi? Inno.Editor.Hosting.EditorCommandLineOptions.graphicsApi { get; private init; }
```

Gets an explicit renderer preference, or null for backend policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorCommandLineOptions.cs#L32).

## `projectDirectory`

<a id="api-29f225c5e1e36c31"></a>
<!-- api: P:Inno.Editor.Hosting.EditorCommandLineOptions.projectDirectory d83304e24c2ae152e6692a7ccbc45b43bd7b06d162ffb774630c7287ebfc97f4 -->

```csharp
public string Inno.Editor.Hosting.EditorCommandLineOptions.projectDirectory { get; }
```

Gets the caller-selected authoring project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorCommandLineOptions.cs#L17).

## `smokeFrameLimit`

<a id="api-3c3a465645ba3c3b"></a>
<!-- api: P:Inno.Editor.Hosting.EditorCommandLineOptions.smokeFrameLimit d2f91776ab75dd1ad0976a408f2b09cb5cb949897e8901072dbbe6a78ded490a -->

```csharp
public int? Inno.Editor.Hosting.EditorCommandLineOptions.smokeFrameLimit { get; private init; }
```

Gets the optional bounded verification frame count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorCommandLineOptions.cs#L22).

## `windowVisible`

<a id="api-17cdafb64bf2912c"></a>
<!-- api: P:Inno.Editor.Hosting.EditorCommandLineOptions.windowVisible 8b3cff7e40c4b8932296da36d374053ae1fdb5b08af7e1a2ebebc2ef72278a4e -->

```csharp
public bool Inno.Editor.Hosting.EditorCommandLineOptions.windowVisible { get; private init; }
```

Gets whether the platform window is shown; hidden execution retains the same Editor lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorCommandLineOptions.cs#L27).
