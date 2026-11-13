---
title: Use the script API
description: Choose logical script namespaces, recognize API scopes and diagnose
  missing or hidden members.
uid: manual.scripting.use-script-api
kind: how-to
owners:
  - Inno.Scripting.Api
  - Inno.Scene
contracts:
  - project.inno-scripting-api
  - project.inno-scene#lifecycle-and-recovery-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Scene
---
# Use the script API

Project scripts use logical names such as `InnoEngine.Scene`, rather than the host's implementation namespaces. The selected script surface determines what you can call; a public C# declaration in an engine assembly is not automatically a game API.

Browse the [Runtime script reference](../../api/scripting/runtime/index.md) or [Editor script reference](../../api/scripting/editor/index.md) for exact logical names, signatures and associated module contracts. These references come from compiler-produced assemblies; the host reference remains a separate surface.

## Start with the generated project

Open the project's generated IDE solution, or [generate and compile it through the scripts command](../../contributing/compile-project-scripts.md). Editable Project assemblies use ordinary project references. Installed plugins contribute logical metadata references, not editable plugin source projects. Both follow the same selected logical API surface.

Declare the logical namespace in each source file:

```csharp
using InnoEngine.Scene;

public sealed class PlayerController : GameBehavior
{
}
```

This minimal declaration selects per-object behavior. Add only the callbacks your feature needs, following [behavior lifecycle](../scenes/behaviors.md). It does not create an object or attach itself to a scene.

## Choose the right scope

Runtime exports are visible to GameScripts and EditorScripts. Editor exports are only visible to EditorScripts. Authoring annotations can appear in authoring source and IDE projects but are removed from Player-bound code according to their declared annotation contract.

Do not use an authoring annotation type as an ordinary Player service or object. The compiler will reject that use rather than shipping an Editor assembly as a hidden dependency.

The facade exposes only selected types and members. A missing member may deliberately depend on an unexported host type or carry `ScriptingApiIgnore`; adding a host DLL reference to the IDE project bypasses the intended boundary and does not fix the script API.

## Diagnose namespace errors

| Diagnostic | Meaning | Corrective action |
| --- | --- | --- |
| `INNO2001` | Script source directly uses an implementation namespace. | Use the corresponding exported logical namespace. |
| `INNO2002` | An exported type is used without its logical namespace import. | Add the ordinary logical `using` in that source file. |

Imports are file-local. Do not inject global/implicit usings through generated projects, MSBuild items or plugin metadata. A logical namespace can collect types from several actual namespaces; the compiler performs the declared mapping for each file.

## Understand runtime identity

Keep the containing owner and generation alive while using borrowed objects. Logical names do not change resource ownership, threading or retirement obligations. Read the type's associated module contracts before relying on a member.

IDE facade types exist only to model the available source API. Runtime compilation checks the same trimmed contract, then emits references to the original engine CLR types. Scene state, type catalogs and serialization therefore observe actual engine identities, not facade copies.

Some current facade classes contain an implicit parameterless constructor even though the engine implementation has no matching public or protected constructor. Reference pages mark these as **IDE projection artifacts**, with an explicit warning against calling them. Obtain such instances through their documented owner or factory. An IDE completion entry alone does not establish a supported construction path.

After a script edit, compilation and activation are separate phases. A valid artifact does not mean the previous generation has retired. See [reload and recovery](../../architecture/script-reload.md) if compilation succeeds but the host remains unable to reload or enter Play.
