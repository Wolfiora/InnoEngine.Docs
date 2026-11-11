---
title: "SdkScriptCompilationEnvironment"
description: "Reference for SdkScriptCompilationEnvironment in Inno.Build."
uid: api.inno.build.a5e8042cb60c3ec2
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `SdkScriptCompilationEnvironment`

This reference describes `SdkScriptCompilationEnvironment` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Scripting.Compiler.IScriptCompilationEnvironmentProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f1714a7cec216bd6) | Method |
| [`Capture`](#api-ea94351c844feb85) | Method |

## Type declaration

<a id="api-a5e8042cb60c3ec2"></a>
<!-- api: T:Inno.Build.SdkScriptCompilationEnvironment 6eee6cc2dc7ef8446ae574264e3c7367669b74970409661a2ec110d6e472ff00 -->

```csharp
public sealed class Inno.Build.SdkScriptCompilationEnvironment : Inno.Scripting.Compiler.IScriptCompilationEnvironmentProvider
```

Evaluates the authoring project's selected SDK and maps its framework contract into scripting inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Scripting/SdkScriptCompilationEnvironment.cs#L17).

## `#ctor`

<a id="api-f1714a7cec216bd6"></a>
<!-- api: M:Inno.Build.SdkScriptCompilationEnvironment.#ctor(System.String,System.String) aaff60a39037fefd5edebf02532f24115f89d8628d69c4622d828699d429e227 -->

```csharp
public Inno.Build.SdkScriptCompilationEnvironment.SdkScriptCompilationEnvironment(string dotnetHost, string projectRoot)
```

Creates a host-owned input provider without selecting installed reference packs independently.

**Parameter `dotnetHost`:** The .NET host executable selected by the composition root.

**Parameter `projectRoot`:** The authoring project whose ancestor SDK configuration governs compilation and IDE use.

**Throws `System.ArgumentException`:** A host or project location is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Scripting/SdkScriptCompilationEnvironment.cs#L34).

## `Capture`

<a id="api-ea94351c844feb85"></a>
<!-- api: M:Inno.Build.SdkScriptCompilationEnvironment.Capture(System.Threading.CancellationToken) 37f61650782c1f194933666068dc8050afedb006405c5aad80e6334bd7911acf -->

```csharp
public Inno.Scripting.Compiler.ScriptCompilationInputs Inno.Build.SdkScriptCompilationEnvironment.Capture(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Captures current SDK inputs without choosing a framework inside the scripting compiler.

**Parameter `cancellationToken`:** Cancels input preparation before any script artifact is published.

**Returns:** Complete immutable inputs; missing or inconsistent SDK inputs must fail explicitly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Scripting/SdkScriptCompilationEnvironment.cs#L45).
