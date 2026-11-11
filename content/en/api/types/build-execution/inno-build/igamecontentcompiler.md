---
title: "IGameContentCompiler"
description: "Reference for IGameContentCompiler in Inno.Build."
uid: api.inno.build.64c4fa07a7bef1f3
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `IGameContentCompiler`

This reference describes `IGameContentCompiler` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CompileAsync`](#api-7375fe81fc3f5e90) | Method |
| [`target`](#api-f249563576a9cc24) | Property |

## Type declaration

<a id="api-64c4fa07a7bef1f3"></a>
<!-- api: T:Inno.Build.IGameContentCompiler 5eb7306753852e76f551da62221ffa7c51fdfd0fafcc3b788646a71ac271c7c4 -->

```csharp
public interface Inno.Build.IGameContentCompiler
```

Compiles source-free runtime content independently of application packaging.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/IGameContentCompiler.cs#L9).

## `CompileAsync`

<a id="api-7375fe81fc3f5e90"></a>
<!-- api: M:Inno.Build.IGameContentCompiler.CompileAsync(Inno.Build.GameBuildContentContext,System.Threading.CancellationToken) d0860937c76cfae79351e4c7d287527ac975a5a55ef26c42b15d52792ea22dcb -->

```csharp
System.Threading.Tasks.ValueTask Inno.Build.IGameContentCompiler.CompileAsync(Inno.Build.GameBuildContentContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Writes target content into the current operation's isolated staging directory.

**Parameter `context`:** The borrowed authoring generation and operation-owned content destination.

**Parameter `cancellationToken`:** Cancels compilation before publication; associated work must finish before returning.

**Returns:** An operation completing after every required artifact is staged, or faulting on failure.

**Throws `System.OperationCanceledException`:** Cancellation was requested before compilation completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/IGameContentCompiler.cs#L31).

## `target`

<a id="api-f249563576a9cc24"></a>
<!-- api: P:Inno.Build.IGameContentCompiler.target dcb065582dc1f77bdd5c964936c6a7e045832ca062ae2e461d3f90266c69e11f -->

```csharp
Inno.Build.BuildTargetId Inno.Build.IGameContentCompiler.target { get; }
```

Gets the exact publication target whose content this compiler produces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/Game/IGameContentCompiler.cs#L14).
