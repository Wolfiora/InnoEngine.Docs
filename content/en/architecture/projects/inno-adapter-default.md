---
title: Inno.Adapter.Default
description: "Standard runtime provider snapshots with explicitly injected platform, rendering and storage factories."
uid: project.inno-adapter-default
kind: project
owners: [Inno.Adapter.Default]
exampleMode: host
exampleProjects: [Inno.Adapter.Default]
---
# Inno.Adapter.Default

Standard runtime provider snapshots with explicitly injected platform, rendering and storage factories.

Start with [composing a runtime host](../../extending/runtime-host.md) and [runtime lifetime](../runtime-lifetime.md).

## Composition contract

`DefaultAdapterCatalogOptions` requires explicit Platform, Rendering and Storage factories. The catalog does not create a BGFX provider or infer a platform surface integration. Product composition supplies matching implementations; custom rendering factories use the same neutral boundary.

The default Input, Audio, Text and UI providers use Core Events, MiniAudio, FreeType/HarfBuzz and RmlUi respectively. Optional provider collections completely replace their family. Null selects the built-in set; an empty collection means no implementation is installed. Construction validates registrations without opening a window, GPU or audio device.

Factories expose read-only `supportedBackends`. Invalid, duplicate or null providers, unregistered IDs and null creation results fail explicitly. A new implementation participates through its domain provider and stable configured ID, not a new catalog switch.

## Ownership and deployment

Composition owns provider lifetime; the catalog does not dispose providers. Each created service belongs to its caller. Do not retain providers containing generation state in a cross-generation global cache. Validate complete selection before creating native services.

Browser composition injects Browser storage and selects `StorageBackendId.browser`; desktop composition selects its explicit filesystem factory and `StorageBackendId.fileSystem`. Domain APIs and the Player lifecycle remain shared.

This runtime catalog excludes Editor, Presentation, compiler, AssetPipeline and Build toolchain responsibilities.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using Inno.Adapter;
using Inno.Adapter.Default;
using Inno.Adapter.Platform;
using Inno.Adapter.Rendering;
using Inno.Adapter.Storage;

static IAdapterCatalog Compose(
    IPlatformBackendFactory platform,
    IRenderingBackendFactory rendering,
    IStorageBackendFactory storage
) {
    var catalog = new DefaultAdapterCatalog(new DefaultAdapterCatalogOptions
    {
        platform = platform,
        rendering = rendering,
        storage = storage
    });
    AdapterSelection selection = StandardAdapterSelection.Create(StorageBackendId.fileSystem);
    selection.Validate(catalog);
    return catalog;
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/adapters/Inno.Adapter.Default/Inno.Adapter.Default.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse exact types and members](../../api/engine/adapter/default/index.md).
