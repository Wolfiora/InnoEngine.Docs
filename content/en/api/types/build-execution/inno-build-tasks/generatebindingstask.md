---
title: "GenerateBindingsTask"
description: "Reference for GenerateBindingsTask in Inno.Build.Tasks."
uid: api.inno.build.tasks.56d9cd602fa62564
kind: api
owners:
  - Inno.Build.Tasks
apiSurface: source-clr
contracts:
  - project.inno-build-tasks
---
# `GenerateBindingsTask`

This reference describes `GenerateBindingsTask` in `Inno.Build.Tasks`. Read the [shared contract](../../../projects/inno-build-tasks.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Microsoft.Build.Utilities.Task`.

**Direct interfaces:** `Microsoft.Build.Framework.ICancelableTask`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ff3d6b09600f6748) | Method |
| [`Cancel`](#api-0e2f3cc8eb4f48dd) | Method |
| [`Execute`](#api-5781726cd5c70adf) | Method |
| [`ArtifactDirectory`](#api-1a480d62e4caeaba) | Property |
| [`ArtifactOwnerDirectory`](#api-66ed8053f6f55f55) | Property |
| [`BindingDefinition`](#api-575a1911eea02136) | Property |
| [`CheckOnly`](#api-a6f2d71733c80c5a) | Property |
| [`ComponentId`](#api-c71184f5383ef80c) | Property |
| [`ComponentProject`](#api-982ad2c776d8e749) | Property |
| [`DescriptorOutputPath`](#api-d0abb47b973cb34d) | Property |
| [`DotnetHost`](#api-67b85ee3fb7aaee3) | Property |
| [`EngineRoot`](#api-c0c3fd50a5e4cfea) | Property |
| [`ExpectedFingerprint`](#api-9264f16119860a61) | Property |
| [`GeneratedBindings`](#api-47ecc7e873a694fd) | Property |
| [`GenerationFingerprint`](#api-aade4e3b794412b5) | Property |
| [`NativeDirectory`](#api-222f02da63726aee) | Property |
| [`OutputMode`](#api-af714cac5c42448a) | Property |
| [`TargetId`](#api-2e58c35aa575bcc7) | Property |
| [`UsesRuntimeImports`](#api-3021459b17db2638) | Property |

## Type declaration

<a id="api-56d9cd602fa62564"></a>
<!-- api: T:Inno.Build.Tasks.GenerateBindingsTask 9888e2e81a05c9847cec0574040e74cd70158c9cf7787ef62a205f347c4b1388 -->

```csharp
public sealed class Inno.Build.Tasks.GenerateBindingsTask : Microsoft.Build.Utilities.Task, Microsoft.Build.Framework.ICancelableTask
```

Maps an explicit MSBuild request to the shared binding application without owning generation policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L18).

## `#ctor`

<a id="api-ff3d6b09600f6748"></a>
<!-- api: M:Inno.Build.Tasks.GenerateBindingsTask.#ctor 81c4f9dce488cc2cb313f6dd2e6a3f30e04dde68fb7f26f30024b80c4a6e6ccc -->

```csharp
public Inno.Build.Tasks.GenerateBindingsTask.GenerateBindingsTask()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L18).

## `Cancel`

<a id="api-0e2f3cc8eb4f48dd"></a>
<!-- api: M:Inno.Build.Tasks.GenerateBindingsTask.Cancel 6450d836be0b8cae8c50e013978bec40372ba8b55d248611dba53f9864007117 -->

```csharp
public void Inno.Build.Tasks.GenerateBindingsTask.Cancel()
```

Cancels owned work before retiring the task cancellation source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L107).

## `Execute`

<a id="api-5781726cd5c70adf"></a>
<!-- api: M:Inno.Build.Tasks.GenerateBindingsTask.Execute 3d0f76b35164ef0bff7c13131341d9139b45174dcd8fe52e61dd9c83833312a2 -->

```csharp
public override bool Inno.Build.Tasks.GenerateBindingsTask.Execute()
```

Executes one explicit component request and publishes task outputs only after success.

**Returns:** True after generation or comparison; false after a logged failure and complete cleanup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L120).

## `ArtifactDirectory`

<a id="api-1a480d62e4caeaba"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.ArtifactDirectory c17ec197a5817bc20134d2e2c30c3c063223732aa5408c75913ebb89263d1ac1 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.ArtifactDirectory { get; private set; }
```

Gets the protected immutable artifact root, or an empty value for host-source generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L96).

## `ArtifactOwnerDirectory`

<a id="api-66ed8053f6f55f55"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.ArtifactOwnerDirectory 315a73a705fbf1aef3cb82068a3c2623897dee4434b83d3932c6c6046ab53b42 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.ArtifactOwnerDirectory { get; private set; }
```

Gets the publisher root coordinating the selected immutable artifact, or empty for host sources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L102).

## `BindingDefinition`

<a id="api-575a1911eea02136"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.BindingDefinition 798cdc61b581c31c89094193b0ec7415eb4e01eb6710655fb16fa8adf97e0350 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.BindingDefinition { get; set; }
```

Gets or sets the sole literal definition consumed by both the project and direct generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L43).

## `CheckOnly`

<a id="api-a6f2d71733c80c5a"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.CheckOnly e46aac5cb6e527147d053972ea34d8b7a9e6499be4cd851dd7041275c215e1ba -->

```csharp
public bool Inno.Build.Tasks.GenerateBindingsTask.CheckOnly { get; set; }
```

Gets or sets comparison without publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L62).

## `ComponentId`

<a id="api-c71184f5383ef80c"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.ComponentId f6a30989c1fd387e18b33971339e59d18e51d64b9043d011675c01bd3792c222 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.ComponentId { get; set; }
```

Gets or sets the stable component identity declared by the sole binding definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L33).

## `ComponentProject`

<a id="api-982ad2c776d8e749"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.ComponentProject 173f9c3c116a09937603bd65ad2d20951169464e5c8a448fbe386f0272855469 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.ComponentProject { get; set; }
```

Gets or sets the absolute Native owner project, which must belong to this checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L38).

## `DescriptorOutputPath`

<a id="api-d0abb47b973cb34d"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.DescriptorOutputPath ebe67c4d24f29cb63b2e2386c041d930038193d15e2f6f97e8eb707f16519cf9 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.DescriptorOutputPath { get; set; }
```

Gets or sets an optional request-owned descriptor destination written only after success.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L66).

## `DotnetHost`

<a id="api-67b85ee3fb7aaee3"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.DotnetHost 674d29f561647b7040fc4d987d221c7cb7cc67f1b9659695b1657e610bfa6578 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.DotnetHost { get; set; }
```

Gets or sets the explicitly selected managed SDK host used to compose the target toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L58).

## `EngineRoot`

<a id="api-c0c3fd50a5e4cfea"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.EngineRoot bdeffe4ce336627a0cc3a55759f0e1f4fbaba31d5dc31ce8a3e250be349a9a37 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.EngineRoot { get; set; }
```

Gets or sets the absolute checkout owning the component definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L28).

## `ExpectedFingerprint`

<a id="api-9264f16119860a61"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.ExpectedFingerprint c45fbc96ef738c6ccbbaa09a63442aa9248320c261ba3ab67f85f5434c68b3db -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.ExpectedFingerprint { get; set; }
```

Gets or sets an optional expected identity; stale requests fail before generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L70).

## `GeneratedBindings`

<a id="api-47ecc7e873a694fd"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.GeneratedBindings 51e1e88206b45e6308882aafea8531d0b9209b2949698b0fc9469efea32c59a1 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.GeneratedBindings { get; private set; }
```

Gets the single source selected after complete publication or successful comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L75).

## `GenerationFingerprint`

<a id="api-aade4e3b794412b5"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.GenerationFingerprint 3573f4c3015cf9fb7871a0a919fa6d9df75195a5c1f24bf74d892244a99b1924 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.GenerationFingerprint { get; private set; }
```

Gets the complete validated input identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L80).

## `NativeDirectory`

<a id="api-222f02da63726aee"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.NativeDirectory ef4b387dcc0ac2adb2b0e6f76b18522308e866de74284d032632a6248c261b2f -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.NativeDirectory { get; private set; }
```

Gets the complete native artifacts and compilation requirements selected by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L90).

## `OutputMode`

<a id="api-af714cac5c42448a"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.OutputMode 2e38e8e75860e01000860f0a181aa0d20f74bfb8ad910f4eeae0c60b5f943f68 -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.OutputMode { get; set; }
```

Gets or sets HostSource or TargetArtifacts without deriving publication from a path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L53).

## `TargetId`

<a id="api-2e58c35aa575bcc7"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.TargetId 50bcfc7b63c3066b66427d3727b69f99e8c9b44e64ae082be73e483f30a537cb -->

```csharp
public string Inno.Build.Tasks.GenerateBindingsTask.TargetId { get; set; }
```

Gets or sets the explicit configuration identity selected from the definition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L48).

## `UsesRuntimeImports`

<a id="api-3021459b17db2638"></a>
<!-- api: P:Inno.Build.Tasks.GenerateBindingsTask.UsesRuntimeImports f11504af6db8afaf30461a0086da0387a73167f0a8580b46eb0cf6b6344638bb -->

```csharp
public bool Inno.Build.Tasks.GenerateBindingsTask.UsesRuntimeImports { get; private set; }
```

Gets whether the selected generated context requires runtime-import initialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/GenerateBindingsTask.cs#L85).
