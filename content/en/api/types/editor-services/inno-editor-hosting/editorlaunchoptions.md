---
title: "EditorLaunchOptions"
description: "Reference for EditorLaunchOptions in Inno.Editor.Hosting."
uid: api.inno.editor.hosting.c9a90e0897b22d57
kind: api
owners:
  - Inno.Editor.Hosting
apiSurface: source-clr
contracts:
  - project.inno-editor-hosting
---
# `EditorLaunchOptions`

This reference describes `EditorLaunchOptions` in `Inno.Editor.Hosting`. Read the [shared contract](../../../projects/inno-editor-hosting.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6da1e019bd1144d3) | Method |
| [`adapterCatalog`](#api-170ae73abd7cd2fa) | Property |
| [`buildContext`](#api-1420b2d66b36ad67) | Property |
| [`createEngineHost`](#api-cbdaa13e65e6ced8) | Property |
| [`createHostLogSink`](#api-aa962f56bdd0e036) | Property |
| [`createScriptModuleSource`](#api-cf613acc31313d59) | Property |
| [`createSessionLogSink`](#api-f1ccf3bf52ca5105) | Property |
| [`defaultBuildTarget`](#api-7e95c28bc5a9139c) | Property |
| [`distribution`](#api-23b09222eab68717) | Property |
| [`frameDriver`](#api-a5e839f634c68d61) | Property |
| [`keyboard`](#api-354603c534d553e4) | Property |
| [`presentation`](#api-9cda60eef5d7e002) | Property |
| [`projectDirectory`](#api-14d2d0c2a7a75287) | Property |
| [`shell`](#api-9eb68534641c0804) | Property |
| [`smokeFrameLimit`](#api-cd5812aaa8d39fbb) | Property |
| [`supportPackRoot`](#api-ca5b3ee2aa92d3ca) | Property |

## Type declaration

<a id="api-c9a90e0897b22d57"></a>
<!-- api: T:Inno.Editor.Hosting.EditorLaunchOptions 182a68f3071287ee6610e552b4d487318bc003843aa7a755c613751c517ee8d2 -->

```csharp
public sealed class Inno.Editor.Hosting.EditorLaunchOptions
```

Supplies product-owned composition to the shared Editor lifecycle without selecting a platform or backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L17).

## `#ctor`

<a id="api-6da1e019bd1144d3"></a>
<!-- api: M:Inno.Editor.Hosting.EditorLaunchOptions.#ctor a3ab6c277bc24e792116f7bd125739f56a08dc2cb3e5671300e632b3914ca678 -->

```csharp
public Inno.Editor.Hosting.EditorLaunchOptions.EditorLaunchOptions()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L17).

## `adapterCatalog`

<a id="api-170ae73abd7cd2fa"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.adapterCatalog 1e764e265be2197d717b55ed58333dfda360a0d9ee6403f6e1d31b7f3f4189bc -->

```csharp
public required Inno.Adapter.Presentation.IAuthoringAdapterCatalog Inno.Editor.Hosting.EditorLaunchOptions.adapterCatalog { get; init; }
```

Gets the borrowed immutable runtime, authoring and presentation provider catalogs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L32).

## `buildContext`

<a id="api-1420b2d66b36ad67"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.buildContext 9564d2930ede1b82328eef1e053bafeac836b767e80f3b6892f5c364297eb615 -->

```csharp
public required Inno.Build.Composition.BuildCompositionContext Inno.Editor.Hosting.EditorLaunchOptions.buildContext { get; init; }
```

Gets the explicitly selected SDK and build execution host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L62).

## `createEngineHost`

<a id="api-cbdaa13e65e6ced8"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.createEngineHost fe10e04c46c2c2597a3b8677d36994d30d58bb1b36667af7547cd1f191244ada -->

```csharp
public required System.Func<Inno.Runtime.EngineHost> Inno.Editor.Hosting.EditorLaunchOptions.createEngineHost { get; init; }
```

Gets the factory transferring a newly created metadata-configured engine to the Editor owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L72).

## `createHostLogSink`

<a id="api-aa962f56bdd0e036"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.createHostLogSink e0cefa7e3ddd6a859e380dffab5f801bcfd641a53d183f68b254ed4e8a04bf26 -->

```csharp
public System.Func<Inno.Core.Logging.ILogSink?>? Inno.Editor.Hosting.EditorLaunchOptions.createHostLogSink { get; init; }
```

Gets an optional factory transferring one host log sink to the Editor lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L87).

## `createScriptModuleSource`

<a id="api-cf613acc31313d59"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.createScriptModuleSource c6cbc82744e7e6c46a03f824e04a64009236c33acb0bba93ffd557e8785e9db4 -->

```csharp
public required System.Func<Inno.Scripting.Compiler.ScriptModuleDeployment, Inno.Extensibility.Modules.IModuleSource> Inno.Editor.Hosting.EditorLaunchOptions.createScriptModuleSource { get; init; }
```

Gets the factory transferring a candidate script module source to the existing reload transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L77).

## `createSessionLogSink`

<a id="api-f1ccf3bf52ca5105"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.createSessionLogSink 1b62f7eb0b8f60f50bca0b0e3c226e6275134b08f29bbcd70409659a5d70499c -->

```csharp
public System.Func<Inno.Runtime.RuntimeSessionKind, Inno.Core.Logging.LogSessionId, Inno.Core.Logging.ILogSink>? Inno.Editor.Hosting.EditorLaunchOptions.createSessionLogSink { get; init; }
```

Gets an optional factory transferring each edit or play log sink to its owning session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L82).

## `defaultBuildTarget`

<a id="api-7e95c28bc5a9139c"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.defaultBuildTarget fccd95669a72443ca1665e209b9b21f0651634c73fc12ce35de5c56d34cfd055 -->

```csharp
public required Inno.Build.BuildTargetId Inno.Editor.Hosting.EditorLaunchOptions.defaultBuildTarget { get; init; }
```

Gets the explicit default game target for new project build settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L57).

## `distribution`

<a id="api-23b09222eab68717"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.distribution 7d0eefeba9f91d0f27fe865fee72bf7bd100caa0f8f07f7cb39c70b3eb2d80c4 -->

```csharp
public required Inno.Build.Composition.BuildDistribution Inno.Editor.Hosting.EditorLaunchOptions.distribution { get; init; }
```

Gets the borrowed immutable publication distribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L52).

## `frameDriver`

<a id="api-a5e839f634c68d61"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.frameDriver 8e072ba306d84b935f8c2d912b6d8d9eca9d62056861cfdc8b71d9c29b981f07 -->

```csharp
public required Inno.Shell.IShellFrameDriver Inno.Editor.Hosting.EditorLaunchOptions.frameDriver { get; init; }
```

Gets the borrowed owner-thread scheduling policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L47).

## `keyboard`

<a id="api-354603c534d553e4"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.keyboard 9f22d5759961536e336b74e4b40c2c6da84e4b033898e11e0d797a03afd34b72 -->

```csharp
public required Inno.Editor.Core.EditorKeyboardPolicy Inno.Editor.Hosting.EditorLaunchOptions.keyboard { get; init; }
```

Gets explicit keyboard conventions selected by the Editor product.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L27).

## `presentation`

<a id="api-9cda60eef5d7e002"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.presentation 8b24904d36eceeef103bb837ed6f3fbd44773c9b18cfb56b81be6fc2364925c1 -->

```csharp
public required Inno.Adapter.Presentation.PresentationBackendId Inno.Editor.Hosting.EditorLaunchOptions.presentation { get; init; }
```

Gets the explicit presentation implementation selected by the product.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L42).

## `projectDirectory`

<a id="api-14d2d0c2a7a75287"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.projectDirectory 40f33b2698088a4e2b88ddbb37c1c2c26d3927bf15a8aae911a87b4bcb693b33 -->

```csharp
public required string Inno.Editor.Hosting.EditorLaunchOptions.projectDirectory { get; init; }
```

Gets the current authoring project location; shared authoring services own its project IO.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L22).

## `shell`

<a id="api-9eb68534641c0804"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.shell 93f14642f5d0cf26d38912d99aa8b6fb6ffc3a3216965425589b735b0ff99be1 -->

```csharp
public required Inno.Shell.ShellOptions Inno.Editor.Hosting.EditorLaunchOptions.shell { get; init; }
```

Gets explicit backend, primary-window and rendering policy selected by the product.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L37).

## `smokeFrameLimit`

<a id="api-cd5812aaa8d39fbb"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.smokeFrameLimit ba9fc4a247c4982f72f7c31132b52d0c3b617fe7a8b6d0778d96aa52df051733 -->

```csharp
public int? Inno.Editor.Hosting.EditorLaunchOptions.smokeFrameLimit { get; init; }
```

Gets an optional positive frame limit for bounded product verification.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L92).

## `supportPackRoot`

<a id="api-ca5b3ee2aa92d3ca"></a>
<!-- api: P:Inno.Editor.Hosting.EditorLaunchOptions.supportPackRoot b8cce608c075fc6144dd68a0604005074f4d18429928d01b4341271d3e559a83 -->

```csharp
public required string Inno.Editor.Hosting.EditorLaunchOptions.supportPackRoot { get; init; }
```

Gets the explicit installed Support Pack location provided by product composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/hosting/Inno.Editor.Hosting/EditorLaunchOptions.cs#L67).
