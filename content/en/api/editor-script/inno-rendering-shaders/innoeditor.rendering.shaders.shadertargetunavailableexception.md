---
title: "ShaderTargetUnavailableException"
description: "Reference for ShaderTargetUnavailableException in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.6b560e43fb9d872d
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderTargetUnavailableException`

This reference describes `ShaderTargetUnavailableException` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.InvalidOperationException`.

**Direct interfaces:** `System.Runtime.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-163fe57eb7c963db) | Method |
| [`targetId`](#api-186438ec8a9d229e) | Property |

## Type declaration

<a id="api-6b560e43fb9d872d"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderTargetUnavailableException e69f4cd2289c0dd4c026a310a75041ae09909b5edb99389d38df8bd7ee14cd95 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderTargetUnavailableException : System.InvalidOperationException, System.Runtime.Serialization.ISerializable
```

Identifies an authored target that is absent from the current extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetUnavailableException.cs#L8).

## `#ctor`

<a id="api-163fe57eb7c963db"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderTargetUnavailableException.#ctor(System.String) 40c78e24eb48a0041395e253c44646a783feeef634a434c6b17e946a74f6e32d -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderTargetUnavailableException.ShaderTargetUnavailableException(string targetId)
```

Creates a missing-target diagnostic without retaining extension objects.

**Parameter `targetId`:** The stable authored target identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetUnavailableException.cs#L16).

## `targetId`

<a id="api-186438ec8a9d229e"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderTargetUnavailableException.targetId 4592a7a1ae1b2b64dec8ced954235fa81381b876ede2b593928ff7cd756e45f1 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderTargetUnavailableException.targetId { get; }
```

Gets the stable target identity required by the authored graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Targets/ShaderTargetUnavailableException.cs#L26).
