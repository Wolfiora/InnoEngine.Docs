---
title: Package a source plugin
description: Create a validated plugin manifest and the supported portable archive layout.
uid: extending.plugin-packages
kind: how-to
owners:
  - Inno.Plugins
  - Inno.Plugins.Authoring
contracts:
  - project.inno-plugins#manifest-contract
  - project.inno-plugins-authoring#installation-and-generation-contract
exampleMode: host
exampleProjects:
  - Inno.Plugins
---
# Package a source plugin

An InnoEngine plugin is a complete `.iplugin` archive containing a serialized manifest and source assets. It is not a folder plugin, a renamed DLL, or an arbitrary ZIP accepted without validation. Prepare the package with the same engine contracts and asset metadata used by its target host.

## Define stable identity and dependencies

This host example creates and validates a minimal manifest. It does not build an archive, generate asset metadata or install the plugin.

```csharp
using Inno.Plugins;

public static class ExamplePluginManifest
{
    public static PluginManifest Create()
    {
        var manifest = new PluginManifest
        {
            pluginId = "example.tools",
            displayName = "Example Tools"
        };
        manifest.Validate();
        return manifest;
    }
}
```

`contentRoots` defaults to the single supported `Assets` root. Declare required plugin IDs in `dependencies`; activate dependencies before their consumers. An explicit override must also be a declared dependency. The reserved `project` source cannot be a plugin ID.

For setting defaults, provide valid `ProjectSettingRecord` values with stable type IDs and serialized property payloads. Follow [project-setting contribution rules](project-settings.md); do not store live plugin instances in the manifest.

## Prepare the supported container

```text
Example.iplugin
├── Plugin.inno
├── Assets/
│   ├── Example.cs
│   ├── Example.cs.imeta
│   ├── Materials/
│   └── Materials.imeta
└── Dependencies/
    └── example.base.iplugin
```

This is an illustrative archive layout, not a ready-to-install asset set. `Plugin.inno` must be the binary serialization of the manifest through the configured `SerializationRegistry`. Asset sidecars must contain valid metadata produced for those source assets; empty `.imeta` files do not satisfy the Asset pipeline.

Every non-sidecar asset file needs its own `.imeta` sidecar. Explicit nested directory entries under `Assets/` also need directory sidecars. Paths use `/`, remain relative to the container and cannot contain traversal or case collisions. The root manifest is unique. Unexpected root files are rejected.

An embedded dependency is one complete package directly under `Dependencies/`, and its manifest ID must be declared by the parent. Embedded packages are recursively validated; they are not exempt from identity, archive or dependency-graph checks.

## Respect source-package limits

Prebuilt `.dll`, `.exe`, `.dylib`, `.so`, `.a` and `.lib` files are forbidden. Code participates through the host's script compilation and module source boundaries. List source-local assembly definitions in the manifest where required; extension types are discovered by their actual registries, not a manifest type-name list.

Default source validation limits are:

| Input | Default limit |
| --- | --- |
| Archive entries | 100,000 |
| One expanded file | 64 MiB |
| Total expanded source bytes | 1 GiB |
| Expanded/compressed ratio | 200 |
| Embedded packages in an installation | 256 |
| Embedded depth | 16 |

These are validation bounds, not promised runtime capacity. A host can supply explicit `PluginSourceLimits`; increasing them does not waive path, metadata, integrity or dependency validation.

## Validate before installation

Serialize against the intended engine revision, include complete asset metadata and test the package through the host's source scanner. A valid manifest alone cannot prove the archive or its code is usable. Then follow [installation](../manual/plugins/install.md) and check the actual active generation and diagnostics.
