---
title: "ShaderGraphSourceStore"
description: "Reference for ShaderGraphSourceStore in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.58b4e5f498a12fb1
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderGraphSourceStore`

This reference describes `ShaderGraphSourceStore` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-718321d36fe81839) | Method |
| [`Read`](#api-9be5db0ca21065cd) | Method |
| [`Save`](#api-aef44eb60a0ec199) | Method |

## Type declaration

<a id="api-58b4e5f498a12fb1"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore 570450bc05b8073d56d4cf34c7cbe99ec7da23574a39c67fd20670008e591c06 -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore
```

Reads and atomically saves the sole shader graph source format without requiring successful compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Editing/ShaderGraphSourceStore.cs#L15).

## `#ctor`

<a id="api-718321d36fe81839"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry) f705f0bbc951f046a18a87b9d8cea04b01236b5aa44b03ccf1c80fa45c47f7f1 -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore.ShaderGraphSourceStore(Inno.Assets.Pipeline.AssetPipeline assets, Inno.Core.Serialization.SerializationRegistry serialization)
```

Uses the authoritative asset mounts and native graph serializer.

**Parameter `assets`:** Owner-thread authoring asset pipeline.

**Parameter `serialization`:** Current native converter registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Editing/ShaderGraphSourceStore.cs#L29).

## `Read`

<a id="api-9be5db0ca21065cd"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore.Read(Inno.Assets.AssetPath) f002d31730a50aaaf645340648316d8c8532cffe1d8726c11f16593b45a39414 -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderGraphSourceSnapshot Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore.Read(Inno.Assets.AssetPath path)
```

Reads source directly, so a broken graph remains editable even when import has no successful artifact.

**Parameter `path`:** Exact graph path within an active asset mount.

**Returns:** A detached native source snapshot with its conflict-detection fingerprint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Editing/ShaderGraphSourceStore.cs#L47).

## `Save`

<a id="api-aef44eb60a0ec199"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore.Save(Inno.Assets.AssetPath,Inno.Core.Graphs.GraphDocument,System.String) 74ac21edc1f8cff2a26999e3511b9609fed55e435799429baed69d77be64ada0 -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore.Save(Inno.Assets.AssetPath path, Inno.Core.Graphs.GraphDocument graph, string? expectedHash)
```

Saves serializable graph records independently of import or native compilation success.

**Parameter `path`:** Exact destination within a writable active mount.

**Parameter `graph`:** Complete graph, including missing nodes and unresolved ports.

**Parameter `expectedHash`:** Fingerprint from the last read/save; null requires a new, nonexistent file.

**Returns:** The saved fingerprint. Import runs separately through the normal asset watcher.

**Throws `System.IO.IOException`:** The source changed externally, disappeared, or could not be written.

**Throws `System.InvalidOperationException`:** The mount is unavailable or read-only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Editing/ShaderGraphSourceStore.cs#L75).
