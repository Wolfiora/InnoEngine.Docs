---
title: Inno.Editor.Scripting
description: "Asset-backed script scheduling, request-bound readiness, neutral reload coordination and progress observation."
uid: project.inno-editor-scripting
kind: project
owners: [Inno.Editor.Scripting]
exampleMode: host
exampleProjects: [Inno.Editor.Scripting]
---
# Inno.Editor.Scripting

Asset-backed script scheduling, request-bound readiness, neutral reload coordination and progress observation.

## Request and observe the complete operation

[Compile and reload scripts](../../manual/scripting/compile-and-reload.md) explains authoring source identity, assembly definitions, explicit plugin catalogs, incremental artifacts, request tickets and progress. IEditorScriptCompilation is a host workflow contract; internal EditorScripting scheduling and domain recovery are not exported to Editor scripts.

The compiler reads immutable source artifacts from one committed or isolated candidate catalog. Sources/definitions are AuthoringOnly; exports consume the exact successful runtime assembly closure, never source caches or arbitrary output-directory DLLs.

## Reuse bytes without bypassing lifetime

Matching assembly artifacts retain diagnostics. IDE plugins use logical metadata references rather than editable root projects. Runtime and Editor project scripts participate in one authoring retirement boundary even when unchanged artifacts can be reused. Module lifetime and artifact freshness are different identities.

Scripting hands a prepared candidate to EditorReloadCoordinator. Scene and other participants own their data recovery/diagnostics. Ready and successful tickets wait for activation and full old-generation collection; emit completion does not authorize Play/Build. Manual requests obey the Play guard, automatic changes queue without stopping gameplay, and Faulted hosts reject new requests until restart. IDE projection failure is a separate postactivation warning.

## Host examples

These use the actual host contracts and borrowed live dependencies. They do not initialize a product or establish lifecycle/device acceptance.

```csharp
using Inno.Assets;
using Inno.Assets.Pipeline;
using Inno.Scripting.Compiler;

public static class Example0
{
    static bool SaveDefinition(AssetPipeline assets)
    {
        var definition = new ScriptAssemblyDefinitionAsset(
            "Project.Gameplay", ScriptAssemblyScope.Runtime,
            references: ["Project.Common"], defines: ["GAMEPLAY_DEBUG"]);
        return assets.Save(AssetPath.Project("Scripts/Gameplay/Gameplay.iasmdef"), definition);
    }
}
```

```csharp
using Inno.Editor.Scripting;

public static class Example1
{
    static IScriptCompilationTicket Request(IEditorScriptCompilation scripts)
    {
        return scripts.RequestCompilation();
    }
    
    static bool CanContinue(IScriptCompilationTicket ticket)
    {
        return ticket.isCompleted && ticket.state == ScriptCompilationTicketState.Succeeded;
    }
}
```

## Script examples

- [Explicit runtime-script surface](../../extending/examples/inno-editor-scripting-runtime-script.md)
- [Explicit editor-script surface](../../extending/examples/inno-editor-scripting-editor-script.md)

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scripting/Inno.Editor.Scripting.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../types/editor-domains/inno-editor-scripting/index.md) preserve captured declarations and source XML.
