---
title: Inno.Runtime
description: "Explicit engine metadata, isolated Sessions and ordered subsystem execution."
uid: project.inno-runtime
kind: project
owners: [Inno.Runtime]
exampleMode: host
exampleProjects: [Inno.Runtime]
---
# Inno.Runtime

Explicit engine metadata, isolated Sessions and ordered subsystem execution.

Start with [composing a runtime host](../../extending/runtime-host.md) and [runtime lifetime](../../architecture/runtime-lifetime.md).

## Host and Session ownership

`EngineHostBuilder` receives explicit module, type and serialization metadata sources. Configure the complete reference-resolution context and subsystem factories before creating a Session. Dynamic shadow-copy paths belong to the selected DotNet module source; a static module needs no shadow-copy cache.

Each Edit, Play or Player Session has independent identity, event, diagnostic and resource scopes. Its `contentStore` is borrowed. The `createLogSink` factory transfers each new sink exclusively to that Session; the Session does not invent a file-log or deployment directory. Settings come from injected documents, with read-only documents in a Player.

## Execute and retire

RuntimeSubsystemPipeline supplies complete DAG ordering, dependency/cycle detection and reverse phase unwinding. Domain runtimes implement the neutral subsystem contract; they do not duplicate whole application loops.

Shutdown first stops admission, cancels and drains work, then retires subsystems, resources and subscriptions. Close the Session before the borrowed content store. Partial startup failure retires acquired resources in reverse order. Pending retirement retains its owner/dependencies; a Faulted generation cannot resume Play, Build or Export and requires host replacement.

Asset, Settings and Rendering content access follows their explicit service contracts. Shared Session code neither scans deployment directories nor creates file logs. For complete launch and content validation, use the Player application rather than assembling an incomplete Session from guessed defaults.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using Inno.Content;
using Inno.Runtime;

static RuntimeSession CreateSession(
    EngineHost host,
    IRuntimeContentStore content
) {
    return host.CreateSession(new RuntimeSessionOptions
    {
        kind = RuntimeSessionKind.Player,
        applicationId = "sample.game",
        contentStore = content,
        jobExecutionMode = RuntimeJobExecutionMode.SingleThread
    });
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Inno.Runtime.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse exact types and members](../types/runtime-composition/inno-runtime/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../runtime-script/inno-runtime/index.md)
